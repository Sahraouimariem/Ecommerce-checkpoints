import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Welcome() {
    const navigate=useNavigate()
    const token = useParams().token
    const dispatch=useDispatch()
    const handleSubmit = async ()=>{
        try {
            const res = await axios.post(`http://localhost:5000/register/${token}`)
            console.log(res);
            dispatch({type:"signup",payload:res.data})
            if (res.status === 200) {
                toast.success('Registered successfully')
                
                navigate("/")
            }
           
        } catch (error) {
            toast.error('Failed to verify email')
            console.log(error);
        }
    }
  return (
    <div style={{padding:"200px"}}>
        <h1>Welcome to my website!</h1>
        <p>click here to verify your email </p>
        <button onClick={handleSubmit}>verify</button>
    </div>
  )
}

export default Welcome