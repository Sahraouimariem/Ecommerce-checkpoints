import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { signup } from "./redux/Action";
import { toast } from "react-toastify";
function Signup() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const[phone,setphone]=useState()
  const[adress,setadress]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const dispatch=useDispatch()
  const errors=useSelector(state=>state.errors)
  console.log(errors)
  const handleSignup =  (e) => {
    e.preventDefault();
     dispatch(signup({name,email,password,phone,adress}))
     setIsLoading(true)
      // if(errors.length==0){
      //   toast.success("Iction mail sent to your email ,please verif you mail");
  
      // }
      // else{
      //   errors.map(el=>toast.error(el))
      // }
    };
    useEffect(() => {
      if (isLoading){
        if (errors.length === 0) {
          toast.success("Action mail sent to your email, please verify your mail.");
        } else {
          errors.map((el) => toast.error(el));
          setIsLoading(false)
        }
      }
     
    }, [errors,isLoading]);
  return (
    <div>
      <div className="container">
        <div className="signin-card">
          <div className="logo">
            <svg viewBox="0 0 100 100" width={80} height={80}>
              <circle
                cx={50}
                cy={50}
                r={45}
                fill="none"
                stroke="#4A90E2"
                strokeWidth={8}
              />
              <path
                d="M50 25v35M32.5 42.5l17.5 17.5 17.5-17.5"
                fill="none"
                stroke="#4A90E2"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1>Welcome Back</h1>
          <form id="signin-form">
            <div className="input-group">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="password"
                required=""
              />
              <label htmlFor="password">Name</label>
            </div>
            <div className="input-group">
              <input
                onChange={(e) => setphone(e.target.value)}
                type="number"
                id="password"
                required=""
              />
              <label htmlFor="password">Phone number</label>
            </div>
             <div className="input-group">
              <input
                onChange={(e) => setadress(e.target.value)}
                type="text"
                id="password"
                required=""
              />
              <label htmlFor="password">Adress</label>
            </div>

            <div className="input-group">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                required=""
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                required=""
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="options">
              <label className="remember">
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>
              <a href="https://example.com/forgot-password">Forgot password?</a>
            </div>
            <button style={{backgroundColor:"#fcc4d4"}} onClick={handleSignup} type="submit">Sign Up</button>
          </form>
          <p className="signup-link">
            Don't have an account?{" "}
            <a href="https://example.com/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
