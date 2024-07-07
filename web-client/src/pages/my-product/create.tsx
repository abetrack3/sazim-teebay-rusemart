import CreateProductForm from "../../components/forms/product/create/create-product.forms";

const CreateProductPage = () => {

    return (
        <>
            <div className="flex flex-col justify-start items-center pt-12">
                <h1 className="text-3xl mb-20">CREATE PRODUCT</h1>
                <CreateProductForm />
            </div>
        </>
    )

};

export default CreateProductPage;