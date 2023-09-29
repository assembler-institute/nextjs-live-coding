import {getCharacterDetails} from "@/services/character.services";
import BackButton from "@/components/BackButton/BackButton";
import styles from "./styles.module.css"
import {Metadata} from "next";

type Props = {
    params: {
        id: string
    }
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const character = await getCharacterDetails(params.id)
    return {
        title: `${character.name} Page`,
        description: character.name,
    }
}


const Character = async ({params}: Props) => {
    const character = await getCharacterDetails(params.id)

    return (
        <div className={`${styles.container}`}>
            <BackButton/>
            <div className={styles.information}>
                <img src={character.image} alt={character.name}/>
                <h1>Name: {character.name}</h1>
                <h2>Species: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
            </div>
        </div>
    );
};
export default Character;
