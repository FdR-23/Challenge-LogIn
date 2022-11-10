import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';


import axios from "axios";

const Home = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState()



    useEffect(() => {
        const loggerUserJSON = window.localStorage.getItem("Token");
        if (loggerUserJSON) {
            const { token } = JSON.parse(loggerUserJSON)
            getAllUser(token).then(res => setUsers(res))
        } else {
            console.log("No existe")
            return navigate('*')

        }
    }, [navigate]);

    const handleLogOut = () => {
        window.localStorage.removeItem("Token");
        navigate("/");
    }

    if (!users) {
        return (<div>CARGANDO</div>)
    } else {


        return (
            <div> CLientes

                {users && users.map((e) => {
                    return (
                        <div>
                            <p>{e.name}</p>
                            <p>{e.lastName}</p>
                            <p>{e.age}</p>
                            <p>{e.gender}</p>

                        </div>
                    )
                })}
                <button onClick={() => handleLogOut()}>Cerrar sesion</button>

            </div>
        )
    }
}

export default Home







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


