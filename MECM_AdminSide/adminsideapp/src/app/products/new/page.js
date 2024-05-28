"use client"
import React, { useState } from 'react'
import MyLayout from '../../../../components/MyLayout'
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import ProductImage from '../../../../components/ProductImage';

export default function page() {
  const [desc, setdesc] = useState('');
  const [prdname , setPrdname] = useState('');
  const [price , setPrice] = useState('');
  const [imgurl , setimgurl] = useState('');
  const [redir , setredir] = useState(false);
  const router = useRouter();
  async function createProduct(ev){
    console.log("form submitted");
    ev.preventDefault();
    const data = {prdname, desc, price, imgurl};
    await axios.post('/api/products', data);
    console.log(prdname, desc, price);
     setredir(true);
  }
  if(redir){
    router.push('/products');
  }
  
  
  
  return (
    <MyLayout>

        <form onSubmit={createProduct} className=" flex flex-col mt-4">
            <h1 className="px-1 mb-1 text-blue-900 text-lg">New Product</h1>
            <label htmlFor="np-pn">Product Name: </label>
            <input  type="text" placeholder='product_name' value={prdname} onChange={(ev)=>setPrdname(ev.target.value) } id="np-pn"></input>
            <label htmlFor="np-i">Product Images: </label>
              <ProductImage imgurl={imgurl} setimgurl={setimgurl} />

            <label htmlFor="np-d">Description: </label>
        <textarea name="" id="np-d"   placeholder='describe the product' value={desc} onChange={(ev)=>setdesc(ev.target.value)}/>
        <label htmlFor="np-p">Price(INR): </label>
            <input  type="number" placeholder='price' value={price} onChange={(ev)=>setPrice(ev.target.value)}id="np-p"></input>
            

            <div className="flex">
              <button type='submit' className='btn-primary'>Save</button></div>
        </form>
        
    </MyLayout>
  )
}
