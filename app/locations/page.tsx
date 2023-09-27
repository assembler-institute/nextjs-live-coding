import {getAllLocations} from "@/services/locations.services";
import LocationsList from "@/components/LocationsList/LocationsList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Locations List',
    description: 'Locations List',
}

type Props = {};
const Locations = async (props: Props) => {
    const locations = await getAllLocations()

    return (
        <div>
            <h1>Rick & Morty Locations Universe</h1>
            <LocationsList locations={locations}/>
        </div>
    );
};
export default Locations;
