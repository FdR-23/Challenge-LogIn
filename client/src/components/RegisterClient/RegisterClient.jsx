import React, { useState, useEffect } from 'react'
import ValidateRegister from './ValidateRegisterClient.js'
import Loading from '../Loading.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { statusSession } from '../../redux/actions/index.js';
import { registerClient, updateRegisterClient } from '../../redux/actions/index.js';

function RegisterClient() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const clients = useSelector((state) => state.clients);
    const data = useSelector(state => state.token)

    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        age: '',
        gender: '',
    });

    useEffect(() => {
        if (!data) {
            return navigate('*')
        } else {
            const session = async (token) => {
                const data = await statusSession(token)
                if (data) {
                    if (data.status === 200) {
                        setLoading(false)
                    } else if (data.status === 404 | 401) {
                        alert("Error: " + data.status + " " + data.data.message)
                        navigate('*')
                    }
                } else {
                    return navigate('*')
                }
            }
            session(data.token)
        }
    }, [navigate, data]);

    //find to update Client
    useEffect(() => {
        if (params.id) {
            setInput(clients.find(element => element._id === params.id))
        } else {
        }
    }, [params.id, clients]);



    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })

        setErrors(ValidateRegister({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            gender: e.target.value,
        })
        setErrors(ValidateRegister({
            ...input,
            gender: e.target.value,
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (Object.keys(errors).length !== 0) {
            alert('There are still errors, " Please try again "')
        } else {
            if (params.id) {
                // const clientModified = await Update(params.id, input, data.token)
                // if (clientModified.status === 201) {
                //     alert('Successfuly Modified')
                //     navigate("/main")
                // } else if (clientModified.status === 403 | 401) {
                //     alert("Error: " + clientModified.status + " " + clientModified.data.message)
                // }

                dispatch(updateRegisterClient(params.id, input, data.token))
                navigate('/main')
            }
            else {

                dispatch(registerClient(input, data.token))
                navigate('/main')
            }
        }
    }

    if (loading) {
        return <Loading />
    } else
        return (
            <div className='h-screen flex flex-row justify-center items-center'>
                <div className="modal-box w-fit flex flex-col items-center shadow-black shadow-lg bg-white/80">
                    <Link to='/main' className="btn btn-sm btn-circle absolute right-2 top-2 bg-indigo-600">✕</Link>
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
                                placeholder='First Name'
                                onChange={(e) => handleChange(e)}
                                required
                                autoFocus />
                        </div>
                        <div
                            className={errors.name ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.name}</span>
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
                                required
                            />
                        </div>
                        <div
                            className={errors.lastName ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.lastName}</span>
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
                                required
                            />
                        </div>
                        <div
                            className={errors.age ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.age}</span>
                        </div>
                        <div>
                            <select

                                className={errors.gender ?
                                    'px-2 input input-error input-sm  w-full max-w-xs' :
                                    'px-2 input input-bordered input-sm w-full max-w-xs'}
                                onChange={(e) => handleSelect(e)}>
                                <option
                                    value="Gender" hidden >Gender</option>
                                <option
                                    value='Male'>Male</option>
                                <option
                                    value='Female'>Female</option>
                                <option
                                    value='X'>X</option>
                            </select>
                        </div>
                        <div
                            className={errors.gender ? 'block py-2' : 'block py-2'}>
                            <span className='px-1  text-red-600 text-sm'> {errors.gender}</span>
                        </div>


                        <button
                            className={Object.keys(errors).length !== 0 ?
                                'btn btn-wide bg-red-700 hover:bg-red-600' :
                                'btn btn-wide bg-green-500 hover:bg-green-600'}
                            type="submit">Register</button>

                    </form>


                </div>
            </div>

        )
}


export default RegisterClient
