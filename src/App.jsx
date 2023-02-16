import styled from "styled-components";
import { Text } from "./components/Text/Text";
import backgroundImage from "./assets/img/background.jpg";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .overlay {
    background-color: var(--green);
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -998;
  }

  .backgroundImg {
    height: 100%;
    position: absolute;
    z-index: -999;
    filter: blur(1px);
    scale: 1.05;
  }
`;

function App() {

  const [pokeData, setPokeData] = useState({})

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  function grabPoke(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Please make sure the Pokémon name or ID is typed correctly.");
      }
    })
    .then((out) => {
      console.log(out)
      console.log("Alou:  ",out.stats)
      setPokeData({
        name: capitalize(out.name),
        type: capitalize(out.types[0].type.name),
        hp: out.stats[0].base_stat
      })
    })
  }

  useEffect(() => grabPoke("25"),[])

  return (
    <AppWrapper>
      POKEMON.API
      <Card data={pokeData}/>
      <div className="overlay" />
      <img src={backgroundImage} alt="" className="backgroundImg" />
    </AppWrapper>
  );
}

export default App;
