import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PresuPie = () => {
    const chartStyle = {
        height: '100px',
        width: '45%',
        margin: '0 auto',
        display: 'block',

      }

  const [chartState, setChartState] = useState({
    series: [2500, 1500, 440, 5500, 4100],
    options: {
      chart: {
        width: '100%',
        type: 'pie',
        align: 'center' // <-- agregue esta línea
      },
      labels: ["Hotel", "Uber", "Varios", "Papeleria", "Corporativo"],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5
          }
        }
      },
      title: {
        text: "Presupuesto"
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex]
          return [name, val.toFixed(1) + '%']
        }
      },
      legend: {
        show: false
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartState.options} series={chartState.series} style={chartStyle} type="pie" />
    </div>
  );
}

export default PresuPie;