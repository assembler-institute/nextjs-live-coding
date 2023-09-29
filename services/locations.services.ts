import {Location} from "@/types/locations";
import {getAccessToken} from "@auth0/nextjs-auth0";

const RICK_MORTY_API_URL = process.env.RICK_AND_MORTY_API_URL

export const getAllLocations = async () => {
    const token = await getAccessToken()
    const response = await fetch(`${RICK_MORTY_API_URL}/location`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const {results} = await response.json()
    return results as Location[]
}
