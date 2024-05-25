"use client"
import React, { useEffect, useState } from 'react'
import MyLayout from '../../../../../components/MyLayout'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import axios from 'axios';


function page() {
    const [prdname, setprdname]=useState('');
    const [desc, setdesc]=useState('');
    const [price, setprice]=useState('');
    const params = useParams();
    const router = useRouter()
    const [cancelled, setcancelled] = useState(false);
    const deleteproductid = params.deleteproductid; 
    useEffect(()=>{
        axios.get('/api/products/'+deleteproductid).then(res=>{
            setprdname(res.data.prdname);
            setdesc(res.data.desc);
            setprice(res.data.price);
        })
    },[])
   function no(){ 
    router.back();
   }
   function yes(){
    axios.delete('/api/products/'+deleteproductid).then(res=>{
        router.back();
    }) 
   }
  return (
    <MyLayout>
        <div className="text-center my-8"><span className='text-blue-900 font-bold text-center text-xl '>Do you really you want to DELETE this product?</span></div>
        <div className="mx-8 my-4">
            <div><span className='font-bold text-m'>Product Name : </span> {prdname} </div>
            <div><span className='font-bold text-m'>Product Description : </span>{desc} </div>
            <div><span className='font-bold text-m'>Product Price : </span>{price} </div>
        </div>
        <div className=" flex justify-around m-8"><button className='bg-blue-900 font-bold text-white rounded-lg p-1 px-4 text-lg' onClick={yes}>Yes</button>
        <button className='bg-red-900 font-bold text-white rounded-lg p-1 px-4 text-lg' onClick={no}>No</button></div>
    </MyLayout>
  )
}

export default page
