import React, { useState } from 'react';
import { Form, Card, Table } from 'react-bootstrap';
import { Row, Container, Col, Button, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Formulario() {
  const [formGasto, setFormGasto] = useState({
    formato_pago: 'Formato para pago de gastos',
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

  const sendFormGasto = (event) => {
    axios
      .post('http://localhost:5005/postformgasto', {
        formato_pago: formGasto.formato_pago,
        fto: formGasto.fto,
        sector: formGasto.sector,
        razon_social: formGasto.razon_social,
        fecha_elabora: formGasto.fecha_elabora,
        folio: formGasto.folio,
        fecha_fac: formGasto.fecha_fac,
        ceco: formGasto.ceco,
        empresa_pagadora: formGasto.empresa_pagadora,
        concepto: formGasto.concepto,
        area: formGasto.area,
        tipo_partida: formGasto.tipo_partida,
        articulo: formGasto.articulo,
        descripcion: formGasto.descripcion,
        precioUni: formGasto.precioUni,
        subtotal: formGasto.subtotal,
        descuento: formGasto.descuento,
        iva: formGasto.iva,
        total: formGasto.total,
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
    setFormGasto({
      ...formGasto,
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

        <Form onSubmit={sendFormGasto} className='mt-3' action='/home'>
          <div className='formulario'>
            <Card>
              <Container>
                <Row>
                  <Card.Header style={divStyle} className='mb-3'>
                    <strong>Proveedor/Factura</strong>
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
                          value={formGasto.razon_social}
                          onChange={handleInputChange}
                        >
                          <option disabled value=''>
                            {' '}
                          </option>
                          <option value='cfe'>CFE Centro</option>
                          <option value='office max'>Office Max</option>
                          <option value='Uber'>Uber</option>
                          <option value='microsoft'>Microsoft</option>
                          <option value='caminoreal'>Camino Real</option>
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
            <Card className='mt-3'>
              <Container className='mb-5 '>
                <Row>
                  <Card.Header style={divStyle} className='mb-3'>
                    <strong>Presupuesto</strong>
                  </Card.Header>
                  <Col md={12}>
                    <Form.Group className='mb-3 mt-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Compañia'
                      >
                        <Form.Control
                          type='text'
                          name='empresa_pagadora'
                          placeholder='Empresa Pagadora'
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
                        label='Tipo de partida Presupuestal'
                      >
                        <Form.Select
                          aria-label='Default select example'
                          name='tipo_partida'
                          value={formGasto.tipo_partida}
                          onChange={handleInputChange}
                        >
                          <option disabled value=''>
                            {' '}
                          </option>
                          <option value='tipo1'>tipo 1</option>
                          <option value='2'>*</option>
                          <option value='3'>*</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Centro de Costo'
                      >
                        <Form.Select
                          aria-label='Default select example'
                          name='ceco'
                          value={formGasto.ceco}
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
                </Row>
                <Row>
                  <Col md={8}>
                    <Form.Group className='mb-3'>
                      <FloatingLabel controlId='floatingSelect' label='Area'>
                        <Form.Select
                          aria-label='Default select example'
                          name='area'
                          value={formGasto.area}
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
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
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
        
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>1</td>
          <td>Mark</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
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
            <div className='cont-cards'>
        <CardGroup> 
      <div className='btn'>          
        <Card className='pb-3 mt-3 mb-3' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Solicitante</Card.Title>
                <Form.Group className='pb-3 pt-3'>
                  <FloatingLabel controlId='floatingSelect' label='Solicitante'>
                    <Form.Control
                      type='text'
                      name='folio'
                      placeholder='Folio Factura'
                      // onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className='pb-3 pt-3'>
                  <FloatingLabel
                    controlId='floatingSelect'
                    label='Fecha Creación'
                  >
                    <Form.Control
                      type='date'
                      name='fecha_aprob'
                      placeholder='Fecha Aprobación'
                      // onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Card.Body>
            </Card>
            </div>
            <div className='btn'>
            <Card className='pb-3 mt-3 mb-3' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Autoriza</Card.Title>
                <Form.Group className='pb-3 pt-3'>
                  <FloatingLabel controlId='floatingSelect' label='Autoriza'>
                    <Form.Control
                      type='text'
                      name='autoriza'
                      placeholder='Autoriza'
                      // onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className='pb-3 pt-3'>
                  <FloatingLabel
                    controlId='floatingSelect'
                    label='Fecha Creación'
                  >
                    <Form.Control
                      type='date'
                      name='fecha_aprob'
                      placeholder='Fecha Aprobación'
                      // onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Card.Body>
            </Card>
                  </div>
                  </CardGroup>
                  </div>

          <div className='btn'>
          <Button variant='primary'>Guardar</Button>
          </div>
          <div className='btn'>
          <Button variant='primary'>Cancelar</Button>{' '}
          </div>

          </div>

          
        </Form>
        
      </div>
    </>
  );
}

export default Formulario;
