import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ListClient from './ListClient';

const Home = () => {
    const navigate = useNavigate()

    
    
    
    useEffect(() => {
        const loggerUserJSON = window.localStorage.getItem("Token");

        if (!loggerUserJSON) {
            console.log("No existe")
            return navigate('*')
        }
    }, [navigate]);






    return (
        <div className=' m-auto flex flex-col justify-center items-center'>
            <Navbar />
            <ListClient />



        </div>
    )
}


export default Home








