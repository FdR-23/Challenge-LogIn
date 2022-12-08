import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import ListClient from './ListClient.jsx';
import MenuFilters from './MenuFilters.jsx';
import Loading from './Loading.jsx';
import { statusSession } from '../redux/actions';
const Home = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true)
    const handleToggle = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const loggerUserJSON = window.localStorage.getItem("Token");
        if (!loggerUserJSON) {
            return navigate('*')
        } else {
            const session = async (loggerUserJSON) => {
                const { token } = JSON.parse(loggerUserJSON)
                const data = await statusSession(token)
                if (data) {
                    if (data.status === 200) {
                        setLoading(false)
                    } else if (data.status === 404 | 401) {
                        alert("Error: " + data.status + " " + data.data.message)
                        navigate('*')
                        console.log("holaaa")
                    }
                } else {
                    return navigate('*')
                }
            }
            session(loggerUserJSON)
        }
    });


    if (loading) {
        return <Loading />
    } else {
        return (
            <div className=' m-auto flex flex-col w-full  h-full'>
                <header>
                    <Navbar />
                </header>

                <div
                    className='flex flex-row  h-full mt-2 mx-1'>
                    <aside
                        className={`${open ? 'absolute bg-white  rounded-md items-center flex-col ' : 'none'}`}>
                        <MenuFilters
                            toggleopen={open} />
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
}


export default Home








