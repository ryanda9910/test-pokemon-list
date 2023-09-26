import Image from "next/image";
import React from "react";


export type PokemonItem = {
  name:string;
  url:string;
}
export type PokemonData ={
  data:PokemonItem
  dataKey:number
}

export default function Pokemon({data,dataKey}:PokemonData) {
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dataKey}.png` 
  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      <div className="w-24 rounded-md bg-green-500">
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h3>{data?.name}</h3>
      </div>
    </div>
  );
}
