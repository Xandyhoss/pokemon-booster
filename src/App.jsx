import styled from "styled-components";
import backgroundImage from "./assets/img/background.jpg";
import Card from "./components/Card/Card";
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
  const pokeInfos = {};

  // Refatorar pra pasta utils
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Refatorar pra pasta utils
  function getRandomInt(roof) {
    return parseInt(Math.random() * roof);
  }

  const getPokemonById = useCallback(async (id) => {
    try {
      const response = await requestPokemon(id)
      return response;
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getPokemonById(149)
  }, [])

  function grabPoke(id) {
    return new Promise((resolve, reject) => {
      console.log("%c INICIANDO 1ª", "color: green; font-weight: bold");
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Pokemon: ", data);
          pokeInfos.name = capitalize(data.name);
          pokeInfos.type = capitalize(data.types[0].type.name);
          pokeInfos.img = data.sprites.other.home.front_default;
          pokeInfos.hp = data.stats[0].base_stat;
          pokeInfos.atk = data.stats[1].base_stat;
          pokeInfos.typeUrl = data.types[0].type.url;
          console.log("%c FINALIZANDO 1ª", "color: green; font-weight: bold");
          resolve(data);
        });
    });
  }

  function givePowerStats(url) {
    return new Promise((resolve, reject) => {
      console.log("%c INICIANDO 2ª", "color: green; font-weight: bold");
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("Power: ", data);
          console.log("%c FINALIZANDO 2ª", "color: green; font-weight: bold");
          resolve({
            name: capitalize(data.name),
            effect: data.effect_entries[1].short_effect,
          });
        });
    });
  }

  function getTypeInfos(url) {
    return new Promise((resolve, reject) => {
      console.log("%c INICIANDO 3ª", "color: green; font-weight: bold");
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("TypeInfos: ", data.damage_relations);
          const lengthWeak = data.damage_relations.double_damage_from.length;

          data.damage_relations.double_damage_from[0]
            ? (pokeInfos.weakness = capitalize(
              data.damage_relations.double_damage_from[
                getRandomInt(lengthWeak - 1)
              ].name
            ))
            : console.log("Weakness = None");

          data.damage_relations.half_damage_from[0]
            ? (pokeInfos.resistance = capitalize(
              data.damage_relations.half_damage_from[
                getRandomInt(lengthWeak - 1)
              ].name
            ))
            : console.log("Resistance = None");

          pokeInfos.doubleDamage = data.damage_relations.double_damage_to.map(
            (e) => capitalize(e.name)
          );
          console.log("%c FINALIZANDO 3ª", "color: green; font-weight: bold");
          resolve(data);
        });
    });
  }

  useEffect(() => {
    grabPoke("149")
      .then((data) => {
        givePowerStats(data.abilities[0].ability.url).then((obj) => {
          pokeInfos.powerName = obj.name;
          pokeInfos.powerEffect = obj.effect;
        });
        return data;
      })
      .then((data) => {
        data.abilities[1] &&
          givePowerStats(data.abilities[1].ability.url).then((obj) => {
            pokeInfos.attackName = obj.name;
            pokeInfos.attackEffect = obj.effect;
          });
      })
      .then(() => getTypeInfos(pokeInfos.typeUrl))
      .then(() => setPokeData(pokeInfos))
      .then(() => console.log(pokeInfos));
  }, []);

  return (
    <AppWrapper>
      POKEMON.API
      <Card data={pokeData} />
      {/* <div style={{ position: "absolute", bottom: 0, left: 0 }}>
        {Object.entries(pokeData).map((entrie) => (
          <h2 key={entrie}>
            {entrie[0]}: {entrie[1]}
          </h2>
        ))}
      </div> */}
      <div className="overlay" />
      <img src={backgroundImage} alt="" className="backgroundImg" />
    </AppWrapper>
  );
}

export default App;
