import {Location} from "@/types/locations";
import styles from "./styles.module.css"

type Props = {
    locations: Location[]
};
const LocationsList = ({locations}: Props) => {
    return (
        <div className={styles.container}>
            {
                locations.map((location: Location) => {
                    return <div key={location.id}>{location.name}</div>
                })
            }
        </div>
    );
};
export default LocationsList;
