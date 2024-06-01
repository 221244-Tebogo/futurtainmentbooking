import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Reports.css"; // Ensure to create a CSS file for Reports styling

const Reports = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await axios.get("/api/sales");
      setSales(response.data);
    } catch (error) {
      console.error("Error fetching sales", error);
    }
  };

  return (
    <div className="reports-container">
      <h2>Sales Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Tickets Sold</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale._id}>
              <td>{sale.eventName}</td>
              <td>{sale.ticketsSold}</td>
              <td>{sale.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
