/* eslint-disable react/jsx-closing-tag-location */
import Breadcrumb from '../../components/Breadcrumb'
import { NavLink } from 'react-router-dom'
/* import { useFetch } from '../../hooks/useFetch' */
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/* const ulrApi = 'http://localhost:1234/exams'
 */
const FormOrders = () => {
/*   const { data, isLoading, errors } = useFetch(ulrApi) */

  const notify = () => toast('Delete client!')

  /*   isLoading
  ? <h4>Cargando ...</h4>
  : errors
    ? <p>Ha ocrrido un Error: {errors}</p>
    :
 */
  return (
    <>
      <Breadcrumb pageName='Listados de Ordenes' botonGG='+ Nueva Orden' />
      {
        <div className='grid grid-cols-1 sm:grid-cols-1'>
          <div className='flex flex-col gap-4'>
            <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
              <table className='w-full max-w-full first-letter:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      OPCIONES
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      ESTADO
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      NUMERO
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      PACIENTE
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      FECHA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*      {data.map((user) => {      return ( */}

                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
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
                    <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500'>
                      {/*     {user.lab_id} */}
                      POR CANCELAR
                    </td>
                    <td className='px-6 py-4'>
                      ID
                    </td>
                    <td className='px-6 py-4'>
                      123456
                    </td>
                    <td className='px-6 py-4'>
                      Pedro Rodriguez
                    </td>
                    <td className='px-6 py-4'>
                      2023/12/01
                    </td>

                  </tr>

                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>

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
                    <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500'>
                      {/*     {user.lab_id} */}
                      POR CANCELAR
                    </td>
                    <td className='px-6 py-4'>
                      ID
                    </td>
                    <td className='px-6 py-4'>
                      123456
                    </td>
                    <td className='px-6 py-4'>
                      Maria Coro
                    </td>
                    <td className='px-6 py-4'>
                      2023/12/01
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

export default FormOrders
