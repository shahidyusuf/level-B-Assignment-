import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App