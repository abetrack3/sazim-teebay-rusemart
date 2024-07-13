import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { ReactNode } from "react";

type ConfirmationDialogComponentType = React.FC<{
    open: boolean;
    prompt: string;
    confirmText: string;
    cancelText: string;
    dialogContent?: ReactNode;
    confirmButtonDisabled?: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}>

const ConfirmationDialog: ConfirmationDialogComponentType = ({ open, prompt, confirmText, cancelText, dialogContent, confirmButtonDisabled, onCancel, onConfirm }) => {

    return (
        <>
            <Dialog open={open} >
                <DialogTitle id="alert-dialog-title">
                    {prompt}
                </DialogTitle>
                <DialogContent>
                    {dialogContent}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel} type="button" variant="text" color="error">{cancelText}</Button>
                    <Button onClick={onConfirm} type="button" variant="text" color="primary" disabled={confirmButtonDisabled} autoFocus>{confirmText}</Button>
                </DialogActions>
            </Dialog>
        </>
    );

};
export default ConfirmationDialog;