import {getAllCharacters} from "@/services/character.services";
// import CharacterList from "@/components/CharacterList/CharacterList";
import {Metadata} from "next";
import {Suspense} from "react";

import dynamic from "next/dynamic";

const CharacterList = dynamic(() => import ("@/components/CharacterList/CharacterList"))

export const metadata: Metadata = {
    title: 'Characters List',
    description: 'Characters List',
}

type Props = {};
const Characters = async (props: Props) => {
    const characters = await getAllCharacters()

    return (
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <CharacterList characters={characters}/>
            </Suspense>
        </div>
    );
};
export default Characters;
