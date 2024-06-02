"use client"
import React, { useEffect, useState } from 'react'
import MyLayout from '../../../../../components/MyLayout'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';


function Page() {
    const [prdname, setprdname]= useState('');
    const [desc, setdesc]= useState('');
    const [price, setprice]= useState('');
    const [imgurl , setimgurl] = useState('');
    const params = useParams();
    const router = useRouter()
    const [cancelled, setcancelled] = useState(false);
    const deleteproductid = params.deleteproductid; 
    useEffect(()=>{
        axios.get('/api/products/'+deleteproductid).then(res=>{
            setprdname(res.data.prdname);
            setdesc(res.data.desc);
            setprice(res.data.price);
            setimgurl(res.data.imgurl);
        })
    },[])
   function no(){ 
    router.back();
   }
   function yes(){
    axios.delete('/api/products/'+deleteproductid).then(res=>{
        Swal.fire('Deleted!', '', 'success')
        router.back();
    }) 
   }
  return (
    <MyLayout>
        <div className="text-center my-8"><span className='ctext-blue-900 font-bold text-center text-xl '>Do you really you want to DELETE this product?</span></div>
        <div className="mx-8 my-4">
            <div><span className='font-bold text-m'>Product Name : </span> {prdname} </div>
            <div><span className='font-bold text-m'>Product Description : </span>{desc} </div>
            <div><span className='font-bold text-m'>Product Price : Rs.{price}  </span> </div>
            <div className=''><span className='font-bold text-m'>Product Image :</span><div className="flex">
            <img src={imgurl} alt="" className=' text-center flex justify-center items-center h-24 rounded-lg ' />
            </div>
          </div>
            

        </div>
        <div className=" flex justify-around m-8"><button className='btn-primary cbg-blue-900 font-bold text-white rounded-lg p-1 px-4 text-lg' onClick={yes}>Yes</button>
        <button className='btn-primary cbg-red-900 font-bold text-white rounded-lg p-1 px-4 text-lg' onClick={no}>No</button></div>
    </MyLayout>
  )
}

export default Page
