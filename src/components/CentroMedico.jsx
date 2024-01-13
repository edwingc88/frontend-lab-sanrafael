import { centromedico } from '../assets'
import { SlGraduation, SlPeople } from 'react-icons/sl'
import { FiVideo } from 'react-icons/fi'

const CentroMedico = () => {
  return (
    <div className='w-full bg-white py-16'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

        <img src={centromedico} className='w-[90%] h-[500px] px-2 m-auto md:order-first  order-first' />

        <div className='flex flex-col justify-center '>
          <h1 className='md:leading-[72px] text-3xl font-bold'>Centro <span className='text-[#20B486]'>Médico Integral</span></h1>
          <p className='text-lg text-gray-600'>Contamos con un equipo  de médicos altamente calificados, profesionales y técnicos de la salud de todas las especialidades de la medicina, trabajando para usted a nivel nacional, equipados con la más moderna tecnología y espacios para atenderle cómodamente.</p>

          <div className='grid grid-cols-2 py-16'>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                <SlGraduation
                  size={30}
                  style={{ color: '#1A906B' }}
                />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold'>Medicina General</h1>
                <p className='text-[#6D737A]'>Atención médica para el diagnóstico y tratamiento de enfermedades comunes.</p>
              </div>

            </div>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                <FiVideo
                  size={30}
                  style={{ color: '#FFC27A' }}
                />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold'>Radiología y Mamografía Digital</h1>
                <p className='text-[#6D737A]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>

            </div>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                <SlGraduation
                  size={30}
                  style={{ color: '#ED4459' }}
                />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold'>Unidad de Urología y Urodinamia</h1>
                <p className='text-[#6D737A]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>

            </div>
            <div className='py-6 flex'>
              <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                <SlPeople
                  size={30}
                  style={{ color: '#0075FD' }}
                />
              </div>
              <div className='px-3'>
                <h1 className='text-2xl font-semibold'>Cirugía</h1>
                <p className='text-[#6D737A]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default CentroMedico
