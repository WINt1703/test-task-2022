import React from 'react';
import {Alert, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeToast, toastSelector} from "../../slices/toastSlice";

const Toast = () => {
    const toast = useSelector(toastSelector)
    const dispatch = useDispatch()
    const closeHandler = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(closeToast())
    }

    return (
        <Snackbar onClose={closeHandler}
                  open={toast.open}
                  autoHideDuration={3000}>
            <Alert onClose={closeHandler}
                   severity={toast.type}
                   sx={{ width: '100%' }}>
                { toast.message }
            </Alert>
        </Snackbar>
    );
};

export default Toast;