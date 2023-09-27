import {Character} from "@/types/character";

export const getAllCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const {results} = await response.json()
    return results as Character[]
}


export const getCharacterDetails = async (id: string) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return await response.json() as Character

}
