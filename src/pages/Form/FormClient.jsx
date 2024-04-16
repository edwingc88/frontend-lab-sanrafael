/* eslint-disable react/jsx-closing-tag-location */
import Breadcrumb from '../../components/Breadcrumb'
import { NavLink } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ulrApi = 'https://lab-san-rafael-api.onrender.com/labs'

const FormClient = () => {
  const { data, isLoading, errors } = useFetch(ulrApi)

  const notify = () => toast('Delete client!')

  return (
    <>
      <Breadcrumb pageName='FormClient' />
      {console.log(data)}
      {console.log(isLoading)}
      {console.log(errors)}
      {
      isLoading
        ? <h4>Cargando ...</h4>
        : errors
          ? <p>Ha ocrrido un Error: {errors}</p>
          : <div className='grid grid-cols-1 sm:grid-cols-1'>
            <div className='flex flex-col gap-4'>
              <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                <table className='w-full max-w-full first-letter:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        ID
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        USERNAME
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        PASSWORD
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        DNI
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        OTROS
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        OPCIONES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user) => {
                      return (
                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={user.lab_id}>
                          <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500'>
                            {user.lab_id}
                          </th>
                          <td className='px-6 py-4'>
                            Silver
                          </td>
                          <td className='px-6 py-4'>
                            Laptop
                          </td>
                          <td className='px-6 py-4'>
                            $2999
                          </td>
                          <td className='px-6 py-4'>
                            ...
                          </td>
                          <td>
                            <div className='flex w-full'>
                              <button className='inline-flex items-center justify-center rounded-md  gap-1 mr-1 bg-yellow-500 py-2 px-1 text-center font-normal text-white hover:bg-opacity-90 lg:px-2 xl:px-4'>
                                <NavLink
                                  to='/forms/form-client-edit'
                                  className='group relative flex items-center gap-1 rounded-md px-1 font-medium text-bodydark2 duration-300 ease-in-out hover:text-gray-500 '
                                >
                                  Edit
                                </NavLink>
                              </button>
                              <button className='inline-flex items-center justify-center rounded-md  gap-1 mr-1 bg-red-500 py-2 px-1 text-center font-normal text-white hover:bg-opacity-90 lg:px-2 xl:px-4' onClick={notify}>
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}

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

export default FormClient
