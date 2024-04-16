import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CardTable = () => {
  const { listado } = useContext(CarritoContext)
  const clickDelete = () => {
    console.log('card table')
    console.log(listado)
  }

  return (
    listado.map((item) => (
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={item.examen_id}>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
          1
        </th>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
          #321321
        </th>
        <td className='px-6 py-4'>
          Hematologia
        </td>
        <td className='px-6 py-4'>
          10/20/2024
        </td>
        <td className='px-6 py-4'>
          Pendiente
        </td>
        <td className='px-6 py-4'>
          25$
        </td>
        <td className='px-6 py-4'>
          <button href='#' className='font-medium text-white-600 dark:text-white-500 border-solid border  bg-red-900 p-1 hover:underline' onClick={clickDelete}>Delete</button>
        </td>
      </tr>

    ))

  )
}
