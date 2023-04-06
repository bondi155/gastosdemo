import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../dashboard/Title';
import axios from 'axios';

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
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  
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
  
  //let rows = dashGrid.map((row) =>({
    //id:row.id,
    //razon_social :row.razon_social,
    //monto: row.sector
  // }));
  
  return (
    <React.Fragment>
      <Title>Gastos Recientes</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Gasto</TableCell>
            <TableCell>Metodo de Pago</TableCell>
            <TableCell align='right'>Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align='right'>{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        Ver mas registros{' '}
      </Link>
    </React.Fragment>
  );
}

