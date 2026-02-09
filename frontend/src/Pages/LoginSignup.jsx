import React, { useState } from 'react'

const LoginSignup = () => {

  // 1): At first make state variables for "login here" and "click here"
  const [state , setState]=useState('Sign Up')

  // 3): state variable to collect data from the input field:
  const [formData , setFormData]=useState({
    username:"",
    email:"",
    password:""
  })

  // 4): to get data from input field we will use onchange property:
  const ChangeHandler=(e)=>{
    setFormData({...formData ,[e.target.name]:e.target.value})
  }

  // 2): make two funtion for continue button to send the data at "/login" and "signup" route:
  const login=async()=>{
    console.log("submission for login",formData);
    let responceData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((responce)=>responce.json()).then((data)=>responceData=data)
    if(responceData.success){
      // aagar user true howa to local storage mai token set karwaoo:
      localStorage.setItem('auth-token',responceData.token)
      // aadar to token genarate howa to navigate to "/" route
      window.location.replace('/')
    }
    else{
      alert(responceData.errors)
    }
    
  };
   const signup=async()=>{
   console.log("submission for signup",formData);
   let responceData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((responce)=>responce.json()).then((data)=>responceData=data)
    if(responceData.success){
      // aagar user true howa to local storage mai token set karwaoo:
      localStorage.setItem('auth-token',responceData.token)
      // aadar to token genarate howa to navigate to "/" route
      window.location.replace('/')
    }
    else{
      alert(responceData.errors)
    }
  }

  return (
  <div className=' bg-[#fce3fe] w-full h-[90vh]  mb-10 md:mb-0 flex items-center justify-center'>
      <div  className=' bg-white px-6 py-6 mt-2 mb-1 m-auto  gap-4 md:w-[40vw]  md:h-[84vh]'>
      <h1 className='text-2xl font-medium mb-4 '>{state}</h1>
      <div className='flex flex-col mt-2 gap-4'>
        {state==="Sign Up"?<input className='border border-y-gray-200 focus:outline-none px-4 py-4 rounded-md' name='username' value={formData.username} onChange={ChangeHandler} type="text" placeholder='Your Name'/> :<></>}
        <input className='border border-y-gray-200 focus:outline-none px-4 py-4 rounded-md' name='email' value={formData.email} onChange={ChangeHandler} type="email" placeholder='Email Address' />
        <input className='border border-y-gray-200 focus:outline-none px-4 py-4 rounded-md' name='password' value={formData.password} onChange={ChangeHandler} type="password" placeholder='Password' />
      </div>
      <button className='mt-4 cursor-pointer bg-red-600 text-white w-full px-3 py-2 rounded-md' onClick={()=>{state==='Login'?login():signup()}} >Continue</button>
    {state==="Login"? <p className='mt-4 text-sm text-gray-600' >Create an account? <span className='text-red-600 font-bold cursor-pointer' onClick={()=>{setState('Sign Up')}} >Click Here</span></p>:<p className='mt-4 text-sm text-gray-600' >Already Have An account? <span className='text-red-600 font-bold cursor-pointer' onClick={()=>{setState('Login')}} >Login here</span></p>}
   

    <div className='flex gap-4 text-sm mt-3 mb-2 '>
      <input type="checkbox" name='' id='' />
      <p className='text-gray-600'>By continuing, i agree to the term of use & privacy</p>
    </div>
    </div>
  </div>
  )
}

export default LoginSignup
