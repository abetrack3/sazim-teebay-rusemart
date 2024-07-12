import { useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../shared/types/product.types";

export const ProductDetailsPage = () => {

    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { productId } = useParams();

    return (
        <>
            <div className="flex flex-col h-full justify-center items-center">
                <h1>Hola!</h1>
                <h1>{productId}</h1>
            </div>
        </>
    );

};
