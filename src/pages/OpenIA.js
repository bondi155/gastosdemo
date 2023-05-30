import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Container, Button, Spinner, Col, Row } from 'react-bootstrap';
import '../css/App.css';
import { useRecoilState } from 'recoil';
import { queryResults } from '../storage/GlobalStates';
import ChatGrid from '../maps/ChatGrid';

function OpenIA() {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [queryRes, setQueryRes] = useRecoilState(queryResults);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    setLoading(true);
    // Agregar el mensaje del usuario al array de mensajes anteriormente enviado +
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: prompt, sender: 'Usuario' },
    ]);
    axios
      .post('http://localhost:5005/chatcompl', {
        prompt,
        messages,
      })
      .then((response) => {
        // Agregar el mensaje de la IA al array de mensajes (mensaje que manda chatgpt mapeado)
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.message, sender: 'IA' },
        ]);
        setQueryRes(response.data.results); // Aquí actualizamos el estado con los resultados de la consulta
        //  console.log(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    event.preventDefault();

    // Limpiar el prompt
    setPrompt('');
  };

  const messagesEndRef = useRef(null);
  const chatGridRef = useRef(null);

  //con esto ahcemos el scroll de los mensajes (se anula con el spinner y la renderizacion del grid)
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <Container className='chat mt-2'>
        <h1>Conversación con IA</h1>
        <div className='mt-2 messages-container'>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <p>
                {message.sender}: {message.text}
              </p>
              <div ref={messagesEndRef} />
            </div>
          ))}
        </div>

        <Form onSubmit={handleClick}>
          <Form.Control
            as='textarea'
            name='prompt'
            value={prompt}
            required
            label='Ingrese Pregunta'
            className='mb-3 mt-4'
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Ingrese Pregunta'
          />
          <Button className='' type='submit'>
            Preguntar
          </Button>
        </Form>

        <Row className='mt-5 justify-content-center'>
          <Col>
            {loading ? (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                }}
              >
                <Spinner animation='border' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              </div>
            ) : (
              queryRes && (
                <div className='mt-3 query-results'>
                  <ChatGrid 
                  />
                </div>
              )
            )}
          </Col>
        </Row>
        <div ref={chatGridRef} />
      </Container>
    </>
  );
}

export default OpenIA;
