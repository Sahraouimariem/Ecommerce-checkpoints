import React, { useEffect, useState } from 'react'
import listproduct from './data'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from './redux/Action'

function Products() {
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch (getproduct())
  },[])
  const listproduct = useSelector(state=>state.products)
  console.log(listproduct)
  return (
    
    <div className='products' >

    <section className="products-grid" id="menu" >
         {listproduct?.map(product=> (
          
  <div key={product._id} className="product-card" style={{height:"28rem"}}>
  <img  style={{height:"10rem"}} src={product.image[0]} alt={product.title} />
  <h3>{product.title}</h3>
  <h5>{product.description}</h5>
  <span>{product?.price?.toFixed(2)}  TND</span> <br />
   <Link to={"/product/"+product._id}><button style={{backgroundColor:"#fcc4d4",borderRadius:"25px",color:"black"}}>View item</button></Link>  
 
 
</div>


)) 

}


</section>


    </div>
    
    
  )

}

export default Products