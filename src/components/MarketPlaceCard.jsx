import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import "../styles/marketplace.css";
import MarketplaceItems from "./MarketPlaceItems";
import { Pagination, Spin, Input } from "antd"; // Import Pagination and Spin from Ant Design
import MarketPlacePopUp from "../components/MarketPlacePopUp"

function MarketplaceCard(props) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state
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

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

// Filter items based on the search query
const filteredItems = items.filter((item) => {
  const lowerCaseQuery = searchQuery.toLowerCase();
  
  // Check if the search query is "donate" and item amount is 0
  if (lowerCaseQuery === 'donate' && item.amount === 0) {
    return true;
  }
  
  return (
    item.productName.toLowerCase().includes(lowerCaseQuery) ||
    item.phoneNumber.includes(searchQuery) ||
    (item.amount !== undefined && item.amount.toString().includes(searchQuery)) ||
    item.userEmail.toLowerCase().includes(lowerCaseQuery)
  );
});



  // Calculate the start and end index based on currentPage and pageSize
  const pageSize = 9; // Number of items per page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="main">
      {isLoading ? (
        <Spin
          size="large"
          tip="Loading..."
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        />
      ) : (
        <div>
          <Input
            className="new-searchbar"
            placeholder="Search by product name, phone number, or email"
            onChange={handleSearchInputChange}
            style={{ marginTop:"10vh"}}
          />
          <MarketPlacePopUp />
          <ul className="cards">
            {filteredItems.slice(startIndex, endIndex).map((item, index) => (
              <MarketplaceItems key={index} {...item} />
            ))}
          </ul>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredItems.length}
            onChange={handlePageChange}
            showSizeChanger={false}
            showQuickJumper={true}
            style={{
              marginBottom: "2vh",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MarketplaceCard;
