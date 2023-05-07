import React,{useState} from "react";
import ReactApexChart from 'react-apexcharts';
import {Table, Col, Row, Container} from 'react-bootstrap';


function randomizeArray(arg) {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  const sparklineData = [10, 15, 8, 5, 7, 12, 8, 10, 12, 7, 9, 5, 8, 10, 15, 12, 7, 9, 5, 8];
function ChartPanel () {  
    const totalValueStyle = {
        paddingLeft: '25px',
        // ajusta este valor para cambiar el margen izquierdo
      };
      
    const [series, setSeries] = useState([{
        data: randomizeArray(sparklineData)
      }]);
    
      const [options, setOptions] = useState({
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0
        },
        title: {
          text: '$424,652',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Ventas',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
      });
    
      const [seriesSpark2, setSeriesSpark2] = useState([{
        data: randomizeArray(sparklineData)
      }]);
    
      const [optionsSpark2, setOptionsSpark2] = useState({
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC'],
        title: {
          text: '$235,312',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Gastos',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
      });
    
      const [seriesSpark3, setSeriesSpark3] = useState([{
        data: randomizeArray(sparklineData)
      }]);
    
      const [optionsSpark3, setOptionsSpark3] = useState({
        chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          },
        },
        yaxis: {
          min: 0
        },
        title: {
          text: '$135,965',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Impuestos',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
      });
      const [series1, setSeries1] = useState([{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }]);
      
      const [options1, setOptions1] = useState({
        chart: {
          type: 'line',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      });
      
      const [series2, setSeries2] = useState([{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
      }]);
      
      const [options2, setOptions2] = useState({
        chart: {
          type: 'line',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
      });
      
      const [series3, setSeries3] = useState([43, 32, 12, 9]);
      
      const [options3, setOptions3] = useState({
        chart: {
          type: 'pie',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          width: 1
        },
        tooltip: {
          fixed: {
            enabled: false
          },
        }
      });

      
  const [series4, setSeries4] = useState([43, 32, 12, 9]);
  const [options4, setOptions4] = useState({
    chart: {
      type: 'donut',
      width: 40,
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 1
    },
    tooltip: {
      fixed: {
        enabled: false
      },
    }
  });

  const [series5, setSeries5] = useState([{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }]);
  const [options5, setOptions5] = useState({
    chart: {
      type: 'bar',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  });

  const [series6, setSeries6] = useState([{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }]);
  const [options6, setOptions6] = useState({
    chart: {
      type: 'bar',
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  });

  const [series7, setSeries7] = useState([45]);
  const [options7, setOptions7] = useState({
    chart: {
      type: 'radialBar',
      width: 50,
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%'
        },
        track: {
          margin: 0
        },
        dataLabels: {
          show: false
        }
      }
    }
  });

  const [series8, setSeries8] = useState([53, 67]);
const [options8, setOptions8] = useState({
  chart: {
    type: 'radialBar',
    width: 40,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '50%'
      },
      track: {
        margin: 1
      },
      dataLabels: {
        show: false
      }
    }
  }
});
return (
  <div>
  <Container className="mt-4" fluid>
  <Row>
    <Col md={4}>
      <div id="chart-spark1">
        <ReactApexChart options={options} series={series} type="area" height={160} />
      </div>
    </Col>
    <Col md={4}>
      <div id="chart-spark2">
        <ReactApexChart options={optionsSpark2} series={seriesSpark2} type="area" height={160} />
      </div>
    </Col>
    <Col md={4}>
      <div id="chart-spark3">
        <ReactApexChart options={optionsSpark3} series={seriesSpark3} type="area" height={160} />
      </div>
    </Col>
  </Row>
</Container>
  
      <div className="row">
      <Table responsive>
    <thead>
      <tr>
        <th style={totalValueStyle}>Valor Total</th>
        <th>% Ganancia</th>
        <th>Ultimos 5 Días</th>
        <th>Volumen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={totalValueStyle}>$32,554</td>
        <td>15%</td>
        <td>
          <div id="chart-1">
            <ReactApexChart options={options1} series={series1} type="line" height={35} width={100} />
          </div>
        </td>
        <td>
          <div id="chart-5">
            <ReactApexChart options={options5} series={series5} type="bar" height={35} width={100} />
          </div>
        </td>
      </tr>
      <tr>
        <td style={totalValueStyle}>$23,533</td>
        <td>7%</td>
        <td>
          <div id="chart-2">
            <ReactApexChart options={options2} series={series2} type="line" height={35} width={100} />
          </div>
        </td>
        <td>
          <div id="chart-6">
            <ReactApexChart options={options6} series={series6} type="bar" height={35} width={100} />
          </div>
        </td>
      </tr>
      <tr>
        <td style={totalValueStyle}>$54,276</td>
        <td>9%</td>
        <td>
          <div id="chart-3">
            <ReactApexChart options={options3} series={series3} type="pie" height={40} width={50} />
          </div>
        </td>
        <td>
          <div id="chart-7">
            <ReactApexChart options={options7} series={series7} type="radialBar" height={40} width={50} />
          </div>
        </td>
      </tr>
      <tr>
        <td style={totalValueStyle}>$11,533</td>
        <td>2%</td>
        <td>
          <div id="chart-4">
            <ReactApexChart options={options4} series={series4} type="donut" height={40} width={50} />
          </div>
        </td>
        <td>
          <div id="chart-8">
            <ReactApexChart options={options8} series={series8} type="radialBar" height={40} width={50} />
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
  
  </div>
</div>
)
    }

    export default ChartPanel;



