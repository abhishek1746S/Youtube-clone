import React from 'react'
import styles from './logpage.module.css'
import { useState } from 'react'
const Logpage = () => {
  const[Login,IsLogin]=useState(true);
  const[Signup,IsSignup]=useState(false);
  return (
    <div className={styles.logpag}>
      <div className="w-75 h-90 bg-white border-2 flex-col">
      <div className="w-full h-13 bg-emerald-300 inline-flex">
        <p onClick={()=>{IsLogin(true),IsSignup(false)}} className="w-[50%] flex justify-center items-center">Login</p>
        <p onClick={()=>{IsLogin(false),IsSignup(true)}}  className="w-[50%] flex justify-center items-center">SignUp</p>
      </div>
      {
        Login?
        <>
        <div className="flex flex-col gap-5 w-full p-4">

  <input
    type="email"
    placeholder="Gmail"
    className="border border-gray-400 rounded-lg p-2 outline-none focus:border-blue-500"
  />

  <input
    type="password"
    placeholder="Password"
    className="border border-gray-400 rounded-lg p-2 outline-none focus:border-blue-500"
  />

      <p className="text-right  text-blue-500">
        <a href="#">Forget Password</a>
      </p>
  <button className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors">Login</button>
       <p className="text-right ">
        Not a signup <a onClick={()=>{IsSignup(true),IsLogin(false)}} href="#" className=" text-blue-500">SignUp</a>
      </p> 
</div>
        </>
        :<div className="flex flex-col gap-4 w-full p-4">
  <input
    type="text"
    placeholder="Name"
    className="border border-gray-400 rounded-lg p-2 outline-none focus:border-blue-500"
  />

  <input
    type="text"
    placeholder="Username"
    className="border border-gray-400 rounded-lg p-2 outline-none focus:border-blue-500"
  />

  <input
    type="email"
    placeholder="Gmail"
    className="border border-gray-400 rounded-lg p-2 outline-none focus:border-blue-500"
  />

  <input
    type="password"
    placeholder="Password"
    className="border border-gray-400 rounded-lg p-2 outline-none focus:border-blue-500"
  />

  <button className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors">SignUp</button>

</div>
      }
      </div>
      
    </div>
  )
}

export default Logpage
