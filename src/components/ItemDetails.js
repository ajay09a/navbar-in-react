import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetails = () => {
  const param = useParams();
  return (
    <>
      <div className='main'>ItemDetails</div>
      <center><h1>{param.Id}</h1></center>
    </>
  )
}

export default ItemDetails