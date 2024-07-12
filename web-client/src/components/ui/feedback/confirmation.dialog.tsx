import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

type ConfirmationDialogComponentType = React.FC<{
    open: boolean;
    prompt: string;
    confirmText: string;
    cancelText: string;
    onCancel: () => void;
    onConfirm: () => void;
}>

const ConfirmationDialog: ConfirmationDialogComponentType = ({ open, prompt, confirmText, cancelText, onCancel, onConfirm }) => {

    return (
        <>
            <Dialog open={open} >
                <DialogTitle id="alert-dialog-title">
                    {prompt}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={onCancel} type="button" variant="text" color="error">{cancelText}</Button>
                    <Button onClick={onConfirm} type="button" variant="text" color="primary" autoFocus>{confirmText}</Button>
                </DialogActions>
            </Dialog>
        </>
    );

};
export default ConfirmationDialog;