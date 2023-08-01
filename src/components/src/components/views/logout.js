import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Logout() {
    const navigate=useNavigate();
        useEffect(()=>{
         fetch('/logout',{
            method:"GET",
            headers:{
            
                'Content-Type':'application/json'
            },
            
         }).then((res)=>{
        toast.success("Logout sucessfully");
           navigate('/',{replace:true});
         })
    })
  return (
    <>
      
    </>
  )
}

export default Logout;