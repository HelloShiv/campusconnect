import React ,{useEffect , useState} from "react";
import CardItems from "./CardItems";
import { useFirebase } from "../context/Firebase";
import "../styles/card.css";

function Card(){
     const [items ,setitems] = useState([]);
     const firebase = useFirebase();
     useEffect(() => {
          firebase.listAllLostAndFoundItems().then((items) => setitems(items.docs));

     }, []);
return (<div className="main">
     
<ul className="cards">  
     {items.map(item => <CardItems {...item.data()}/>) }
  
</ul>
</div>
);
}

export default Card;