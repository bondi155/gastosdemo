import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui components
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'; // Grid version 1
import '../../css/App.css';

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
    if ((login.usuario === 'jsalazar' || login.usuario === 'gortiz' ) & (login.contraseña === '123')) {
      setLogin(true);
      navigate('/inicio', { replace: true });
    } else {
      alert('usuario incorrecto');
    }
  };

  const logo = require('../../components/img/jealt_blanco.png');
  const theme = createTheme();

  return (
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
            <Box component='form' noValidate sx={{ mt: 1 }}>

               <TextField
                margin='normal'
                required
                color='warning'
                fullWidth
                size="small"
               // label='Usuario'
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
                size="small"
                fullWidth
                //label='Contraseña'
                name="contraseña"
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
       
      </footer>
    </div>

  );
}

export default Login;

