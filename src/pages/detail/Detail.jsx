import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Detail = () => {
  const {state}=useLocation()
  const {id}=useParams()
  return (
    <div>Detail</div>
  )
}

export default Detail