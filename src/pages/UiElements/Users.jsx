import Breadcrumb from '../../components/Breadcrumb'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Users = () => {
  const notify = () => toast('Delete client!')

  return (
    <>
      <Breadcrumb pageName='Ver Laboratorio' botonGG='+ Nueva Empresa' />
      {
        <div className='grid grid-cols-1 sm:grid-cols-1'>
          <div className='flex flex-col gap-4'>
            <div className=' overflow-x-scroll  rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
              <table className='w-full max-w-full first-letter:text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      OPCIONES
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      NOMBRE
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      RIF
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      SLOGAN
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      DESCRIPCION
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      OBJETIVO
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      MISION
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      VISION
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      EMAIL
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      ...
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*      {data.map((user) => {      return ( */}
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700  overflow-scroll '>
                    {/*             key={user.lab_id}  */}
                    <td>
                      <div className='flex w-full'>
                        <button className='w-fit inline-flex items-center justify-center rounded-md  gap-1 mr-1 bg-yellow-500 py-2 px-1 text-center font-normal text-white hover:bg-opacity-90 lg:px-2 xl:px-4'>
                          <NavLink
                            to='/forms/form-orders-edit'
                            className=' w-fit group relative flex items-center gap-1 rounded-md px-1 font-medium text-bodydark2 duration-300 ease-in-out hover:text-gray-500 '
                          >
                            Edit
                          </NavLink>
                        </button>
                        <button className='w-fit inline-flex items-center justify-center rounded-md  gap-1 mr-1 bg-red-500 py-2 px-1 text-center font-normal text-white hover:bg-opacity-90 lg:px-2 xl:px-4' onClick={notify}>
                          Delete
                        </button>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      ID123
                    </td>
                    <td className='px-6 py-4'>
                      SAN RAFAEL LABORATORIO
                    </td>
                    <td className='px-6 py-4'>
                      J-45162346
                    </td>
                    <td className='px-6 py-4'>
                      SLOGAN LABORATORIO
                    </td>
                    <td className='px-6 py-4'>
                      DESCRIPCION LABORATORIO
                    </td>
                    <td className='px-6 py-4'>
                      OBJETIVO LABORATORIO
                    </td>
                    <td className='px-6 py-4'>
                      MISION LABORATORIO
                    </td>
                    <td className='px-6 py-4'>
                      VISION LABORATORIO
                    </td>
                    <td className='px-6 py-4'>
                      EMAIL LABORATORIO
                    </td>
                    <td className='px-6 py-4'>
                      ....
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
       }
      <ToastContainer />
    </>
  )
}

export default Users
