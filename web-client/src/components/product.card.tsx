import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import { Product } from '../shared/types/product.types';
import ConfirmationDialog from './feedback/confirmation.dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<{ product: Product, actionsEnabled: boolean, callbackForDelete?: () => void }> = ({ product, actionsEnabled, callbackForDelete }) => {

    const [open, setOpen] = useState(false);

    const naviagate = useNavigate();

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
                    {actionsEnabled &&
                    <div className='absolute top-4 right-4'>
                        <CardActions>
                            <IconButton
                                color='default'
                                onClick={() => naviagate(`edit/${product.id}`)}
                            >
                                < EditTwoTone />
                            </IconButton>
                        </CardActions>
                        <CardActions>
                            <IconButton
                                color='error'
                                onClick={() => setOpen(true)}
                            >
                                < DeleteTwoTone />
                            </IconButton>
                        </CardActions>
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
