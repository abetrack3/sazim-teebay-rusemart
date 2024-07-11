import { Typography } from "@mui/material";
import { ReactNode } from "react";

type StepWrapperProps = {
    stepHeaderText: string;
    children: ReactNode;
}

export const StepWrapper = ({ stepHeaderText, children }: StepWrapperProps) => {
    return (
        <>
            <Typography variant="h5" component="div" align="center" marginBottom={8}>
                {stepHeaderText}
            </Typography>
            {children}
        </>
    )
};
