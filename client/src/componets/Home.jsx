import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ListClient from './ListClient';
import MenuFilters from './MenuFilters';

const Home = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const loggerUserJSON = window.localStorage.getItem("Token");

        if (!loggerUserJSON) {
            console.log("No existe")
            return navigate('*')
        }
    }, [navigate]);






    return (
        <div className=' m-auto flex flex-col w-full h-screen '>
            <header>
                <Navbar />
            </header>

            <div
                className='flex flex-row  h-full mt-2 mx-1'>
                <aside
                className={`${open ? 'absolute bg-white  rounded-md items-center flex-col ' : 'none'}`}>
                    <MenuFilters 
                    toggleopen ={open}/>
                    <button
                        className={`${open ? 'bg-green-900  sm:bg-orange-700 m-2 p-2 h-8 rounded-md flex justify-center items-center' :
                            'bg-blue-500/40 sm:bg-orange-700 m-2 p-2 h-8 rounded-md flex justify-center items-center absolute '}
                            sm:hidden`}
                        onClick={() => handleToggle()}>{open ? 
                        <p className='font-bold text-white '>CLOSE</p> :
                        <p className='font-bold text-white '>MENU</p>}
                    </button>
                </aside>
                <section 
                className='w-full ml-2'>
                    <ListClient />
                </section>
            </div>


        </div>
    )
}


export default Home








