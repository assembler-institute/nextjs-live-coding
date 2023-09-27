import styles from "./page.module.css"
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.container}>
            <Image src={"/assets/images/hero-section.png"} alt={"hero"} width={600} height={600}/>
            <h1 className={styles.title}>Rick & Morty Next App</h1>
        </main>
    )
}
