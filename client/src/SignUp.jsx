import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()  
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/home')
    })
        .catch(error=>console.log(error))
}
   
    return (
        <>
            <div className='flex-column w-full h-screen flex items-center justify-center bg-blue-500'>
                <div className='absolute w-max h-max bg-zinc-100 rounded-xl p-10 shadow-blue-500'>
                <form onSubmit={handleSubmit} className=' flex flex-col gap-4  pt-5 justify-center items-center font-["Neue_Montreal"]'>
                <h2 className='mt-10 text-[4vw] font-normal font-["Neue_Montreal"]'>Register</h2>

                    <div className='flex flex-col' >
                        <label className='text-2xl' htmlFor="name">
                            <h2 className='text-2xl font-normal font-["Neue_Montreal"]'>Name</h2>
                        </label>
                        <input required
                            type='text'
                            placeholder='Enter name'
                            autoComplete='off'
                            name='name'

                            className='w-[25vw] h-[2vw] pl-2 border-blue-500 rounded-3xl form-control border-2   '
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">
                            <h2 className='text-2xl font-normal font-["Neue_Montreal"]'>Email</h2>
                        </label>
                        <input required
                            type='email'
                            placeholder='Enter email'
                            name="email"
                            className='form-control outline-none w-[25vw] h-[2vw] pl-2  border-2 border-blue-500 rounded-3xl'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                                <h2 className='text-2xl outline-none
                            font-normal font-["Neue_Montreal"]'>Password</h2>
                        </label>
                        <input required
                            type='password'
                            placeholder='Enter password'
                            name='password' 
                            className='form-control outline-none w-[25vw] h-[2vw] pl-2 border-2 border-blue-500 rounded-3xl'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <button type='submit' className='btn text-2xl font-normal btn-default bg-blue-500 text-white font-["Neue_Montreal"] rounded-3xl w-max py-2 px-5 border-2 border-blue-500 text-blue-500 hover:bg-white hover:text-blue-500 border-none '>
                        Register</button>
                    
                        <p className='text-xl font-normal font-["Neue_Montreal"]'>Already have a account?</p>
                <Link to='/login' className='btn btn-default rounded-3xl  bg-blue-500 text-white w-max py-2 px-5 border-2 border-blue-500 text-2xl font-normal font-["Neue_Montreal"] hover:bg-white hover:text-blue-500 border-none'>Login</Link>

                </form>

</div>
               
               

            </div>
        </>
    )
}

export default SignUp