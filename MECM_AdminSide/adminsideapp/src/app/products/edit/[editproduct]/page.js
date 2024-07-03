"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MyLayout from '../../../../../components/MyLayout';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ProductImage from '../../../../../components/ProductImage';
import Swal from 'sweetalert2';

function Page() {
    const [desc, setdesc] = useState('');
    const [prdname , setPrdname] = useState('');
    const [price , setPrice] = useState('');
    const [imgurl , setimgurl] = useState('');
    const [redir , setredir] = useState(false);
    const [allcats, setallcats] = useState([]);
    const [parentcatname, setparentCat] = useState('No Parent');
    const router = useRouter();
    const pathName = usePathname();
    const params = useParams();
    const productid= params.editproduct;
    function getallcats(){
      axios.get('/api/categories').then(res=>{
         
          setallcats(res.data);
      })
  }
    useEffect(()=>{
    getallcats();
    axios.get('/api/products/'+productid).then(res=>{
        setPrdname(res.data.prdname);
        setdesc(res.data.desc);
        setPrice(res.data.price);
        setimgurl(res.data.imgurl);
        setparentCat(res.data.parentcatname);
    })
    },[])
    function setParent(ev){
      setparentCat(ev.target?.value);
      
  }
  
    async function createProduct(ev){
      
      ev.preventDefault();
      const data = {prdname, desc, price, imgurl, parentcatname};
      const updatedproduct = await axios.put(('/api/products/'+productid),data);
      
      Swal.fire({
        title: "Changes Saved!", 
        text :"The product: '"+(prdname)+ "' has been Updated Successfully!",
        icon: "success"
       })
       setredir(true);
    }
    if(redir){
      router.push('/products');
    }
    return (
      <MyLayout>
  
          <form onSubmit={createProduct} className=" flex flex-col mt-4 text-lg">
              <h1 className="px-1 mb-1 ctext-blue-900 text-xl">Edit Product:</h1>
              <label htmlFor="ep-pn">Product Name: </label>
              <input  type="text" placeholder='product_name' value={prdname} onChange={(ev)=>setPrdname(ev.target.value)} id ="ep-pn"></input>

              <label htmlFor="np-pn">Product Category: </label>
            <select name="" id="" className='w-content p-1' onChange={setParent} value={parentcatname}> 
            <option id='nopar' value={"No Parent"} onChange={(ev)=>{setparentCat(ev.target?.value)}} selected>No Parent</option>
            
            {allcats.length>0 && allcats.map(eachcat=>{
                return (<option key={eachcat._id} value={eachcat.catname}>{eachcat.catname}</option>)
            })}
            </select>

              <label htmlFor="np-i">Product Images: </label>
              <ProductImage imgurl={imgurl} setimgurl={setimgurl} />


              <label htmlFor="ep-d">Description: </label>
          <textarea name="" id="ep-d"   placeholder='describe the product' value={desc} onChange={(ev)=>setdesc(ev.target.value)}/>
          <label htmlFor="ep-p">Price(INR): </label>
              <input  type="number" className="appearance-none" placeholder='price' value={price} onChange={(ev)=>setPrice(ev.target.value)}id ="ep-p"></input>
              <div className="flex">
                <button className="btn-primary" type='submit'>Save</button></div>
              
          </form>
          
      </MyLayout>
    )
}

export default Page
