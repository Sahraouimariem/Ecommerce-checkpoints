import React, { useState } from 'react'

function ShowCart({cart}) {
    const[show,setshow]=useState(false)
  return (
    <div>
<span onClick={()=>setshow(!show)} className="status pending" style={{cursor:"pointer",background:"#fcc4d4",color:"white"}}>show cart</span>
{show ?<div style={{position:"absolute",padding:"10px",top:"200px",left:"25%",zIndex:"50",border:show?"1px solid black":"none",background:"white",width:"50%"}}>
     <div style={{width:"100%"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"start"}}>
        <h1 className="logo"style={{marginLeft:"17rem"}} >Cart</h1>
        <button onClick={()=>setshow(false)} style={{width:"10%",background:"none",color:"black",cursor:"pointer"}}><i class="fa-solid fa-x"></i></button>
        </div>
        <table >
                  <thead>
         
           
            <tr>
                <th>Image</th>
             <th >Product Name</th>
             <th >Price</th>
            <th>Quantity</th>
        
        </tr>
{
             cart.map((item, index) => {
        return (
           
         <tr key={index}>
             <td> <img style={{ width: "80px", borderRadius: "50%",height:"80px" }} src={item.image[0]} alt="" /></td>
            <td>{item.title}</td>
                <td>{item.price}</td>
             <td>{item.quantity}</td>
                </tr>
          
        )
})}
  
            </thead>
            </table>
    </div> 
</div>: null}
    </div>
  )
}

export default ShowCart