import CategoriesInputField from "../fields/categories-input.field";
import { StepWrapper } from "./step-wrapper";

export const CategoriesStep = () => {
    return (
        <StepWrapper stepHeaderText="Select categories for your product for your product" >
            <CategoriesInputField />
        </StepWrapper>
    )
};