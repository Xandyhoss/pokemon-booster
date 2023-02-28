import styled from "styled-components";
import backgroundImage from "./assets/img/background.jpg";
// import Card from "./components/Card/Card";
import Card from './components/Card/Card.jsx'
import { useCallback, useEffect, useState } from "react";
import { requestPokemon } from "./services/pokemonServices";

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
  const [pokeData, setPokeData] = useState({});

  const getPokemonById = useCallback(async (id) => {
    try {
      const response = await requestPokemon(id)
      setPokeData(response)
      return response
    } catch (error) {
      console.log("erro: ", error)
    }
  }, [])

  useEffect(() => {
    getPokemonById(12)
  }, [])

  return (
    <AppWrapper>
      POKEMON.API
      {pokeData.atk ? <Card data={pokeData}/> : 0} 
      
    {/* Tive que fazer essa verificação pq o elemento card nao estava esperando a função*/}

      <div className="overlay" />
      <img src={backgroundImage} alt="" className="backgroundImg" />
    </AppWrapper>
  );
}

export default App;
