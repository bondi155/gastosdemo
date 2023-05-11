import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import '../../css/Agenda.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import { Icon } from '@material-ui/core';

function TelAgenda() {
  const [contactos, setContactos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const[correo, setCorreo] = useState('');

  const agregarContacto = () => {
    if (nombre !== '' && telefono !== '' && correo !== '') {
      const nuevoContacto = { nombre, telefono, correo };
      setContactos([...contactos, nuevoContacto]);
      setNombre('');
      setTelefono('');
      setCorreo('');
    }
  };

  const editarContacto = (index) => {
    const nuevoNombre = prompt('Ingrese el nuevo nombre:', contactos[index].nombre);
    const nuevoTelefono = prompt('Ingrese el nuevo teléfono:', contactos[index].telefono);
    const nuevoCorreo = prompt('Ingrese el nuevo Correo:', contactos[index].correo);


    if (nuevoNombre !== null && nuevoTelefono !== null && nuevoCorreo !== null) {
      const nuevosContactos = [...contactos];
      nuevosContactos[index].nombre = nuevoNombre;
      nuevosContactos[index].telefono = nuevoTelefono;
      nuevosContactos[index].correo = nuevoCorreo;

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
            required
            placeholder="Ingrese el nombre del contacto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            maxLength={20}
          />
        </Form.Group>

        <Form.Group className='mt-2' controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el teléfono del contacto"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value.slice(0, 10))}
            maxLength={10}
          />
        </Form.Group>

        <Form.Group className='mt-2' controlId="formTelefono">
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese correo del contacto"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>
        <Button size='sm' variant="primary" className='mt-3' type="submit">
          Agregar Contacto
        </Button>
      </Form>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{contacto.nombre}</td>
              <td>{contacto.telefono}</td>
              <td>{contacto.correo}</td>
              <td>
              &nbsp;

               <Icon className='icono-edi mr-2' onClick={() => editarContacto(index)} style={{ marginRight: '1rem' }}>
              <EditIcon fontSize="medium" color="primary" />
            </Icon>
                <Icon
              className='icono-elim'
              onClick={() => eliminarContacto(index)}
            >
              <DeleteIcon fontSize="medium" color="secondary" />
              </Icon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TelAgenda;