import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'Gastos mes pasado',
      data: [31, 40, 28, 51, 42, 109, 100, 120, 101],
    },
    {
      name: 'Gastos mes actual',
      data: [11, 32, 45, 32, 34, 52, 41, 32, 44],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: true,
        tools: {
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          export: true,
          download: true,
          selection: true,
          customIcons: []
        },
        offsetX: -10, // ajusta la posición horizontal de los iconos
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2023-04-19',
        '2023-04-20T01:30:00.000Z',
        '2023-04-21T02:30:00.000Z',
        '2023-04-22T03:30:00.000Z',
        '2023-04-23T04:30:00.000Z',
        '2023-04-24T05:30:00.000Z',
        '2023-04-25T06:30:00.000Z',
        '2023-04-26T07:30:00.000Z',
        '2023-04-27T07:30:00.000Z'
        
        
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ApexChart;