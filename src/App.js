import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'
import FilmsFilter from './components/FilmsFilter'

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])

  const [filmFilter, setFilmFilter] = useState("")

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(({data})=> {
      const dataResults = data.results

      if(filmFilter === ""){
        setCharacters(dataResults)
      } 
      
      else {
        setCharacters(dataResults.filter(character => character.films.includes(filmFilter)))
      }

      console.log(data.results)})
    },[filmFilter]);


   //Handle change of film filter
   const handleFilmFilter = event => {
    setFilmFilter(event.target.value)
  }
 

  return (
    <div className="App">
      <Headline>STAR WARS CHARACTERS</Headline>
      <FilmsFilter handleFilmFilter={handleFilmFilter} filmFilter={filmFilter} />
      <CharactersBox>
            {characters.map((character) => {
                return <Character key={character.name} name={character.name} height={character.height} mass={character.mass} born={character.birth_year
                } />
            })}
            </CharactersBox>
    </div>
  );
}

const CharactersBox = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr);
    justify-content: center;
`

const Headline = styled.h1`
font-size: 4.5rem;
font-family: 'Poller One';
text-transform: uppercase;
padding: 2rem;
color: #fff;
text-shadow: 0px 2px 10px rgba(0,0,0,0.3);
`


export default App;
