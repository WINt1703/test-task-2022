import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootStore} from "../../../common/stores/root";

const initialState = false

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            return action.payload
        },
    },
})

export const loadingSelector = (state: RootStore): boolean => state.loading

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer