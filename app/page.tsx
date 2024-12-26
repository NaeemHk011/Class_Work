'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
const [data, setData]= useState([])

  async function FetchData(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setData(data)
  }

    useEffect(()=>{
      FetchData()
    },[])


  return (
    <div>
      {/* <button onClick={FetchData}>Get Data</button> */} 
      {
        data.map((elem)=> <div key={elem.id}>
          <p>{elem.id}</p>
          <p>{elem.name}</p>
        </div> )
      }
    </div>
  )
}

export default page




//useffect code 


// 'use client'
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Home() {
// const [panadolDose,setPanadolDose]=useState(0)
// const [vitaminDose,setVitaminDose]=useState(0)

// const HandlePanaDolDose = ()=>{
//   setPanadolDose(panadolDose+1)
// }

// function HandleVitaminDose(){
//   setVitaminDose(vitaminDose+1)
  
// }

//   // immunity goes down down down!!!
// // useEffect(()=>{
// //   setPanadolDose(panadolDose+1)
// //   console.log('immunity goes down down down!!!')
// // },[panadolDose]);

// // useEffect(()=>{
// //   console.log('I Run')
// //   document.body.style.backgroundColor = 'red';
// // },[])


//   return (
//     <div>
// {panadolDose} Dose Taken
// <button onClick={HandlePanaDolDose}>PanaDol</button><br />
// {vitaminDose} Dose Takenbr 
// <button onClick={HandleVitaminDose}>Vitamin</button>

//  </div>
//   );
// }
