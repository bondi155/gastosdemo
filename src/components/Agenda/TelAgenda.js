import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import classNames from 'classnames';
import '../../css/Agenda.css';
function TelAgenda() {
  const [contactos, setContactos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const agregarContacto = () => {
    if (nombre !== '' && telefono !== '') {
      const nuevoContacto = { nombre, telefono };
      setContactos([...contactos, nuevoContacto]);
      setNombre('');
      setTelefono('');
    }
  };

  const editarContacto = (index) => {
    const nuevoNombre = prompt('Ingrese el nuevo nombre:', contactos[index].nombre);
    const nuevoTelefono = prompt('Ingrese el nuevo teléfono:', contactos[index].telefono);

    if (nuevoNombre !== null && nuevoTelefono !== null) {
      const nuevosContactos = [...contactos];
      nuevosContactos[index].nombre = nuevoNombre;
      nuevosContactos[index].telefono = nuevoTelefono;
      setContactos(nuevosContactos);
    }
  };

  const eliminarContacto = (index) => {
    const nuevosContactos = [...contactos];
    nuevosContactos.splice(index, 1);
    setContactos(nuevosContactos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    agregarContacto();
  };

  return (
    <div className="agenda">
      <h1>Agenda de Contactos</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del contacto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el teléfono del contacto"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>

        <Button size='sm' variant="primary" className='mt-3' type="submit">
          Agregar Contacto
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{contacto.nombre}</td>
              <td>{contacto.telefono}</td>
              <td>
                <Button
                  variant="warning"
                  size='sm'
                  className={classNames('editar', { 'mr-2': index !== contactos.length - 1 })}
                  onClick={() => editarContacto(index)}
                >
                  Editar
                </Button>
                &nbsp;
                <Button
                  variant="danger"
                  size='sm'
                  className={classNames('eliminar', { 'ml-2': index !== 0 })}
                  onClick={() => eliminarContacto(index)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TelAgenda;