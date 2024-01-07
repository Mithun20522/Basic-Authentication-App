import { useState } from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
      setFormData({...formData,[e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    
    const data = res.json();
    console.log(data);
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-semibold my-8'>Register Here</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={handleChange} type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={handleChange} type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >Register</button>
        <div className='flex gap-2'>
          <p>Have an account ? </p>
          <Link to='/login'><span className='text-blue-500'>Log in</span> </Link>
        </div>
      </form>
    </div>
  )
}

export default Register