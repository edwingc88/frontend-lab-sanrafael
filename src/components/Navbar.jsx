import logo from '../assets/logolab.png'
import lock from '../assets/lock.svg'
import hamburgerMenu from '../assets/hamburgerMenu.svg'
import close from '../assets/close.svg'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { useState } from 'react'

export default function Navbar () {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>

        <Link to='/'><img src={logo} className='h-[100px] p-2 m-2' /></Link>

        <div className='hidden md:flex items-center '>
          <nav className='flex gap-4'>
            <Link to='/'>Inicio</Link>
            <HashLink to='/#about' scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>Nosotros</HashLink>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#medico'>Servicio Medico</HashLink>
            <HashLink smooth to='/#lab'>Servicio de Laboratorio</HashLink>
            <HashLink smooth to='/#contact'>Contácto</HashLink>
          </nav>
        </div>

        <div className='hidden md:flex'>
          <Link className='flex justify-between items-center  bg-transparent  px-6 gap-2' to='/login'><img src={lock} />Iniciar Sesion</Link>
          <Link className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold' to='/register'>Registro</Link>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div className={toggle ? 'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
        <ul>
          <li className='p-4 hover:bg-gray-100'>Home</li>
          <li className='p-4 hover:bg-gray-100'>About</li>
          <li className='p-4 hover:bg-gray-100'>Support</li>
          <li className='p-4 hover:bg-gray-100'>Platform</li>
          <li className='p-4 hover:bg-gray-100'>Pricing</li>
          <div className='flex flex-col my-4 gap-4'>
            <button className='border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
              <img src={lock} />
              Login
            </button>
            <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button>
          </div>
        </ul>
      </div>

    </div>
  )
}
