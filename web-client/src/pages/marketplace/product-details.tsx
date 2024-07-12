import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../shared/types/product.types";
import { getMarketplaceProductById } from "../../services/product.service";
import { Button, CircularProgress } from "@mui/material";

export const ProductDetailsPage = () => {

    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { productId } = useParams();

    useEffect(() => {

        if (!productId) {
            setError('Something went wrong');
            return;
        }

        const fetchProduct = async () => {
            try {
                const product = await getMarketplaceProductById(productId as string);
                setProduct(product);
            } catch (error) {
                setError('Failed to fetch product');
            } finally {
                setLoading(false);
            }

        };

        fetchProduct();

    }, [productId]);

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
            <div className="flex flex-col h-full justify-center items-center">
                <div className="w-2/5 flex flex-col min-h-[60vh] justify-between">
                    {product && <>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl mb-2">Hola!</h1>
                            <p className="font-medium">Categories: {product.categories.join(', ')}</p>
                            <p className="font-medium">Price: ${product.purchasePrice}</p>
                            <p className="font-normal">{product.description}</p>
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button variant='contained' type='button' color='primary'>Rent</Button>
                            <Button variant='contained' type='button' color='primary'>Purchase</Button>
                        </div>
                    </>}
                    {!product && <h1 className="m-auto">Failed to fetch data</h1>}
                </div>
            </div>
        </>
    );

};
