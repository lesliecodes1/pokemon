/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/details.module.css";

export default function Details() {
  const {
    query: { id },
  } = useRouter();

  const [pokemon, setPokemon] = useState<
    Array<{
      type: any;
      stats: any;
      id: number;
      name: string;
      image: string;
    }>
  >([]);

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      const data = await resp.json();
      setPokemon(data);
    }
    if (id) {
      getPokemon();
    }
  }, [id]);

  if (!pokemon || pokemon.length === 0) {
    return null;
  }

  const currentPokemon = pokemon[0];

  return (
    <div>
      <div>
        <title>{currentPokemon.name}</title>
      </div>
      <div className={styles.layout}>
        <div>
          <img
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${currentPokemon.image}`}
            alt={currentPokemon.name}
          />
        </div>
      </div>
      <div>
        <div className={styles.name}>{currentPokemon.name}</div>
        <div className={styles.type}>{currentPokemon.type.join(", ")}</div>
        <table>
          <thead className={styles.header}>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {currentPokemon.stats.map(
              ({ name, value }: { name: string; value: string }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
