import React, { useEffect, useState } from 'react';
import { Table, NavLink, Card } from 'react-bootstrap';
import axios from 'axios';
import '../css/App.css';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}


const rows = [
  createData(
    0,
    '16 Mar, 2023',
    'Elvis Presley',
    'Comida corporativa',
    'VISA ⠀•••• 3719',
    312.44
  ),
  createData(
    1,
    '16 Mar, 2023',
    'Paul McCartney',
    'Hotel',
    'VISA ⠀•••• 2574',
    866.99
  ),
  createData(
    2,
    '16 Mar, 2023',
    'Tom Scholz',
    'Boston, MA',
    'MC ⠀•••• 1253',
    100.81
  ),
  createData(
    3,
    '16 Mar, 2023',
    'Michael Jackson',
    'UBER',
    'AMEX ⠀•••• 2000',
    654.39
  ),
  createData(
    4,
    '15 Mar, 2023',
    'Bruce Springsteen',
    'Boletos Avion',
    'VISA ⠀•••• 5919',
    212.79
  ),
  createData(
    5,
    '15 Mar, 2023',
    'Bruce willys',
    'Boletos Avion',
    'VISA ⠀•••• 5922',
    1212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  /*
const [dashGrid, SetDashGrid] = useState([])

useEffect(()  =>{

  axios.get("http://localhost:5005/consultaresumengasto", {
  
  params:{
    //aca poner usuario cuando se defina : usuario: usuario,
  }
  })
  .then((response)  => {
    SetDashGrid(response.data);
  }).catch((error) =>{
    console.log(error);
  });
   }, []);
  
  let rows = dashGrid.map((row) =>({
    id:row.id,
    razon_social :row.razon_social,
    monto: row.sector
   }));
  */
  return (
    <>  
<div className='App mt-3'> 
<Card>
<Card.Header><strong>Ultimos gastos cargados</strong></Card.Header>
 
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Gasto</th>
            <th>Método de Pago</th>
            <th className="text-right">Monto</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.name}</td>
              <td>{row.shipTo}</td>
              <td>{row.paymentMethod}</td>
              <td className="text-right">{`$${row.amount}`}</td>
            </tr>
          ))}
        </tbody>
     
      </Table>
     
<Card.Footer className="text-muted"><strong> <NavLink className=' my-nav-link' href="/pagina-de-destino">Ver más registros
</NavLink> </strong></Card.Footer>

</Card>
      </div>
 
      </>  );
}

