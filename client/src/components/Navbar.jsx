import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const naviagte = useNavigate(); // To Navigate to login page on clicking the btn
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img onClick={()=>naviagte("/")} src={assets.logo} alt="logo" className='w-32 sm:w-44 hover:scale-103 hover:shadow-primary/25 duration-300 cursor-pointer transition-transform' /> 
        {/* On clicking logo will come to homepage */}

        <button onClick={()=>naviagte("/admin")} className='flex items-center text-sm rounded-full gap-2 hover:scale-103 hover:shadow-primary/25 duration-300 cursor-pointer transition-transform bg-primary text-white px-10 py-2.5'> Login
            <img src={assets.arrow} alt="arrow" className='w-3' />
        </button>
    </div>
  )
}

export default Navbar