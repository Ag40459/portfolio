import React from 'react';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

function ProtectedRoutes({ redirectTo }) {
  const isAutheticated = true;
  return isAutheticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function Main() {

  return (
    <div className='container-main'>
      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>

    </div>
  )
}

export default Main;