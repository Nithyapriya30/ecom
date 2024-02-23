import React from "react";
const DashStat = () => {
  return (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
        <div className="col dashticket py-3 border border-5 border-white">
          <p>Products</p>
          <p>
            <b>5</b>
          </p>
        </div>
        <div className="col dashticket py-3 border border-5 border-white">
          <p>Categories</p>
          <p>
            <b>3</b>
          </p>
        </div>
        <div className="col dashticket py-3 border border-5 border-white">
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
