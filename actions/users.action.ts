"use server"
import {revalidateTag} from "next/cache";
import {UserFormData} from "@/components/Form/Form";

const MOCK_API_URL = process.env.MOCK_API_URL
export const createUser = async ({name, image, address}: UserFormData) => {
    const response = await fetch(`${MOCK_API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, image, address})
    })

    if (response.ok) {
        revalidateTag("users")
    }
}
