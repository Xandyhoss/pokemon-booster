import React from "react";
import styles from "./Card.module.scss";

import Ghost from "../../assets/img/pokemonTypes/Ghost.ico";
import Bug from "../../assets/img/pokemonTypes/Bug.ico";
import Dark from "../../assets/img/pokemonTypes/Dark.ico";
import Dragon from "../../assets/img/pokemonTypes/Dragon.ico";
import Electric from "../../assets/img/pokemonTypes/Electric.ico";
import Fairy from "../../assets/img/pokemonTypes/Fairy.ico";
import Fighting from "../../assets/img/pokemonTypes/Fighting.ico";
import Fire from "../../assets/img/pokemonTypes/Fire.ico";
import Flying from "../../assets/img/pokemonTypes/Flying.ico";
import Grass from "../../assets/img/pokemonTypes/Grass.ico";
import Ground from "../../assets/img/pokemonTypes/Ground.ico";
import Ice from "../../assets/img/pokemonTypes/Ice.ico";
import Normal from "../../assets/img/pokemonTypes/Normal.ico";
import Poison from "../../assets/img/pokemonTypes/Poison.ico";
import Psychic from "../../assets/img/pokemonTypes/Psychic.ico";
import Rock from "../../assets/img/pokemonTypes/Rock.ico";
import Steel from "../../assets/img/pokemonTypes/Steel.ico";
import Water from "../../assets/img/pokemonTypes/Water.ico";

import TypeIcon from "./TypeIcon/TypeIcon";
export default function Card({data}) {
  const defaultPowerEffect =
    "Type the effect of a Pokémon Power here. Adjust size, leading, and placement as needed";
  const defaultAttackEffect =
    "Type the effect of a Pokémon Attack here. Adjust size, leading, and placement as needed";

  return (
    <div className={styles.outsiderContainer}>
      <div className={styles.insideContainer}>
        <div className={styles.pokeHeader}>
          <span className={styles.pokeName}>
            {data.name ? data.name : "Name"}
          </span>
          <div className={styles.hpAndType}>
            <span className={styles.hpValue}>
              {data.hp ? data.hp : "00"}HP
            </span>
            <TypeIcon name={data ? data.type : Normal} size="35px" />
          </div>
        </div>

        <div className={styles.imgContainer}></div>

        <div className={styles.description}>
          <div id={styles.powerContainer}>
            <h3 id={styles.powerName}>
              {data.power ? data.power.name : "Power Name"}
            </h3>
            <p className={styles.descriptionEffect}>
              {data.power ? data.power.effect : defaultPowerEffect}
            </p>
          </div>

          <span id={styles.hr} />

          <div id={styles.attackContainer}>
            <div className={styles.attackHeader}>
              <div className={styles.powerTypeIconsContainer}>
                <TypeIcon name={Normal} size="25px" />
                <TypeIcon name={Normal} size="25px" />
                <TypeIcon name={Normal} size="25px" />
              </div>
              <h3 id={styles.attackName}>
                {data.attack ? data.Attack.name : "Attack Name"}
              </h3>
              <h3 id={styles.attackValue}>
                {data.stats ? data.stats.attack : "00"}
              </h3>
            </div>
            <p className={styles.descriptionEffect}>
              {data.power ? data.power.effect : defaultAttackEffect}
            </p>
          </div>

          <span id={styles.hr} />

          <div className={styles.retreat}>
            <span className={styles.descriptionEffect}>Retreat:</span>
            <div className={styles.powerTypeIconsContainer}>
              <TypeIcon name={Normal} size="25px" />
              <TypeIcon name={Normal} size="25px" />
              <TypeIcon name={Normal} size="25px" />
              <TypeIcon name={Normal} size="25px" />
            </div>
          </div>
          <span id={styles.hr} />

          <div className={styles.powerRelations}>
            <div className={styles.relation}>
              <p className={styles.descriptionEffect}>weakness</p>
              <div className={styles.relationData}>
                <TypeIcon name={Normal} size="35px" />
                <span>X2</span>
              </div>
            </div>
            <div className={styles.relation}>
              <p className={styles.descriptionEffect}>resistance</p>
              <div className={styles.relationData}>
                <TypeIcon name={Normal} size="35px" />
                <span>-20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
