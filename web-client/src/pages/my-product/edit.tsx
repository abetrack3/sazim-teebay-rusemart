import { useParams } from "react-router-dom";

const EditProductPage = () => {

    const { productId } = useParams();

    console.log(productId);

    return (
        <>
            <h1>{productId}</h1>
        </>
    );

};

export default EditProductPage;