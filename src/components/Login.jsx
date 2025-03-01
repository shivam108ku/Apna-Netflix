import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidateData from '../utils/validate'

const Login = () => {

  const [isSignInFrom , setIsSignInForm] = useState(true);
  const [errMsg , setErrMsg] = useState(null); ;

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {  
     console.log(email.current.value);
     console.log(password.current.value);
    
    const  message = checkValidateData(email.current.value, password.current.value);
    setErrMsg(message);
    

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };

    return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg" alt="" />
        </div>
         
         <form onSubmit={ (e)=> e.preventDefault() } className='p-12 text-white flex flex-col 
         items-center rounded-xl justify-between relative w-4/16 bg-black opacity-80 mx-auto translate-y-1/2'>
           <h1 className='font-bold py-4 text-3xl'>{isSignInFrom ? "Sign in" : "Sign up"}</h1>

           { !isSignInFrom  && (<input
             type="text" 
             placeholder='Full Name' 
             className='p-2 bg-zinc-800 rounded-[5px] text-white  m-2 w-full'
            />)
            }
           
           
            <input 
            ref={email}
            type="text" 
            placeholder='Email Address' 
            className='p-2 m-2 rounded-[5px] bg-zinc-800 text-white w-full'
             />
            
            <input
             ref={password}
             type="password" 
             placeholder='Password' 
             className='p-2 bg-zinc-800 rounded-[5px] text-white  m-2 w-full'
            />

            <p className='text-red-500 '> {errMsg} </p>

             <button className='p-2 text-white rounded-[5px] bg-[#E50914] m-4 w-full' onClick={handleButtonClick}>
             {isSignInFrom ? "Sign in" : "Sign up"}
             </button>

             <p className='text-white font-bold cursor-pointer' 
             onClick={toggleSignInForm}
             >{isSignInFrom 
             ? "New to Netflix ? Sign Up Now"
             : "Already registered ? sign in now"}
             </p>
        
         </form>

    </div>
  )
}

export default Login