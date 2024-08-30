import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { CanceledError } from "axios";

interface Game {
    id: number,
    name: string
}

interface FetchGameRespose {
    count: number,
    results: Game[]
}

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
  
    useEffect(() => {

       const controller = new AbortController(); 
      clientApi.get<FetchGameRespose>('/games', {signal: controller.signal})
              .then(res => setGames(res.data.results))
              .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message)
    })
    return () => controller.abort()
    }, [])
    return {games, error}
}

export default useGame