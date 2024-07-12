import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik } from "formik";
import productCreateValidationSchema from "../../../validators/product.create.form.validation.schema";
import useMultiStepForm from "../../../hooks/multi-step-form.hook";
import { createProduct } from "../../../services/product.service";
import { Product } from "../../../shared/types/product.types";
import { RentOption } from "../../../shared/constants/rent-option.const";
import { ProductTitleStep } from "./steps/product-title.step";
import { CategoriesStep } from "./steps/categories.step";
import { DescriptionStep } from "./steps/description.step";
import { PricingInfoStep } from "./steps/pricing-info.step";
import { SummaryStep } from "./steps/summary.step";

const CreateProductForm = () => {

    const {
        currentStepIndex,
        currentStep,
        steps,
        stepLabels,
        isFirstStep,
        isLastStep,
        next,
        back
    } = useMultiStepForm(
        [
            <ProductTitleStep />,
            <CategoriesStep />,
            <DescriptionStep />,
            <PricingInfoStep />,
            <SummaryStep />
        ],
        [
            'Product title',
            'Categories',
            'Description',
            'Pricing Info',
            'Summary',
        ]
    );

    return (
        <div className="w-3/5">
            <Formik
                initialValues={{
                    title: '',
                    categories: [],
                    description: '',
                    purchasePrice: 0,
                    rentPrice: 0,
                    rentOption: RentOption.PER_DAY,
                }}
                onSubmit={e => createProduct(e as unknown as Product)}
                validationSchema={productCreateValidationSchema}
            >
                {({ isValid }) => (
                    <Form>

                        <Stepper activeStep={currentStepIndex}>
                            {steps.map((_, index) => (

                                <Step key={index}>
                                    <StepLabel>
                                        {stepLabels[index]}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <div className="border-2 rounded-lg px-10 mt-10">

                            <div className="my-20">
                                {currentStep}
                            </div>

                            <div className="flex justify-between pb-12">

                                <Button type="button" disabled={isFirstStep} variant="outlined" onClick={back}>
                                    Back
                                </Button>

                                {isLastStep ? (
                                    <Button type={'submit'} disabled={!isValid} variant="contained">
                                        {'Submit'}
                                    </Button>
                                ) : (
                                    <Button type={'button'} variant="outlined" onClick={next}>
                                        {'Next'}
                                    </Button>
                                )}

                            </div>

                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )

};

export default CreateProductForm;