import React, { useState } from 'react';
import { Form, Card, Table } from 'react-bootstrap';
import { Row, Container, Col, Button, CardGroup } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Presupuesto from '../maps/Presupuesto';

function FmIngresos() {
  const divStyle = {
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

  return (
    <div className='App'>
      <Container className='mb-2'>
        <Row className='pt-2'>
          <Col md={2} className='mt-4'></Col>
          <Col md={{ span: 4, offset: 2 }}>
            <div className='titulo pt-3'>
              <h1>Ingresos</h1>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 2 }} className='mt-4'>
            <Form.Group className='mb-3'>
              <FloatingLabel
                controlId='floatingSelect'
                label='Fecha De Creación'
              >
                <Form.Control type='date' name='fecha_elabora' />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <div className='scale'>
      <div className='formulario'>
        {/*<Presupuesto />*/}  
        <Form className='mt-3' action='/home'>
            <Card>
              <Container className='card-gastos'>
                <Card.Header style={divStyle} className='mb-2 mt-1'>
                  <strong>Cliente/Pre factura</strong>
                </Card.Header>
                <Row>
                  <Col md={4}>
                    <Form.Group className='mb-3'>
                      <Form.Select
                        aria-label='Default select example'
                        name='razon_social'
                      >
                        <option>Razon Social Proveedor</option>
                        <option value='cfe'>CFE Centro</option>
                        <option value='office max'>Office Max</option>
                        <option value='Uber'>Uber</option>
                        <option value='microsoft'>Microsoft</option>
                        <option value='caminoreal'>Camino Real</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
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
                  <Col md={12}>
                    <Form.Group className='mb-3'>
                      <Form.Control
                        type='text'
                        placeholder='Descripción Factura'
                        name='descripcion'
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Card.Header style={divStyle} className='mb-2 mt-1'>
                  <strong>Presupuesto</strong>
                </Card.Header>
                <Row>
                  <Col className='mb-2' md={4}>
                    <Form.Group className='mb-3'>
                      <Form.Control
                        type='text'
                        placeholder='Compañia Facturadora'
                        name='empresa_pagadora'
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Select
                        aria-label='Default select example'
                        name='area'
                      >
                        <option>Area </option>
                        <option value='finanza'>Finanzas</option>
                        <option value='administracion'>Administración</option>
                        <option value='rrhh'>RRHH</option>
                        <option value='audito'>Auditoria</option>
                        <option value='marketing'>Marketing</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
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
                <Row>
                  <Col lg>
                      <Card.Header style={divStyle} className='mb-1 pt-3'>
                        <strong>Lineas de la factura o recibo</strong>
                      </Card.Header>
                      <Card className='mt-3'>
                      <Table responsive striped bordered hover>
                        <thead>
                          <tr>
                            <th>Cod.Articulo</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Precio U.</th>
                            <th>Dscto.</th>
                            <th>Subtotal</th>
                            <th>IVA</th>
                            <th>Total</th>
                            <th>
                              {' '}
                              <Button
                                onClick={handleAddToDo}
                                variant='primary mt-2'
                                size='sm'
                              >
                               <strong> + </strong> {' '}
                              </Button>
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
                            <td width={'12%'}>
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
                            <td width={'77px'}>
                              {' '}
                              <Button
                                variant='danger'
                                onClick={handleDeleteAll}
                                size='sm'
                              >
                             <strong>X</strong>  
                              </Button>
                            </td>
                          </tr>
                          {todos.map((todo) => (
                            <tr key={todo.id}>
                              <td><strong>{todo.cod_art}</strong></td>
                              <td><strong>{todo.desc_fac}</strong></td>
                              <td><strong>{todo.cantidad}</strong></td>
                              <td><strong>${todo.precioU}</strong></td>
                              <td><strong>${todo.descuento}</strong></td>
                              <td><strong>${todo.subtotal}</strong></td>
                              <td><strong>${todo.iva}</strong></td>
                              <td><strong>${todo.total}</strong></td>
                              <td>
                                {' '}
                                <Button
                                  variant='danger'
                                  size='sm'
                                  onClick={() => handleDeleteTodo(todo.id)}
                                >
                                  x{' '}
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col lg>
                      <Card.Header style={divStyle} className=' mt-3 mb-2 pt-3'>
                        <strong>Detalle del pago</strong>
                      </Card.Header>
                      <Card className='mt-3'>
                      <Table responsive striped bordered hover>
                        <thead>
                          <tr>
                            <th>Forma de Pago</th>
                            <th>Banco</th>
                            <th>Cuenta</th>
                            <th>Clabe</th>
                            <th>Importe</th>
                            <th>
                              {' '}
                              <Button
                                variant='primary mt-2'
                                onClick={handleAddToDo2}
                                size='sm'
                              >
                               <strong>+</strong>
                              </Button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td width={'16%'}>
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
                                  <option value='Deposito'>Deposito</option>
                                  <option value='Cheque'>Cheque</option>
                                  <option value='Efectivo'>Efectivo</option>
                                </Form.Select>
                              </Form.Group>
                            </td>
                            <td width={'16%'}>
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
                                  <option value='Santander'>Santander</option>
                                  <option value='Hbsc'>HBSC</option>
                                  <option value='Azteca'>Ban.Azteca</option>
                                </Form.Select>
                              </Form.Group>
                            </td>
                            <td width={'18%'}>
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
                            <td>
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
                            <td width={'18%'}>
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
                              <Button
                                variant='danger'
                                onClick={handleDeleteAll2}
                                size='sm'
                              >
                             <strong>X</strong>  
                              </Button>
                            </td>
                          </tr>
                          {todos2.map((todo2) => (
                            <tr key={todo2.id}>
                              <td><strong>{todo2.forma_pago}</strong></td>
                              <td><strong>{todo2.banco}</strong></td>
                              <td><strong>{todo2.cuenta}</strong></td>
                              <td><strong>{todo2.clabe}</strong></td>
                              <td><strong>${todo2.importe}</strong></td>
                              <td>
                                {' '}
                                <Button
                                  variant='danger'
                                  onClick={() => handleDeleteTodo2(todo2.id)}
                                  size='sm'
                                >
                                   x {' '}
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
                <Row className='mt-3 pb-3 pt-3'>
                  <Col xs={12}>
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
                <Row>
                  <div className='cont-cards'>
                    <CardGroup>
                      <div className='btn'>
                        <Card
                          className='pb-3 mt-3 mb-3'
                          style={{ width: '30.7rem' }}
                          id='card-soli'
                        >
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
                            </Form.Group>
                            <Row>
                              <Col md={{ span: 6, offset: 3 }}>
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
                          </Card.Body>
                        </Card>
                      </div>
                      <div className='btn'>
                        <Card
                          className='pb-3 mt-3 mb-3'
                          style={{ width: '30.7rem' }}
                          id='card-soli'

                        >
                          <Card.Body>
                            <Card.Title>Autoriza</Card.Title>
                            <Form.Group className='pb-3 pt-3'>
                              <FloatingLabel
                                controlId='floatingSelect'
                                label='Nombre(s) y Apellido(s)'
                              >
                                <Form.Control
                                  type='text'
                                  name='autoriza'
                                  placeholder='Autoriza'
                                  // onChange={handleFormChange}
                                />
                              </FloatingLabel>
                            </Form.Group>
                            <Row>
                              <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className='pb-3 pt-3'>
                                  <FloatingLabel
                                    controlId='floatingSelect'
                                    label='Fecha Creación'
                                  >
                                    <Form.Control
                                      type='date'
                                      name='fecha_aprob'
                                      placeholder='Fecha Aprobación'
                                      // onChange={handleFormChange}
                                    />
                                  </FloatingLabel>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </div>
                    </CardGroup>
                  </div>
                </Row>
                <Row className='mb-3'>
                    <div className='btn-submit'>
                      <div className='btn'>
                        <Button variant='primary'>Guardar</Button>
                      </div>
                      <div className='btn'>
                        <Button variant='btn btn-outline-secondary'>Cancelar</Button>
                      </div>
                    </div>
                </Row>
              </Container>
            </Card>
            <br></br>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default FmIngresos;
