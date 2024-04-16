/*
import ChartOne from '../../components/ChartOne.tsx'
import ChartThree from '../../components/ChartThree.tsx'
import ChartTwo from '../../components/ChartTwo.tsx'
import ChatCard from '../../components/ChatCard.tsx'
import MapOne from '../../components/MapOne.tsx'
import TableOne from '../../components/TableOne.tsx' */
/*
import { ClientsComponent } from '../../components/ClientsComponent' */

import React, { useCallback, useState } from 'react'
/* import CardFour from '../../components/CardFour.jsx' */
import CardOne from '../../components/CardOne.jsx'
import CardThree from '../../components/CardThree.jsx'
import CardTwo from '../../components/CardTwo.jsx'

const IncrementarPadre = React.memo(({ incrementar }) => {
  console.log('redibujando')
  return (
    <button onClick={() => incrementar(5)}>+1</button>
  )
})

const ECommerce = () => {
  const [counter, setCounter] = useState(0)
  const incrementarPadre = useCallback((val) => {
    setCounter(contador => contador + val)
  }, [])

  return (
    <>
      <h1>Aplicacion Dashboard</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
      <hr />
      <h2>Counter: {counter}</h2>
      <IncrementarPadre incrementar={incrementarPadre} />

      {/*      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className='col-span-12 xl:col-span-8'>
          <TableOne />
        </div>
        <ChatCard />
      </div>
 */}
      {/*  <ClientsComponent /> */}
    </>
  )
}

export default ECommerce
