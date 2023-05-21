import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Container, Button, Spinner } from 'react-bootstrap';

function OpenIA() {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Agregar el mensaje del usuario al array de mensajes anteriormente enviado +
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: prompt, sender: 'Usuario' },
    ]);
    axios
 .post('http://localhost:5005/chatcompl', {
        prompt,
        messages
      })
      .then((response) => {
        // Agregar el mensaje de la IA al array de mensajes (mensaje que manda chatgpt mapeado)
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.message, sender: 'IA' },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    // Limpiar el prompt
    setPrompt('');
  };
  return (
    <>
      <Container className='mt-5'>
        <h1>Conversación con IA</h1>
        <Form.Group className='mb-3 mt-3'>
          <Form.Control
            as='textarea'
            required
            name='prompt'
            placeholder='ingresa pregunta'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </Form.Group>
        {loading ? (
          <Button variant='primary' disabled>
            <Spinner
              as='span'
              animation='grow'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Loading...
          </Button>
        ) : (
          <Button className='' onClick={handleClick}>
            Preguntar
          </Button>
        )}

        <div className='mt-3'>
          {messages.map((message, index) => (
            <p key={index}>
              {message.sender}: {message.text}
            </p>
          ))}
        </div>
      </Container>
    </>
  );
}

export default OpenIA;
