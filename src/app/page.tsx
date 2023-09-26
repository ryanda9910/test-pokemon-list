"use client";
import axios, { AxiosResponse } from "axios";
import Pokemon, { PokemonItem } from "./components/Pokemon";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  const LIMIT = 10;
  const [currPage, setCurrPage] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [prevPage, setPrevPage] = useState(0);
  const [wasLastList, setWasLastList] = useState(false);
  const listInnerRef = useRef(null);

  const getData = async () => {
    const response = await axios.get(
      `${BASE_URL}?limit=${LIMIT}&offset${currPage}`
    );
    if (!response.data.results.length) {
      setWasLastList(true);
      return;
    }
    setPrevPage(currPage);
    setPokemonList([...pokemonList, ...response.data.results]);
  };

  useEffect(() => {
    if (!wasLastList && prevPage !== currPage) {
      getData();
    }
  }, [currPage, wasLastList, prevPage, pokemonList]);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };
  return (
    <div onScroll={onScroll} ref={listInnerRef}>
      {pokemonList.map((item: PokemonItem, index: number) => (
        <Pokemon key={index} dataKey={index + 1} data={item} />
      ))}
    </div>
  );
}
