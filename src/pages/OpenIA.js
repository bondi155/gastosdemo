import React,{useState} from "react";
import axios from 'axios';
import { Form } from 'react-bootstrap';
import {
  Container,
  Button,
} from 'react-bootstrap';


function OpenIA () {

    const [iares, setIares] = useState ({})


    const [prompt, SetPrompt] = useState ('')


    const handleclick = () => { 
    axios.post("http://localhost:5005/chatcompl", {
     prompt: prompt //aca poner usuario cuando se defina : usuario: usuario,
    })
    .then((response)  => {
     setIares(response.data);
     console.log(iares)
    }).catch((error) =>{
      console.log(error);
    });
}

return (
<>
<Container className='mt-5'>
<h1> Respuesta IA</h1>

<Form.Group className='mb-3'>
    <Form.Control
      type='text'
      name='prompt'
      placeholder='ingresa pregunta'
      onChange={(e) => SetPrompt(e.target.value)}
    />
  </Form.Group>
      <Button onClick={handleclick}>Preguntar</Button>

      <p className="mt-3">{iares.message}</p>
     
  </Container>
</>

);
}



export default OpenIA ;