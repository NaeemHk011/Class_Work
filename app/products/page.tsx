import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
All Products
    <Link href={'products/iphone/80000/2022'}> <h1>i-Phone</h1> </Link> 
    <Link href={'products/Samsung/50000/2023'}>  <h1 >Samsung</h1></Link>
     <Link href={'products/Oppo/40000/2021'}> <h1>Oppo</h1> </Link>
    </div>
  )
}

export default page
