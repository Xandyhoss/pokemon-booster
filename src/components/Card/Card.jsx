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
export default function Card({ data }) {
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
            <span className={styles.hpValue}>{data.hp ? data.hp : "00"}HP</span>
            <TypeIcon name={data ? data.type : Normal} size="35px" />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img src={data.img} alt="" id={styles.pokeImg} />
        </div>

        <div className={styles.description}>
          
          <div id={styles.powerContainer}>
            <h2 id={styles.powerName}>
              {data.powerName ? data.powerName : "Power Name"}
            </h2>
            <p className={styles.descriptionEffect}>
              {data.powerEffect ? data.powerEffect : defaultPowerEffect}
            </p>
          </div>

          {/* <span id={styles.hr} /> */}

          <div id={styles.attackContainer}>
            <div className={styles.attackHeader}>
              <h2 id={styles.attackName}>
                {data.attackName ? data.attackName : "Attack Name"}
              </h2>
            <p className={styles.descriptionEffect}>
              {data.attackEffect ? data.attackEffect : defaultAttackEffect}
            </p>
            </div>
              <h2 id={styles.attackValue}>{data ? data.atk : "00"}</h2>
          </div>

          {/* <span id={styles.hr} /> */}

          <div className={styles.retreat}>
            <span className={styles.descriptionEffec}>Double Damage:</span>
              <div className={styles.powerTypeIconsContainer}>
                {(data.doubleDamage && data.doubleDamage.length > 0) ?
                  data.doubleDamage.map((type) => (
                    <TypeIcon name={type} size="25px" key={type}/>
                  )) : <p className={styles.descriptionEffect}>None</p>}
              </div>
          </div>
          {/* <span id={styles.hr} /> */}

          <div className={styles.powerRelations}>
            <div className={styles.relation}>
              <p className={styles.descriptionEffect}>weakness</p>
              <div className={styles.relationData}>
                {data.weakness ? 
                <><TypeIcon name={data.weakness} size="35px" /><span>X2</span></> : <span>NONE</span>
                }
              </div>
            </div>
            <div className={styles.relation}>
              <p className={styles.descriptionEffect}>resistance</p>
              <div className={styles.relationData}>
              {data.resistance ? 
                <><TypeIcon name={data.resistance} size="35px" /><span>X2</span></> : <span>NONE</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
