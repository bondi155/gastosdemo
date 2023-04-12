import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/App.css';


function NavigationBar() {
const soloLogo = require('../components/img/sololog.png');

  return (
    <>
      <Navbar className='barra' bg='dark' expand='lg' variant='dark'>
        <Container fluid>
          <LinkContainer to='/inicio'>
            <Navbar.Brand>
            <img
              src={soloLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="solo logo"
            />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to='/fmgastos'>
                <Nav.Link>Gastos</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/fmingresos'>
                <Nav.Link>Ingresos</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/consulta'>
                <Nav.Link>Consulta</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Buscar'
                className='me-2'
                aria-label='Search'
              />
              <Button  size='sm'    variant='primary'>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavigationBar;
