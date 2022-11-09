import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    const loggerUserJSON = window.localStorage.getItem("Token");
    const Token = JSON.parse(loggerUserJSON)


    if (!Token) {
        return navigate('*')
    }


    return (
        <div>
hola
        </div>
    )
}

export default Home