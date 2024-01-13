import Card from './Card'
import { courses } from '../data/Courses'

const Courses = () => {
  return (
    <div id='lab' className='w-full bg-[#E9F8F3B2] py-16'>
      <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl text-center font-bold'>Laboratorio <span className='text-[#287abe]'>Clinico</span></h1>
          <p className='text-[#6D737A] text-center '>Análisis precisos de muestras biológicas para diagnóstico médico y monitoreo de la salud.Ofrecemos una amplia variedad de exámenes y perfiles de rutina para nuestros clientes y pacientes</p>
        </div>
        <div className='flex flex-wrap flex-row gap-2 py-4 justify-center items-center md:justify-start md:items-start  md:gap-8  md:py-8  md:px-8  md:max-w-[1480px] m-auto w-[100%] bg-[#E9F8F3B2]  rounded-lg  border-[#E9F8F3B2] border-[1px] '>
          {courses.map((course, i) =>
            <Card key={i} course={course} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Courses
