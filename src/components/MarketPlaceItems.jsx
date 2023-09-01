import React from "react";
import "../styles/marketplace.css"


function MarketPlaceItems(props){
    return(
        <li class="cards_item">
        <div class="card">
        <div class="product_image"><img src={props.src} class="product_photo"/></div>
        <div class="card_content">
          <h2 class="card_title">{props.card_title}</h2>
          <p class="card_text">{props.card_text}</p>
        </div>
      </div>
    </li>
    );
}


export default MarketPlaceItems;