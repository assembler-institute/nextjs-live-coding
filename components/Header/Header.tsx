import Link from "next/link";
import styles from "./styles.module.css"

const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Characters",
        path: "/characters"
    },
    {
        name: "Locations",
        path: "/locations"
    },
    {
        name: "Users",
        path: "/users"
    }
]

type Props = {};
const Header = (props: Props) => {
    return (
        <nav>
            <ul className={styles.navbar}>
                {
                    routes.map((route, i) => {
                        return (
                            <li key={i} className={styles.link}>
                                <Link href={route.path}>{route.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};
export default Header;
