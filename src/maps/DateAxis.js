import React, { useState } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import '../css/App.css';

function DateAxis() {
  const [selection, setSelection] = useState('all');

  const options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: '#999',
          label: {
            show: true,
            text: 'Support',
            style: {
              color: '#fff',
              background: '#00E396',
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date('14 Nov 2022').getTime(),
          borderColor: '#999',
          yAxisIndex: 0,
          label: {
            show: true,
            text: 'Rally',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Jan 2022').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      data: [
        [1640995200000, 35.12],
        [1641081600000, 35.07],
        [1641168000000, 35.2],
        [1641254400000, 35.35],
        [1641340800000, 35.27],
        [1641600000000, 35.52],
        [1641686400000, 35.73],
        [1641772800000, 35.98],
        [1641859200000, 36.12],
        [1641945600000, 36.06],
        [1642204800000, 36.33],
        [1642291200000, 36.47],
        [1642377600000, 36.22],
        [1642464000000, 35.94],
        [1642550400000, 36.08],
        [1642809600000, 36.23],
        [1642896000000, 36.44],
        [1642982400000, 36.2],
        [1643068800000, 36.52],
        [1643155200000, 36.49],
        [1643414400000, 36.31],
        [1643500800000, 36.67],
        [1643587200000, 36.45],
        [1643673600000, 36.68],
        [1643760000000, 36.87],
        [1644019200000, 36.92],
        [1644105600000, 37.06],
        [1644192000000, 37.24],
        [1644278400000, 37.48],
        [1644364800000, 37.72],
        [1644624000000, 37.81],
        [1644710400000, 38.15],
        [1644796800000, 38.26],
        [1644883200000, 38.04],
        [1644969600000, 37.79],
        [1645228800000, 37.83],
        [1645315200000, 38.09],
        [1645401600000, 37.83],
        [1645488000000, 37.55],
        [1645574400000, 37.82],
        [1645833600000, 37.92],
        [1645920000000, 37.62],
        [1646006400000, 37.68],
        [1646092800000, 37.54],
        [1646179200000, 37.35],
        [1646438400000, 37.51],
        [1646524800000, 37.22],
        [1646611200000, 37.33],
        [1646697600000, 37.6],
        [1646784000000, 37.72],
        [1647043200000, 37.86],
        [1647129600000, 38.05],
        [1647216000000, 38.28],
        [1647302400000, 38.13],
        [1647388800000, 38.37],
        [1647648000000, 38.17],
        [1647734400000, 38.25],
        [1647820800000, 38.2],
        [1647907200000, 38.3],
        [1647993600000, 38.35],
        [1648252800000, 38.4],
        [1648339200000, 38.45],
        [1648252800000, 38.4],
        [1648339200000, 38.45],
        [1648425600000, 38.55],
        [1648512000000, 38.6],
        [1648598400000, 38.55],
        [1648857600000, 38.6],
        [1648944000000, 38.65],
        [1649030400000, 38.7],
        [1649116800000, 38.75],
        [1649203200000, 38.8],
        [1649462400000, 38.85],
        [1649548800000, 38.9],
        [1649635200000, 38.95],
        [1649721600000, 39.0],
        [1649808000000, 39.05],
        [1650067200000, 39.1],
        [1650153600000, 39.15],
        [1650240000000, 39.2],
        [1650326400000, 39.25],
        [1650412800000, 39.3],
        [1650672000000, 39.35],
        [1650758400000, 39.4],
        [1650844800000, 39.45],
        [1650931200000, 39.5],
        [1651017600000, 39.55],
        [1651276800000, 39.6],
        [1651363200000, 39.65],
        [1651449600000, 39.7],
        [1651536000000, 39.75],
        [1651622400000, 39.8],
        [1651881600000, 39.85],
        [1651968000000, 39.9],
        [1652054400000, 39.95],
        [1652140800000, 40.0],
        [1652227200000, 40.05],
        [1652486400000, 40.1],
        [1652572800000, 40.15],
        [1652659200000, 40.2],
        [1652745600000, 40.25],
        [1652832000000, 40.3],
        [1653091200000, 40.35],
        [1653177600000, 40.4],
        [1653264000000, 40.45],
        [1653350400000, 40.5],
        [1653436800000, 40.55],
        [1653696000000, 40.6],
        [1653782400000, 40.65],
        [1653868800000, 40.7],
        [1653955200000, 40.75],
        [1654041600000, 40.8],
        [1654300800000, 40.85],
        [1654387200000, 40.9],
        [1654473600000, 40.95],
        [1654560000000, 41.0],
        [1654646400000, 41.05],
        [1654905600000, 41.1],
        [1654992000000, 41.15],
        [1654905600000, 41.1],
        [1654992000000, 41.15],
        [1655078400000, 41.2],
        [1655164800000, 41.25],
        [1655164800000, 41.25],
        [1657760400000, 42.62],
        [1660438800000, 42.92],
        [1663030800000, 44.45],
        [1665709200000, 44.69],
        [1668301200000, 44.1],
        [1670979600000, 44.68],
        [1673571600000, 46.5],
        [1676250000000, 46.28],
        [1678842000000, 46.96],
        [1681520400000, 47.03],
        [1683993600000, 51.03],
      ],
    },
  ];

  
  const updateData = (timeline) => {
    setSelection(timeline);

    switch (timeline) {
      case 'one_month':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('15 Apr 2023').getTime(),
          new Date('13 May 2023').getTime()
        );

        break;
      case 'six_months':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('13 Nov 2022').getTime(),
          new Date('13 May 2023').getTime()
        );
        break;
      case 'one_year':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('13 May 2022').getTime(),
          new Date('13 May 2023').getTime()
        );
        break;
      case 'ytd':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('9 Apr 2023').getTime(),
          new Date('13 May 2023').getTime()
        );
        break;
      case 'all':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('01 Jan 2022').getTime(),
          new Date('13 May 2023').getTime()
        );
        break;
      default:
    }
  };
  return (
    <div id='chart'>
      <div className='toolbar'>
        <button
          id='one_month'
          onClick={() => updateData('one_month')}
          className={selection === 'one_month' ? 'active' : ''}
        >
          1M
        </button>
        &nbsp;
        <button
          id='six_months'
          onClick={() => updateData('six_months')}
          className={selection === 'six_months' ? 'active' : ''}
        >
          6M
        </button>
        &nbsp;
        <button
          id='one_year'
          onClick={() => updateData('one_year')}
          className={selection === 'one_year' ? 'active' : ''}
        >
          1Y
        </button>
        &nbsp;
        <button
          id='ytd'
          onClick={() => updateData('ytd')}
          className={selection === 'ytd' ? 'active' : ''}
        >
          YTD
        </button>
        &nbsp;
        <button
          id='all'
          onClick={() => updateData('all')}
          className={selection === 'all' ? 'active' : ''}
        >
          ALL
        </button>
      </div>

      <div id='chart-timeline'>
        <ReactApexChart
          options={options}
          series={series}
          type='area'
          height={350}
        />
      </div>
    </div>
  );
}

export default DateAxis;
