import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center' >
        <img className='w-12 h-12.5  rounded-full ' src="./img/DP.jpeg" alt="" />
        <div className='flex gap-7 font-light'>
         <h1>Projects</h1>
        <h1>Contact</h1>
        <h1>|</h1>
        <h1>Crypto stack </h1>
        </div>
    </div>
  )
}

export default Navbar