/* eslint-disable react-hooks/exhaustive-deps */
import { PropTypes } from 'prop-types'
/* eslint-disable multiline-ternary */

import { Suspense, lazy, useEffect, useState } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loader from './common/Loader'
import routes from './routes'
import ECommerce from './pages/Dashboard/ECommerce'

import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'
/* import Dashboard from '../src/pages/Dashboard' */

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'))

const AppDashboard = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
          }
              />
            )
          })}
        </Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </>
  )
}

const AppLanding = ({ authvalue, clickBotonHandle }) => {
  const [visible, setVisible] = useState(authvalue)

  /* const componenteGG = () => {
    if (authvalue) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
 */

  const navigate = useNavigate()
  const clickInside = () => {
    clickBotonHandle()
    navigate('/')
  }

  useEffect(() => {
    setVisible(authvalue)
  }, [authvalue])

  return (
    <>
      {visible && <><div className='flex justify-self-end bg-blue-500 p-1'><button className=' bg-[#287abe]   px-2 p-1 rounded-b align-middle m-auto text-white' onClick={clickInside}>Boton para ir a Dashboard</button></div><Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/*      <Route path='/dashboard' element={<Dashboard />} /> */}
        </Routes>
      </>}
      {!visible && <><div className='flex justify-self-end bg-blue-500 p-1 '><button className='bg-[#287abe] text-white px-2 p-1 rounded-b align-middle m-auto' onClick={clickInside}>Boton para ir a Landing</button></div><AppDashboard /></>}
    </>
  )
}

function App () {
  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState(true)

  const handleClick = () => {
    setAuth(!auth)
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (<Loader />) : (
    <>
      <AppLanding authvalue={auth} clickBotonHandle={handleClick} />
      {/* <button onClick={handleClick}>Boton que se usa como cookies de Auth</button> */}
    </>
  )
}

export default App

AppLanding.prototype = {
  authvalue: PropTypes.bool.isRequired
}

/* {visible ? <h1>Pagina Landing</h1> : <h1>Bienvenido Dashboard</h1>} */
