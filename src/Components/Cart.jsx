import React, { Children, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateuser } from './redux/Action'
import axios from 'axios'
import { addorder } from './redux/Action'

  
function Cart({cartItems,setcartitems}) {
   const user=useSelector(state=>state.user)
   console.log(user)
   const dispatch=useDispatch()
   const checkout=async()=>{
    try {
      const res=await axios.post("http://localhost:5000/payment",{cart:user.cart})
      console.log(res.data)
      if(res.data.url){
        dispatch(addorder({cart:user.cart,total:user.cart.reduce((acc,el)=>acc+el.price*el.quantity,8)}))
         window.location.href=res.data.url
      }
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <>
 
  <main style={{padding:"198px"}}>
    <h1>Your Sweet Cart</h1>
    <div className="cart-container" >
      <div>
        <div className="cart-items" id="cartItems" style={{width:'500px'}}>
        { user?.cart?.length===0 ? <div className="empty-cart">Your cart is empty</div> :user?.cart?.map(item=>
            <div className='cart-item'>
<>

     
    
  <div className="item-image">
  <img src={item.image[0]} alt="" style={{borderRadius:"60%",width:"90px",height:"90px"}} /> 

   
  
  </div>
  <div className="item-info">
 
    <h3 style={{ display:'flex',alignItems:"center",justifyContent:"start"}}>
    {item.title} <span style={{
      marginTop:"0px",
   marginLeft:"10px",
  background: "#fcc4d4",
  color: "white",
  borderRadius:" 50%",
  width: "20px",
  height:" 20px",
  display:" flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px"}}>
        {item.quantity}
      </span>
     
      
    </h3>
    <p className="item-description">
      {item.description}
    </p>
    <span className="item-price">
      {item.price.toFixed(2)}
    </span>
  </div>
  <div className="item-actions">
    
    
    <button className="status pending" style={{cursor:"pointer",background:"#fcc4d4",color:"white"}} onClick={()=>dispatch(updateuser(user._id,{cart:user.cart.filter(el=>el._id!==item._id)}))}>
      Remove
    </button>
  </div>
</>

            </div>
        )}
        </div>
       
      </div>
      <div className="cart-summary"  >
       
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span id="subtotal">{user?.cart?.reduce((acc,el)=>acc+el.price*el.quantity,0)} TND</span>
        </div>
        <div className="summary-row">
          <span>Livraison(8TND):</span>
          <span id="tax">8.000</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span id="total">{user?.cart?.reduce((acc,el)=>acc+el.price*el.quantity,8).toFixed(3)} TND</span>
        </div>
        <button id="checkoutBtn" className="checkout-btn" onClick={checkout}>
    
          Proceed to Checkout
        </button>
      </div>
    </div>
  </main>
</>

  )
}

export default Cart