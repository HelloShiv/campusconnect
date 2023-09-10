import React , {useState,useEffect}from "react";
import { useFirebase } from "../context/Firebase";

function MarketPlaceItems(props){
  const firebase = useFirebase();
  const [url , setURL]  = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then(url => setURL(url));
  })
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src={url} className="card_photo" /></div>
        <div className="card_content">
          <h2 className="card_title">{props.productName}</h2>
          {props.Amount === "0" ? (
            <h2 className="card_title">For Donation</h2>
          ) : (
            <h2 className="card_title">Amount: Rs. {props.Amount}</h2>
          )}
          <h2 className="card_title">Contact: {props.phoneNumber}</h2>
          <h2 className="card_text">{props.description}</h2>
        </div>
      </div>
    </li>
  );
}

export default MarketPlaceItems;