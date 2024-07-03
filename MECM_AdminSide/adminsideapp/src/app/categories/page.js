"use client"
import React, { useEffect, useState } from 'react'
import MyLayout from '../../../components/MyLayout'
import axios from 'axios';
import Link from 'next/link';

import CategoryForm from '../../../components/CategoryForm';
import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';
//import './styles.css'



function Page() {
    const router = useRouter();
    const [allcats, setallcats] = useState([]);
    const [mode, setmode] = useState('');
    const [editcat, seteditcat] = useState({});
    const [posted, setposted] = useState(false);
    const [eimgurl, esetimgurl] = useState('');
    const [ecatname, esetCat] = useState('');
    const [eparentcatname, esetparentCat] = useState('');
    function getallcats(){
        axios.get('/api/categories').then(res=>{
            setallcats((res.data).reverse());
        })
    }
    if(posted){
      //router.reload();
      //router.replace(router.aspath);
      
      setposted(false);
    }

    useEffect(()=>{
      getallcats();
      if(mode=="edit"){
        
      }

    },[])

    
    
    function editmodefun(eachcat){
       setmode('edit');
       esetCat(eachcat.catname);
       esetparentCat(eachcat.parentcatname);
        seteditcat(eachcat); 
        esetimgurl(eachcat.imgurl); 
        


    }
    async function deletehandle(eachcat){
      Swal.fire({
        title: 'Do you really want to delete the category : "'+(eachcat.catname)+'" ?',
        showDenyButton: true,
        //showCancelButton: true,
       
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: { 
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          
          axios.delete('/api/categories/'+eachcat._id).then(()=>{
            getallcats();
            Swal.fire('Deleted!', '', 'success')})

        } else if (result.isDenied) {
          Swal.fire('Category Not Deleted', '', 'info')
        }
      })

    }



  return (
    <MyLayout>

        <CategoryForm mode={mode} editcat={editcat} allcats={allcats} getallcats={getallcats} router={router} setposted={setposted} key={editcat._id} ecatname={ecatname} eparentcatname={eparentcatname} esetCat={esetCat} esetparentCat={esetparentCat} setmode={setmode} eimgurl={eimgurl} esetimgurl={esetimgurl}/>


        

              <div className="flex h-60 overflow-auto">
          <table className="border-2 rounded-lg">
            <thead>
              <tr>
                <td className="text-center text-center border-2 bs  ">Categories</td>
                <td className="text-center text-center border-2 bs  ">Parent Categories</td>
                <td className="text-center text-center border-2 bs  ">Edit</td>
                <td className="text-center text-center border-2 bs  ">Delete</td>
              </tr>
            </thead>
            <tbody>
              {
              allcats.map(eachcat => {
                return (
                  <tr className=" " key={eachcat._id}>
                    <td className=" text-center p-2 text-center border-2 bs  " >{eachcat.catname}</td>
                    <td className=" text-center p-2 text-center border-2 bs  " >{eachcat.parentcatname}</td>
                    <td className="  p-2 text-center border-2 bs  ">
                     <a href="#top"><button className="btn-primary flex items-center justify-center rounded-lg px-4 font-bold cbg-blue-900 m-auto text-white text-center  w-fit" onClick={() =>editmodefun(eachcat)}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-1/4 '><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="#ffffff"></path> </g></svg> Edit</button></a>
                      </td>
                    <td className="  text-center p-2 text-center border-2 bs  "><button className="btn-primary m-auto flex items-center justify-center  rounded-lg px-4 w-fit text-center font-bold cbg-red-900 text-white" onClick={()=>deletehandle(eachcat)}><svg className='w-1/4' width="90px" height="90px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z" fill="#ffffff"></path></g></svg> Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
     
    </MyLayout>
  )
}

export default Page
