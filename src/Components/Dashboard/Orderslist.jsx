import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getorders } from '../redux/Action'
import ShowCart from './ShowCart'

function Orderslist() {
  const orders=useSelector(state=>state.orders)
   const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const [showModal, setShowModal] = useState(false); // For controlling the modal
    const [productToDelete, setProductToDelete] = useState(null); // For tracking which product to delete
    const [error, setError] = useState(null);
  
    // Pagination logic
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = orders.slice(startIndex, startIndex + itemsPerPage);
  
    const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage+1);
  };
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getorders())
  },[])
 

  return (
    <div>
      <div className="recent-orders">
    <h3>Recent Orders</h3>
    <table>
      <thead>
        <tr>
         
          <th>Customer</th>
          <th>Phone</th>
          <th>Total</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
      {orders.map(el=>
       <tr > 
       
          <td></td>
          <td></td>
          <td>{el.total}TND</td>
         

          
          <td> <ShowCart cart={el.cart}/> </td>
        </tr>
       )}
      </tbody>
    </table>
  </div>
  <div style={{display:"flex",justifyContent:"center",marginTop:"2rem",gap:"2rem"}}>
        <button onClick={handlePrevPage} style={{backgroundColor:"#fcc4d4",borderRadius:"25px",color:"black",width:"10rem"}}>Previous</button>
        <button onClick={handleNextPage} style={{backgroundColor:"#fcc4d4",borderRadius:"25px",color:"black",width:"10rem"}}>Next </button>
        </div>
    </div>
  )
}

export default Orderslist