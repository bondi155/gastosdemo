import React, { useState } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from '../../css/Tareas.module.css';
const cx = classNames.bind(styles);

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleAgregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
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
    <div className={cx("tareas-container")}>
      <h1 className="mb-5">Tareas</h1>
      <div className={cx("mb-5 agregar-tarea")}>
        <Form.Control
          type="text"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <Button variant="primary" size="sm" className="mt-3" onClick={handleAgregarTarea}>
          Agregar
        </Button>
      </div>
      <ListGroup>
        {tareas.map((tarea, index) => (
          <ListGroup.Item key={index}>
            <Form.Control
              type="text"
              value={tarea}
              onChange={(e) => handleEditarTarea(index, e.target.value)}
            />
            <Button
              variant="danger"
              size="sm"
              className="mt-1"
              onClick={() => handleEliminarTarea(index)}
            >
              Eliminar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
   
    </div>
  );
};

export default Tareas;