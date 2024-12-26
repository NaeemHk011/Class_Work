'use client'
import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <div>
      <h1>Mobile: {params.mobile}</h1>
      <h1>Price: {params.price}</h1>
      <h1>Model: {params.model}</h1>
    </div>
  )
}

export default page
