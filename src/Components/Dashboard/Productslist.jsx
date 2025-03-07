import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduct, getproduct } from '../redux/Action';
import { Link } from 'react-router-dom';


function Productslist() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch (getproduct())
  },[])
  const listproduct = useSelector(state=>state.products)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [showModal, setShowModal] = useState(false); // For controlling the modal
  const [productToDelete, setProductToDelete] = useState(null); // For tracking which product to delete
  const [error, setError] = useState(null);

  // Pagination logic
  const totalPages = Math.ceil(listproduct.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = listproduct.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage+1);
};
  return (
    <>
      <a href='/admin/add' className="btn">
        Add Product
      </a>
      <div className="recent-orders" >
        <h3>Recent Products</h3>
        <table style={{height:"3rem"}}>
          <thead >

          </thead>
          {paginatedProducts.map(el =>

            <tbody >

              <tr >
                <td> <img style={{ width: "80px", borderRadius: "50%",height:"80px" }} src={el.image[0]} alt="" /></td>
                <td>{el.title}</td>
                <td>{el.price} TND</td>
                <td>
                <Link to={"/admin/update/"+el._id}>  <span className="status completed">Update</span></Link>

                </td>
                <td><span style={{cursor:"pointer"}} onClick={()=>dispatch(deleteproduct(el._id))} className="status pending">Delete</span></td>
              </tr>

            </tbody>
          )}
        </table>
        <div style={{display:"flex",justifyContent:"center",marginTop:"2rem",gap:"2rem"}}>
        <button onClick={handlePrevPage} style={{backgroundColor:"#fcc4d4",borderRadius:"25px",color:"black",width:"10rem"}}>Previous</button>
        <button onClick={handleNextPage} style={{backgroundColor:"#fcc4d4",borderRadius:"25px",color:"black",width:"10rem"}}>Next </button>
        </div>
      </div>

    </>
  )
}

export default Productslist