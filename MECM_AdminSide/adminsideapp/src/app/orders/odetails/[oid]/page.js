"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MyLayout from '../../../../../components/MyLayout';
import axios from 'axios';

export default function Page() {
    const params = useParams();
    const {oid} = params;
    const [order, setorder] = useState(null);
    useEffect(()=>{
        axios.get('/api/orders/order/'+oid).then(res=>{
            setorder(res.data)
        })
    },[])
  return (
    <MyLayout>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center"><div className=" cbg-blue-900 text-white shdw mx-8 mt-4 justify-center items-center text-center mb-2 rounded-xl p-4 h-5/6 justify-around px-4">
        
        <span className=" text-xl font-bold p-1">Order No. {order?._id}</span>

      </div></div>  

      <div className='algo' >
                <div className=" flex flex-col shdw m-2 p-4">
                  <div className="flex"><span className='font-bold text-xl py-2'>Costumer Details:</span></div>

                  <div className="lola"><div className="flex mx-6 border-8 cborder-blue-900  p-2 shadow-xl ">
                    <img className=' w-36 h-36' src={order?.userimg} alt="" />
                  </div>
                  
                  <div className="w-3/4 flex  flex-col  justify-around 
                  font-sans text-lg">
                    
                    <div className="flex cola">
                    <span className='font-bold cakshar text-gray-600'>Name: </span> <span className='font-bold cakshar'>{order?.username}</span>
                    </div>

                    <div className="flex cola ">
                    <span className='font-bold cakshar text-gray-600'>E-Mail: </span> <span className='font-bold cakshar'>{order?.registeredemail}</span>
                    </div>

                  </div></div>
                
                  
                  
                
                </div>
                  
                
              </div>


              <div className=' items-center algo'>
            <div className="flex flex-col justify-between shdw  m-2 p-4 ">

              

            <span className='font-bold text-xl py-2'>Address Details:</span>
            
            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Address: </label>
            <span className='cakshar' >{order?.userAddress}</span></div>

            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Pin Code: </label>
            <span className='cakshar'>{order?.userAddressPin}</span></div>

            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Country: </label>
            <span className='cakshar'>{((order?.userCountry)=="ind")?("India"):("USA")}</span></div>

            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Contact No.: </label>
            <span className='cakshar'>{order?.userPhoneNo}</span></div>

            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Contact E-Mail: </label>
            <span className='cakshar'>{order?.useremail}</span></div>


            </div>
        </div>


        
        <div className='algo'>
            <div className="flex flex-col justify-between shdw m-2 p-4 ">

              

            <span className='font-bold text-xl py-2'>Order Details:</span>
            
            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Order No.: </label>
            <span className='cakshar' >{order?._id}</span></div>

            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Total Price: </label>
            <span className='cakshar'>Rs.{order?.totprice}/-</span></div>

            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Payment Status: </label>
            <span className='cakshar'>{((order?.paid)==true)?("paid"):("not paid")}</span></div>

            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Date: </label>
            <span className='cakshar'>{((order?.time)?.toString())?.slice(0,10)}</span></div>
            <div className="flex items-center gap-2 px-6"><label className='m-0 p-0 cakshar' htmlFor="ds">Time: </label>
            <span className='cakshar'>{((order?.time)?.toString())?.slice(11,19)}</span></div>
            


            </div>
        </div>


        <div className="algo"><div className="flex m-2 p-4 shdw"> <span className='font-bold text-xl py-2 px-2'>Product Details:</span></div></div>

        



        {
            order?.line_items.map(each=>{
                return(
                    <div key={each.price_data.product_data.pid} className='algo'>
            <div className="flipflop">
              <div className="flex ">
                <img className='h-48 w-32' src={each.price_data.product_data.image} alt="" />
              </div>
              <div className="w-3/4 flex px-2 flex-col justify-around font-sans text-lg">
                <div className="flex">
                  <span className='font-bold text-xl'>{each.price_data.product_data.name}</span>
                </div>
               
                <div className="flex justify-between items-center">

                <div className="flex items-center justify-between px-2 font-bold"><span className='font-bold text-xl'>
                    <span className='font-bold text-lg'>Price: Rs.</span>{each.price_data.product_data.price}/-
                  </span></div>


                  <div className="flex justify-between items-center">

                  <div className="flex items-center font-bold mx-2"><span className='font-bold text-xl'>
                  <span className='font-bold text-lg'>Qty: </span></span></div>

                    

                                <div className="flex items-center font-bold mx-2"><span className='font-bold text-xl'>
                    <span className='font-bold text-lg'></span>{each.qty}</span></div>



                    

                  </div>

                  



                    


                  


                  



                  {/* <Link href={"/products/" + each.price_data.product_data.pid} className='btn-zprimary'>
                    <div className="flex items-center justify-between px-2 font-bold">
                      <svg viewBox="-1.92 -1.92 27.84 27.84" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="2">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M6 8V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V16M6 12H13M13 12L10.5 9.77778M13 12L10.5 14.2222" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                      Open
                    </div>
                  </Link> */}
                  

                  



                </div>
              </div>
            </div>
          </div>
                )
            })
        }
      
      </div>
        
    </MyLayout>
  )
}
