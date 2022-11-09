import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'


import Login from './componets//Login/Login.jsx';
import Home from './componets/Home.jsx'
import RegisterUser from './componets/Register/RegisterUser';
import Error404 from './componets/Error404'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/main' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
