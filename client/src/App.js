import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'


import Login from './components/Login/Login.jsx';
import Home from './components/Home.jsx'
import RegisterUser from './components/RegisterUser/RegisterUser.jsx';
import RegisterClient from './components/RegisterClient/RegisterClient.jsx';
import Error404 from './components/Error404.jsx'
import UserDetails from './components/userDetails/UserDetails.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/main' element={<Home />} />
        <Route path='/main/register' element={<RegisterClient />} />
        <Route path='/main/edit-register/:id' element={<RegisterClient />} />
        <Route path='/user/:id' element={<UserDetails />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
