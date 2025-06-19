import React from 'react'
import { assets } from '../../assets/assets'
import Sidebar from '../../components/admin/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {

  const navigate = useNavigate()
  const logout = ()=>{
    navigate("/")
  }

  return (
    <>
      <div className=' flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img src={assets.logo} onClick={()=>navigate("/")} alt="" className='w-32 sm:w-40 cursor-pointer' />
        <button className='text-sm px-8 py-2 rounded-full bg-primary text-white cursor-pointer' onClick={logout}>Logout</button>
      </div>

      <div className='flex h-[clac(100vh-70px)]'>
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout