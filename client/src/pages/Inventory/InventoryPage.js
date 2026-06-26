import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InventoryPage.css";

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);

  const getInventory = async () => {
    try {
     const { data } = await axios.get(
  "http://localhost:2721/api/v1/inventory/get-inventory",
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
);
      if (data?.success) {
        setInventory(data.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div className="inventory-page">
      {/* HERO SECTION */}
      <div className="inventory-hero">
        <h1>🩸 Blood Inventory Dashboard</h1>
        <p>
          Monitor • Control • Secure Blood Transactions in Real-Time
        </p>
      </div>

      {/* CARDS */}
      <div className="inventory-wrapper">
        {inventory.map((item) => (
          <div
            key={item._id}
            className={`inventory-glass-card ${item.inventoryType}`}
          >
            <div className="card-top">
              <span className="blood-group">{item.bloodGroup}</span>
              <span
                className={`status ${item.inventoryType}`}
              >
                {item.inventoryType === "in" ? "IN" : "OUT"}
              </span>
            </div>

            <div className="quantity">
              {item.quantity}
              <span> ML</span>
            </div>

            <div className="divider" />

            <div className="info">
              <p>
                <strong>Email :</strong> {item.email}
              </p>
              <p>
                <strong>Date :</strong>{" "}
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;