import './css/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
//import Home from './pages/Home';
import ContentSidebar from './components/Navigation/ContentSidebar';
import Consulta from './pages/Consulta';
import FmGastos from './pages/FmGastos';
import Dashboard from './dashboard/Dashboard';
import FmIngresos from './pages/FmIngreso';
import Agenda from './pages/Agenda';
import Fm_Gastos2 from './pages/gastos2borrador';
import OpenIA from './pages/OpenIA';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navigate replace to='/login' />} />
          <Route path='/login' element={<Login/>} />
            <Route path='/*' element={<Navigate replace to='/login' />} />
            <Route element={<ContentSidebar />}>
            <Route path='/inicio' element={<Dashboard/>} />
            <Route path='/fmgastos' element={<FmGastos />} />
            <Route path='/fmgastos2' element={<Fm_Gastos2 />} />
            <Route path='/openia' element={<OpenIA />} />
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
