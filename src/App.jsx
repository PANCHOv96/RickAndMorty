import './App.css'
import { useCallback, useState } from 'react';
import useCharacters from './hooks/useCharacters';
import Characters from './components/characters'
import debounce from "just-debounce-it";
import Error from './components/error';
import Footer from './components/Footer/footer'

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
      <h1 className="text-3xl font-semibold text-green-400 text-center py-5">
        RICK AND MORTY
      </h1>
      <form onSubmit={handleSubmit} className='flex justify-center w-2/4 m-auto gap-1'>
        <input type="text" onChange={handleChange} value={search} className="flex-1 border-0 rounded-lg py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
        <input type="submit" value='Search' className="rounded-md bg-red-200 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 hover:cursor-pointer "/>
      </form>
      {(!characters.error && characters) && <Characters characters={characters}/>}
      {characters.error && <>
        <Error msj={characters.error}/>
      </>}
      <Footer />
    </>
  )
}

export default App
