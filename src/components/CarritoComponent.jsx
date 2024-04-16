// import { ToastContainer, toast } from 'react-toastify'
import { CardTable } from '../components/CardTable'

export const CarritoComponent = () => {
  // const notify = () => toast('Delete client!')

  return (
    <>
      <h2 className='mt--k+98 '>Examenes Seleccionados en esta Orden</h2>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Nro Orden
              </th>
              <th scope='col' className='px-6 py-3'>
                Nombre de Examen
              </th>
              <th scope='col' className='px-6 py-3'>
                Fecha
              </th>
              <th scope='col' className='px-6 py-3'>
                Estado
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Opcion
              </th>
            </tr>
          </thead>
          <tbody>
            <CardTable />
          </tbody>
        </table>
      </div>
      {/* <ToastContainer /> */}
    </>
  )
}
