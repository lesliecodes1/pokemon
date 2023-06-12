/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/characters.module.css";
import Link from "next/link";

export default function Characters() {
  const [pokemon, setPokemon] = useState([]);

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
    <div className={styles.container}>
      <div className={styles.eight}>
        <h1>Explore your Character!</h1>
      </div>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link legacyBehavior href={`/details/${pokemon.id}`}>
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
    </div>
  );
}
