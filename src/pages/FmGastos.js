import React, { useState } from 'react';
import { Form, Card, Table } from 'react-bootstrap';
import {
  Row,
  Container,
  Col,
  Button,
  Tab,
  Tabs,
} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/App.css';
import 'bootswatch/dist/cerulean/bootstrap.min.css'; // Added this :boom:
import Presupuesto from '../maps/Presupuesto';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { Icon } from '@material-ui/core';

function Fm_Gastos() {
  const divStyle = {
    backgroundColor: '#fd7e14b3',
    padding: '0.2rem 1rem', // reducir padding en la parte superior e inferior
    // border:'1px solid black;'
    //backgroundColor: 'transparent',
  };
  
  //Linea de Factura form
  const [todos, setTodos] = useState([]);

  const [formData, setFormData] = useState({
    cod_art: '',
    desc_fac: '',
    precioU: '',
    cantidad: '',
    subtotal: '',
    descuento: '',
    iva: '',
    total: '',
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (
      !formData.cod_art ||
      !formData.desc_fac ||
      !formData.precioU ||
      !formData.cantidad ||
      !formData.subtotal ||
      !formData.descuento ||
      !formData.iva ||
      !formData.total
    )
      return;
    const newToDo = {
      ...formData,
      id: Date.now(),
      isChecked: false,
    };
    setTodos([...todos, newToDo]);
    setFormData({
      cod_art: '',
      desc_fac: '',
      precioU: '',
      cantidad: '',
      subtotal: '',
      descuento: '',
      iva: '',
      total: '',
    });
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  //Detalle de pago form2

  const [todos2, setTodos2] = useState([]);

  const [formData2, setFormData2] = useState({
    forma_pago: '',
    banco: '',
    cuenta: '',
    clabe: '',
    importe: '',
  });

  const handleFormChange2 = (e) => {
    setFormData2({
      ...formData2,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddToDo2 = (e) => {
    e.preventDefault();
    if (
      !formData2.forma_pago ||
      !formData2.banco ||
      !formData2.cuenta ||
      !formData2.clabe ||
      !formData2.importe
    )
      return;
    const newToDo2 = {
      ...formData2,
      id: Date.now(),
      isChecked2: false,
    };
    setTodos2([...todos2, newToDo2]);
    setFormData2({
      forma_pago: '',
      banco: '',
      cuenta: '',
      clabe: '',
      importe: '',
    });
  };

  const handleDeleteTodo2 = (id) => {
    setTodos2(todos2.filter((todo2) => todo2.id !== id));
  };

  const handleDeleteAll2 = () => {
    setTodos2([]);
  };

  const handleSubmit = () => {
    alert('Formulario enviado');
  };
  return (
    <div className='App'>
      <Container className='mb-2'>
        <Row className='pt-2'>
          <Col md={{ span: 4, offset: 4 }}>
            <div className='titulo pt-3'>
              <h1> Solicitud de gasto</h1>
            </div>
          </Col>
          <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 8, offset: 2 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 2, offset: 2 }}
            className='mt-4'
          >
            <Form.Group className='mb-3' >
              <FloatingLabel label='Fecha De Creación'>
                <Form.Control type='date' name='fecha_elabora' />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col sm={12} md={10} lg={10}>
            <div className='scale'>
              <Form className='mt-3 ' action='/home'>
                <Card>
                  <Container>
                    <Tabs defaultActiveKey='proveedor'>
                      <Tab eventKey='proveedor' title='Proveedor'>
                      <Card.Header style={divStyle}>
                        <h6 className='mt-1'>
                          <strong>Proveedor - Factura</strong>
                        </h6>
                        </Card.Header>
                        <hr></hr>
                        <Row className='mt-5'>
                          <Col md={{ span: 4, offset: 0 }}>
                            <Form.Group className='mb-3'>
                              <Form.Select
                                aria-label='Default select example'
                                name='razon_social'>
                                <option>Razon Social Proveedor</option>
                                <option value='cfe'>CFE Centro</option>
                                <option value='office max'>Office Max</option>
                                <option value='Uber'>Uber</option>
                                <option value='microsoft'>Microsoft</option>
                                <option value='caminoreal'>Camino Real</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col sm={4} md={4} lg={4}>
                            <Form.Group className='mb-3'>
                              <Form.Control
                                type='date'
                                name='fecha_fac'
                                placeholder='Fecha Facturación'
                              />
                            </Form.Group>
                          </Col>
                          <Col md={4}>
                            <Form.Group className='mb-3'>
                              <Form.Control
                                type='text'
                                name='folio'
                                placeholder='Folio Factura'
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={{ span: 6, offset: 3 }}>
                            <Form.Group className='mb-3'>
                              <Form.Control
                                type='text'
                                placeholder='Descripción Factura'
                                name='descripcion'
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab eventKey='presupuesto' title='Presupuesto'>
                      <Card.Header style={divStyle}>
                        <h6 className='mt-1'>
                          <strong>Presupuesto</strong>
                        </h6>
                        </Card.Header>
                        <hr></hr>
                        <Row className='mt-5'>
                          <Col className='mb-3' md={{ span: 5, offset: 1 }}>
                            <Form.Select
                              aria-label='Default select example'
                              name='empresa_pagadora'
                              placeholder='Compañia del Corporativo'
                            >
                              <option>Compañia del Corporativo</option>
                              <option value='Empresa 1'>Empresa 1</option>
                              <option value='Empresa 2'>Empresa 2</option>
                              <option value='Empresa 3'>Empresa 3</option>
                              <option value='microsoft'>Empresa 4</option>
                            </Form.Select>
                          </Col>
                          <Col className='mb-3' sm={12} lg={5} md={5}>
                            <Form.Group>
                              <Form.Select
                                aria-label='Default select example'
                                name='area'
                              >
                                <option>Area </option>
                                <option value='finanza'>Finanzas</option>
                                <option value='administracion'>
                                  Administración
                                </option>
                                <option value='rrhh'>RRHH</option>
                                <option value='audito'>Auditoria</option>
                                <option value='marketing'>Marketing</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className='mb-3'>
                          <Col
                            md={{ span: 5, offset: 1 }}
                            lg={{ span: 5, offset: 1 }}
                          >
                            <Form.Group className='mb-3'>
                              <Form.Select
                                aria-label='Default select example'
                                name='tipo_partida'
                                placeholder='Tipo de partida Presupuestal'
                              >
                                <option>Tipo de partida Presupuestal </option>
                                <option value='1'>Viaticos</option>
                                <option value='2'>Anticipos</option>
                                <option value='3'>Servicios</option>
                                <option value='4'>Licencias</option>
                                <option value='5'>Moviliaria</option>
                                <option value='6'>Papeleria</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col lg={5} md={5}>
                            <Form.Group className='mb-3'>
                              <Form.Select
                                aria-label='Default select example'
                                name='ceco'
                              >
                                <option> Centro de Costo </option>
                                <option value='1'>Nómina</option>
                                <option value='2'>Legal</option>
                                <option value='3'>RRHH</option>
                                <option value='4'>Contabilidad</option>
                                <option value='5'>Contraloria</option>
                                <option value='6'>SAC</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                      </Tab>
                      <Tab eventKey='lineas' title='Recibo'>
                          <Col>
                          <Card.Header style={divStyle}>
                            <h6 className='mt-1'>
                              <strong>Lineas de la factura o recibo</strong>
                            </h6>
                            </Card.Header>
                            <hr></hr>
                            <Table responsive striped bordered hover>
                              <thead>
                                <tr>
                                  <th>Cod.Articulo</th>
                                  <th>Descripción</th>
                                  <th>Cantidad</th>
                                  <th>Precio U.</th>
                                  <th>Descuento</th>
                                  <th>Subtotal</th>
                                  <th>IVA</th>
                                  <th>Total</th>
                                  <th>
                                    {' '}
                                    <Icon   onClick={handleAddToDo}>
            <AddIcon fontSize='large' color='primary' />
          </Icon>
                                  
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='text'
                                        name='cod_art'
                                        onChange={handleFormChange}
                                        value={formData.cod_art}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='text'
                                        name='desc_fac'
                                        onChange={handleFormChange}
                                        value={formData.desc_fac}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='number'
                                        name='cantidad'
                                        onChange={handleFormChange}
                                        value={formData.cantidad}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'20%'}>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='number'
                                        name='precioU'
                                        onChange={handleFormChange}
                                        value={formData.precioU}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='number'
                                        name='descuento'
                                        onChange={handleFormChange}
                                        value={formData.descuento}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'12%'}>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='number'
                                        name='subtotal'
                                        onChange={handleFormChange}
                                        value={formData.subtotal}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'10%'}>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='number'
                                        name='iva'
                                        onChange={handleFormChange}
                                        value={formData.iva}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'14%'}>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        type='number'
                                        name='total'
                                        onChange={handleFormChange}
                                        value={formData.total}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'100px'}>
                                    {' '}
                                    <Icon  onClick={handleDeleteAll}>
        <DeleteIcon fontSize="large" color="secondary" />
      </Icon>
                                  
                                  </td>
                                </tr>
                                {todos.map((todo) => (
                                  <tr key={todo.id}>
                                    <td>
                                      <strong>{todo.cod_art}</strong>
                                    </td>
                                    <td>
                                      <strong>{todo.desc_fac}</strong>
                                    </td>
                                    <td>
                                      <strong>{todo.cantidad}</strong>
                                    </td>
                                    <td>
                                      <strong>${todo.precioU} </strong>
                                    </td>
                                    <td>
                                      <strong>${todo.descuento}</strong>
                                    </td>
                                    <td>
                                      <strong>${todo.subtotal}</strong>
                                    </td>
                                    <td>
                                      <strong>${todo.iva}</strong>
                                    </td>
                                    <td>
                                      <strong>${todo.total}</strong>
                                    </td>
                                    <td>
                                      {' '}
                                      <Icon onClick={() =>
                                          handleDeleteTodo(todo.id)
                                        }>
        <DeleteIcon fontSize="small" color="secondary" />
      </Icon>
                                
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </Col>
                      </Tab>
                      <Tab eventKey='recibo' title='Pago'>
                          <Col>
                          <Card.Header style={divStyle}>
                            <h6 className='mt-1'>
                              <strong>Detalle del pago</strong>
                            </h6>
                            </Card.Header>
                            <hr></hr>
                            <Table responsive striped bordered hover>
                              <thead>
                                <tr>
                                  <th sx={3}>Forma de Pago</th>
                                  <th>Banco</th>
                                  <th>Cuenta</th>
                                  <th>Clabe</th>
                                  <th>Importe</th>
                                  <th>
                                  <Icon onClick={handleAddToDo2}>
            <AddIcon fontSize='large' color='primary' />
          </Icon>
                                    {' '}
                      
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td width={'20%'}>
                                    {' '}
                                    <Form.Group className='mb-3'>
                                      <Form.Select
                                        aria-label='Default select example'
                                        name='forma_pago'
                                        value={formData2.forma_pago}
                                        onChange={handleFormChange2}
                                        required
                                      >
                                        <option>Elige uno</option>
                                        <option value='Deposito'>
                                          Deposito
                                        </option>
                                        <option value='Cheque'>Cheque</option>
                                        <option value='Efectivo'>
                                          Efectivo
                                        </option>
                                      </Form.Select>
                                    </Form.Group>
                                  </td>
                                  <td width={'20%'}>
                                    <Form.Group className='mb-3'>
                                      <Form.Select
                                        aria-label='Default select example'
                                        name='banco'
                                        required
                                        value={formData2.banco}
                                        onChange={handleFormChange2}
                                      >
                                        <option>Elige uno</option>
                                        <option value='BBVA'>BBVA</option>
                                        <option value='Banorte'>Banorte</option>
                                        <option value='Santander'>
                                          Santander
                                        </option>
                                        <option value='Hbsc'>HBSC</option>
                                        <option value='Azteca'>
                                          Ban.Azteca
                                        </option>
                                      </Form.Select>
                                    </Form.Group>
                                  </td>
                                  <td width={'20%'}>
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        required
                                        type='number'
                                        name='cuenta'
                                        onChange={handleFormChange2}
                                        value={formData2.cuenta}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'20%'}>
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        required
                                        type='number'
                                        name='clabe'
                                        onChange={handleFormChange2}
                                        value={formData2.clabe}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'20%'}>
                                    <Form.Group className='mb-3'>
                                      <Form.Control
                                        required
                                        type='number'
                                        name='importe'
                                        onChange={handleFormChange2}
                                        value={formData2.importe}
                                      />
                                    </Form.Group>
                                  </td>
                                  <td width={'77px'}>
                                    {' '}
                                    <Icon  onClick={handleDeleteAll2}>
        <DeleteIcon fontSize="large" color="secondary" />
      </Icon>
                            
                                  </td>
                                </tr>
                                {todos2.map((todo2) => (
                                  <tr key={todo2.id}>
                                    <td>
                                      <strong>{todo2.forma_pago}</strong>
                                    </td>
                                    <td>
                                      <strong>{todo2.banco}</strong>
                                    </td>
                                    <td>
                                      <strong>{todo2.cuenta}</strong>
                                    </td>
                                    <td>
                                      <strong>{todo2.clabe}</strong>
                                    </td>
                                    <td>
                                      <strong>${todo2.importe}</strong>
                                    </td>
                                    <td>
                                      {' '}
                                      <Icon  onClick={() =>
                                          handleDeleteTodo2(todo2.id)
                                        }>
        <DeleteIcon fontSize="small" color="secondary" />
      </Icon>
                                
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </Col>
                      </Tab>
                    </Tabs>
                    <Row className='mt-3 mb-5'>
                      <Col md={{ span: 12, offset: 0 }}>
                        <FloatingLabel
                          controlId='floatingTextarea2'
                          label='Comentarios'
                        >
                          <Form.Control
                            as='textarea'
                            placeholder='Comentario'
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Row className='mb-3' >
                      <Col xs={12} sm={12} lg={6} md={6}>
                        <Card>
                          <Card.Body>
                            <Card.Title>Solicitante</Card.Title>
                            <Form.Group className='pb-3 pt-3'>
                              <FloatingLabel
                                controlId='floatingSelect'
                                label='Nombre(s) y Apellido(s)'
                              >
                                <Form.Control
                                  type='text'
                                  name='folio'
                                  placeholder='Folio Factura'
                                />
                              </FloatingLabel>
                              <Row>
                                <Col>
                                  <Form.Group className='pb-3 pt-3'>
                                    <FloatingLabel
                                      controlId='floatingSelect'
                                      label='Fecha Creación'
                                    >
                                      <Form.Control
                                        type='date'
                                        name='fecha_aprob'
                                        placeholder='Fecha Aprobación'
                                      />
                                    </FloatingLabel>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Form.Group>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col  xs={12} sm={12} lg={6} md={6}>
                        <Card>
                          <Card.Body>
                            <Card.Title>Aprobador</Card.Title>
                            <Form.Group className='pb-3 pt-3'>
                              <FloatingLabel
                                controlId='floatingSelect'
                                label='Nombre(s) y Apellido(s)'
                              >
                                <Form.Control
                                  type='text'
                                  name='folio'
                                  placeholder='Folio Factura'
                                />
                              </FloatingLabel>
                              <Row>
                                <Col>
                                  <Form.Group className='pb-3 pt-3'>
                                    <FloatingLabel
                                      controlId='floatingSelect'
                                      label='Fecha Creación'
                                    >
                                      <Form.Control
                                        type='date'
                                        name='fecha_aprob'
                                        placeholder='Fecha Aprobación'
                                      />
                                    </FloatingLabel>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Form.Group>
                          </Card.Body>
                        </Card>
                      </Col>
                      </Row>
                    <Row>
                      <Col md={{ span: 8, offset: 2 }}>
                        <Card
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                          }}
                          className='justify-row-center'
                        >
                          {' '}
                          {/*   <PresuPie />*/}
                          <Presupuesto />
                        </Card>
                      </Col>
                    </Row>
                    <Row className='mb-3 mt-3'>
                      <div className='btn-submit'>
                        <div className='btn'>
                          <Button variant='primary' onClick={handleSubmit}>
                            Guardar
                          </Button>
                        </div>
                        <div className='btn'>
                          <Button variant='btn btn-outline-secondary'>
                            Cancelar
                          </Button>{' '}
                        </div>
                      </div>
                    </Row>
                  </Container>
                </Card>
                <br></br>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fm_Gastos;
