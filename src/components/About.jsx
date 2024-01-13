import { ambulatorio } from '../assets/index'

const About = () => {
  return (
    <div id='about' className='w-full bg-[#E9F8F3] py-16'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>

        <img src={ambulatorio} className='w-[90%] h-[500px] mx-auto' />

        <div>
          <h1 className='py-2  text-3xl font-semibold'><span className='text-[#287abe]'> Sobre </span> Nosotros </h1>
          <p className='py-2 text-lg text-gray-600'>Comprometidos con la salud, bienestar y satisfacción de nuestros pacientes, proporcionamos servicios médicos para toda su familia con una atención segura.
            Calidad garantizada.
            Resultados online
            En nuestra plataforma podrás revisar tus resultados desde donde estés.
          </p>
          <p className='py-2 text-lg text-gray-600'>MiSION : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad dolor dolore vitae consequatur aspernatur praesentium soluta aliquid repudiandae numquam eveniet temporibus, nam, deserunt iste atque porro autem dignissimos modi.
          </p>
          <p className='py-2 text-lg text-gray-600'>VISION: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem quas dolor sed officia commodi nisi sunt odio? Sapiente nulla possimus officiis non temporibus distinctio sit eius est consectetur dolores.
          </p>
          <button className='max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Registrate Gratis </button>

        </div>

      </div>

    </div>
  )
}

export default About
