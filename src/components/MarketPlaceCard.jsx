import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import "../styles/marketplace.css";
import MarketplaceItems from "./MarketPlaceItems";
import { Pagination } from "antd"; // Import Pagination from Ant Design

function MarketplaceCard(props) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const pageSize = 9; // Number of items per page
  const [isLoading, setIsLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    firebase
      .listAllMarketplaceItems()
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
      <ul className="cards">
        {items.slice(startIndex, endIndex).map((item, index) => (
          <MarketplaceItems key={index} {...item} />
        ))}
      </ul>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={items.length}
        onChange={handlePageChange}
        showSizeChanger={false} 
        showQuickJumper={true} 
        style={{marginBottom:"2vh" , display:"flex" ,justifyContent:"center"}}
      />
    </div>
  );
}

export default MarketplaceCard;
