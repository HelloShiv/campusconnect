import React from "react";
import CardItems from "./CardItems";
import "../src/css/card/card.css";

function Card(){
return (<div class="main">

<ul class="cards">
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