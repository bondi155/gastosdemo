import './css/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
//import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Consulta from './pages/Consulta';
import Formulario from './pages/Formulario';
import Dashboard from './dashboard/Dashboard';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navigate replace to='/login' />} />
          <Route path='/login' element={<Login/>} />
            <Route path='/*' element={<Navigate replace to='/login' />} />
            <Route element={<NavigationBar />}>
            <Route path='/inicio' element={<Dashboard/>} />
            <Route path='/form' element={<Formulario />} />
            <Route path='/consulta' element={<Consulta />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
