import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Validate from './Validate.js'



const RegisterUser = () => {

  const navigate = useNavigate()

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
    console.log(input.username.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(errors).length !== 0) {
      alert('There are still errors, " Please try again "')
    } else {
    


      
    }
  }



  return (
    <div> REGISTER
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            name='username'
            value={input.username}
            placeholder='UserName'
            onChange={(e) => handleChange(e)}
            autoFocus
          />
          {errors.username ? <span >{errors.username}</span> : null}

        </div>

        <div>
          <input
            type="text"
            name='email'
            value={input.email}
            placeholder='E-mail'
            onChange={(e) => handleChange(e)}
          />
          {errors.email ? <span >  {errors.email}</span> : null}
        </div>

        <div>
          <input type="password"
            name='password'
            value={input.password}
            placeholder='Password'
            onChange={(e) => handleChange(e)}
          />
          {errors.password ? <span >{errors.password}</span> : null}
        </div>

        <div>
          <input type="password"
            name='repeatPassword'
            value={input.repeatPassword}
            placeholder='Repeat Password'
            onChange={(e) => handleChange(e)}
          />
          {errors.repeatPassword ? <span >{errors.repeatPassword}</span> : null}
        </div>


        <button type="submit">Register</button>
        <button onClick={() => navigate('/')}>Cancel</button>


      </form>



    </div>
  )
}

export default RegisterUser