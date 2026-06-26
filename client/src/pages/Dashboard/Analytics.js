import React, { useEffect, useState } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";
import "./Analytics.css";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) setData(data.bloodGroupData);
    } catch (error) {
      console.log(error);
    }
  };

  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) setInventoryData(data.inventory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />

      {/* 🔹 ANALYTICS TOP TEXT */}
      <div className="analytics-top">
        <h1>Blood Bank Analytics</h1>
        
      </div>

      {/* 🔹 BLOOD GROUP CARDS */}
      <div className="analytics-grid">
        {data?.map((record, i) => (
          <div
            key={i}
            className="blood-card-lg"
            style={{ borderTop: `6px solid ${colors[i % colors.length]}` }}
          >
            <div className="card-header-lg">
              {record.bloodGroup}
            </div>

            <div className="card-content-lg">
              <p>
                Total In <span>{record.totalIn} ML</span>
              </p>
              <p>
                Total Out <span>{record.totalOut} ML</span>
              </p>
            </div>

            <div className="card-footer-lg">
              Available : <b>{record.availabeBlood} ML</b>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 RECENT TRANSACTIONS */}
      <div className="container my-5">
        <h2 className="mb-3">Recent Blood Transactions</h2>

        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Blood Group</th>
              <th>Inventory Type</th>
              <th>Quantity</th>
              <th>Donor Email</th>
              <th>Date & Time</th>
            </tr>
          </thead>

          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} ML</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;