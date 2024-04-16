import { useEffect, useState } from 'react'

export const useFetch = (url, token) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null
  })

  const getFetch = async (url, token = '') => {
    try {
      const resp = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await resp.json()
      setState({
        data,
        isLoading: false,
        errors: null
      })
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error
      })
    }
  }

  useEffect(() => {
    if (!url) return
    getFetch(url, token)
  }, [url, token])

  return {
    data: state.data,
    isLoading: state.isLoading,
    errors: state.errors
  }
}
