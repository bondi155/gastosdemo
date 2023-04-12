import React, { useState } from 'react';
import { Form, Card, Table } from 'react-bootstrap';
import { Row, Container, Col, Button, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

function FmIngresos() {
  const [formIng, setFormIng] = useState({
    formato_ing: 'Formato para gestión de ingresos',
    fto: 'FTO-CJEALT-001',
    sector: 'contraloria',
    razon_social: '',
    fecha_elabora: '',
    folio: '',
    fecha_fac: '',
    ceco: '',
    empresa_pagadora: '',
    concepto: '',
    area: '',
    tipo_partida: '',
    articulo: '',
    descripcion: '',
    precioUni: '',
    subtotal: '',
    descuento: '',
    iva: '',
    total: '',
  });

  const sendFormIng = (event) => {
    axios
      .post('http://localhost:5005/postforming', {
        formato_ing: formIng.formato_ing,
        fto: formIng.fto,
        sector: formIng.sector,
        razon_social: formIng.razon_social,
        fecha_elabora: formIng.fecha_elabora,
        folio: formIng.folio,
        fecha_fac: formIng.fecha_fac,
        ceco: formIng.ceco,
        empresa_pagadora: formIng.empresa_pagadora,
        concepto: formIng.concepto,
        area: formIng.area,
        tipo_partida: formIng.tipo_partida,
        articulo: formIng.articulo,
        descripcion: formIng.descripcion,
        precioUni: formIng.precioUni,
        subtotal: formIng.subtotal,
        descuento: formIng.descuento,
        iva: formIng.iva,
        total: formIng.total,
      })
      .then(() => {
        alert(
          'Formulario Cargado Correctamente , se genero su numero de Folio '
        );
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
    event.target.reset();
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setFormIng({
      ...formIng,
      [event.target.name]: event.target.value,
    });
  };

  const divStyle = {
    backgroundColor: '#f58220b3',
  };

  return (
    <>
      <div className='App'>
        <Container className='mb-2'>
          <Row className='pt-2'>
            <Col md={2} className='mt-4'></Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className='titulo pt-3'>
                <h1>Gastos</h1>
              </div>
            </Col>
            <Col md={{ span: 2, offset: 2 }} className='mt-4'>
              <Form.Group className='mb-3'>
                <FloatingLabel
                  controlId='floatingSelect'
                  label='Fecha Creación'
                >
                  <Form.Control
                    type='date'
                    name='fecha_elabora'
                    placeholder='Fecha Elaboración'
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <Form onSubmit={sendFormIng} className='mt-3' action='/home'>
          <div className='formulario'>
            <Card>
              <Container>
                <Row>
                  <Card.Header style={divStyle} className='mb-3'>
                    <strong>Cliente / Pre factura</strong>
                  </Card.Header>
                  <Col md={12}>
                    <Form.Group className='mb-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Razon Social'
                      >
                        <Form.Select
                          aria-label='Default select example'
                          name='razon_social'
                          value={formIng.razon_social}
                          onChange={handleInputChange}
                        >
                          <option disabled value=''>
                            {' '}
                          </option>
                          <option value='cfe'>Holyday Inn</option>
                          <option value='office max'>Grupo Malazo</option>
                          <option value='Uber'>Afianzadora Aserta</option>
                          <option value='microsoft'>Magna Servicios</option>
                          <option value='caminoreal'>Gas del Norte</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group className='mb-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Fecha Facturación'
                      >
                        <Form.Control
                          type='date'
                          name='fecha_fac'
                          placeholder='Fecha Facturación'
                          onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                  <Col md={{ span: 6, offset: 2 }}>
                    <Form.Group className='mb-3'>
                      <FloatingLabel controlId='floatingSelect' label='Folio'>
                        <Form.Control
                          type='text'
                          name='folio'
                          placeholder='Folio Factura'
                          onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group className='mb-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Descripción'
                      >
                        <Form.Control
                          type='text'
                          name='descripcion'
                          placeholder='Descripción'
                          onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Card>
            <br></br>
            <Card className='mt-1'>
              <Container className='mb-3 '>
                <Row>
                  <Card.Header style={divStyle} className='mb-3'>
                    <strong>Presupuesto</strong>
                  </Card.Header>
                  <Col md={12}>
                    <Form.Group className='mb-3 mt-1'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Compañia facturadora'
                      >
                        <Form.Control
                          type='text'
                          name='empresa_pagadora'
                          placeholder='Compañia facturadora'
                          onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Centro de Costo'
                      >
                        <Form.Select
                          aria-label='Default select example'
                          name='ceco'
                          value={formIng.ceco}
                          onChange={handleInputChange}
                        >
                          <option disabled value=''>
                            {' '}
                          </option>
                          <option value='ceco1'>ceco 1</option>
                          <option value='2'>*</option>
                          <option value='3'>*</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                  <Col md={8}></Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <Form.Group>
                      <FloatingLabel controlId='floatingSelect' label='Area'>
                        <Form.Select
                          aria-label='Default select example'
                          name='area'
                          value={formIng.area}
                          onChange={handleInputChange}
                        >
                          <option disabled value=''>
                            {' '}
                          </option>
                          <option value='Area1'>Area1</option>
                          <option value='2'>*</option>
                          <option value='3'>*</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Card>
          </div>
          <div className='grids'>
            <Container>
              <Row>
                <Col lg>
                  <Card className='mt-3'>
                    <Card.Header style={divStyle} className='mb-3 pt-3'>
                      <strong>Lineas</strong>
                    </Card.Header>
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Cod.Articulo</th>
                          <th>Descripción</th>
                          <th>Cantidad</th>
                          <th>P.U</th>
                          <th>Dscto.</th>
                          <th>Subtotal</th>
                          <th>IVA</th>
                          <th>Total</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>
                            {' '}
                            <Button variant='primary' size='sm'>
                              Agregar
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg>
                  <Card className='mt-3'>
                    <Card.Header style={divStyle} className='mb-3 pt-3'>
                      <strong>Pago</strong>
                    </Card.Header>
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tipo</th>
                          <th>Banco</th>
                          <th>Cuenta</th>
                          <th>Clabe</th>
                          <th>Importe.</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>1</td>
                          <td>Mark</td>
                          <td>
                            {' '}
                            <Button variant='primary' size='sm'>
                              Guardar
                            </Button>
                          </td>
                        </tr>
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
            </Container>
          </div>

          <div className='cont-cards'>
            <CardGroup>
              <div className='btn'>
                <Card className='pb-3 mt-3 mb-3' style={{ width: '20rem' }}>
                  <Card.Body>
                    <Card.Title>Solicitante</Card.Title>
                    <Form.Group className='pb-3 pt-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Solicitante'
                      >
                        <Form.Control
                          type='text'
                          name='folio'
                          placeholder='Folio Factura'
                          // onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Row>
                      <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className='pb-3 pt-3'>
                          <FloatingLabel
                            controlId='floatingSelect'
                            label='Fecha'
                          >
                            <Form.Control
                              type='date'
                              name='fecha_aprob'
                              placeholder='Fecha'
                              // onChange={handleInputChange}
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
              <div className='btn'>
                <Card className='pb-3 mt-3 mb-3' style={{ width: '20rem' }}>
                  <Card.Body>
                    <Card.Title>Autoriza</Card.Title>
                    <Form.Group className='pb-3 pt-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Autoriza'
                      >
                        <Form.Control
                          type='text'
                          name='autoriza'
                          placeholder='Autoriza'
                          // onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Row>
                      <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className='pb-3 pt-3'>
                          <FloatingLabel
                            controlId='floatingSelect'
                            label='Fecha'
                          >
                            <Form.Control
                              type='date'
                              name='fecha_aprob'
                              placeholder='Fecha'
                              // onChange={handleInputChange}
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
          <div className='btn-submit pb-1'>
            <div className='btn'>
              <Button variant='primary' size='sm'>
                Guardar
              </Button>
            </div>
            <div className='btn'>
              <Button variant='outline-primary' size='sm'>
                Cancelar
              </Button>{' '}
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default FmIngresos;
