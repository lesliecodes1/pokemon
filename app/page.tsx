import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Pokemon World</h1>
      <div className={styles.bar}>
        <div className={styles.ball}></div>
      </div>
      <a className={styles.fancy} href="./characters">
        <span className={styles.topkey}></span>
        <span className={styles.text}>Characters</span>
        <span className={styles.bottomkey1}></span>
        <span className={styles.bottomkey2}></span>
      </a>
    </main>
  );
}
