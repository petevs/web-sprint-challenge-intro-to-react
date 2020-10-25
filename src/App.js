import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(({data})=> {
      const dataResults = data.results
      setCharacters(dataResults)
      console.log(data.results)})
    },[]);


  return (
    <div className="App">
      <Headline>STAR WARS CHARACTERS</Headline>
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
color: #fff
`


export default App;
