/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const CharacterPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<
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
  const router = useRouter();
  const { id } = router.query;
  const selectedPokemon = pokemon.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>Character Page - ID: {id}</h1>
      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.image} alt={selectedPokemon.name} />
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
