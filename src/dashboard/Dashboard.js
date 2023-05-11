import * as React from 'react';
import { Card, Col, Row, Container, CardGroup } from 'react-bootstrap';
import Deposits from './Deposits';
import Orders from '../maps/Orders';
import ApexChart from '../maps/Apexchart';
import ChartPanel from '../maps/ChartPanel';
import PresuPie from '../maps/PresuPie';
import DateAxis from '../maps/DateAxis';
import '../css/App.css';

function DashboardContent() {


  return (
    <Container>
      <Row className='mt-5'>
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
      <Card.Footer className="text-muted">  <small className="text-muted">Datos Actualizados...</small></Card.Footer>
    </Card>
        <Card>
          {' '}
          </Card>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={12} md={12} lg={12}>
          <Card>
          <Card.Header><strong>Graficos Varios</strong></Card.Header>
          {' '}
          <ChartPanel />
          <Card.Footer className="text-muted"><small className="text-muted">Datos Actualizados...</small></Card.Footer>
          </Card>
        </Col>
        </Row>
        <Row className='mt-3'>
        <Col sm={12} md={12} lg={12}>
        <Card>
        <Card.Header><strong>Rangos de Gasto</strong></Card.Header>
          {' '}
          <DateAxis/>
          <Card.Footer className="text-muted mt-5">  <small className="text-muted">Datos Actualizados...</small></Card.Footer>
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
