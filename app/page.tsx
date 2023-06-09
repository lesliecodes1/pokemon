import styles from "../styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Pokemon World</h1>
      <>
        <Link href="./characters">Characters</Link>
      </>
    </main>
  );
}
