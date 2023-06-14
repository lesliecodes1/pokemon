import styles from "../styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Pokemon World</h1>
      <div className={styles.bar}>
        <div className={styles.ball}></div>
      </div>
      <Link legacyBehavior href="/characters">
        <a className={styles.fancy}>
          <span className={styles.topkey}></span>
          <span className={styles.text}>Characters</span>
          <span className={styles.bottomkey1}></span>
          <span className={styles.bottomkey2}></span>
        </a>
      </Link>
    </main>
  );
}
