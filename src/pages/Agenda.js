import React, { useState } from 'react';
import TelAgenda from '../components/Agenda/TelAgenda';
import Tareas from '../components/Agenda/Tareas';
import { Container, Row, Col, Card, Tabs, Tab } from "react-bootstrap";

function Agenda() {
 

  return (
   <>
<Container className='mt-5'>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={10} lg={10}>
            <Card>
              <Card.Body>
                <Tabs defaultActiveKey="agenda">
                  <Tab className='mt-2' eventKey="agenda" title="Agenda">
                    <TelAgenda />
                  </Tab>
                  <Tab  className='mt-2' eventKey="tareas" title="Tareas">
                    <Tareas />
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
   </>
  );
}

export default Agenda;