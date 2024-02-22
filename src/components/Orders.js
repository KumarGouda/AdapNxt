import React from "react";
import OrderTable from "./OrderTable";
import "./Orders.css";
import shop from "./shop.png";
import rectangle from "./r.png";

const Orders = () => {
  const currentData = [
    {
      Squre: <img src={rectangle} alt="" />,
      channel: <img src={shop} alt="" />,
      trackingNumber: "#TKN2023543",
      orderDate: "2023-07-21",
      city: "Raichur",
      customerName: "Hamilton",
      orderValue: "200",
      status: "Pending",
    },
    {
      channel: <img src={shop} alt="" />,
      trackingNumber: "#TKN2023546",
      orderDate: "2023-07-22",
      city: "Bengaluru",
      customerName: "Neymr Jr",
      orderValue: "500",
      status: "Pending",
    },
    {
      channel: <img src={shop} alt="" />,
      trackingNumber: "#TKN2023643",
      orderDate: "2023-07-25",
      city: "Lucknow",
      customerName: "Virat Kohli",
      orderValue: "100",
      status: "Pending",
    },
  ];
  return (
    <div>
      <> Orders</>
      <div className="mk">
        <OrderTable currentData={currentData} />
      </div>
    </div>
  );
};
export default Orders;
