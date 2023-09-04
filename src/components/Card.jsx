import React from "react";
import CardItems from "./CardItems";
import "../styles/card.css";

function Card(){
return (<div className="main">

<ul className="cards">
  <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
   <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
   <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
    <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
   <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
   <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
    <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
   <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>
   <CardItems  src={"https://picsum.photos/500/300"} 
        card_title={"Card Grid Layout"} card_text={"Product lost details should be provided here extra information" }/>

</ul>
</div>
);
}

export default Card;