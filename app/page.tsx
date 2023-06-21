import styles from "../styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <nav className={styles.navbar}>
          <a href="/">
            <h1>
              <span>Hello </span>
              <span>Pokemon </span>
              <span>World</span>
            </h1>
          </a>
        </nav>
      </div>
      <div className={styles.main}>
        <Link legacyBehavior href="/characters">
          <a className={styles.fancy}>
            <span className={styles.topkey}></span>
            <span className={styles.text}>Characters</span>
            <span className={styles.bottomkey1}></span>
            <span className={styles.bottomkey2}></span>
          </a>
        </Link>
      </div>
    </main>
  );
}
