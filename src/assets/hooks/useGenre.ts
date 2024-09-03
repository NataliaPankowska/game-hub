
import useData from "./useData";


 export interface Genre {
    id: number,
    name: string
}


const getGenres = () => useData<Genre>('/genres');
    

export default getGenres;