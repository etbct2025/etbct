import React, { useState } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen , setIsOpen] = useState(false);
  const handleMenu = () =>{
        setIsOpen(!isOpen)
  }
  return (
    <>


  
    <header className='sticky top-0 md:flex justify-around items-center  bg-sky-800 py-2  z-50 '>
      <div className='flex justify-between items-center px-4'>
      <div className='text-2xl font-bold text-white '>ETBCT 2025 <span className='text-orange-500'>| SMVDU</span></div>
      <div className='block md:hidden cursor-pointer' onClick={handleMenu}>
        {isOpen ? <IoClose size={30} color='white'/> : <IoMdMenu size={30} color='white'/>}
          {/* <span className='text-3xl cursor-pointer text-white'><IoMdMenu/></span> */}
        </div>
      </div>
       
        <div className={` nav ${isOpen ? 'opacity-100': 'hidden'} md:block md:py-0 py-4 transition-all ease-in duration-300`}>
            <ul className='flex flex-col  md:flex-row items-center justify-center md:justify-center md:items-center gap-x-5 text-white '>
                <li  className='hover:-translate-y-1 transition-all'><Link to={"/"} className=" nav-link relative mx-4  my-4 md:mx-0 md:my-0 hover:text-orange-500">Home</Link></li>
                <li className='hover:-translate-y-1 transition-all'><Link to={"/about"} className=" nav-link relative mx-4 my-4 md:mx-0 md:my-0 hover:text-orange-500">About</Link></li>
                <li className='hover:-translate-y-1 transition-all'><Link to={"/call"} className=" nav-link  relative mx-4 my-4  md:mx-0 md:my-0 hover:text-orange-500">Call for abstract</Link></li>
                <li className='hover:-translate-y-1 transition-all'><Link to={"/register"} className=" nav-link relative mx-4 my-4 md:mx-0 md:my-0 hover:text-orange-500">Register</Link></li>
                <li className='hover:-translate-y-1 transition-all'><Link to={"/committee"} className=" nav-link  relative mx-4 my-4 md:mx-0 md:my-0 hover:text-orange-500">Committee</Link></li>
                <li className='hover:-translate-y-1 transition-all'><Link to={"/contact"} className=" nav-link  relative mx-4 my-4 md:my-0 hover:text-orange-500">Contact</Link></li>
            </ul>
        </div> 
    </header>
     
    </>
    
  )
}

export default Header