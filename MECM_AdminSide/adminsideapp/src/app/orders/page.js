"use client"
import React, { useEffect, useState } from 'react'
import MyLayout from "../../../components/MyLayout"
import axios from 'axios';
import Link from 'next/link';
export default function Page() {

  const [orderarr, setorderarr] = useState([]);

  useEffect(()=>{
    axios.get("/api/orders").then(res=>{
        setorderarr(res.data)

    })
  },[])

  if((orderarr?.length)==0){
    return(<MyLayout>
      <div className="flex justify-center"><h1 className="font-bold ctext-blue-900 text-xl">No orders yet..</h1></div>
    </MyLayout>)}

  return (
    <MyLayout>
      <div className="flex flex-col items-center">
      <div className="flex justify-center items-center"><div className=" cbg-blue-900 text-white shdw mx-4 mt-4 justify-center items-center text-center mb-2 rounded-xl p-4 justify-around px-4">
        
        <span className=" catmq">ORDERS</span>

      </div></div>

      <div className='xshdw m-4 w-5/6 p-4 Xnewhidden'>
            <div className=" m-2 p-4">
              
              <div className=" flex justify-between items-center font-sans text-lg ">
                <div className="flex">
                  <span className='font-bold text-xl'>Order No.</span>
                </div>
               <div className="flex items-center justify-center px-2 font-bold pl-12 w-2/6"><span className='font-bold text-xl'>
                    <span className='font-bold text-xl'>Date of Order </span>
                  </span></div>

                  <div className="flex justify-start w-1/6">
                  <span className='font-bold text-xl'>Payment Status</span>
                </div>

                <div className="flex justify-start"><span className='font-bold text-xl'>Info.</span></div>

                
                  
              </div>
            </div>
          </div>
        

        {orderarr?.map((each)=>{
        return(
          <div key={each._id} className='shdw m-4 w-5/6 p-4'>
            <div className=" m-2 py-4 px-2">
              
              <div className=" medown ">
                <div className="flex onlywide">
                <span className='font-bold text-base '><span className='nHidden'>Order_No. </span>{each._id}</span>
                </div>
               <div className="flex items-center onlywide  px-2 font-bold "><span className='nHidden'>Date: </span><span className='font-bold text-lg'>
               {((each?.time).toString()).slice(0,10)}
                  </span></div>

                  <div className="flex onlywide2 justify-center">
                  <span className='nHidden'>Payment_Status: </span><span className='font-bold text-lg'>{(each.paid)?("Paid"):("Not Paid")}</span>
                </div>

                <div className="flex onlywide2 justify-end"><Link className="btn-primary flex items-center justify-center rounded-lg  text-center font-bold cbg-green-900 text-white" href={'/orders/odetails/'+each._id}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7Z" fill="#ffffff"></path> <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#ffffff"></path> </g></svg></Link></div>

                
                  
              </div>
            </div>
          </div>
        
        )
        
      })}

      </div>
          </MyLayout>
  )
}
