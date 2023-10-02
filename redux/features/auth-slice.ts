import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type InitialState = {
    value: AuthState
}

export type AuthState = {
    name: string,
    email: string,
    picture: string
}


const initialState: InitialState = {
    value: {
        name: "",
        email: "",
        picture: ""
    }

}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<AuthState>) => {
            return {
                value: {
                    name: action.payload.name,
                    email: action.payload.email,
                    picture: action.payload.picture
                }
            }
        },
        reset: () => {
            return initialState
        },
        updateUserName: (state, action: PayloadAction<{ name: string }>) => {
            state.value.name = action.payload.name
        }
    }
})

export const {
    logIn,
    reset,
    updateUserName
} = auth.actions

export default auth.reducer
