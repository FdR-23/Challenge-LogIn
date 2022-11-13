import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import MenuFilters from './MenuFilters.jsx';
function Navbar() {
    const navigate = useNavigate()


    //CLOSE SESSION
    const handleLogOut = () => {
        window.localStorage.removeItem("Token");
        navigate("/");
    }



    return (
        <div className='w-full'>
            Clientes

            <button onClick={() => handleLogOut()}>Cerrar sesion</button>

            <MenuFilters/>

        </div>
    )
}

export default Navbar