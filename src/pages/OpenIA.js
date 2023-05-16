import React,{useState, useEffect} from "react";
import axios from 'axios';
import { Form, Card, Table } from 'react-bootstrap';
import {
  Row,
  Container,
  Col,
  Button,
  Tab,
  Tabs,
} from 'react-bootstrap';


function OpenIA () {

    const [iares, setIares] = useState ([])


    const [prompt, SetPrompt] = useState ('')


    
  useEffect(() =>{


    axios.get("http://localhost:5005/chatcompl", {
    
    params:{
     prompt:prompt //aca poner usuario cuando se defina : usuario: usuario,
    }
    })
    .then((response)  => {
     setIares(response.data);
    }).catch((error) =>{
      console.log(error);
    });



     }, []);

return (
<>
<Container className='mt-5'>
<h1> Respuesta open IA</h1>

<Form.Group className='mb-3'>
    <Form.Control
      type='text'
      name='prompt'
      placeholder='ingresa pregunta'
      onChange={(e) => SetPrompt(e.target.value)}
    />
  </Form.Group>
  {prompt}
  </Container>
</>

);
}



export default OpenIA ;