import {configureStore} from "@reduxjs/toolkit";
import loadingReducer from "../../module/loading/slices/loadingSlice"
import toastReducer from "../../module/toast/slices/toastSlice"

export default configureStore({
    reducer: {
        loading: loadingReducer,
        toast: toastReducer,
    }
})