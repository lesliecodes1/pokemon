/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/page.module.css";
import Link from "next/link";

export default function Characters() {
  const [pokemon, setPokemon] = useState<
    Array<{ id: number; name: string; image: string }>
  >([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<
    Array<{ id: number; name: string; image: string }>
  >([]);

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await resp.json());
    }
    getPokemon();
  }, []);

  return (
    <div>
      <nav className={styles.navbar}>
        <input
          placeholder="find character"
          className={styles.input}
          name="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Link legacyBehavior href="/">
          <a className={styles.fancy}>
            <span className={styles.topkey}></span>
            <span className={styles.text}>Return</span>
            <span className={styles.bottomkey1}></span>
            <span className={styles.bottomkey2}></span>
          </a>
        </Link>
      </nav>
      <div className={styles.main}>
        <h1>Explore your Character!</h1>
      </div>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link legacyBehavior href={`../details/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link legacyBehavior href="/">
          <a className={styles.fancy}>
            <span className={styles.topkey}></span>
            <span className={styles.text}>Home</span>
            <span className={styles.bottomkey1}></span>
            <span className={styles.bottomkey2}></span>
          </a>
        </Link>
      </div>
    </div>
  );
}
