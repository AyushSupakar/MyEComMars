"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MyLayout from '../../../../../components/MyLayout';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

function page() {
    const [desc, setdesc] = useState('');
    const [prdname , setPrdname] = useState('');
    const [price , setPrice] = useState('');
    const [redir , setredir] = useState(false);
    const router = useRouter();
    const pathName = usePathname();
    const params = useParams();
    const productid= params.editproduct;
    useEffect(()=>{console.log("params = "+ params.editproduct)
    console.log("pathname = "+ pathName)
    axios.get('/api/products/'+productid).then(res=>{
        setPrdname(res.data.prdname);
        setdesc(res.data.desc);
        setPrice(res.data.price);
        console.log(prdname , desc , price);
    })
    },[])
    async function createProduct(ev){
      console.log("form submitted");
      ev.preventDefault();
      const data = {prdname, desc, price};
      const updatedproduct = await axios.put(('/api/products/'+productid),data);
      console.log(updatedproduct);
       setredir(true);
    }
    if(redir){
      router.push('/products');
    }
    return (
      <MyLayout>
  
          <form onSubmit={createProduct} className=" flex flex-col mt-4">
              <h1 className="px-1 mb-1 text-blue-900 text-lg">Edit Product:</h1>
              <label htmlFor="">Product Name: </label>
              <input  type="text" placeholder='product_name' value={prdname} onChange={(ev)=>setPrdname(ev.target.value)}></input>
              <label htmlFor="">Description: </label>
          <textarea name="" id=""   placeholder='describe the product' value={desc} onChange={(ev)=>setdesc(ev.target.value)}/>
          <label htmlFor="">Price(INR): </label>
              <input  type="number" placeholder='price' value={price} onChange={(ev)=>setPrice(ev.target.value)}></input>
              <div className="flex">
                <button type='submit' className='btn-primary'>Save</button></div>
              
          </form>
          
      </MyLayout>
    )
}

export default page
