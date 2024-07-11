import ProductTitleInput from "../fields/title-input.field"
import { StepWrapper } from "./step-wrapper"

export const ProductTitleStep = () => {
    return (
        <StepWrapper stepHeaderText="Select a title for your product" >
            <ProductTitleInput />
        </StepWrapper>
    )
};
