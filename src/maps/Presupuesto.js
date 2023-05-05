import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Presupuesto = () => {
  const [chartData, setChartData] = useState({
    series: [35, 15, 25, 75],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Presupuesto Mensual',
              fontSize: '14px',

              
              formatter: function (w) {
                return  '10000$';
              }
            }
          }
        }
      },
      labels: ['Varios', 'Uber', 'Hotel', 'Total'],
    }
  });


  
  return (
    <div id="chart-1">
      <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={350} />
    </div>
  );
};

export default Presupuesto;