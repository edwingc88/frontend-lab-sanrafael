/* eslint-disable react-hooks/exhaustive-deps */
import { PropTypes } from 'prop-types'
/* eslint-disable multiline-ternary */

import { Suspense, lazy, useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Loader from './common/Loader'
import routes from './routes'
import ECommerce from './pages/Dashboard/ECommerce'

import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'
import Dashboard from '../src/pages/Dashboard'
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
      </Routes>
    </>
  )
}

const AppLanding = ({ authvalue }) => {
  const [visible, setVisible] = useState(true)

  const componenteGG = () => {
    if (authvalue) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    componenteGG()
  }, [authvalue])

  return (
    <>{visible ? <h1>Bienvenido</h1> : <h1>No estas autorizado</h1>}
      {visible && <><Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
                 </>}
      {!visible && <AppDashboard />}
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
      <AppLanding authvalue={auth} />
      <button onClick={handleClick}>Boton que se usa como cookies de Auth</button>
    </>
  )
}

export default App

AppLanding.prototype = {
  authvalue: PropTypes.bool.isRequired
}
