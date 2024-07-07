import { Button, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import productCreateValidationSchema from "../../../../validators/product.create.form.validation.schema";
import useMultiStepForm from "../../../../hooks/multi-step-form.hook";
import FixedTextArea from "../../../inputs/fixed-text-area";
import { CategoryList } from "../../../../shared/constants/categories.const";
import MultiSelectDropdownWithAutocomplete from "../../../inputs/multi-select-autocomplete";
import NumberInput from "../../../inputs/number-input";
import { createProduct } from "../../../../services/product.service";
import { Product } from "../../../../shared/types/product.types";
import SelectBasic from "../../../inputs/select-basic";
import { RentOption, RentOptions } from "../../../../shared/constants/rent-option.const";

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
            <>
                <Typography variant="h5" component="div" align="center" marginBottom={8}>
                    {'Select a title for your product'}
                </Typography>
                <Field name="title" as={TextField} label="Title" fullWidth />
                <ErrorMessage name="title" component="div" />
            </>,
            <>
                <Typography variant="h5" component="div" align="center" marginBottom={8}>
                    {'Select categories for your product for your product'}
                </Typography>
                <Field
                    name='categories'
                    component={MultiSelectDropdownWithAutocomplete}
                    dropDownOptions={CategoryList}
                    label='Select Categories'
                    placeHolder='Type your categories'
                ></Field>
                <ErrorMessage name="categories" component="div" />
            </>,
            <>
                <Typography variant="h5" component="div" align="center" marginBottom={8}>
                    {'Select description'}
                </Typography>
                <Field name="description" component={FixedTextArea} placeHolder="Description" className='w-full' minRows={4} />
                <ErrorMessage name="description" component="div" />
            </>,
            <>
                <Typography variant="h5" component="div" align="center" marginBottom={8}>
                    {'Select price'}
                </Typography>
                <Field
                    name='purchasePrice'
                    component={NumberInput}
                    label='Purchase Price'
                    placeHolder='Enter your Price'
                    adornmentAtStart='$'
                ></Field>
                <ErrorMessage name="purchasePrice" component="div" />
                <div className="flex justify-around gap-6 mt-8">
                    <Field
                        name='rentPrice'
                        component={NumberInput}
                        label='Rent Price'
                        placeHolder='Enter your Rent Price'
                        adornmentAtStart='$'
                    ></Field>
                    <Field
                        fullWidth
                        name="rentOption"
                        component={SelectBasic}
                        dropDownOptions={RentOptions}
                        label="Rent Option"
                        placeHolder="Select Rent Option"
                    />
                </div>

            </>,
            <>
                <Typography variant="h5" component="div" marginBottom={4} fontWeight={'bold'}>
                    {'Summary'}
                </Typography>

                <Field>
                    {({ form }) => {

                        
                        

                        return (
                            <>
                                <Typography component="p" marginBottom={3}>
                                    {`Title: ${form.values.title}`}
                                </Typography>

                                <Typography component="p" marginBottom={3}>
                                    {`Categories: ${form.values.categories.join(', ')}`}
                                </Typography>

                                <Typography component="p" marginBottom={3}>
                                    {`Description: ${form.values.description}`}
                                </Typography>

                                <Typography component="p" marginBottom={3}>
                                    {`Price: $${form.values.purchasePrice}, To rent: $${form.values.rentPrice} per day`}
                                </Typography>
                            </>
                        );

                    }}
                </Field>

            </>,
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
                    title: 'aaa',
                    categories: [CategoryList[1]],
                    description: 'vvvvvvvv',
                    purchasePrice: 23,
                    rentPrice: 11,
                    rentOption: RentOption.PER_DAY.toString(),
                }}
                onSubmit={e => createProduct(e as Product)}
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