"use client";

//import Head from "next/head";
import styles from "../styles/characters.module.css";
import React, { useState, useEffect } from "react";

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
    <div>
      <h1>Explore your character!</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}
