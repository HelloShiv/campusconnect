import React , {useState,useEffect}from "react";
import { useFirebase } from "../context/Firebase";
import { Button, message, Popconfirm } from 'antd';
import { DeleteFilled, DeleteOutlined, PhoneFilled } from '@ant-design/icons';

function MarketPlaceItems(props){
  const firebase = useFirebase();
  const [url , setURL]  = useState(null);

 const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};

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
          <h2 className="card_title">Contact <PhoneFilled style={{ transform: "rotate(120deg)"  }} /> {props.phoneNumber}</h2>
          <h2 className="card_text">{props.description}</h2>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this item ?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            >
              
            <Button danger><DeleteFilled />Delete</Button>
          </Popconfirm>
        </div>
      </div>
    </li>
  );
}

export default MarketPlaceItems;