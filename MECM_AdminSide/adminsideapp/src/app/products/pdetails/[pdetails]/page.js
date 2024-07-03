"use client"
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import MyLayout from '../../../../../components/MyLayout';
import axios from 'axios';
import Link from 'next/link';

function Page() {
  const params = useParams();
  const pid = params.pdetails;
  const [desc, setdesc] = useState('');
  const [prdname , setPrdname] = useState('');
  const [price , setPrice] = useState('');
  const [imgurl , setimgurl] = useState('');
  const [parentcatname , setparentCatname] = useState('');
  useEffect(()=>{
    axios.get('/api/products/'+pid).then(res=>{
        setPrdname(res.data.prdname);
        setdesc(res.data.desc);
        setPrice(res.data.price);
        setimgurl(res.data.imgurl);
        setparentCatname(res.data.parentcatname);
    })
    },[])
  return (
    <MyLayout>
      <div className="flex flex-col justify-center items-center ">
          <div className="border-8 eborder-blue-900 p-2 shadow-xl "><img src={imgurl} alt="" className="rounded-lg h-64"/></div>
          <div className="flex-col my-6 cbg-green-900 rounded-lg shadow-2xl p-8"> 
            <div className="m-4 p-2 px-4 font-bold text-black text-lg rounded-lg shadow-xl xlink cursor-pointer bg-white"> <span className='text-gray-600'>Product Name :</span>  {prdname}</div>
            <div className="m-4 p-2 px-4 font-bold text-black text-lg rounded-lg shadow-xl xlink cursor-pointer bg-white"> <span className='text-gray-600'>Category : </span> {parentcatname}</div>
            <div className="m-4 p-2 px-4 font-bold text-black text-lg rounded-lg shadow-xl xlink cursor-pointer bg-white "> <span className='text-gray-600 '>Description : </span>{desc}</div>
            <div className="m-4 p-2 px-4 font-bold text-black text-lg rounded-lg shadow-xl xlink cursor-pointer bg-white"> <span className='text-gray-600'>Price :</span> Rs.  {price} only </div>
          </div>
        
        <div>
          <Link className="btn-primary m-auto flex items-center justify-center  rounded-lg px-4 w-fit text-center font-bold cbg-blue-900 text-white" href={'/products'}><svg className='size-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8.57 10.7701L7 9.19012L8.57 7.62012" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>Back</Link>       
        </div>
      </div>
    
    </MyLayout>
  )
}

export default Page
