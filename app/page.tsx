import styles from "./page.module.css"
import Image from "next/image";
import {getSession} from '@auth0/nextjs-auth0';

async function Home() {
    const session = await getSession();
    return (
        <main className={styles.container}>
            <Image src={"/assets/images/hero-section.png"} alt={"hero"} width={600} height={600}/>

            <h1>Welcome {session?.user.name}</h1>
            <a href="/api/auth/logout">Logout</a>
            <h1 className={styles.title}>Rick & Morty Next App</h1>
        </main>
    )
}

export default Home
