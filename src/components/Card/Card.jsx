import React from "react";
import styles from "./Card.module.scss";
import TypeIcon from "./TypeIcon/TypeIcon";
import capitalize from "../../utils/capitalize";
import getRandomNumber from "../../utils/getRandomNumber";

export default function Card({ data }) {
  const weaknessIconIndex = getRandomNumber(data.typeInfos.weakness.length - 1)
  const resistanceIconIndex = getRandomNumber(data.typeInfos.resistance.length - 1)

  return (
    <div className={styles.insideContainer}>
      <div id={styles.content}>
        <div className={styles.pokeHeader}>
          <h1>{capitalize(data.name)}</h1>
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
                {capitalize(data.powers[0].name)}
              </h2>
              <p>{capitalize(data.powers[0].effect)}</p>
            </div>
          </div>

          <div id={styles.attackContainer}>
            <div className={styles.attackHeader}>
              <h2>{capitalize(data.powers[1].name)}</h2>
              <p>
                {capitalize(data.powers[1].effect)}
              </p>
            </div>
            <h2 id={styles.attackValue}>{data.atk}</h2>
          </div>

          <div className={styles.retreat}>
            <span>
              <p>Double Damage:</p>
            </span>
            <div className={styles.powerTypeIconsContainer}>
              {data.typeInfos.doubleDamage && data.typeInfos.doubleDamage.length > 0 ? (
                data.typeInfos.doubleDamage.map((type) => (
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
                {data.typeInfos.weakness ? (
                  <>
                    <TypeIcon name={data.typeInfos.weakness[weaknessIconIndex]} size="35px" />
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
                {data.typeInfos.resistance ? (
                  <>
                    <TypeIcon name={data.typeInfos.resistance[resistanceIconIndex]} size="35px" />
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
