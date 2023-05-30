import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Container, Button, Spinner } from 'react-bootstrap';
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
  //con esto ahcemos el scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  
  return (
    <>
      <Container className='chat mt-5'>
        <h1>Conversación con IA</h1>
        <div className='mt-3 messages-container'>
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
          <Button className='mb-5' type='submit'>
            Preguntar
          </Button>
          {/*
          {loading ? (
            <Button variant='primary' disabled>
              <Spinner
                as='span'
                animation='grow'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              Cargando...
            </Button>
          ) : (
            <Button className='' type='submit'>
              Preguntar
            </Button>
          )}
          */}
        </Form>

        {loading ? (
          <div className='mt-5'>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          queryRes && (
            <div className=' mt-3 query-results'>             
              <div >
              <ChatGrid />
              </div>
            </div>
          )
        )}

        {/*
         {queryRes && (
    <div className=" mt-3 query-results">
        <h2>Resultado:</h2>
        {queryRes.map((result, index) => (
            <div className='mt-3' key={index}>
                Aquí asumimos que result es un objeto con una propiedad "nombre" y una propiedad "valor". Modifícalo según tus necesidades 
                <p>{result.id_cliente}: {result.punta_tipo}</p>
            </div>
        ))}
    </div>
)}*/}
      </Container>
    </>
  );
}

export default OpenIA;
