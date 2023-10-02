import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./features/auth-slice"
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        AuthReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export const appUseSelector: TypedUseSelectorHook<RootState> = useSelector
