import React from 'react'
import Validate from './Validate.js'



const RegisterUser = () => {



  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(errors).length !== 0) {
      alert('There are still errors, " Please try again "')
    } else { }
  }


  return (
    <div>
      <form action="">

        <input type="text"
          name='username'
          value={input.username}
          placeholder='UserName'
          onChange={(e) => handleChange(e)}
        />
        {errors.username ? <span >  {errors.username}</span> : null}
        <input
          type="text"
          name='email'
          value={input.email}
          placeholder='E-mail'
          onChange={(e) => handleChange(e)}
        />
        {errors.email ? <span >  {errors.email}</span> : null}
        <input type="text"
          name='password'
          value={input.password}
          placeholder='Password'
          onChange={(e) => handleChange(e)}
          
        />
        <input type="text"
          name='repeatPassword'
          value={input.password}
          placeholder='Repeat Password'
        />

        <button type="submit">Register</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </form>



    </div>
  )
}

export default RegisterUser