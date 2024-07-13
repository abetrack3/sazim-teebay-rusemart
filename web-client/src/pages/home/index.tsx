import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllMarketAvailableProducts } from "../../services/product.service";
import { useState, useEffect } from "react";
import { Product } from "../../shared/types/product.types";
import { useAuthState } from "../../hooks/useAuthState.hook";
import { ProductList } from "../../components/product.list";

const HomePage = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchMarketProducts = async () => {
        try {
            const products = await getAllMarketAvailableProducts();
            setProducts(products);
        } catch (error) {
            setError('Failed to fetch products');
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => { fetchMarketProducts(); }, []);

    const navigate = useNavigate();

    const { isAuthenticated } = useAuthState();

    const navigateToProductDetails = (productId: string) => {
        navigate(`/product/${productId}`)
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
                <div className="grid grid-cols-5 justify-center w-3/5">

                    <div className="flex justify-center mb-8 gap-3 col-start-2 col-span-3">
                        <h1 className="text-3xl font-extrabold">MARKETPLACE</h1>
                    </div>

                </div>

                {(products.length !== 0) &&
                    <div className='flex flex-col items-center gap-4 w-3/5'>
                        <ProductList
                            products={products}
                            actionsEnabled={false}
                            callBackForOnClick={navigateToProductDetails}
                        />
                    </div>
                }
                {products.length === 0 && <p>You don't have any product at the moment. Create one?</p>}

            </div>
        </>
    );

};

export default HomePage;

