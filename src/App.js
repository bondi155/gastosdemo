import './css/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
//import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Consulta from './pages/Consulta';
import FmGastos from './pages/FmGastos';
import Dashboard from './dashboard/Dashboard';
import FmIngresos from './pages/FmIngreso';
import Agenda from './pages/Agenda';

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
            <Route path='/fmgastos' element={<FmGastos />} />
            <Route path='/consulta' element={<Consulta />} />
            <Route path='/fmingresos' element={<FmIngresos />} />
            <Route path='/agenda' element={<Agenda/>} />            
          </Route> 
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
