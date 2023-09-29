import {Character} from "@/types/character";

const RICK_MORTY_API_URL = process.env.RICK_AND_MORTY_API_URL

export const getAllCharacters = async () => {
    const response = await fetch(`${RICK_MORTY_API_URL}/character`)
    const {results} = await response.json()
    return results as Character[]
}


export const getCharacterDetails = async (id: string) => {
    const response = await fetch(`${RICK_MORTY_API_URL}/character/${id}`)
    return await response.json() as Character

}
