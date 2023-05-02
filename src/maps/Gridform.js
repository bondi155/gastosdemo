import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import { Row, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Box from '@mui/material/Box';
import { esES as coreBgBG } from '@mui/material/locale';
import { DataGrid, esES } from '@mui/x-data-grid';
import { esES as pickersBgBG } from '@mui/x-date-pickers/locales';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GridToolbar } from '@mui/x-data-grid';

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

  const columns = [
    { field: 'razonSocial', headerName: 'Razon Social', width: 130 },
    
    { field: 'importe', headerName: 'Importe', width: 130 },
    {
      field: 'codArt',
      headerName: 'Cod. Articulo',
      width: 160,
    },
  ];

  const rows = [
    { id: 1, razonSocial: 'CFE', importe: '$999', codArt: '12314' },
    { id: 2, razonSocial: 'papeleria', importe: '$456', codArt: '55678' },
    { id: 3, razonSocial: 'uber', importe: '$5678', codArt: '5555' },
    { id: 4, razonSocial: 'hotel', importe: '$11321', codArt: '2222' },
    { id: 5, razonSocial: 'varios', importe: '$1460', codArt: '12345' },
  ];

  return (
    <>
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
