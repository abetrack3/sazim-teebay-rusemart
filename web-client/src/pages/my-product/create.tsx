import { Button } from "@mui/material";
import CreateProductForm from "../../components/forms/product/create-product.forms";
import { useNavigate } from "react-router-dom";

const CreateProductPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col justify-start items-center pt-12">
                <div className="grid grid-cols-3 w-3/5">
                    <Button variant='contained' color='primary' type='button' className='h-min max-w-max' onClick={() => navigate('/my-product')}>My Products</Button>
                    <h1 className="text-3xl mb-20 text-center">CREATE PRODUCT</h1>
                </div>
                <CreateProductForm />
            </div>
        </>
    )

};

export default CreateProductPage;