import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return <div>Pokemon {params.id}</div>;
}

export async function generateStaticParams() {
  const xter = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json"
  ).then((res) => res.json());

  return xter.map((xter: { id: any }) => ({
    id: xter.id,
  }));
}
