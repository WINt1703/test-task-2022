import {configureStore} from "@reduxjs/toolkit";
import loadingReducers from "../../module/loading/slices/loadingSlice"

export interface RootStore {
    loading: boolean
}

export default configureStore({
    reducer: {
        loading: loadingReducers,
    }
})