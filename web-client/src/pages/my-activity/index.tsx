import { Box, Tabs, Tab, CircularProgress } from "@mui/material";
import { useTabs } from "../../hooks/use-tabs.hook";
import { useEffect, useState } from "react";
import { Product } from "../../shared/types/product.types";
import { getUserBorrowedAndLentProducts, getUserPurchasedAndSoldProducts } from "../../services/product.service";
import { BorrowedProductsTab, OfferedProductsTab, PurchasedProductsTab, SoldProductsTab } from "./products.tab";

export const MyActivityPage = () => {

    
    const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]);
    const [soldProducts, setSoldProducts] = useState<Product[]>([]);
    const [borrowedProducts, setBorrwedProducts] = useState<Product[]>([]);
    const [offeredProducts, setOfferedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');    
    const {currentTabIndex, handleTabChange, currentTab} = useTabs([
        <PurchasedProductsTab products={purchasedProducts} />,
        <SoldProductsTab products={soldProducts} />,
        <BorrowedProductsTab products={borrowedProducts} />,
        <OfferedProductsTab products={offeredProducts} />,
    ]);
    
    const fetchProducts = async () => {        
        try {
            const { purchasedProducts, soldProducts } = await getUserPurchasedAndSoldProducts();
            setPurchasedProducts(purchasedProducts);
            setSoldProducts(soldProducts);
            const { borrowedProducts, offeredProducts } = await getUserBorrowedAndLentProducts();
            setBorrwedProducts(borrowedProducts);
            setOfferedProducts(offeredProducts);
        } catch (error) {
            setError('Failed to fetch products');
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => { fetchProducts() }, []);

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
            <h1 className="pt-12 mb-8 w-full text-center text-3xl font-extrabold">MY ACTIVITY</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTabIndex} onChange={handleTabChange} variant="fullWidth">
                    <Tab label="Purchased" />
                    <Tab label="Sold" />
                    <Tab label="Borrowed" />
                    <Tab label="Lent" />
                </Tabs>
            </Box>
            {currentTab}
        </>
    );

};