import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Box from '@mui/material/Box';
import { esES as coreBgBG } from '@mui/material/locale';
import { DataGrid, esES } from '@mui/x-data-grid';
import { esES as pickersBgBG } from '@mui/x-date-pickers/locales';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GridToolbar } from '@mui/x-data-grid';
import { useRecoilValue } from 'recoil';
import { queryResults } from '../storage/GlobalStates';

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

function ChatGrid() {
  //usamos recoil para la state global y asi no llamamos 2 veces a la api..
  const rows = useRecoilValue(queryResults);
  //le damos id al grid , ya que necesita si o si eso de index..
  const rowsWithIds = rows.map((row, index) => ({ id: index, ...row }));

   
  let columns = [];
  if (rowsWithIds.length > 0) {
     // Obtiene las propiedades del primer objeto y si trae datos la oculta..
    const properties = Object.keys(rowsWithIds[0]).filter(prop => prop !== 'id');
    // Crea un objeto  de columna para cada propiedad ya que sera dinamica..
    columns = properties.map((property) => ({
      field: property,
      headerName: property,
      width: 150,
    }));
  }

  
  return (
    <>
      <h2>Resultado:</h2>

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
            rows={rowsWithIds}
            columns={columns}
            getRowId={(row) => row.id_cliente}
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

export default ChatGrid;
