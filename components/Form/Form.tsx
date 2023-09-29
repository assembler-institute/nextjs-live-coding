'use client';

import React, {useState} from 'react';
import {createUser} from "@/actions/users.action";
import {User} from "@/services/users.services";

type Props = {};

export type UserFormData = Pick<User, 'name' | 'image' | 'address'>;

const Form = (props: Props) => {
    const [userData, setUserData] = useState<UserFormData>({
        name: '',
        image: "",
        address: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        await createUser(userData);
        setUserData({
            name: '',
            image: "",
            address: '',
        });
    };

    return (
        <form action="">
            <input
                type="text"
                name="name"
                placeholder="Enter User Name"
                onChange={(e) => handleChange(e)}
                value={userData.name}
            />
            <input
                type="text"
                name="image"
                placeholder="Enter User Image URL"
                onChange={(e) => handleChange(e)}
                value={userData.image}
            />
            <input
                type="text"
                name="address"
                placeholder="Enter User Address"
                onChange={(e) => handleChange(e)}
                value={userData.address}
            />
            <button onClick={(e) => handleSubmit(e)} type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
