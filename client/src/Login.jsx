import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit=(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home')
                }
                
           
        })
        .catch(err=>console.log(err))
    }
  
    return (
        <>
            <div className='w-full h-screen flex-column flex items-center justify-center bg-blue-500'>
            <div className=' w-max h-max bg-zinc-100 rounded-xl p-10 shadow-blue-500'>


                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-10 pt-10' >
                <h2 className='mt-10 text-[4vw] font-normal font-["Neue_Montreal"]'>Login</h2>


                    <div className='pt-10'>

                        <label htmlFor="email">
                        <h2 className='text-3xl font-normal font-["Neue_Montreal"]'>Email</h2>                        </label>
                        <input required
                            type='text'
                            placeholder='Enter email'
                            name='email'
                            className='form-control w-[25vw]  border-2 border-blue-500 rounded-3xl'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='pt-10'>
                        <label htmlFor="password">
                        <h2 className='text-3xl font-normal font-["Neue_Montreal"]'>Password</h2>
                        </label>
                        <input required
                            type='password'
                            placeholder='Enter password'
                            name='password'
                            className='form-control form-control w-[25vw]  border-2 border-blue-500 rounded-3xl'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='mt-10 btn btn-default rounded-3xl  bg-blue-500 text-white w-max py-3 px-8 border-2 border-blue-500 text-3xl font-normal font-["Neue_Montreal"] hover:bg-white hover:text-blue-500 border-none '>
                        Login</button>
                    

                    </form>
                    
                </div>
            </div>

        </>)
}

export default Login