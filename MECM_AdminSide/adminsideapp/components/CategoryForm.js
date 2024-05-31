"use client"

import axios from 'axios';
import { Router } from 'next/router';

import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

const CategoryForm = (props) => {
    
  
  if(props.mode=='edit'){ 
    const {ecatname, esetCat, eparentcatname, esetparentCat} = props;
    // const [catname, setCat] = useState(props.editcat.catname);
    // const [parentcatname, setparentCat] = useState(props.editcat.parentcatname);
    //const [touchstate, settouchstate] = useState(false);
    //const [oldprop, setoldprop] = useState(props)
    //console.log(touchstate);

    
   
  
    // if(!touchstate){
    //     setCat(props.editcat.catname);
    //     setparentCat(props.editcat.parentcatname);
    //     settouchstate(true);
    // }
  

    //console.log(props.editcat);
    //console.log(props.editcat.catname);
    
   // console.log(catname);
   // console.log(parentcatname);
    // function setParent(ev){
    //     setparentCat(ev.target?.value);
    //     console.log(ev.target.value);
    // }
    
    function setcategory(ev){
       // settouchstate(true);
        esetCat(ev.target?.value);
    }
    function setparentcategory(ev){
        //settouchstate(true);

        console.log(ev.target.value);
        esetparentCat(ev.target?.value);

    }

    async function cathandeledit(ev){
        ev.preventDefault();
        const data = {ecatname, eparentcatname};
        console.log(eparentcatname);

        console.log(data);
        const res =  await axios.put(('/api/categories/'+props.editcat._id), data);
        console.log(res.data);
        props.getallcats();
        esetCat('');
        esetparentCat('');
        props.router.push('/categories');
        props.setmode('');
        Swal.fire({
            title: "Edit Saved!",
            text: "Your changes have been saved!",
            icon: "success"
          });
     
    }

   
    
    return (
    <>
        <form onSubmit={cathandeledit} className="flex flex-col">
        <h1 className='m-2 text-lg text-blue-900'> Edit Category : {ecatname} </h1>
            <div className="">
            
                <label htmlFor="" className='mx-2'>Category Name</label>
                <input type="text" placeholder='name of category' className='mx-2' value={ecatname} onChange={setcategory}/> 
            </div>
            <div className="">
            <label htmlFor="" className='mx-2'>Parent Category</label>
            <select name="" id="" className='w-content p-1' onChange={setparentcategory} defaultValue={eparentcatname}> 
            <option key="0" value="No Parent" >No Parent</option>
            {console.log(props.allcats?.length)}
            {    
            props.allcats.length>0 && props.allcats.map(eachcat=>{
                return (<option key={eachcat._id} value={eachcat.catname} >{eachcat.catname}</option>)
            })}
           
            
            </select>
            </div>
            <div className='flex'>
                <button className="btn-prim mx-2 px-4 py-1 " type='submit' >Save</button>
            </div>

              </form>
    
    </>
    
  )}
else{
    const [catname, setCat] = useState('');
    const [parentcatname, setparentCat] = useState('No Parent');
    const [touchstate, settouchstate] = useState(false);
    const [x, setx] = useState('');
    const [oldprop, setoldprop] = useState(props);
    const ref = useRef();

    function setParent(ev){
        setparentCat(ev.target?.value);
        console.log(ev.target.value);
    }
    
    function setcategory(ev){
        setCat(ev.target?.value);
    }

    async function cathandel(ev){
        ev.preventDefault();
        const data = {catname, parentcatname};
        
        console.log(data);
        const res =  await axios.post('/api/categories', data);
        console.log(res.data);
        props.getallcats();
  
        props.setposted(true);
       Swal.fire({
        title: "Added!",
        text: "A new category named : '"+ catname +"' have been saved!",
        icon: "success"
      });
      setCat('');
        setparentCat('No Parent');
        
     
    }

    return(
        <>
            <form onSubmit={cathandel} className="flex flex-col">
           <h1 className='m-2 text-lg text-blue-900'>Add new Categories</h1>
            <div className="">
            
                <label htmlFor="" className='mx-2'>Category Name</label>
                <input type="text" placeholder='name of category' className='mx-2' value={catname} onChange={setcategory}/> 
            </div>
            <div className="">
            <label htmlFor="" className='mx-2'>Parent Category</label>
            <select name="" id="" className='w-content p-1' onChange={setParent} value={parentcatname}> 
            <option id='nopar' value={"No Parent"} onChange={(ev)=>{setparentCat(ev.target?.value)}} selected>No Parent</option>
            {console.log(props.allcats?.length)}
            {    
            props.allcats.length>0 && props.allcats.map(eachcat=>{
                return (<option key={eachcat._id} value={eachcat.catname}>{eachcat.catname}</option>)
            })}
           
            
            </select>
            </div>
            <div className='flex'>
                <button className="btn-prim mx-2 px-4 py-1 " type='submit' >Save</button>
            </div>

              </form>
        </>
    )
}

}

export default CategoryForm
