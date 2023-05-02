import React, { useState } from 'react';
import TelAgenda from '../components/Agenda/TelAgenda';
import Tareas from '../components/Agenda/Tareas';
import { Card, Row, Col } from "react-bootstrap";
import styles from '../css/Tareas.module.css';

function Agenda() {
 

  return (
   <>
<Card>
      <Card.Body>
        <Row className="justify-content-center">
        <Col md={4} className={styles.tareas}>
            <TelAgenda />
          </Col>
          <Col md={{ span: 4, offset: 2}}>
          <Tareas />
          </Col>
         
          
        </Row>
      </Card.Body>
    </Card>
   </>
  );
}

export default Agenda;