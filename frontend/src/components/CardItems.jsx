import React from "react";

function CardItems(props){
    return(
        <li class="cards_item">
        <div class="card">
        <div class="card_image"><img src={props.src} class="card_photo"/></div>
        <div class="card_content">
          <h2 class="card_title">{props.card_title}</h2>
          <p class="card_text">{props.card_text}</p>
        </div>
      </div>
    </li>
    );
}

export default CardItems;