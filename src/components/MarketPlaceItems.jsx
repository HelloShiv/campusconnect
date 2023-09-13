import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { Button, message, Popconfirm } from 'antd';
import { DeleteFilled, PhoneFilled } from '@ant-design/icons';

function MarketPlaceItems(props) {
  const firebase = useFirebase();
  const [url, setURL] = useState(null);

  const confirm = async () => {
    if (props.userID === firebase.userUID) {
      try {
        await firebase.deleteItem(props.itemId);
        message.success("Item deleted successfully");
      } catch (error) {
        console.error("Error deleting item:", error);
        message.error("Failed to delete item, error encountered internet problem");
      }
    } else {
      message.error("You are not authorized to delete this item");
    }
  };

  const cancel = (e) => {
  };

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setURL(url));
  }, [firebase, props.imageURL]);

  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src={url} className="card_photo" /></div>
        <div className="card_content">
          <h2 className="card_title">{props.productName}</h2>
          {props.Amount === "0" ? (
            <h2 className="card_title">For <span style={{ fontStyle: "initial", color: "#ff0037" }}>DONATION</span></h2>
          ) : (
            <h2 className="card_title">Amount: Rs. {props.Amount}</h2>
          )}
          <h2 className="card_title">Contact <PhoneFilled style={{ transform: "rotate(120deg)" }} /> {props.phoneNumber}</h2>
          <h2 className="card_text">{props.description}</h2>
          <Popconfirm
            title="Delete the item"
            description="Are you sure to delete this item ?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger disabled={props.userID !== firebase.userUID}><DeleteFilled /> Delete</Button>
          </Popconfirm>
        </div>
      </div>
    </li>
  );
}

export default MarketPlaceItems;
