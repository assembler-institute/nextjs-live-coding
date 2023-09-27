import {Character} from "@/types/character";
import Image from "next/image";
import styles from "./styles.module.css"

type Props = {
    character: Character
};
const CharacterCard = ({character}: Props) => {
    return (
        <div className={styles.card_container}>
            <Image src={character.image} alt={character.name} width={100} height={100}/>
            <div>
                <h1>{character.name}</h1>
                <p>Status: {character.status} - {character.species}</p>
                <p>Last known location:</p>
                <p>{character.location.name}</p>
            </div>
        </div>
    );
};
export default CharacterCard;
