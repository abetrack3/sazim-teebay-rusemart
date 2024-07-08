
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle
} from "@mui/material";

const ConfirmationDialog = ({ open, prompt, confirmText, cancelText, onCancel, onConfirm }) => {

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