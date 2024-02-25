import React from "react";

const DashStat = () => {
  return (
    <div
      style={{
       marginLeft:"400px",
       gap:"560px",
        flexDirection: "row", // Change "Col" to "row"
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
          padding: "20px",
        }}
      >
        <div
          style={{
            padding: "10px",
            border: "1px solid #ffffff",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <p>Products</p>
          <p>
            <b>5</b>
          </p>
        </div>
        <div
          style={{
            padding: "10px",
            border: "1px solid #ffffff",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <p>Categories</p>
          <p>
            <b>3</b>
          </p>
        </div>
        <div
          style={{
            padding: "10px",
            border: "1px solid #ffffff",
            borderRadius: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <p>Customers</p>
          <p>
            <b>100</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashStat;
