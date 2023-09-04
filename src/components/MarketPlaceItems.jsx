import React from "react";
import "../styles/marketplace.css"


function MarketPlaceItems(props){
    return(
        <li className="cards_item">
        <div className="card">
        <div className="product_image"><img src={props.src} className="product_photo"/></div>
        <div className="product_content">
          <h2 className="card_title">{props.card_title}</h2>
          <p className="card_text">{props.card_text}</p>
        </div>
      </div>
    </li>
    );
}


export default MarketPlaceItems;