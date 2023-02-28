import React from "react";
import styles from "./Card.module.scss";
import Normal from "../../assets/img/pokemonTypes/Normal.ico";
import TypeIcon from "./TypeIcon/TypeIcon";

export default function Card({ data }) {
  return (
    <div className={styles.insideContainer}>
      <div id={styles.content}>
        <div className={styles.pokeHeader}>
          <h1>{data.name}</h1>
          <div className={styles.hpAndType}>
            <h1 className={styles.hpValue}>{data.hp}HP</h1>
            <TypeIcon name={data.type} size="35px" />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img src={data.img} alt="" />
        </div>

        <div className={styles.description}>

          <div id={styles.powerContainer}>
            <div id={styles.powerContent}>
              <h2 id={styles.powerName}>
                {data.powerName}
              </h2>
              <p>{data.powerEffect}</p>
            </div>
          </div>

          <div id={styles.attackContainer}>
            <div className={styles.attackHeader}>
              <h2>{data.attackName}</h2>
              <p>
                {data.attackEffect}
              </p>
            </div>
            <h2 id={styles.attackValue}>{data.atk}</h2>
          </div>

          <div className={styles.retreat}>
            <span>
              <p>Double Damage:</p>
            </span>
            <div className={styles.powerTypeIconsContainer}>
              {data.doubleDamage && data.doubleDamage.length > 0 ? (
                data.doubleDamage.map((type) => (
                  <TypeIcon name={type} size="25px" key={type} />
                ))
              ) : (
                <p>None</p>
              )}
            </div>
          </div>

          <div className={styles.powerRelations}>
            <div className={styles.relation}>
              <p className={styles.descriptionEffect}>weakness</p>
              <div className={styles.relationData}>
                {data.weakness ? (
                  <>
                    <TypeIcon name={data.weakness} size="35px" />
                    <span>X2</span>
                  </>
                ) : (
                  <span>NONE</span>
                )}
              </div>
            </div>
            <div className={styles.relation}>
              <p className={styles.descriptionEffect}>resistance</p>
              <div className={styles.relationData}>
                {data.resistance ? (
                  <>
                    <TypeIcon name={data.resistance} size="35px" />
                    <span>X2</span>
                  </>
                ) : (
                  <span>NONE</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
