import Breadcrumb from '../../components/Breadcrumb'
// import { useContext } from 'react'

import { CarritoProvider } from '../../context/CarritoProvider'
import { ExamenesProvider } from '../../context/ExamenesProvider'
import { CarritoComponent } from '../../components/CarritoComponent'
/* import { ToastContainer, toast } from 'react-toastify' */
import { ComprasComponent } from '../../components/ComprasComponent'
// import { CarritoContext } from '../context/CarritoContext'

const FormOrdersAdd = () => {
/*   const { listado, agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (examen) => {
    agregarCompra(examen)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  } */

  return (
    <>
      <ExamenesProvider>
        <CarritoProvider>
          <Breadcrumb pageName='Orders Add' />
          <div className='grid grid-cols-3 gap-9 sm:grid-cols-3'>
            <div className='flex flex-col col-span-2 gap-2'>
              <CarritoComponent />
            </div>

            {/* <!-- Factura --> */}
            <div className='flex flex-col col-span-1 gap-2 bg-slate-700  text-yellow-50  p-4 border-gray-500 '>

              <span>ORDER #23416</span>
              <span>DATE: 12/12/2022</span>
              <span>STATUS: PENDING</span>
              <hr />
              <span>CANTIDAD DE EXAMENES : 3</span>
              <span>SUBTOTAL: $2999</span>
              <span>IVA: $299</span>
              <span>TOTAL: $2999</span>
              <button className='bg--primary w-full p-1 bg-green-500 text-black '>AGREGAR ORDEN</button>
            </div>
          </div>
          <div className='mt-4'>
            <ComprasComponent />
          </div>
        </CarritoProvider>
        {/*       <ToastContainer /> */}
      </ExamenesProvider>
    </>
  )
}

export default FormOrdersAdd
