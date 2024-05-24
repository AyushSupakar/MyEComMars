"use client"
import React, { useEffect, useState } from 'react'
import MyLayout from "../../../components/MyLayout"
import Link from 'next/link'
import axios from 'axios';
export default function page() {
  const[allproducts,setallproducts ] = useState([]);
  useEffect(()=>{
    axios.get('/api/products').then(response=>{ setallproducts(response.data); });

  },[]);
   async function Delete(pname){
    //await axios.delete('api/products', {pid});
    console.log("Deleting : " + pname);
  }
  return (
    <MyLayout>
        <Link href="/products/new" className='bg-blue-900 text-white p-2 px-4 rounded-lg'>Add New Products</Link>

        <div className="flex">
          <table>
            <thead>
              <tr>
                <td className="text-center border-2 border-blue-900 " >Products</td>
                <td className="text-center border-2 border-blue-900 ">Delete</td>
              </tr>
            </thead>
            <tbody>
              {allproducts.map(eachproduct => {
                return (
                  <tr className="border-2 border-blue-900 " key={eachproduct._id}>
                    <td className=" text-center p-2 border-2 border-blue-900 " >{eachproduct.prdname}</td>
                    <td className=" flex items-center justify-center p-2 "><div className="flex items-center justify-center rounded-lg p-2 px-4 font-bold bg-blue-900 text-white"><button className='' onClick={ev=>Delete(eachproduct.prdname)}>DELETE</button></div></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    </MyLayout>
  )
}
