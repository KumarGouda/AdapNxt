// OrderTable.js

import React from "react";
// Import the refresh icon
import "./OrderTable.css";
import refresh from "./ref.png";
import shop from "./shop.png";
import rectangle from "./r.png";
const OrderTable = ({ currentData }) => {
  return (
    <div className="order-table-container">
      <div className="refresh-button">
        <img src={refresh} alt="" /> Refresh
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Channel</th>
            <th>TKN</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="gap">
          {currentData.map((order) => (
            <tr className="num" key={order.orderNo}>
              <td className="rec">
                <img src={rectangle} alt="" />
              </td>
              <td className="image1">
                <img src={shop} alt="" />
              </td>
              <td className="gg">{order.trackingNumber}</td>
              <td className="da">{order.orderDate}</td>
              <td>{order.city}</td>
              <td>{order.customerName}</td>
              <td>{order.orderValue}</td>
              <td className="btn">{order.status}</td>
              <td>
                <button>Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
