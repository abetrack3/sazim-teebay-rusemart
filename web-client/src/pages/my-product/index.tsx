import { useEffect, useState } from 'react';
import { deleteProductById, getAllUserProducts } from '../../services/product.service';
import { Product } from '../../shared/types/product.types';
import { CircularProgress } from '@mui/material';
import ProductCard from '../../components/product.card';
import apolloClient from '../../graphql/client';

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
        return <p>{error}</p>;
    }

    return (
        <>
            <div className="flex flex-col mt-10 justify-center items-center">
                <h1 className="text-3xl mb-8">MY PRODUCTS</h1>
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
