import {Character} from "@/types/character";
import styles from "./styles.module.css"
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import Link from "next/link";

type Props = {
    characters: Character[]
};
const CharacterList = ({characters}: Props) => {
    return (
        <div>
            <h1>Rick & Morty Characters Universe</h1>
            <div className={styles.container}>
                {characters.map((character: Character) => {
                    return <Link key={character.id} className={styles.links}
                                 href={`http://localhost:3000/characters/${character.id}`}>
                        <CharacterCard character={character}/>
                    </Link>
                })}
            </div>
        </div>
    );
};
export default CharacterList;
