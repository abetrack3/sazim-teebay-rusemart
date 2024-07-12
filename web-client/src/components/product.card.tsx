import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { Product } from '../shared/types/product.types';
import ConfirmationDialog from './ui/feedback/confirmation.dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
    actionsEnabled: boolean;
    callbackForDelete?: () => void;
    callBackForOnClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, actionsEnabled, callbackForDelete, callBackForOnClick }) => {

    const [open, setOpen] = useState(false);

    const naviagate = useNavigate();

    const handleDeleteConfirmation = async () => {
        if (callbackForDelete) {
            await callbackForDelete();
        }
        setOpen(false);
    }

    const handleOnClickEvent = async () => {
        if (callBackForOnClick) {
            await callBackForOnClick();
        }
    }

    return (
        <>
            <Card variant='outlined' className='m-3 w-full relative' >
            <div onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleOnClickEvent();
            }}>

                <CardContent className='flex flex-col gap-4'>
                    {actionsEnabled &&
                    <div className='absolute top-4 right-4'>
                        <CardActions>
                            <IconButton
                                color='default'
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    naviagate(`edit/${product.id}`);
                                }}
                            >
                                < EditTwoTone />
                            </IconButton>
                        </CardActions>
                        {product.isSold === false &&
                        <CardActions>
                            <IconButton
                                color='error'
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setOpen(true);
                                }}>
                                < DeleteTwoTone />
                            </IconButton>
                        </CardActions>}
                    </div>}
                    <Typography variant="body2" color="textSecondary">
                        Title: {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Categories: {product.categories.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Purchase Price: ${product.purchasePrice} | Rent Price: ${product.rentPrice}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Description: {product.description}
                    </Typography>
                </CardContent>
            </div>
            </Card>
            <ConfirmationDialog
                open={open}
                prompt={`Are you sure you want to delete ${product.title}?`}
                cancelText={'Cancel'}
                confirmText={'Yes'}
                onCancel={() => setOpen(false)}
                onConfirm={handleDeleteConfirmation}
            >
            </ConfirmationDialog>
        </>
    );
};

export default ProductCard;
