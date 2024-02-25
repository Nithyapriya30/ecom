import React from "react";
import { Table } from "react-bootstrap";

function OrderManagement() {
  const payments = [
    {
      transactionId: "ABC123",
      userId: "user123",
      username: "AAA",
      productname: "Shirt",
      paymentAmount: "Rs.30000.0",
      paymentDate: "2024-02-10",
      paymentMethod: "Credit Card",
      status: "Success",
    },
    {
      transactionId: "XYZ456",
      userId: "user456",
      username: "BBB",
      productname: "Shirt",
      paymentAmount: "Rs.35000.0",
      paymentDate: "2024-02-11",
      paymentMethod: "Credit Card",
      status: "Pending",
    },
    {
      transactionId: "DEF789",
      userId: "user789",
      username: "CCC",
      productname: "Shirt",
      paymentAmount: "Rs.25000.0",
      paymentDate: "2024-02-12",
      paymentMethod: "PayPal",
      status: "Success",
    },
    {
      transactionId: "GHI101",
      userId: "user101",
      username: "DDD",
      productname: "Shirt",
      paymentAmount: "Rs.40000.0",
      paymentDate: "2024-02-13",
      paymentMethod: "Bank Transfer",
      status: "Pending",
    },
    {
      transactionId: "JKL111",
      userId: "user111",
      username: "EEE",
      productname: "Shirt",
      paymentAmount: "Rs.28000.0",
      paymentDate: "2024-02-14",
      paymentMethod: "Credit Card",
      status: "Success",
    },
    {
      transactionId: "ABC123",
      userId: "user123",
      username: "FFF",
      productname: "Shirt",
      paymentAmount: "Rs.30000.0",
      paymentDate: "2024-02-10",
      paymentMethod: "Credit Card",
      status: "Success",
    },
    {
      transactionId: "XYZ456",
      userId: "user456",
      username: "GGG",
      productname: "Shirt",
      paymentAmount: "Rs.35000.0",
      paymentDate: "2024-02-11",
      paymentMethod: "Credit Card",
      status: "Pending",
    },
  ];
  return (
    <div className="container mb-4">
      <h2 className="mb-4">Order Management</h2>
      <Table
        bordered
        hover
        style={{ height: "400px ", paddingTop: "25px", paddingBottom: "25px" }}
      >
        <thead>
          <tr>
            <th>Sno</th>
            <th>Transaction ID</th>
            <th>User ID</th>
            <th>Username</th>
            <th>ProductName</th>
            <th>Payment Amount</th>
            <th>Payment Date</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.userId}</td>
              <td>{payment.username}</td>
              <td>{payment.productname}</td>
              <td>{payment.paymentAmount}</td>
              <td>{payment.paymentDate}</td>
              <td>{payment.paymentMethod}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default OrderManagement;
