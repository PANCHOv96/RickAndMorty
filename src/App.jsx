import './App.css'
import { useCallback, useState } from 'react';
import useCharacters from './hooks/useCharacters';
import Characters from './components/characters'
import debounce from "just-debounce-it";

function App() {
  const [search,setSearch] = useState('')
  const {characters , getCharacters} = useCharacters()
  
  const debounceSearch = useCallback(
      debounce(search => getCharacters(search), 300)
  ,[])

  function handleSubmit(e){
    e.preventDefault();
    getCharacters(search)
  }

  function handleChange(e){
    let newSearch = e.target.value;
    setSearch(newSearch) 
    debounceSearch(newSearch)
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500">
        RICK AND MORTY
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={search}/>
        <input type="submit" value='Search'/>
      </form>
      {(!characters.error && characters) && <Characters characters={characters}/>}
      {characters.error && <>
        {characters.error}
      </>}
    </>
  )
}

export default App
