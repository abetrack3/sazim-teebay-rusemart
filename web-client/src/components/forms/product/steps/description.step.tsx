import { DescriptionInputField } from "../fields/description-input.field";
import { StepWrapper } from "./step-wrapper";

export const DescriptionStep = () => {
    return (
        <StepWrapper stepHeaderText="Select description" >
            <DescriptionInputField />
        </StepWrapper>
    )
};