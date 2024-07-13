import { SyntheticEvent, useState } from "react";
import ConfirmationDialog from "./confirmation.dialog"
import { DateRangePicker } from "rsuite";
import { DateRange } from "rsuite/esm/DateRangePicker";

type RangedDatePickerOnDialogProps = {
    open: boolean;
    prompt: string;
    cancelText: string;
    confirmText: string;
    onChange: (from: Date, to: Date) => void;
    onCancel: () => void;
    onConfirm: () => void;
}

export const RangedDatePickerOnDialog: React.FC<RangedDatePickerOnDialogProps> = ({open, prompt, cancelText, confirmText, onChange, onCancel, onConfirm}) => {

    const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);

    const handleOnChange = (value: DateRange | null, _:SyntheticEvent) => {
        if (!value) {
            setConfirmButtonDisabled(true);
            return;
        }
        
        setConfirmButtonDisabled(false);

        onChange(value[0], value[1]);
    }

    const dateRangePicker = (
        <DateRangePicker
            onChange={handleOnChange}
        />
    );

    return (
        <ConfirmationDialog
            open={open}
            prompt={prompt}
            cancelText={cancelText}
            confirmText={confirmText}
            onCancel={onCancel}
            onConfirm={onConfirm}
            confirmButtonDisabled={confirmButtonDisabled}
            dialogContent={dateRangePicker}
        />
    )

}