import { useEffect, useRef, useState ,useCallback} from "react"
import Api from "../services/api";

export default function useCharacters(){
    const [characters,setCharacters] = useState('');
    const previousSearch = useRef(null)

    const getCharacters = useCallback((search='')=>{
        if (previousSearch.current == search) return
        previousSearch.current = search
        Api({name:search}).then(result=>{
            setCharacters(result)
        })
    },[])

    useEffect(()=>{
        getCharacters();
    },[])

    return { characters , getCharacters}
}