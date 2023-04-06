import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Depositos Recientes</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        al 1 Abril , 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
         Ver Balance
        </Link>
      </div>
    </React.Fragment>
  );
}