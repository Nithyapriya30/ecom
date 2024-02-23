import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
const SellerGraph = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Load the corechart package
      window.google.charts.load("current", { packages: ["corechart"] });
    };

    return () => {
      // Remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const pieChartData = [
    ["Topping", "Slices"],
    ["Infrastructure", 3],
    ["Facility", 1],
    ["Academic", 1],
    ["Administration", 2],
  ];

  const pieChartOptions = {
    title: "How many issues are recorded?",
    width: 400,
    height: 300,
  };

  const barChartData = [
    ["Month", "Customer", "Product", "Seller", "Category", "Average"],
    ["Monday", 165, 938, 522, 998, 614.6],
    ["Tuesday", 135, 1120, 599, 1268, 682],
    ["Wednesday", 157, 1167, 587, 807, 623],
    ["Thursday", 139, 1110, 615, 968, 609.4],
    ["Friday", 136, 691, 629, 1026, 569.6],
  ];

  const barChartOptions = {
    title: "Weekly reported",
    vAxis: { title: "Products" },
    hAxis: { title: "Week" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  return (
    <Container>
      <div className="row">
        <div className="col mb-3">
          <div className="card h-100">
            <div className="card-header">
              <span className="me-2">
                <i className="bi bi-bar-chart-fill"></i>
              </span>
               Chart
            </div>
            <div>
              <Chart
                width={"100%"}
                height={"300px"}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={barChartData}
                options={barChartOptions}
                rootProps={{ "data-testid": "2" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SellerGraph;
