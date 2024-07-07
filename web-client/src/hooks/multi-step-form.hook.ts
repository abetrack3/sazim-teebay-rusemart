import { ReactElement, SyntheticEvent, useState } from "react";

const useMultiStepForm = (steps: ReactElement[], stepLabels: string[]) => {

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = (clickEvent?: SyntheticEvent) => {
        if (clickEvent) {
            clickEvent.preventDefault();
            clickEvent.stopPropagation();
        }
        setCurrentStepIndex(index => {
            if (index >= steps.length -1) return index;
            return index + 1;
        });
    }

    const back = (clickEvent?: SyntheticEvent) => {
        if (clickEvent) {
            clickEvent.preventDefault();
            clickEvent.stopPropagation();
        }
        setCurrentStepIndex(index => {
            if (index <= 0) return index;
            return index - 1;
        });
    }
    
    const goTo = (index: number) => {
        if (0 <= index && index <= steps.length && currentStepIndex !== index) {
            setCurrentStepIndex(index);
        }
    }

    return {
        currentStepIndex,
        currentStep: steps[currentStepIndex],
        steps,
        stepLabels,
        currentStepLabel: stepLabels[currentStepIndex],
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
    }

};

export default useMultiStepForm;