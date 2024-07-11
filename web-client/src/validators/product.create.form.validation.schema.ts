import * as yup from "yup";

const productCreateValidationSchema = yup.object({

    title: yup
        .string()
        .required('Product title is required'),

    categories: yup
        .array().of(yup.string())
        .min(1, 'At least one categories needs to be selected')
        .required(),

    description: yup
        .string()
        .optional(),

    purchasePrice: yup
        .number()
        .moreThan(0, 'Purchase Price must be greater than zero')
        .required('Purchase price is required'),

    rentPrice: yup
        .number()
        .moreThan(0, 'Rent Price must be greater than zero')
        .required('Rent price is required'),

    rentOption: yup
        .string()
        .required('Rent option is required'),

});

export default productCreateValidationSchema;