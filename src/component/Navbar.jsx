import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

   
  return (
      <div className='bg-[#200a53] text-white flex justify-around fixed top-0 w-full'>
          <div className='flex p-1'>
              <div><img className='rounded-full p-1' src="image/logo.png" alt="Logo" width="50px" /></div>
              <div className='font-bold text-xl max-sm:text-[10px] max-sm:p-0'>
                  <span className='text-gray-400'>&lt;</span>
                  <span>Pass</span>
                  <span className='text-gray-400'>OP/&gt;</span>
                  <div className='text-xs text-gray-400 max-sm:text-[10px]'>Password Manager</div>
              </div>

          </div>
          <div className='flex'>
              <ul className='flex gap-5 m-3 max-sm:gap-1 text-xs'>
                  <NavLink className={(e) => { return e.isActive ? "underline" : "" }} to="/">Home</NavLink>
                  <NavLink className={(e) => { return e.isActive ? "underline" : "" }} to="/about">About</NavLink>
                  <NavLink className={(e) => { return e.isActive ? "underline" : "" }} to="/contact">Contact</NavLink>
              </ul>
              <button>
                  <img src="image/git.jpeg" width='40px' className='rounded-full max-sm:hidden' alt="" />
              </button>
          </div>
          
    </div>
  )
}

export default Navbar