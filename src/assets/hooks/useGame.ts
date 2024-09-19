import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number
}



const useGame = (selectedGenres: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenres?.id}}, [selectedGenres?.id])

export default useGame