import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='flex justify-between max-w-[90%] mx-auto py-6'>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <ul className='flex gap-[50px] items-center'>
        <li className='hover:text-[#52E259] cursor-pointer'>Как это работает</li>
        <li className='hover:text-[#52E259] cursor-pointer'>Инструкции</li>
        <li className='hover:text-[#52E259] cursor-pointer'>Продукты</li>
        <li className='hover:text-[#52E259] cursor-pointer'>База знаний</li>
        <li className='hover:text-[#52E259] cursor-pointer'>О нас</li>
        <button className='bg-[#52E259] px-[20px] py-[10px] rounded-full hover:text-white'>Вход</button>
      </ul>
    </nav>
  )
}

export default Navbar