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
  const [pokeData, setPokeData] = useState({});
  const pokeInfos = {};

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function getRandomInt(roof) {
    return parseInt(Math.random() * roof);
  }

  function grabPoke(id) {
    return new Promise((resolve, reject) => {
      console.log("%c INICIANDO 1ª", "color: green; font-weight: bold");
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((out) => {
          console.log("Pokemon: ", out);
          pokeInfos.name = capitalize(out.name);
          pokeInfos.type = capitalize(out.types[0].type.name);
          pokeInfos.img = out.sprites.other.home.front_default;
          pokeInfos.hp = out.stats[0].base_stat;
          pokeInfos.atk = out.stats[1].base_stat;
          pokeInfos.typeUrl = out.types[0].type.url;
          console.log("%c FINALIZANDO 1ª", "color: green; font-weight: bold");
          resolve(out);
        });
    });
  }

  function givePowerStats(url1, url2) {
    return new Promise((resolve, reject) => {
      console.log("%c INICIANDO 2ª", "color: green; font-weight: bold");
      fetch(url1)
        .then((response) => response.json())
        .then((out) => {
          console.log("Power: ", out);
          pokeInfos.powerName = capitalize(out.name);
          pokeInfos.powerEffect = out.effect_entries[1].short_effect;
        });
      fetch(url2)
        .then((response) => response.json())
        .then((out) => {
          console.log("Attack: ", out);
          pokeInfos.attackName = capitalize(out.name);
          pokeInfos.attackEffect = out.effect_entries[1].short_effect;
          console.log("%c FINALIZANDO 2ª", "color: green; font-weight: bold");
          resolve(out);
        });
    });
  }

  function getTypeInfos(url) {
    return new Promise((resolve, reject) => {
      console.log("%c INICIANDO 3ª", "color: green; font-weight: bold");
      fetch(url)
        .then((response) => response.json())
        .then((out) => {
          console.log("TypeInfos: ", out.damage_relations);
          const lengthWeak = out.damage_relations.double_damage_from.length;
          const lengthResistance = out.damage_relations.half_damage_from.length;

            out.damage_relations.double_damage_from[0] ? pokeInfos.weakness = capitalize(
            out.damage_relations.double_damage_from[
              getRandomInt(lengthWeak - 1)
            ].name
          ) : console.log("Weakness = None")
          
          out.damage_relations.half_damage_from[0] ? pokeInfos.resistance = capitalize(
            out.damage_relations.half_damage_from[
              getRandomInt(lengthWeak - 1)
            ].name
            ) : console.log("Resistance = None")

          pokeInfos.doubleDamage = out.damage_relations.double_damage_to.map(
            (e) => capitalize(e.name)
          );
          console.log("%c FINALIZANDO 3ª", "color: green; font-weight: bold");
          resolve(out);
        });
    });
  }

  useEffect(() => {
    grabPoke("399")
      .then((out) =>
        givePowerStats(
          out.abilities[0].ability.url,
          out.abilities[1].ability.url
        )
      )
      .then(() => getTypeInfos(pokeInfos.typeUrl))
      .then(() => setPokeData(pokeInfos))
      .then(() => console.log(pokeInfos))
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
