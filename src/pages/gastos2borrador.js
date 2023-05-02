import React, { useState } from 'react';
import { Form, Card, Table } from 'react-bootstrap';
import { Row, Container, Col, Button, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Fm_Gastos() {
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
                  label='Fecha De Creación'
                >
                  <Form.Control
                    type='date'
                    name='fecha_elabora'
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <div className='scale'> 
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
                        label='Razon Social Proveedor'
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
                      <FloatingLabel
                        controlId='floatingSelect'
                        label='Folio Factura'
                      >
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
                        label='Descripción Factura'
                     
                      >
                        <Form.Control
                          type='text'
                          placeholder='Descripción Factura'
                          name='descripcion'
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
                  <Col className='mb-3' md={6}>
                    <FloatingLabel
                      controlId='floatingSelect'
                      label='Compañia del Corporativo'
                    >
                      <Form.Select
                        aria-label='Default select example'
                        name='empresa_pagadora'
                        value={formGasto.razon_social}
                        onChange={handleInputChange}
                      >
                        <option disabled value=''>
                          {' '}
                        </option>
                        <option value='Empresa 1'>Empresa 1</option>
                        <option value='Empresa 2'>Empresa 2</option>
                        <option value='Empresa 3'>Empresa 3</option>
                        <option value='microsoft'>Empresa 4</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
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
                          <option value='finanza'>Finanzas</option>
                          <option value='administracion'>Administración</option>
                          <option value='rrhh'>RRHH</option>
                          <option value='audito'>Auditoria</option>
                          <option value='marketing'>Marketing</option>
                        </Form.Select>
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
                          <option value='1'>Viaticos</option>
                          <option value='2'>Anticipos</option>
                          <option value='3'>Servicios</option>
                          <option value='4'>Licencias</option>
                          <option value='5'>Moviliaria</option>

                          <option value='6'>Papeleria</option>
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
                          <option value='1'>Nómina</option>
                          <option value='2'>Legal</option>
                          <option value='3'>RRHH</option>
                          <option value='4'>Contabilidad</option>
                          <option value='5'>Contraloria</option>
                          <option value='6'>SAC</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row></Row>
              </Container>
            </Card>
          </div>
          <div className='grids'>
            <Container>
              <Row>
                <Col lg>
                  <Card className='mt-3'>
                    <Card.Header style={divStyle} className='mb-3 pt-3'>
                      <strong>Lineas de la factura o recibo</strong>
                    </Card.Header>
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>Cod.Articulo</th>
                          <th>Descripción</th>
                          <th>Cantidad</th>
                          <th>Precio Unitario</th>
                          <th>Dscto.</th>
                          <th>Subtotal</th>
                          <th>IVA</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>89786453</td>
                          <td>Uber Querétaro</td>
                          <td>1</td>
                          <td>$ 320.00</td>
                          <td>$ 0.00</td>
                          <td>$ 320.00</td>
                          <td>$ 51.20</td>
                          <td>$ 371.20</td>
                          <td>
                            {' '}
                            <Button variant='danger' size='sm'>
                              Eliminar{' '}
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row>{/* acordarse darle responsive para tablet y este boton hace mas margen del lado derecho , acomodarlos diferentes a ambos */}
                      <Col className='mb-2 ' md={{ span: 4, offset: 9 }}>
                        <Button variant='primary mt-2' size='sm'>
                          Agr. linea{' '}
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg>
                  <Card className='mt-3'>
                    <Card.Header style={divStyle} className='mb-3 pt-3'>
                      <strong>Detalle del pago</strong>
                    </Card.Header>
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>Forma de Pago</th>
                          <th>Banco</th>
                          <th>Cuenta</th>
                          <th>Clabe</th>
                          <th>Importe</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>T.C.</td>
                          <td>Santander</td>
                          <td>789056789</td>
                          <td>1234567891234567</td>
                          <td>$ 371.20</td>
                          <td>$ 371.20</td>

                          <td>
                            {' '}
                            <Button variant='danger' size='sm'>
                              Eliminar{' '}
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row>
                      <Col className='mb-2 ' md={{ span: 4, offset: 9}}>
                        <Button variant='primary mt-2' size='sm'>
                          Agr. linea{' '}
                        </Button>
                      </Col>
                    </Row>
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
                <Card className='pb-3 mt-3 mb-3' style={{ width: '22rem' }}>
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
                <Card className='pb-3 mt-3 mb-3' style={{ width: '22rem' }}>
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
                          // onChange={handleInputChange}
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
          <div className='btn-submit'>
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
      </div>
    </>
  );
}

export default Fm_Gastos;
