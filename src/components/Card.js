import React from "react";
import data from "./card-detail";

const Card = () => {
  return (
    <div className="cards-container">
      {data.map((cardItem) => (
        <section className="card" id={cardItem.id} key={cardItem.id}>
          <div>
            <h2 className="card-header">{cardItem.name}</h2>
            <p className="card-info">{cardItem.info}</p>
          </div>
          <div>
            <img src={`${cardItem.icon}`} alt={cardItem.alt} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Card;
