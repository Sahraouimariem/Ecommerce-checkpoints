import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { postproduct, updateproduct } from '../redux/Action';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Updateproduct() {
    const {id}=useParams()
    const [product, setProduct] = useState({name:"",price:"",description:"",image:""})
  const [title, setTitle] =useState(product?.title);
  const [price, setPrice] =useState(product.price);
  const [description,setDescription ] =useState(product.description);
  const [image, setImage] =useState(product.image);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:5000/product/getbyid/"+id).then(res=>{
    setProduct(res.data.oneproduct)
        setTitle(res.data.oneproduct.title)
        setPrice(res.data.oneproduct.price)
        setDescription(res.data.oneproduct.description)
        setImage(res.data.oneproduct.image)
}).catch(err=>console.log(err))
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      description,
      image
      }
      dispatch(updateproduct(id,newProduct));
      navigate('/admin/products')
    }
  return (
    <div className="product-form" style={{ marginTop: "2rem" }}>
    <h3>Update Product</h3>
    <form>
      <div className="form-group">
        <input onChange={(e)=>setTitle(e.target.value)} type="text"  defaultValue={product.title} placeholder="Name Product"id="product-name" required="" />
      </div>
      <div className="form-group">
        <input  onChange={(e)=>setPrice(e.target.value)}type="number" defaultValue={product.price} placeholder='Price Product' id="product-price" step="0.01" required="" />
      </div>
      <div className="form-group">
        <textarea   onChange={(e)=>setDescription(e.target.value) }
          placeholder='Description Product'
          id="product-description"
          rows={3}
          required=""
          defaultValue={product.description}
        />
      </div>
      <div className="form-group">
        <input onChange={(e)=>setImage(e.target.value)}  defaultValue={product.image} src='' placeholder='Link Image' required=""/>
      </div> <br />
      <button onClick={handleSubmit} style={{paddingLeft:"20rem",backgroundColor:"#fcc4d4",color:"white"}} type="submit" className="btn">
        Update Product
      </button>
    </form>
  </div>
  )
}

export default Updateproduct