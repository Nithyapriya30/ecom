import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const SellerBox = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.async = true;

    script.onload = () => {
      window.google.charts.load("current", { packages: ["corechart"] });
      window.google.charts.setOnLoadCallback(() => {
        drawChart();
        draw();
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function drawChart() {
    const data = window.google.visualization.arrayToDataTable([
      ["Revenue", "Bookings"],
      [50, 7],
      [60, 8],
      [70, 8],
      [80, 9],
      [90, 9],
      [100, 9],
      [110, 10],
      [120, 11],
      [130, 14],
      [140, 14],
      [150, 15],
    ]);

    const options = {
      title: "Product Revenue vs. Bookings",
      hAxis: { title: "Bookings" },
      vAxis: { title: "Product Revenue" },
      legend: "none",
    };

    const chart = new window.google.visualization.LineChart(
      document.getElementById("myChart")
    );
    chart.draw(data, options);
  }

  function draw() {
    const data = window.google.visualization.arrayToDataTable([
      ["Product", "Bookings"],
      ["Nov - Dec", 55],
      ["Sep - Oct", 49],
      ["Jul - Aug", 44],
      ["May - Jun", 24],
      ["Mar - Apr ", 15],
      ["Jan - Feb", 10],
    ]);

    const opt = {
      title: "Booking Progress of the Product",
    };

    const charts = new window.google.visualization.BarChart(
      document.getElementById("my")
    );
    charts.draw(data, opt);
  }

  return (
    <div className="container">

      <div className="row reg-3 mb-5">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text text-center fw-bold">Monthly Report</p>
            </div>
            <div
              id="my"
              style={{ width: "100%", maxWidth: "600px", height: "500px" }}
            ></div>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text text-center fw-bold">Yearly Report</p>
            </div>
            <div
              id="myChart"
              style={{ width: "100%", maxWidth: "600px", height: "500px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerBox;
