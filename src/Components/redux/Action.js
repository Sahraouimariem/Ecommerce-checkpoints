import axios from 'axios';
import { ADDORDER, ALERT_ERROR, GETCURRENT, GETORDERS, GETPRODUCT, REMOVE_ERROR, SIGNIN, SIGNUP, UPDATEUSER } from './ActionType';

export const signup=(data)=> async(dispatch)=>{
try {
    const res=await axios.post("http://localhost:5000/email",data)
    
    console.log(res)
} catch (error) {
    console.log(error)
    error.response.data.errors.forEach(el => {
        dispatch({type:ALERT_ERROR,payload:el.msg})
        setTimeout(()=>{
            dispatch({type:REMOVE_ERROR})
        },3000)
    });

}
}
export const signin=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post("http://localhost:5000/login",data)
        console.log(res)
        dispatch({type:SIGNIN,payload:res.data})
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}
export const getcurrent=()=>async(dispatch)=>{
    const config={
        headers:{
            token:localStorage.getItem("token")
        }
    }
    try {
        
        const res=await axios.get("http://localhost:5000/getcurrent",config)
        console.log(res)
        dispatch({type:GETCURRENT,payload:res.data.user})
    } catch (error) {
        console.log(error)
    }
}
export const postproduct=(data)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        const res=await axios.post("http://localhost:5000/product/add",data,config)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
export const getproduct=()=>async(dispatch)=>{
    try {
        const res=await axios.get("http://localhost:5000/product/getall")
        console.log(res)
        dispatch({type:GETPRODUCT,payload:res.data.products})
    } catch (error) {
        console.log(error)
    }
}
export const updateuser=(id,data)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        const res=await axios.put("http://localhost:5000/update/"+id,data,config)
        console.log(res)
        dispatch(getcurrent())

    } catch (error) {
        console.log(error)
    }
}
export const deleteproduct=(id)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        const res=await axios.delete("http://localhost:5000/product/delete/"+id,config)
        console.log(res)
        dispatch(getproduct())
    } catch (error) {
        console.log(error)
    }
}
export const updateproduct=(id,data)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        const res=await axios.put("http://localhost:5000/product/update/"+id,data,config)
        console.log(res)
        dispatch(getproduct())
    } catch (error) {
        console.log(error)
    }
}
export const addorder=(data)=>async(dispatch)=>{
    try {
        const config={
            headers:{
                token:localStorage.getItem("token")
            }
        }
        const res=await axios.post("http://localhost:5000/order/create",data,config)
        console.log(res)
        dispatch({type:ADDORDER,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const getorders=()=>async(dispatch)=>{
    try {
        const res=await axios.get("http://localhost:5000/order/getall")
        console.log(res)
        dispatch({type:GETORDERS,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

