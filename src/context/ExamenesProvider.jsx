/* eslint-disable react/prop-types */
import { ExamenesContext } from './ExamenesContext'
import { useState, useEffect } from 'react'

export const ExamenesProvider = ({ children }) => {
  const ulrApiExam = 'http://localhost:1234/exams'
  const [examenes, setExamenes] = useState([])

  const fetchExamenes = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setExamenes(data)
    console.log(data)
    console.log(examenes)
  }

  useEffect(() => {
    fetchExamenes(ulrApiExam)
  }, [])

  return (
    <ExamenesContext.Provider value={{ examenes }}>
      {children}
    </ExamenesContext.Provider>
  )
}
