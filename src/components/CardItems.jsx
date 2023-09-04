import React from "react";

function CardItems(props){
    return(
        <li className="cards_item">
        <div className="card">
        <div className="card_image"><img src={props.src} className="card_photo"/></div>
        <div className="card_content">
          <h2 className="card_title">{props.card_title}</h2>
          <p className="card_text">{props.card_text}</p>
        </div>
      </div>
    </li>
    );
}

export default CardItems;