import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ValidateLogin from './ValidateLogin.js'
import { logIn } from '../../redux/actions/index.js';
import { useDispatch } from 'react-redux'
import { userConected } from '../../redux/actions/index.js';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        userOrEmail: '',
        password: '',
    });

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(ValidateLogin({
            ...input,
            [e.target.name]: e.target.value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(ValidateLogin({
            ...input,
            [e.target.name]: e.target.value
        }))
        if (Object.keys(errors).length !== 0) {
            alert('There are still errors, " Please try again "')
        } else {
            const data = await logIn(input);
            if (data) {
                if (data.status === 200) {
                    dispatch(userConected(data.data))
                    navigate('/main')
                } else if (data.status === 401) {
                    // alert("Error: " + data.status + " " + data.data.message)
                    alert('The password or email are invalid.')
                } else {
                    alert("Error: " + data.status + " " + data.data.message)
                }
            }

        }
    }


    return (
        <div className='w-full h-screen  flex flex-col justify-center items-center'>


            <div className='flex flex-col w-80 bg-slate-50   shadow-black shadow-lg  rounded-xl'>
                <h2 className='font-medium text-4xl mx-2 p-4'>Login</h2>

                <form
                    className=' p-6 m-auto items-center rounded-xl'
                    onSubmit={(e) => handleSubmit(e)}>

                    <div className='relative'>
                        <svg
                            className='w-6 absolute translate-y-1 translate-x-1 fill-slate-600'
                            viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g id="User">
                                <path d="M41.2452,33.0349a16,16,0,1,0-18.49,0A26.0412,26.0412,0,0,0,4,58a2,2,0,0,0,2,2H58a2,2,0,0,0,2-2A26.0412,26.0412,0,0,0,41.2452,33.0349ZM20,20A12,12,0,1,1,32,32,12.0137,12.0137,0,0,1,20,20ZM8.09,56A22.0293,22.0293,0,0,1,30,36h4A22.0293,22.0293,0,0,1,55.91,56Z" /></g>
                        </svg>
                        <input
                            className={errors.userOrEmail ?
                                'px-8 input input-error input-sm  w-full max-w-xs' :
                                'px-8 input input-bordered input-sm w-full max-w-xs'}
                            type="text"
                            name='userOrEmail'
                            value={input.userOrEmail}
                            placeholder='Username or E-mail'
                            onChange={(e) => handleChange(e)}
                            autoFocus />
                    </div>
                    <div className={errors.userOrEmail ? 'block py-2' : 'block py-2'}>
                        <span className='px-2  text-red-600 text-sm'> {errors.userOrEmail}</span>
                    </div>


                    <div className='relative'>
                        <svg
                            className='w-6 absolute translate-y-1 translate-x-1 fill-slate-600'
                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <title>Lock</title>
                            <path d="M405.333,170.667c0-82.343-66.991-149.333-149.333-149.333S106.667,88.324,106.667,170.667A42.716,42.716,0,0,0,64,213.333V384a85.43,85.43,0,0,0,85.333,85.333H362.667A85.43,85.43,0,0,0,448,384V213.333A42.716,42.716,0,0,0,405.333,170.667ZM256,64A106.787,106.787,0,0,1,362.667,170.667H149.333A106.787,106.787,0,0,1,256,64ZM405.333,384a42.716,42.716,0,0,1-42.667,42.667H149.333A42.716,42.716,0,0,1,106.667,384V213.333H405.333Z" />
                            <path d="M234.667,335.619v27.048a21.333,21.333,0,0,0,42.667,0V335.619a42.9,42.9,0,1,0-42.667,0Z" />
                        </svg>

                        <input
                            className={errors.userOrEmail ?
                                'px-8 input input-error input-sm w-full max-w-xs' :
                                'px-8 input input-bordered input-sm w-full max-w-xs'}
                            type="password"
                            name='password'
                            value={input.password}
                            placeholder='Password'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className={errors.userOrEmail ? 'block py-2' : 'block py-2'}>
                        <span className='px-2   text-red-600 text-sm'>{errors.password}</span>
                    </div>


                    <button
                        type="submit"
                        className={Object.keys(errors).length !== 0 ?
                            'btn btn-wide bg-red-700 hover:bg-red-600' :
                            'btn btn-wide bg-green-500 hover:bg-green-600'}
                    >SING IN </button>


                </form >
                <Link to='/register'
                    className='btn btn-link font-bold  text-indigo-400 hover:text-indigo-800' >
                    Register new account</Link>

            </div >

        </div >
    )
}

export default Login


