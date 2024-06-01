"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function ProductImage(props) {
    const filedata = new FormData();
    const [loading, setLoading] = useState(false);
    async function imageupload(ev){
        if(ev.target?.files?.length>0){ 
          setLoading(true);
          filedata.set('file', ev.target?.files[0]);  
          const uploadedfile = await axios.post('/api/products/upload' , filedata);
          props.setimgurl(uploadedfile.data);
          setLoading(false);
    
        }
    
      }
    if(!loading){ if(!props.imgurl){return (<div className="flex">
    <label htmlFor="np-i" className=' px-2 text-center flex justify-center items-center cursor-pointer w-32 h-32 text-xl rounded-lg bg-white cborder-blue-900 border-2'> <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" fill="#bc69ff"></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#bc69ff"></path> </g></svg><input type="file" accept="image/*" className='hidden' id="np-i" onChange={imageupload}></input></label> 
  </div>)}
  
  else{
    return(<>
        <div className="flex">
            <img src={props.imgurl} alt="" className='px-2 text-center flex justify-center items-center h-32 rounded-lg ' />
           
            
  </div> <div className=" px-2 flex my-1 ">
    <label htmlFor="np-i" className=' px-4 text-center flex justify-center items-center cursor-pointer w-28 rounded-lg bg-white dborder-blue-900 border-2 text-gray-600'> <svg className='' fill="#bc69ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="update-alt" class="icon glyph"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,3A9,9,0,0,0,6,5.32V3A1,1,0,0,0,4,3V8a1,1,0,0,0,.92,1H10a1,1,0,0,0,0-2H7.11A7,7,0,0,1,19,12a1,1,0,0,0,2,0A9,9,0,0,0,12,3Z"></path><path d="M19.08,15H14a1,1,0,0,0,0,2h2.89A7,7,0,0,1,5,12a1,1,0,0,0-2,0,9,9,0,0,0,15,6.68V21a1,1,0,0,0,2,0V16A1,1,0,0,0,19.08,15Z"></path></g></svg> Change<input type="file" accept="image/*"  className='hidden' id="np-i" onChange={imageupload}></input></label> 
  </div>
    </>)
  }}
  else{
    return(
      <div className=' flex items-center justify-center text-center px-2 w-24 h-24 font-bold text-gray-400'>
        <ClipLoader color="#bc69ff" />
      </div>
    )
  }

}

export default ProductImage
