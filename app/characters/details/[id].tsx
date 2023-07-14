/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/page.module.css";
import Link from "next/link";

export default function Details(id: number) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json`
      );
      const pokemons = await resp.json();
      const selectedPokemon = pokemons.find((p: { id: number; }) => p.id === id);
      setPokemon(selectedPokemon);
    }
    getPokemon();
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <nav className={styles.navbar}>
        <Link legacyBehavior href="/">
          <a className={styles.fancy}>
            <span className={styles.topkey}></span>
            <span className={styles.text}>Home</span>
            <span className={styles.bottomkey1}></span>
            <span className={styles.bottomkey2}></span>
          </a>
        </Link>
      </nav>
      <div className={styles.main}>
        <h1>{pokemon.name}</h1>
        <img
          src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
          alt={pokemon.name}
        />
        <ul>
          <li>ID: {pokemon.id}</li>
          <li>Type: {pokemon.type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Special Attack: {pokemon.specialAttack}</li>
          <li>Special Defense: {pokemon.specialDefense}</li>
          <li>Speed: {pokemon.speed}</li>
        </ul>
      </div>
    </div>
  );
}
