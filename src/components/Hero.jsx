// import ambulatorio from '../assets/ambulatorio.png'
// import { AiOutlineSearch } from 'react-icons/ai'

import { manosdoctor } from '../assets/index'
import staricon from '../assets/yellow-star.svg'

const Hero = () => {
  return (
    <div className='w-full bg-white py-16'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
        <div className='flex flex-col justify-start gap-4'>
          <p className='py-2 text-2xl text-[#20B486] font-medium'>Ciudad Guayana 8050, Bolívar Puerto ordaz</p>
          <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Centro Medico Ambulatorio <span className='text-[#20B486]'>"San Rafael"</span>
          </h1>
          <p className='  py-2 text-lg text-gray-600'>Somos Centro Médico y Laboratorio Clínico. Contamos con una gran variedad de especialidades y amplia experiencia en la prestación de servicios en el area de la salud.</p>
          <div className='flex'>
            <button className='word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-[#287abe] dark:text-neutral-200'><img className='w-4 text-cyan-50' src={staricon} /> Más de 20 Años de Trayectoria </button>
            <button className='word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-[#287abe] dark:text-neutral-200'><img className='w-4 text-cyan-50' src={staricon} /> Equipos automatizados y resultados Online </button>
          </div>
        </div>
        <img src={manosdoctor} className='w-[90%] h-[500px] md:order-last  order-first' />

      </div>
    </div>
  )
}

export default Hero
