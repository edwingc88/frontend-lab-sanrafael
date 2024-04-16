/* eslint-disable react/jsx-closing-tag-location */
import Breadcrumb from '../../components/Breadcrumb'
import { NavLink } from 'react-router-dom'

// import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormOrder = () => {
  // const notify = () => toast('Delete client!')

  return (
    <>
      <Breadcrumb pageName='Orden #1456' />
      <div className='grid grid-cols-1 sm:grid-cols-1'>
        <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
          <NavLink className='flex flex-row justify-end w-100 p-2' to='/forms/form-client-edit'>
            <button className='w-fit relative center bg-green-800 py-1 px-4 rounded  text-white align-top text-right'>EDIT</button>
          </NavLink>
          <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>
            <div className='mt-4'>
              <h3 className='mb-1.5 text-2xl font-semibold text-black dark:text-gray-500'>
                Informacion de Paciente
              </h3>
              <p className='font-medium'>Nombre: Danieh JHeiyyun</p>

              <div className='mx-auto max-w-180'>
                <h4 className='font-semibold text-black dark:text-gray-500'>
                  Correo: dais@gmai.com
                </h4>
                <p className='mt-4.5'>
                  DNI: ve-2565
                </p>
              </div>
            </div>
          </div>
          <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>
            <div className='mt-4'>
              <h3 className='mb-1.5 text-2xl font-semibold text-black dark:text-gray-500'>
                Informacion de Orden
              </h3>
              <p className='font-medium'>Nombre: Danieh JHeiyyun</p>

              <div className='mx-auto max-w-180'>
                <h4 className='font-semibold text-black dark:text-gray-500'>
                  Correo: dais@gmai.com
                </h4>
                <p className='mt-4.5'>
                  DNI: ve-2565
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*       <ToastContainer /> */}
    </>
  )
}

export default FormOrder
