import React from 'react';
import {
  Row,
  Container,
  Col,
  Button,
  Card,
  Form,
  CardGroup,
} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootswatch/dist/darkly/bootstrap.min.css'; // Added this :boom:


//en vez de hacer esta pantalla podemos agregar las variables de usuario que entra y aprobador en el formulario principal.
//en otra panatlla luego buscar por folio o id y aprobar o no... la consulta seria un grid por usuario osea que solo le aparezca al usuario
function Aprob() {
  const divStyle = {
    backgroundColor: '#375a7f',
  };
  return (
    <div className='App'>
      <h1 className='titulo mt-3 mb-4'>Aprobación</h1>
      <div className='formulario'>
        <Card>
          <Container>
            <Row>
              <Card.Header className='mb-3' style={divStyle}>
                <strong>Pago</strong>
              </Card.Header>
              <Col md={2}>
                <Form.Group className='mb-3'>
                  <FloatingLabel controlId='floatingSelect' label='Tipo'>
                    <Form.Select
                      aria-label='Default select example'
                      name='tipo'
                      //value={formGasto.razon_social}
                      //onChange={handleInputChange}
                    >
                      <option disabled value=''>
                        {' '}
                      </option>
                      <option value='SAT'>SAT</option>
                      <option value='2'>*</option>
                      <option value='3'>*</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className='mb-3'>
                <FloatingLabel controlId='floatingSelect' label='Banco'>

                    <Form.Select
                      aria-label='Default select example'
                      name='banco'
                      //value={formGasto.razon_social}
                      //onChange={handleInputChange}
                    >
                      <option disabled value=''>
                        {' '}
                      </option>
                      <option value='SAT'>Banco1</option>
                      <option value='2'>*</option>
                      <option value='3'>*</option>
                    </Form.Select>
                    </FloatingLabel>

                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className='mb-3'>
                  <FloatingLabel controlId='floatingSelect' label='Cuenta'>
                    <Form.Control
                      type='text'
                      name='cuenta'
                      placeholder='Cuenta'
                      //onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className='mb-3'>
                  <FloatingLabel controlId='floatingSelect' label='Clabe'>
                    <Form.Control
                      type='text'
                      name='clabe'
                      placeholder='Clabe'
                      //onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className='mb-3'>
                  <FloatingLabel controlId='floatingSelect' label='Importe'>
                    <Form.Control
                      type='number'
                      name='importe'
                      placeholder='Importe'
                      //onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
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
        </Card>
      </div>

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
  );
}

export default Aprob;
