import React, { useEffect, useState } from "react";
import CardItems from "./CardItems";
import { useFirebase } from "../context/Firebase";
import "../styles/card.css";
import { Pagination, Spin } from "antd"; // Import Pagination and Spin from Ant Design

function Card() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const pageSize = 9; // Number of items per page
  const [isLoading, setIsLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    firebase
      .listAllLostAndFoundItems()
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

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end index based on currentPage and pageSize
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="main">
      {isLoading ? (
        <Spin size="large" tip="Loading..." style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }} />
      ) : (
        <div>
          <ul className="cards">
            {items.slice(startIndex, endIndex).map((item, index) => (
              <CardItems key={index} {...item} />
            ))}
          </ul>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={items.length}
            onChange={handlePageChange}
            showSizeChanger={false}
            showQuickJumper={true}
            style={{ display: "flex", justifyContent: "center", paddingBottom: "2vh" }}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
