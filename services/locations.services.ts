import {Location} from "@/types/locations";

export const getAllLocations = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/location")
    const {results} = await response.json()
    return results as Location[]
}
