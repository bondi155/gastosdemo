//1
<ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
  <CssBaseline />
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography component="h1" variant="h5">
    </Typography>
    <img 
     alt=""
    src={logo}
     />
    <br></br>
    <h2>Bienvenido {login.usuario}</h2>
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        color="warning"
        fullWidth
        label="Usuario"
       name="usuario"
        type="text" 
        className="form-control" 
        placeholder="Usuario"
        onChange={handleInputChange}
        autoFocus
      />
         <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              label="Contraseña"
              name="contraseña"
              type="password"
              className="form-control"
              placeholder="Contraseña" 
              onChange={handleInputChange}
            />
      <Button
        onClick={handleClick}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
         >
        Entrar
      </Button>
      <Grid container>
        <Grid item xs>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Box>
  </Box>
</Container>
</ThemeProvider>
//2
padding-top: 15rem;
/*background: url(bg.jpg)  no-repeat center center fixed; */
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
padding-bottom: 16.9rem;

//3
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row, Container, Col, Button } from 'react-bootstrap';


function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState ({
    usuario :"",
    contraseña: ""
  })

  const handleInputChange = (event) =>{
    console.log(event.target.value);
    setLogin ({
        ...login,
       [event.target.name] : event.target.value
  })
  
     };
  const [showPassword, setShowPassword] = useState(false);

  const [islogged, SetIslogged] = useState (false);


  const handleClick = () => {
    if (login.usuario === "jsalazar" & login.contraseña === "123"){
        setLogin(true);
    navigate('/inicio', { replace: true });

}else {
    alert("usuario incorrecto");
}

  };


  const logo = require('../components/img/jealt_blanco.png');

  return (
    
      <div className='login'> 
    Bienvenido {login.usuario}
<img 

     alt="logo"
    src={logo}
     />
            <Form.Group className='mb-3'>
                      <FloatingLabel controlId='floatingSelect' label='Usuario'>
                        <Form.Control
                          type='text'
                          name='usuario'
                          placeholder='Usuario'
                          onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <FloatingLabel controlId='floatingSelect' label='Contraseña'>
                        <Form.Control
                          type='password'
                          name='contraseña'
                          placeholder='Contraseña'
                          onChange={handleInputChange}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Button
              variant='primary'
              onClick={handleClick}
              className='mb-3 mt-3 '
              type='submit'
            >
              Entrar
            </Button>
</div>
  );
}

export default Login;

//4
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row, Container, Col, Button } from 'react-bootstrap';

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    usuario: '',
    contraseña: '',
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const [islogged, SetIslogged] = useState(false);

  const handleClick = () => {
    if ((login.usuario === 'jsalazar') & (login.contraseña === '123')) {
      setLogin(true);
      navigate('/inicio', { replace: true });
    } else {
      alert('usuario incorrecto');
    }
  };

  const logo = require('../components/img/jealt_blanco.png');

  return (
    <div className='login'>
      <Container>
        <Row className='pt-5'>
        <Col xs={2} md={4}>
            <img  alt='logo' width={450} src={logo} />
          </Col>

          <Col md={{ span: 4, offset:3 }}>
            <Form.Group className='pb-3 pt-3'>
              <FloatingLabel label='Usuario'>
                <Form.Control
                  type='text'
                  name='usuario'
                  placeholder='Usuario'
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className='mb-3'>
              <FloatingLabel label='Contraseña'>
                <Form.Control
                  type='password'
                  name='contraseña'
                  placeholder='Contraseña'
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
           
        
          </Col>
          <Col md={{ span: 4, offset:9 }}>

          <Button
              variant='primary'
              onClick={handleClick}
              className='mb-3 mt-3 '
              type='submit'
            >
              Entrar
            </Button>
            </Col>

        </Row>

      </Container>
    </div>
  );
}

export default Login;
//5
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui components
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Grid'; // Grid version 1
import Iconify from '../components/iconify/iconify';
import '../css/App.css';

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    usuario: '',
    contraseña: '',
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  const [islogged, SetIslogged] = useState(false);

  const handleClick = () => {
    if ((login.usuario === 'jsalazar') & (login.contraseña === '123')) {
      setLogin(true);
      navigate('/inicio', { replace: true });
    } else {
      alert('usuario incorrecto');
    }
  };

  const logo = require('../components/img/jealt_blanco.png');
  const theme = createTheme();
  const bg = require ('../components/img/bg.jpg');

  return (
    <div className="demo-wrap">
  <img
    className="demo-bg"
    src={bg}
    alt="fondo"
  ></img>
    <div className='login'>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'></Typography>
            <img alt='' src={logo} />
            <br></br>
            <h2>Bienvenido {login.usuario}</h2>

            <Box component='form' noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                color='warning'
                fullWidth
                label='Usuario'
                name='usuario'
                type='text'
                className='form-control'
                placeholder='Usuario'
                onChange={handleInputChange}
                autoFocus
              />
              <TextField
                margin='normal'
                color='warning'
                required
                fullWidth
                label='Contraseña'
                // name="contraseña"
                type='password'
                className='form-control'
                placeholder='Contraseña'
                onChange={handleInputChange}
              />
              <Button
                onClick={handleClick}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <footer>
        <p> Sistema de control de Gestión 2.0 </p>
      </footer>
    </div>
    </div>

  );
}

export default Login;

.form-floating>.form-control,
.form-floating>.form-control-plaintext {
  padding: 0rem 0.75rem !important;;
}

.form-floating>.form-control,
.form-floating>.form-control-plaintext,
.form-floating>.form-select {
  height: calc(2.5rem + 12px) !important;
  line-height: 1 !important;
}

.form-floating>label {
  padding: 0.5rem 0.75rem !important;
  padding-bottom: 0%;
}

#formfecha{
  height: calc(2.5rem + 13px) !important;
  line-height: 1 !important;
}