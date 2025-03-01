import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='absolute z-10 px-4 py-1 bg-gradient-to-b from-black'>
        <img
        className='w-78 object-cover'
         src={logo} alt="MyImage" />
    </div>
  )
}

export default Header