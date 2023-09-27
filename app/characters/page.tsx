import {getAllCharacters} from "@/services/character.services";
import CharacterList from "@/components/CharacterList/CharacterList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Characters List',
    description: 'Characters List',
}

type Props = {};
const Characters = async (props: Props) => {
    const characters = await getAllCharacters()

    return (
        <div>
            <CharacterList characters={characters}/>
        </div>
    );
};
export default Characters;
