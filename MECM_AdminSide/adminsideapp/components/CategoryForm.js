"use client"

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import ProductImage from './ProductImage';

const CategoryForm = (props) => {
    const [imgurl, setimgurl] = useState('');
    const [catname, setCat] = useState('');
    const [parentcatname, setparentCat] = useState('No Parent');
  
  
  if(props.mode=='edit'){ 
    const {ecatname, esetCat, eparentcatname, esetparentCat, eimgurl, esetimgurl} = props;

    
    function setcategory(ev){
       // settouchstate(true);
        esetCat(ev.target?.value);
    }
    function setparentcategory(ev){
        //settouchstate(true);

        
        esetparentCat(ev.target?.value);

    }

    async function cathandeledit(ev){
        ev.preventDefault();
        const data = {ecatname, eparentcatname, eimgurl};
        

        
        const res =  await axios.put(('/api/categories/'+props.editcat._id), data);
        
        props.getallcats();
        esetCat('');
        esetimgurl('')  
        props.setmode('');
        Swal.fire({
            title: "Edit Saved!",
            text: "Your changes have been saved!",
            icon: "success"
          });
     
    }

   
    
    return (
    <>
        <h1 className='m-2 text-2xl ctext-blue-900' > Edit Category : {ecatname} </h1>
        <form onSubmit={cathandeledit} className="flex flex-col text-xl">
            <div className="">
            
                <label htmlFor="" className='mx-2'>Category Name</label>
                <input type="text" placeholder='name of category' className='mx-2' value={ecatname} onChange={setcategory}/> 
            </div>
            <div className="">
            <label htmlFor="" className='mx-2'>Parent Category</label>
            <select name="" id="" className='w-content p-1' onChange={setparentcategory} defaultValue={eparentcatname}> 
            <option key="0" value="No Parent" >No Parent</option>
            <option key="1" value="Clothing" >Clothing</option>
            <option key="2" value="Electronics" >Electronics</option>
            <option key="3" value="Accessories" >Accessories</option>
            <option key="4" value="Footwear" >Footwear</option>
            <option key="5" value="Sports" >Sports</option>
            <option key="6" value="Decoratives" >Decoratives</option>
            
            </select>
            </div>
            <div className="mx-4"><label htmlFor="np-i">Product Images:</label>
            <div className="mx-2"><ProductImage imgurl={eimgurl} setimgurl={esetimgurl}/></div>
            
</div>
            <div className='flex'>
                <button className="btn-primary mx-2 px-4 py-1 " type='submit' >Save</button>
            </div>

              </form>
    
    </>
    
  )}
else{


    function setParent(ev){
        setparentCat(ev.target?.value);
        
    }
    
    function setcategory(ev){
        setCat(ev.target?.value);
    }

    async function cathandel(ev){
        ev.preventDefault();
        const data = {catname, parentcatname, imgurl};
        
        
        const res =  await axios.post('/api/categories', data);
        
        props.getallcats();
  
        props.setposted(true);
       Swal.fire({
        title: "Added!",
        text: "A new category named : '"+ catname +"' have been saved!",
        icon: "success"
      });
      setCat('');
        setimgurl('');
        
     
    }

    return(
        <>
        <div className="flex"><h1 className='m-2 text-2xl ctext-blue-900'>Add new Categories</h1></div>
        
            
            <form onSubmit={cathandel} className="flex flex-col text-xl my-1">
           
            <div className="">
            
                <label htmlFor="" className='mx-2'>Category Name</label>
                <div className="flex w-full"><input type="text" placeholder='name of category' className='mx-2' value={catname} onChange={setcategory}/> </div>
                
            </div>
            <div className="">
             <label htmlFor="" className='mx-2'>Parent Category</label>
            <select name="" id="" className='w-content p-1' onChange={setParent} defaultValue='No Parent'> 
            <option key="0" value="No Parent" >No Parent</option>
            <option key="1" value="Clothing" >Clothing</option>
            <option key="2" value="Electronics" >Electronics</option>
            <option key="3" value="Accessories" >Accessories</option>
            <option key="4" value="Footwear" >Footwear</option>
            <option key="5" value="Sports" >Sports</option>
            <option key="6" value="Decoratives" >Decoratives</option>
            
            </select>
            </div>

            <div className="flex m-4 items-center">
            <div className="mx-2"> <label htmlFor="np-i">Category Image: </label>
              <ProductImage imgurl={imgurl} setimgurl={setimgurl} /></div>

            <div className='flex h-16'>
                <button className="btn-primary mx-2 px-4 py-1 " type='submit' >Save</button>
            </div>
            </div>

              </form>
        </>
    )
}

}

export default CategoryForm
