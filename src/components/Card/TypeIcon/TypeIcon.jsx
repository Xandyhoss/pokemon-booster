import React from "react";

import ghost from "../../../assets/img/pokemonTypes/ghost.ico";
import bug from "../../../assets/img/pokemonTypes/bug.ico";
import dark from "../../../assets/img/pokemonTypes/dark.ico";
import dragon from "../../../assets/img/pokemonTypes/dragon.ico";
import electric from "../../../assets/img/pokemonTypes/electric.ico";
import fairy from "../../../assets/img/pokemonTypes/fairy.ico";
import fighting from "../../../assets/img/pokemonTypes/fighting.ico";
import fire from "../../../assets/img/pokemonTypes/fire.ico";
import flying from "../../../assets/img/pokemonTypes/flying.ico";
import grass from "../../../assets/img/pokemonTypes/grass.ico";
import ground from "../../../assets/img/pokemonTypes/ground.ico";
import ice from "../../../assets/img/pokemonTypes/ice.ico";
import normal from "../../../assets/img/pokemonTypes/normal.ico";
import poison from "../../../assets/img/pokemonTypes/poison.ico";
import psychic from "../../../assets/img/pokemonTypes/psychic.ico";
import rock from "../../../assets/img/pokemonTypes/rock.ico";
import steel from "../../../assets/img/pokemonTypes/steel.ico";
import water from "../../../assets/img/pokemonTypes/water.ico";
import styled from "styled-components";


const IconImg = styled.img`
width: ${props => props.size};
height: ${props => props.size};
border-radius: 50%;
z-index: 999;
`;

const icons = [
  ghost,
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
];

export default function TypeIcon({ name, size }) {

  const type = icons.find(icon => icon.toString().includes(name))
  return (
    <>
      <IconImg src={type} alt="" size={size} />
    </>
  );
}
