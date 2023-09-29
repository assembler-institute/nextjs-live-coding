import {getAllUsers} from "@/services/users.services";
import React from "react";
import {revalidateTag} from "next/cache";
import Form from "@/components/Form/Form";

type Props = {};
const User = async (props: Props) => {
    const users = await getAllUsers()

    const handleSubmit = async (formData: FormData) => {
        "use server"
        console.log("name:", formData.get("name"))
        console.log("image:", formData.get("image"))
        console.log("address:", formData.get("address"))

        const response = await fetch("https://65133dcb8e505cebc2e9b5c9.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.get("name"),
                image: formData.get("image"),
                address: formData.get("address")
            })
        })
        const data = await response.json()
        console.log(data)

        if (response.ok) {
            revalidateTag("getAllUsers")
            // revalidatePath("/users")
        }
    }

    return (
        <div>
            <h1>Users List </h1>

            <form action={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name"/>
                <input type="text" name="image" placeholder="Enter image url"/>
                <input type="text" name="address" placeholder="Enter address "/>
                <button type="submit">Save User</button>
            </form>

            {/*👇🏻This is a client component that uses the server actions defined in the users.actions.ts file*/}
            <Form/>

            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h2>{user.name}</h2>
                    </div>
                })
            }
        </div>
    );
};
export default User;
