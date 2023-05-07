import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Col, Row, Container } from 'react-bootstrap';
import Deposits from './Deposits';
import Orders from '../maps/Orders';
import ApexChart from '../maps/Apexchart';
import ChartPanel from '../maps/ChartPanel';

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Row className='mt-3'>
        <Col sm={8}>
          <Card>
          <Card.Header><strong>Gastos ùltimos 10 días</strong></Card.Header>

          {' '}
          <ApexChart />
          </Card>
        </Col>
        <Col sm={4}>
        <Card className="text-center">
      <Card.Header><strong>Resumen</strong></Card.Header>
      <Card.Body>
        <Card.Title>Gastos Recientes</Card.Title>
        <Card.Text>
         </Card.Text>
        <Deposits />
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        <Card>
          {' '}
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col sm={12} md={12} lg={6}>
          <Card>
          <Card.Header><strong>Graficos Varios</strong></Card.Header>
          {' '}
          <ChartPanel />
          <Card.Footer className="text-muted"><strong>Datos Actualizados</strong></Card.Footer>

          </Card>
        </Col>
        <Col sm={12} md={12} lg={6}>
        <Card>
        <Card.Header><strong>Graficos Varios</strong></Card.Header>

          {' '}
          <ChartPanel />
          <Card.Footer className="text-muted"><strong>Datos Actualizados</strong></Card.Footer>

          </Card>
        </Col>
      </Row>

      <Row className='mt-3 justify-content-center'>
        <Col sm={12}>
          <Card>
          {' '}
          <Orders />
          </Card>
        </Col>
     
      </Row>
    </Container>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
