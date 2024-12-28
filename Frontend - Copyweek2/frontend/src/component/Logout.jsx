

import React,{useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from "../component/Util";
// import { handleSuccess } from "./Util";
import { ToastContainer } from "react-toastify";
const Logout=()=>{

    const navigate=useNavigate();
    const[loogged,setLoggeduser]=useState('');
    useEffect(()=>{
        setLoggeduser(localStorage.getItem('loogged'));
        },[])

        const handlelogOut=(e)=>{
            localStorage.removeItem('loogged');
            localStorage.removeItem('jwtToken');
            handleSuccess('Logged out successfully');
            setTimeout(()=>{
                navigate('/login');
            },1000);
        }
    return (
        <>
         <h2>{loogged}</h2>
            <button onClick={handlelogOut}>logout</button>
            <ToastContainer></ToastContainer>
        </>
    )
}
export default Logout