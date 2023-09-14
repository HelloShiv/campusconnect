import React, { useEffect, useState } from "react";
import CardItems from "./CardItems";
import { useFirebase } from "../context/Firebase";
import "../styles/card.css";
import { Pagination, Spin, Input } from "antd";
import LostPopUp from "../components/LostPopUp";

function Card() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredItems = items.filter((item) =>
    // Filter based on multiple fields
    item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.phoneNumber.includes(searchQuery) ||
    item.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="main">
      <div className="search-bar">
        <Input
          placeholder="Search by Product Name, Category, Phone Number, or User Email"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="new-searchbar"
          style={{marginTop:"10vh"}}
        />
      </div>
      <LostPopUp />
      
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
          <ul className="cards">
            {filteredItems.slice(startIndex, endIndex).map((item, index) => (
              <CardItems key={index} {...item} />
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
              display: "flex",
              justifyContent: "center",
              paddingBottom: "2vh",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
