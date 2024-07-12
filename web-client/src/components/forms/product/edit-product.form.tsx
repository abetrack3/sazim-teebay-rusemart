import { Formik } from "formik"
import { Product } from "../../../shared/types/product.types"
import productFormValidationSchema from "../../../validators/product.form.validation.schema"
import { Form, useNavigate } from "react-router-dom"
import CategoriesInputField from "./fields/categories-input.field"
import { DescriptionInputField } from "./fields/description-input.field"
import { PriceInputField } from "./fields/price-input.field"
import { RentOptionInputField } from "./fields/rent-option-input.field"
import ProductTitleInput from "./fields/title-input.field"
import { Button } from "@mui/material"
import { updateProduct } from "../../../services/product.service"

type EditProductFormProps = {
    product: Product;
};

export const EditProductForm: React.FC<EditProductFormProps> = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div className="w-3/5">

            <Formik
                initialValues={{
                    id: product.id,
                    title: product.title,
                    categories: product.categories,
                    description: product.description,
                    purchasePrice: product.purchasePrice,
                    rentPrice: product.rentPrice,
                    rentOption: product.rentOption,
                }}
                validationSchema={productFormValidationSchema}
                onSubmit={values => {
                    updateProduct(values as Product);
                }}
            >

                {({ isValid, isSubmitting, dirty, submitForm, setSubmitting }) => (
                    <Form className="flex flex-col gap-4">

                        <ProductTitleInput />
                        <CategoriesInputField />
                        <DescriptionInputField />
                        <div className="flex gap-4 justify-between">
                            <PriceInputField name="purchasePrice" label="Purchase Price" placeHolder="Enter your Price" />
                            <PriceInputField name="rentPrice" label="Rent Price" placeHolder="Enter your Rent Price" />
                            <RentOptionInputField />
                        </div>

                        <div className="flex justify-between">
                            <Button variant="outlined" color="primary" onClick={() => navigate('/my-product')}>
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={!isValid || isSubmitting || !dirty}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    submitForm().finally(() => setSubmitting(false));
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>

                )}

            </Formik>
        </div>
    )

}