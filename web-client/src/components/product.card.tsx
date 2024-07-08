import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { DeleteTwoTone } from "@mui/icons-material";
import { Product } from '../shared/types/product.types';
import ConfirmationDialog from './feedback/confirmation.dialog';
import { useState } from 'react';

const ProductCard: React.FC<{ product: Product, actionsEnabled: boolean, callbackForDelete?: () => void }> = ({ product, actionsEnabled, callbackForDelete }) => {

    const [open, setOpen] = useState(false);

    const handleDeleteConfirmation = async () => {
        if (callbackForDelete) {
            await callbackForDelete();
        }
        setOpen(false);
    }

    return (
        <>
            <Card className='m-3 w-full relative'>
                <CardContent className='flex flex-col gap-4'>
                    {actionsEnabled && <CardActions className='absolute top-4 right-4'>
                        <IconButton
                            color='error'
                            onClick={() => setOpen(true)}
                        >
                            < DeleteTwoTone />
                        </IconButton>
                    </CardActions>}
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
