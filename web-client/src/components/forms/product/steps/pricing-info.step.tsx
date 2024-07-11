import { PriceInputField } from "../fields/price-input.field";
import { RentOptionInputField } from "../fields/rent-option-input.field";
import { StepWrapper } from "./step-wrapper";

export const PricingInfoStep = () => {
    return (
        <StepWrapper stepHeaderText="Select price" >
            <PriceInputField name="purchasePrice" label="Purchase Price" placeHolder="Enter your Price" />

            <div className="flex justify-around gap-6 mt-8">
                <PriceInputField name="rentPrice" label="Rent Price" placeHolder="Enter your Rent Price" />
                <RentOptionInputField />
            </div>
        </StepWrapper>
    )
};