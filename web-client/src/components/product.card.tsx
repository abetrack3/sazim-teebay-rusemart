import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { DeleteTwoTone } from "@mui/icons-material";
import { Product } from '../shared/types/product.types';

const ProductCard: React.FC<{product: Product}> = ({ product }) => {

    return (
        <>
            <Card className='m-3 w-full relative'>
                <CardContent className='flex flex-col gap-4'>
                    <CardActions className='absolute top-4 right-4'>
                        <IconButton color='error'>< DeleteTwoTone/></IconButton>
                    </CardActions>
                    <Typography variant="h2" component="div">
                        {product.name}
                    </Typography>
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
        </>
    );
};

export default ProductCard;
