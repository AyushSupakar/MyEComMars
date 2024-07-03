"use client"
import React, { useEffect, useState } from 'react'
import MyLayout from '../../../../components/MyLayout'
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import ProductImage from '../../../../components/ProductImage';
import Swal from 'sweetalert2';

export default function Page() {
  const [desc, setdesc] = useState('');
  const [prdname , setPrdname] = useState('');
  const [price , setPrice] = useState('');
  const [imgurl , setimgurl] = useState('');
  const [redir , setredir] = useState(false);
  const [catname, setCat] = useState('');
  const [allcats, setallcats] = useState([]);
    const [parentcatname, setparentCat] = useState('No Parent');

    function getallcats(){
      axios.get('/api/categories').then(res=>{
          
          setallcats(res.data);
      })
  }
    useEffect(()=>{
      getallcats();

    },[])
    function setParent(ev){
      setparentCat(ev.target?.value);
      
  }
  



  const router = useRouter();
  async function createProduct(ev){
    
    ev.preventDefault();
    const data = {prdname, desc, price, imgurl, parentcatname};
    await axios.post('/api/products', data);
    
     setredir(true);
     Swal.fire({
      title: "Added!", 
      text :"The product: '"+(prdname)+ "' has been Added Successfully!",
      icon: "success"
     })
  }
  if(redir){
    router.push('/products');
  }
  
  
  
  return (
    <MyLayout>

            <h1 className="px-1 mb-1 ctext-blue-900 text-xl">New Product</h1>
        <form onSubmit={createProduct} className=" flex flex-col mt-4 text-lg">
            <label htmlFor="np-pn">Product Name: </label>
            <input  type="text" placeholder='product_name' value={prdname} onChange={(ev)=>setPrdname(ev.target.value) } id="np-pn"></input>


            <label htmlFor="np-pn">Product Category: </label>
            <select name="" id="" className='w-content p-1' onChange={setParent} value={parentcatname}> 
            <option id='nopar' value={"No Parent"} onChange={(ev)=>{setparentCat(ev.target?.value)}} selected>No Parent</option>
            
            {allcats.length>0 && allcats.map(eachcat=>{
                return (<option key={eachcat._id} value={eachcat.catname}>{eachcat.catname}</option>)
            })}
            </select>

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
