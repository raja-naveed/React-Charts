import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export function Graph() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        // Format fetched data to match the chart data structure
        const formattedData = [
          ["City", "2010 Products", "2000 Products"],
          ...data.products.map((product) => [
            product.title,
            product.stock, // Using 'stock' as an example, change this to the desired data field
            product.rating, // Using 'rating' as an example, change this to the desired data field
          ]),
        ];

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const options = {
    title: "Products of Largest U.S. Cities", // Change the title as needed
    chartArea: { width: "50%" },
    hAxis: {
      title: "Products",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-8 mx-auto max-w-3xl">
      <h1 className="font-serif text-3xl text-center text-gray-800 mb-6">
        Products Chart
      </h1>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
  );
}
