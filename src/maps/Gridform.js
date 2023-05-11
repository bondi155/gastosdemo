import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import {  Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Box from '@mui/material/Box';
import { esES as coreBgBG } from '@mui/material/locale';
import { DataGrid, esES } from '@mui/x-data-grid';
import { esES as pickersBgBG } from '@mui/x-date-pickers/locales';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GridToolbar } from '@mui/x-data-grid';
import { Icon } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const theme = createTheme(
  {
    palette: {
      primary: { main: '#000000' },
    },
  },
  esES, // x-data-grid translations
  pickersBgBG, // x-date-pickers translations
  coreBgBG // core translations
);

function Gridform() {
  /*

    const columns = [
    { field: 'id', 
    headerName: 'ID'
    , width: 90 },
    {
      field: 'razon_social',
      headerName: 'Proveedor',
      width: 150,
      editable: true,
    },
    {
      field: 'sector',
      headerName: 'Sector',
      width: 150,
      editable: true,
    }, {
      field: 'descripcion',
      headerName: 'Descrip.',
      width: 150,
      editable: true,
    }, {
      field: 'preciou',
      headerName: 'Precio Uni',
      width: 150,
      editable: true,
    }, {
      field: 'descto',
      headerName: 'Descuento',
      width: 150,
      editable: true,
    }, {
      field: 'iva',
      headerName: 'iva',
      width: 150,
      editable: true,
    },{
      field: 'subtotal',
      headerName: 'Subtotal',
      width: 150,
      editable: true,
    },{
      field: 'total',
      headerName: 'Total',
      width: 150,
      editable: true,
    }
  ];
  const [consultaGrid, SetConsultaGrid] = useState ([]);
  
  useEffect(()  =>{
axios.get("http://localhost:5005/consultaformgasto", {

params:{
  //aca poner usuario cuando se defina : usuario: usuario,
}
})
.then((response)  => {
  SetConsultaGrid(response.data);
}).catch((error) =>{
  console.log(error);
});
 }, []);

 const rows = consultaGrid.map((row) =>({
  id:row.id,
  razon_social:row.razon_social,
  sector: row.sector,
  descripcion:row.descripcion,
  preciou: row.preciou,
  descto: row.descuento,
  subtotal:row.subtotal,
  iva:row.iva,
  total:row.total

 }));
*/

const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [status, SetStatus] = useState({
    1: 'En revisiòn',
    2: 'En revisiòn',
    3: 'En revisiòn',
    4: 'En revisiòn',
    5: 'En revisiòn',
  });

  const columns = [
    { field: 'razonSocial', headerName: 'Razon Social', width: 130 },
    { field: 'importe', headerName: 'Importe', width: 130 },
    {
      field: 'codArt',
      headerName: 'Cod. Articulo',
      width: 160,
    },
    { field: 'solicitante', headerName: 'Solicitante', width: 130 },
    { field: 'aprobador', headerName: 'Aprobador', width: 130 },
    { field: 'estado', headerName: 'Estado', width: 130 },
    {
      field: 'acciones',
      headerName: 'Acciones',
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClickAprobar = () => {
          console.log('Aprobar ' + params.row.id);
          // aquí va tu lógica para aprobar
          SetStatus(prevStatus => ({...prevStatus, [params.row.id]: 'Aprobado'}));
          setAlertMessage(`Se aprobó el gasto con el id ${params.row.id}`);
          setShowAlert(true);

        };

        const onClickNoAprobar = () => {
          console.log('No aprobar ' + params.row.id);
          // aquí va tu lógica para no aprobar
          SetStatus(prevStatus => ({...prevStatus, [params.row.id]: 'No aprobado'}));
          setAlertMessage(`No se aprobó el gasto con el id ${params.row.id}`);
          setShowAlert(true);
        };

        return (
          <div>
            <Icon className='icono-aprob'  onClick={onClickAprobar}  style={{ marginRight: '3rem' }}> 
            <ThumbUpIcon fontSize="large" color="primary" />
            </Icon>

            <Icon className='icono-aprob'  onClick={onClickNoAprobar}> 
            <ThumbDownIcon fontSize="large" color="secondary" />
            </Icon>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      razonSocial: 'CFE',
      importe: '$999',
      codArt: '12314',
      solicitante: 'Jrodriguez',
      aprobador: 'Aprobador1',
      estado: status[1],
    },
    {
      id: 2,
      razonSocial: 'papeleria',
      importe: '$456',
      codArt: '55678',
      solicitante: 'Jrodriguez',
      aprobador: 'Aprobador1',
      estado: status[2],
    },
    {
      id: 3,
      razonSocial: 'uber',
      importe: '$5678',
      codArt: '5555',
      solicitante: 'Jrodriguez',
      aprobador: 'Aprobador1',
      estado: status[3],
    },
    {
      id: 4,
      razonSocial: 'hotel',
      importe: '$11321',
      codArt: '2222',
      solicitante: 'Jrodriguez',
      aprobador: 'Aprobador1',
      estado: status[4],
    },
    {
      id: 5,
      razonSocial: 'varios',
      importe: '$1460',
      codArt: '12345',
      solicitante: 'Jrodriguez',
      aprobador: 'Aprobador1',
      estado: status[5],
    },
  ];

  return (
    <>
         {showAlert && 
        <Alert variant='info' onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      }
      <div className='titulo pt-4 mb-3 text-break'>
        <h1>Consulta</h1>
      </div>

      <Box
        //cambiar background color del grid
        sx={{
          flexGrow: 1,
          height: 600,
          width: '100%',
          mt: 5,
          pb: 5,
          alignGrids: 'center',
          px: 5,
        }}
      >
        <ThemeProvider theme={theme}>
          <DataGrid
            sx={{ backgroundColor: 'white' }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            slots={{
              toolbar: GridToolbar,
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </ThemeProvider>
      </Box>
    </>
  );
}

//el props puedo usarlo para cuando pase el componente , le de otro valor , por ejemplo el de otro mapeo...

export default Gridform;
