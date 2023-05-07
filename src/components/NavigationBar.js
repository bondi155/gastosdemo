import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/App.css';
import Sidebar from './Sidebar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 56;
const styles = {
  drawerContainer: {
    marginLeft: drawerWidth,
    '@media (maxWidth:600px)': {
      marginLeft: 0,
    },
  },
};


function NavigationBar({ children }) {
  const soloLogo = require('../components/img/sololog.png');
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      {/*
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
      <LinkContainer to='/agenda'>
        <Nav.Link>Agenda</Nav.Link>
      </LinkContainer>
    </Nav>
    <Form className='d-flex'>
      <Form.Control
        type='search'
        placeholder='Buscar'
        className='me-2'
        aria-label='Search'
      />
      <Button size='sm'  variant='primary'>Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>
 */}
       <div style={isMobile ? {} : styles.drawerContainer}>
        <Sidebar />
        <Outlet /> 
        {children}
      </div>
    </>
  );
}

export default NavigationBar;
