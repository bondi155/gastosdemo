import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Container, Button, Spinner, Col, Row } from 'react-bootstrap';
import '../css/App.css';
import { useRecoilState } from 'recoil';
import { queryResults } from '../storage/GlobalStates';
import ChatGrid from '../maps/ChatGrid';
import Swal from 'sweetalert2'

function OpenIA() {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [queryRes, setQueryRes] = useRecoilState(queryResults);
  const [loading, setLoading] = useState(false);
  //let retryCount = 0;

  
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Agregar el mensaje del usuario al array de mensajes anteriormente enviado
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: prompt, sender: 'Usuario' },
    ]);

    try {
      const response = await axios.post('http://localhost:5005/chatcompl', {
        prompt,
        messages,
      });

      // Agregar el mensaje de la IA al array de mensajes (mensaje que manda chatgpt mapeado)
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.message, sender: 'IA' },
      ]);
      setQueryRes(response.data.results); // Aquí actualizamos el estado con los resultados de la consulta
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      if (error.response && error.response.data) {
        if (error.response.data.error === 'Hubo un error ejecutandose el query') {
          //aqui que el chat me responda un mensaje 
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Lo siento, no pude encontrar información. Por favor, reformule su pregunta', sender: 'IA' },
          ]);
        }
        if (error.response.data.code === 'ENOTFOUND'|| error.response.data.code === 'UNAUTHORIZED') {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Estoy teniendo un error de comunicación, Por favor contacta con soporte.', sender: 'IA' },
          ]); 
          alert('error de conexion');

        }else if (error.response.data.code === 'PREGUNTA_INCO') {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'No tengo información sobre lo que me solicita', sender: 'IA' },
          ]);
        }
      }
    }
  };

  const messagesEndRef = useRef(null);
  const chatGridRef = useRef(null);

  //con esto ahcemos el scroll de los mensajes (se anula con el spinner y la renderizacion del grid)
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const scrollToComponent = () => {
    chatGridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chatGridRef.current) {
        chatGridRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); // Aquí estamos esperando 4 segundos (4000 milisegundos)

    // Esta función de limpieza se ejecuta cuando el componente se desmonta o antes de que se ejecute el próximo efecto.
    // Limpiamos el timer para evitar que se ejecute si el componente se desmonta antes de que pasen los 4 segundos.
    return () => clearTimeout(timer);
  }, [queryRes]);
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
          {queryRes && (
            <Button
              className='btn btn-success'
              style={{ float: 'right' }}
              onClick={scrollToComponent}
            >
              Ir a respuesta
            </Button>
          )}
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
                  <ChatGrid ref={chatGridRef} />
                </div>
              )
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OpenIA;
