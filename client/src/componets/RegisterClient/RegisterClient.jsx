import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import axios from "axios";


function RegisterClient() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: '',
        lastName: '',
        age: '',
        gender: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            gender: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (Object.keys(errors).length !== 0) {
            alert('There are still errors, " Please try again "')
        } else {
            const loggerUserJSON = window.localStorage.getItem("Token");
            const { token } = JSON.parse(loggerUserJSON)
            const form = await Register(input, token)
            console.log(form)

        }
    }



    return (
        <div>
            <a href='#modal-AddClient' className='btn'>Add New Client</a>
            <div className="modal" id="modal-AddClient">
                <div className="modal-box w-fit flex flex-col items-center shadow-black shadow-lg">

                    <h2 className='mx-2 p-4 text-2xl font-medium  text-center'>REGISTER CLIENT</h2>
                    <form
                        className=' p-4 m-auto items-center rounded-xl'
                        onSubmit={(e) => handleSubmit(e)}>

                        <div>
                            <input
                                className={errors.name ?
                                    'px-2 input input-error input-sm  w-full max-w-xs' :
                                    'px-2 input input-bordered input-sm w-full max-w-xs'}
                                type="text"
                                name='name'
                                value={input.name}
                                placeholder='Name'
                                onChange={(e) => handleChange(e)}
                                autoFocus
                            />

                        </div>
                        <div
                            className={errors.username ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.username}</span>
                        </div>

                        <div>
                            <input
                                className={errors.lastName ?
                                    'px-2 input input-error input-sm  w-full max-w-xs' :
                                    'px-2 input input-bordered input-sm w-full max-w-xs'}
                                type="text"
                                name='lastName'
                                value={input.lastName}
                                placeholder='Last Name'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div
                            className={errors.lastName ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.email}</span>
                        </div>


                        <div>
                            <input
                                className={errors.age ?
                                    'px-2 input input-error input-sm  w-full max-w-xs' :
                                    'px-2 input input-bordered input-sm w-full max-w-xs'}
                                type="text"
                                name='age'
                                value={input.age}
                                placeholder='Age'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div
                            className={errors.age ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.password}</span>
                        </div>


                        <div>
                            <select
                                defaultValue={'X'}
                                className={errors.gender ?
                                    'px-2 input input-error input-sm  w-full max-w-xs' :
                                    'px-2 input input-bordered input-sm w-full max-w-xs'}
                                onChange={(e) => handleSelect(e)}>
                                <option
                                    value="X"
                                    disabled >Gender</option>
                                <option
                                    value='Male'
                                >Male</option>
                                <option
                                    value='Female'
                                >Female</option>
                                <option
                                    value='X'
                                >X</option>
                            </select>
                        </div>
                        <div
                            className={errors.repeatPassword ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.repeatPassword}</span>
                        </div>


                        <button
                            className={Object.keys(errors).length !== 0 ?
                                'btn btn-wide bg-red-700 hover:bg-red-600' :
                                'btn btn-wide bg-green-500 hover:bg-green-600'}
                            type="submit">Register</button>

                    </form>


                </div>
            </div>

        </div>
    )
}

export default RegisterClient



//mover a redux esto 
export const Register = async (form, token) => {
    const config = {
        headers: {
            'access-token': `${token}`,
        },
    };
    try {
        const response = await axios.post(
            "http://localhost:3004/client",
            form, config
        );
        return response;

    } catch (err) {
        return err.response;
    }
};