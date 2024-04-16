/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

const initialState = []

export const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case '[CARRITO] Agregar Compra':
        return [...state, action.payload]
      case '[CARRITO] Eliminar Comra':
        return state.filter(compra => compra.id !== action.payload)
      default:
        return state
    }
  }

  const [listado, dispatch] = useReducer(comprasReducer, initialState)

  const agregarCompra = (compra) => {
    const action = {
      type: '[CARRITO] Agregar Compra',
      payload: compra
    }
    dispatch(action)
  }

  const eliminarCompra = (id) => {
    const action = {
      type: '[CARRITO] Eliminar Comra',
      payload: id
    }
    dispatch(action)
  }

  return (
    <CarritoContext.Provider value={{ listado, agregarCompra, eliminarCompra }}>
      {children}
    </CarritoContext.Provider>
  )
}
