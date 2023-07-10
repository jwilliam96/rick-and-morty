import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style/residentCard.css";

const ResidentCard = ({ url }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="resident">
      <header className="resident-header">
        <img className="resident-img" src={character?.image} alt="" />
        <div className="resident-div-status">
          <div className={`resident-status-circle ${character?.status} `}></div>
          <span>{character?.status}</span>
        </div>
      </header>
      <section className="resident-body">
        <h3 className="resident-name">{character?.name}</h3>
        <hr className="resident-hr" />
        <ul className="resident-ul-list">
          <li className="resident-li-item">
            <span className="resident-span-title">Specie: </span>
            <span className="resident-span-value">{character?.species}</span>
          </li>
          <li className="resident-li-item">
            <span className="resident-span-title">Origin: </span>
            <span className="resident-span-value">
              {character?.origin.name}
            </span>
          </li>
          <li className="resident-li-item">
            <span className="resident-span-title">Episodes where appear: </span>
            <span className="resident-span-value">
              {character?.episode.length}
            </span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
