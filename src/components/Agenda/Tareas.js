import React, { useState } from 'react';
import { ListGroup, Button, Form, Row, Container, Col } from 'react-bootstrap';
import '../../css/Tareas.css';
import AddIcon from '@material-ui/icons/Add';
import { Icon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleAgregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const handleEditarTarea = (index, value) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = value;
    setTareas(nuevasTareas);
  };

  const handleEliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <Container className='tareas-container'>
      <h1 className='mb-5 mt-5'>Tareas</h1>
      <Row className='mb-5'>
        <Col xs={9} md={10} lg={10}>
          <Form.Control
            type='text'
            placeholder='Nueva tarea'
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
        </Col>
        <Col xs={3} md={1} lg={1} className='text-center mt-1 mt-md-0'>
          <Icon onClick={handleAgregarTarea}>
            <AddIcon fontSize='large' color='primary' />
          </Icon>
        </Col>
      </Row>
      <ListGroup>
        {tareas.map((tarea, index) => (
          <ListGroup.Item className='list-group-item-no-border' key={index}>
            <Row>
              <Col sm={8} xs={8} md={10} lg={10}>
                <Form.Control
                  type='text'
                  disabled
                  value={tarea}
                  onChange={(e) => handleEditarTarea(index, e.target.value)}
                />
              </Col>
              <Col xs={3} md={2} lg={1} className='text-center mt-1 mt-md-04'>
                <Icon onClick={() => handleEliminarTarea(index)}>
                  <DeleteIcon fontSize='large' color='secondary' />
                </Icon>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Tareas;
