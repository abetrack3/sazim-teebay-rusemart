import { useEffect, useState } from 'react';
import { deleteProductById, getAllUserProducts } from '../../services/product.service';
import { Product } from '../../shared/types/product.types';
import { Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProductList } from '../../components/product.list';

const MyProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            const products = await getAllUserProducts();
            setProducts(products);

        } catch (error) {
            setError('Failed to fetch products');
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => { fetchProducts(); }, []);

    const navigate = useNavigate();

    const deleteProduct = async (productId: string) => {

        if (!productId) return;

        const updatedProducts = products.filter(item => item.id !== productId);

        setProducts(updatedProducts);

        await deleteProductById(productId);

        await fetchProducts();
    };

    if (loading) {
        return (
            <div className="flex flex-col h-full justify-center items-center">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col h-full justify-center items-center">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col pt-12 justify-center items-center">
                <div className="grid grid-cols-5 justify-between w-3/5">

                    <Button variant='outlined' color='primary' type='button' className='h-min max-w-max' onClick={() => navigate('create')}>Add Product</Button>

                    <div className="flex justify-center mb-8 gap-3 col-start-2 col-span-3">
                        <h1 className="text-3xl font-extrabold">MY PRODUCTS</h1>
                    </div>

                </div>

                {(products.length !== 0) &&
                    <div className='flex flex-col items-center gap-4 w-3/5'>
                        <ProductList
                            products={products}
                            actionsEnabled={true}
                            callbackForDelete={deleteProduct}
                        />
                    </div>
                }
                {products.length === 0 && <p>You don't have any product at the moment. Create one?</p>}
            </div>
        </>
    );
};

export default MyProduct;
