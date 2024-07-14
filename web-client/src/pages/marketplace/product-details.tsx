import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../shared/types/product.types";
import { getMarketplaceProductById, purchaseProduct, rentProduct } from "../../services/product.service";
import { Button, CircularProgress } from "@mui/material";
import ConfirmationDialog from "../../components/ui/feedback/confirmation.dialog";
import { RangedDatePickerOnDialog } from "../../components/ui/feedback/ranged-date-picker.dialog";
import { getLoggedInUserId } from "../../services/auth.service";

export const ProductDetailsPage = () => {

    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false);
    const [rentDialogOpen, setRentDialogOpen] = useState(false);
    const [rentFromDate, setRentFromDate] = useState<Date>();
    const [rentTillDate, setRentTillDate] = useState<Date>();
    
    const { productId } = useParams();

    const loggedInUserId = getLoggedInUserId();
    
    const handlePurchaseConfirmation = async () => {
        setPurchaseDialogOpen(false);
        await purchaseProduct(product!);
    };

    const handleRentDateRangeChange = (from: Date, to: Date) => {
        setRentFromDate(from);
        setRentTillDate(to);
    };

    const handleRentConfirmation = () => {
        setRentDialogOpen(false);
        if (!product) {
            return;
        }
        rentProduct(product, rentFromDate!, rentTillDate!);
    };

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
                            {(product.ownerId !== loggedInUserId) &&
                            <Button
                                variant='contained'
                                type='button'
                                color='primary'
                                onClick={() => {
                                    setRentDialogOpen(true);
                                }}
                            >
                                Rent
                            </Button>}
                            {(product.isSold === false && product.ownerId !== loggedInUserId) &&
                            <Button
                                variant='contained'
                                type='button'
                                color='primary'
                                onClick={() => {
                                    setPurchaseDialogOpen(true);
                                }}
                            >
                                Purchase
                            </Button>}
                        </div>
                    </>}
                    {!product && <h1 className="m-auto">Failed to fetch data</h1>}
                </div>
            </div>
            <RangedDatePickerOnDialog
                open={rentDialogOpen}
                prompt="Rental Period"
                confirmText="Confirm"
                cancelText="Cancel"
                onCancel={() => setRentDialogOpen(false)}
                onConfirm={handleRentConfirmation}
                onChange={handleRentDateRangeChange}
            />
            <ConfirmationDialog
                open={purchaseDialogOpen}
                cancelText="Cancel"
                confirmText="Confirm"
                onCancel={() => setPurchaseDialogOpen(false)}
                prompt={'Are you sure you want to buy this product?'}
                onConfirm={handlePurchaseConfirmation}
            />
        </>
    );

};
