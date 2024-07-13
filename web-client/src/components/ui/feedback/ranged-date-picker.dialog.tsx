import { SyntheticEvent, useState } from "react";
import ConfirmationDialog from "./confirmation.dialog"
import { DateRangePicker } from "rsuite";
import { DateRange } from "rsuite/esm/DateRangePicker";

type RangedDatePickerOnDialogProps = {
    open: boolean;
    prompt: string;
    cancelText: string;
    confirmText: string;
    onCancel: () => void;
    onConfirm: (from: Date, to: Date) => void;
}

export const RangedDatePickerOnDialog: React.FC<RangedDatePickerOnDialogProps> = ({open, prompt, cancelText, confirmText, onCancel, onConfirm}) => {

    let fromDate: Date;
    let toDate: Date;
    const [confirmButtonDisabled, setConfirmButtonDisabled] = useState(true);

    const handleOnChange = (value: DateRange | null, _:SyntheticEvent) => {

        if (!value) {
            setConfirmButtonDisabled(true);
            return;
        }

        fromDate = value[0];
        toDate = value[1];


        if (!value) {
            setConfirmButtonDisabled(true);
            return;
        }
        
        setConfirmButtonDisabled(false);
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
            onConfirm={() => {
                onConfirm(fromDate, toDate);
            }}
            confirmButtonDisabled={confirmButtonDisabled}
            dialogContent={dateRangePicker}
        />
    )

}