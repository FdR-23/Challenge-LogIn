import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Validate from './Validate.js'

import { registerUser } from '../../redux/actions/index.js';


const RegisterUser = () => {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });


  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })

    setErrors(Validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(Validate({
      ...input,
      [e.target.name]: e.target.value
    }))
    if (Object.keys(errors).length !== 0) {
      alert('There are still errors, " Please try again "')
    } else {

      const form = await registerUser(input)
      if (form.status === 200) {
        alert(form.data.message)
        setInput({
          username: '',
          email: '',
          password: '',
          repeatPassword: ''
        });
        navigate('/')
      } else {
        return alert("Error: " + form.status + " " + form.data.message)
      }
    }
  }



  return (
    <div className='w-screen h-screen m-auto flex flex-col justify-center items-center'>

      <div className='flex flex-col w-80 bg-slate-50   shadow-black shadow-lg  rounded-xl'>

        <h2 className='mx-2 p-4 text-4xl font-medium  text-center'>REGISTER</h2>
        <form
          className=' p-4 m-auto items-center rounded-xl'
          onSubmit={(e) => handleSubmit(e)}>

          <div>
            <input
              className={errors.username ?
                'px-2 input input-error input-sm  w-full max-w-xs' :
                'px-2 input input-bordered input-sm w-full max-w-xs'}
              type="text"
              name='username'
              value={input.username}
              placeholder='UserName'
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
              className={errors.email ?
                'px-2 input input-error input-sm  w-full max-w-xs' :
                'px-2 input input-bordered input-sm w-full max-w-xs'}
              type="text"
              name='email'
              value={input.email}
              placeholder='E-mail'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div
            className={errors.email ? 'block py-2' : 'block py-2'}>
            <span className='px-1  text-red-600 text-sm'> {errors.email}</span>
          </div>


          <div>
            <input
              className={errors.password ?
                'px-2 input input-error input-sm  w-full max-w-xs' :
                'px-2 input input-bordered input-sm w-full max-w-xs'}
              type="password"
              name='password'
              value={input.password}
              placeholder='Password'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div
            className={errors.password ? 'block py-2' : 'block py-2'}>
            <span className='px-1  text-red-600 text-sm'> {errors.password}</span>
          </div>


          <div>
            <input
              className={errors.repeatPassword ?
                'px-2 input input-error input-sm  w-full max-w-xs' :
                'px-2 input input-bordered input-sm w-full max-w-xs'}
              type="password"
              name='repeatPassword'
              value={input.repeatPassword}
              placeholder='Repeat Password'
              onChange={(e) => handleChange(e)}
            />
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

        <div className='flex justify-center p-2'>

          <button
            className="btn btn-primary btn-sm btn-active"
            onClick={() => navigate("/")}>Cancel</button>
        </div>

      </div>
    </div>
  )
}

export default RegisterUser


