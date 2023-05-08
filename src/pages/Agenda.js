import React, { useState } from 'react';
import TelAgenda from '../components/Agenda/TelAgenda';
import Tareas from '../components/Agenda/Tareas';
import { Card, Row, Col, Tab, Tabs } from "react-bootstrap";

function Agenda() {
 

  return (
   <>
<Card>
      <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
      <Tabs defaultActiveKey='agenda'>
      <Tab eventKey='agenda' title='Agenda'>
        <TelAgenda />
      </Tab>
      <Tab eventKey='tareas' title='Tareas'>
        <Tareas />
      </Tab>
    </Tabs>
      </Card.Body>
    </Card>
   </>
  );
}

export default Agenda;