import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../shared/types/product.types";
import { getUserProductById } from "../../services/product.service";
import { CircularProgress } from "@mui/material";
import { EditProductForm } from "../../components/forms/product/edit-product.form";

const EditProductPage = () => {

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
                const product = await getUserProductById(productId as string);
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
                {product && <>
                    <h1 className="text-3xl mb-8">
                        Edit: {product?.title}
                    </h1>
                    <EditProductForm product={product}/>
                </>}
                {!product && <h1>Failed to fetch data</h1>}
            </div>
        </>
    );

};

export default EditProductPage;