export interface User {
    id: number
    name: string
    image: string
    address: string
}

const MOCK_API_URL = process.env.MOCK_API_URL

export const getAllUsers = async () => {
    const response = await fetch(`${MOCK_API_URL}/users`, {
        next: {tags: ["users", "getAllUsers"]}
    })
    return await response.json() as User[]
}
