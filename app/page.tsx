/* eslint-disable react/no-unescaped-entities */
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
      <section>
        Welcome to the captivating world of Pokémon! Prepare to embark on an
        extraordinary journey filled with adventure, friendship, and thrilling
        battles. At our Pokémon website, we bring you all the latest news, tips,
        and insights about the fascinating Pokémon universe. Discover a treasure
        trove of information about your favorite Pokémon species. From Pikachu's
        electrifying powers to Charizard's blazing flames, we delve into the
        unique abilities, characteristics, and evolutions of each Pokémon.
        Uncover their hidden secrets, learn how to train them effectively, and
        become a true Pokémon Master.
      </section>
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
      <section>
        Are you ready to become part of a vibrant community of trainers? Join
        our forums and connect with fellow Pokémon enthusiasts from around the
        world. Share your strategies, exchange rare Pokémon, and engage in
        lively discussions about the latest games, episodes, and movies. From
        nostalgic veterans to curious newcomers, everyone is welcome to share
        their love for these incredible creatures. Whether you're a fan of the
        Pokémon games, the animated series, the trading card game, or all of the
        above, our website is your one-stop destination for all things Pokémon.
        Prepare to embark on an extraordinary adventure, make lifelong friends,
        and experience the magic that has captured the hearts of millions of
        trainers worldwide.
      </section>
    </main>
  );
}
