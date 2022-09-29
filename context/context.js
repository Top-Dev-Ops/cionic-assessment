import React, { useState, createContext } from 'react'

const DataContext = createContext()

export default function DataProvider({ children }) {
  const [data, setData] = useState({
    color: 'Graphite',
    leg: 'Left',
    upperLeg: 0,
    lowerLeg: 0,
  })
  const [message, setMessage] = useState({
    status: null,
    message: null
  })

  const updateData = (name, value) => setData(prev => ({
    ...prev,
    [name]: value,
  }))

  const submitData = async () => {
    const res = await fetch("/api/data", {
      method: 'POST',
      body: JSON.stringify(data)
    })
    setMessage({
      status: res.status,
      message: await res.text()
    })
    setData({
      color: 'Graphite',
      leg: 'Left',
      upperLeg: 0,
      lowerLeg: 0,
    })
    setTimeout(() => setMessage({
      status: null,
      message: null
    }), 5000)
  }

  return (
    <DataContext.Provider
      value={{
        data,
        message,
        updateData,
        submitData
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext }