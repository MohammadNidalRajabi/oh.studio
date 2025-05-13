import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-5 z-50 '>
      <a href="/" className="block" aria-label="Homepage">
      <div className="w-[150px] h-auto text-[62px] text-black">
            Haptic
      </div>
    </a>
    <NavBar/>
    </div>
  )
}

export default Header
