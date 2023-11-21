import React, { useEffect, useState } from 'react';
let ReactApexChart = null;
if (typeof window !== 'undefined') {
  ReactApexChart = require('react-apexcharts').default;
}

const MyCharts = () => {
  const [chartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      // Your other options...
    };

    const series = [
      {
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      },
      {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }
    ];

    if (typeof window !== 'undefined' && !ReactApexChart) {
      import('react-apexcharts').then(module => {
        ReactApexChart = module.default;
        setChartComponent(
          <ReactApexChart options={options} series={series} type="line" height={350} />
        );
      });
    } else {
      setChartComponent(
        <ReactApexChart options={options} series={series} type="line" height={350} />
      );
    }
  }, []);

  return <div id="chart">{chartComponent}</div>;
};

export default MyCharts;
