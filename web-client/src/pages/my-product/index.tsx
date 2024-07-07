import { useEffect, useState } from 'react';
import { deleteProductById, getAllUserProducts } from '../../services/product.service';
import { Product } from '../../shared/types/product.types';
import { Button, CircularProgress } from '@mui/material';
import ProductCard from '../../components/product.card';
import apolloClient from '../../graphql/client';
import { useLogout } from '../../hooks/useLogout.hook';
import { useNavigate } from 'react-router-dom';

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

    const logout = useLogout();

    const deleteProduct = async (productId: number) => {

        if (!productId) return;

        const updatedProducts = products.filter(item => item.id !== productId);

        setProducts(updatedProducts);
        
        await deleteProductById(productId);

        await apolloClient.clearStore();
        
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
            <div className="flex flex-col mt-12 justify-center items-center">
                <div className="flex justify-between w-3/5">

                    <Button variant='contained' color='primary' type='button' className='h-min' onClick={() => navigate('create')}>Add Product</Button>

                    <h1 className="text-3xl mb-8">MY PRODUCTS</h1>

                    <Button variant='contained' color='primary' type='button' className='h-min' onClick={logout}>Log out</Button>

                </div>
                <div className='flex flex-col items-center gap-4 w-3/5'>
                    {products.map((product, index) => (
                        <ProductCard 
                            key={index}
                            product={product}
                            callbackForDelete={async () => await deleteProduct(product.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyProduct;
