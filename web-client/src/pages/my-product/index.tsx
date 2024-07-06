import { useEffect, useState } from 'react';
import { getAllUserProducts } from '../../services/product.service';
import { Product } from '../../shared/types/product.types';
import { CircularProgress } from '@mui/material';
import ProductCard from '../../components/product.card';

const MyProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
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

        fetchProducts();
    }, []);

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
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyProduct;
