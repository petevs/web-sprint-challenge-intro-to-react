import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

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
      <h1 className="Header">Characters</h1>
      <div>
            {characters.map((character) => {
                return <Character key={character.name} name={character.name} height={character.height} mass={character.mass} />
            })}
            </div>
    </div>
  );
}

export default App;
