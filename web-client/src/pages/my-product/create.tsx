import CreateProductForm from "../../components/forms/product/create-product.forms";

const CreateProductPage = () => {

    return (
        <>
            <div className="flex flex-col justify-start items-center pt-12">
                <div className="w-3/5">
                    <h1 className="text-3xl mb-20 text-center">CREATE PRODUCT</h1>
                </div>
                <CreateProductForm />
            </div>
        </>
    )

};

export default CreateProductPage;