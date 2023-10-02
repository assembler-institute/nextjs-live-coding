"use client"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import {AuthState, logIn, reset} from "@/redux/features/auth-slice";

const ReduxForm = () => {
    const [userData, setUserData] = useState<AuthState>({
        name: "",
        email: "",
        picture: "",
    })

    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(logIn(userData))
    }

    const handleResetData = () => {
        dispatch(reset())
    }

    return (
        <div>
            <h1>Redux Form</h1>
            <form>
                <input type="text" name="name" placeholder="Enter your name" onChange={(e) => handleChange(e)}/>
                <input type="text" name="email" placeholder="Enter your email" onChange={(e) => handleChange(e)}/>
                <input type="text" name="picture" placeholder="Enter your image url" onChange={(e) => handleChange(e)}/>
                <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>
            </form>
            <button onClick={() => handleResetData()}>Reset Store User Data</button>
        </div>
    );
};
export default ReduxForm;
