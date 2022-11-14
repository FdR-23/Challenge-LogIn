import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import ClientItem from './ClientItem';





function ListClient() {

    const navigate = useNavigate()
    const [users, setUsers] = useState()


    useEffect(() => {
        const loggerUserJSON = window.localStorage.getItem("Token");
        if (loggerUserJSON !== null) {
            const { token } = JSON.parse(loggerUserJSON)
            getAllUser(token).then(res => setUsers(res))
        } else {
            console.log("No existe")
            return navigate('*')

        }
    }, [navigate]);


    return (
        <div className='bg-slate-900/10 rounded-sm w-full h-full  '>
            <div className='grid grid-cols-8 border-b-2 mx-2 pt-2 border-stone-700 text-center font-semibold text-sm'>
                <p className="mb-1"># </p>
                <p className="mb-1 col-span-2">Name</p>
                <p className="mb-1">Last Name</p>
                <p className="mb-1">Age</p>
                <p className="mb-1">Gender</p>
                <p className="mb-1">Edit</p>
                <p className="mb-1">Remove</p></div>

            {users && users.map((element) =>
                    <ClientItem
                        key={element._id}
                        client={element} />)
            }
        </div >
    )
}

export default ListClient



//mover a redux
export const getAllUser = async (token) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.get("http://localhost:3004/client", config)
            .then(resp => resp.data)
        return response

    } catch (err) {
        return console.log(config);
    }
};

