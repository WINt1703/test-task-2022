import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Toast from "../types/Toast";
import RootStore from "../../../common/types/RootStore";

function getInitialProps(): Toast {
    return {
        type: "success",
        open: false,
        message: "",
    }
}

const toastSlice = createSlice({
    name: "toast",
    initialState: getInitialProps(),
    reducers: {
        showToast: (state, action : PayloadAction<Omit<Toast, "open"> | string>) => {
            if (typeof action.payload === "string") {
                return ({
                    type: "success",
                    open: true,
                    message: action.payload
                })
            }


            return ({
                ...action.payload,
                open: true,
            })
        },
        closeToast: (state) => getInitialProps(),
    }
})

export const {showToast, closeToast} = toastSlice.actions

export const toastSelector = (store: RootStore) => store.toast

export default toastSlice.reducer