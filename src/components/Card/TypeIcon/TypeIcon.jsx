import React from "react";

import Ghost from "../../../assets/img/pokemonTypes/Ghost.ico";
import Bug from "../../../assets/img/pokemonTypes/Bug.ico";
import Dark from "../../../assets/img/pokemonTypes/Dark.ico";
import Dragon from "../../../assets/img/pokemonTypes/Dragon.ico";
import Electric from "../../../assets/img/pokemonTypes/Electric.ico";
import Fairy from "../../../assets/img/pokemonTypes/Fairy.ico";
import Fighting from "../../../assets/img/pokemonTypes/Fighting.ico";
import Fire from "../../../assets/img/pokemonTypes/Fire.ico";
import Flying from "../../../assets/img/pokemonTypes/Flying.ico";
import Grass from "../../../assets/img/pokemonTypes/Grass.ico";
import Ground from "../../../assets/img/pokemonTypes/Ground.ico";
import Ice from "../../../assets/img/pokemonTypes/Ice.ico";
import Normal from "../../../assets/img/pokemonTypes/Normal.ico";
import Poison from "../../../assets/img/pokemonTypes/Poison.ico";
import Psychic from "../../../assets/img/pokemonTypes/Psychic.ico";
import Rock from "../../../assets/img/pokemonTypes/Rock.ico";
import Steel from "../../../assets/img/pokemonTypes/Steel.ico";
import Water from "../../../assets/img/pokemonTypes/Water.ico";

export default function TypeIcon({ name, size }) {
  const icons = [
    Ghost,
    Bug,
    Dark,
    Dragon,
    Electric,
    Fairy,
    Fighting,
    Fire,
    Flying,
    Grass,
    Ground,
    Ice,
    Normal,
    Poison,
    Psychic,
    Rock,
    Steel,
    Water,
  ];

  let type
  icons.forEach((icon) => {
    if (icon.toString().includes(name)) {
        // console.log(icon)
        type = icon
    }

})


  const style = {
    width: size,
    height: size,
    borderRadius: "50%",
    boxShadow: "2px 2px 4px 0.2px rgba(0,0,0,0.75)",
    zIndex: "999",
  };

  return (
    <>
      <img src={type} alt="" style={style} />
    </>
  );
}
