import React, { useEffect, useState } from "react";
import CardItems from "./CardItems";
import { useFirebase } from "../context/Firebase";
import "../styles/card.css";

function Card() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.listAllLostAndFoundItems()
      .then((querySnapshot) => {
        const itemData = querySnapshot.docs.map((doc) => doc.data());
        setItems(itemData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from Firebase:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="cards">
          {items.map((item, index) => (
            <CardItems key={index} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;
