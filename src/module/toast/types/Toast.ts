import {AlertColor} from "@mui/material/Alert/Alert";

type Toast = {
    type: AlertColor,
    open: boolean,
    message: string,
}

export default Toast