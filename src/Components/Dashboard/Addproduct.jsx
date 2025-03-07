import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postproduct } from '../redux/Action';
import axios from 'axios';

function Addproduct() {
  const [title, setTitle] =useState('');
  const [price, setPrice] =useState('');
  const [description,setDescription ] =useState('');
  const [image, setImage] =useState([]);
  const dispatch=useDispatch()
  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
      const tab=[]
      for(let i=0;i<image.length;i++){
      
        const formData = new FormData()
        formData.append('file', image[i])
        formData.append('upload_preset','mariem')
        const res = await axios.post('https://api.cloudinary.com/v1_1/dfbp3zkqd/image/upload', formData)
        console.log(res)
        tab.push(res.data.url)
      }
     
      const newProduct = {
        title,
        price,
        description,
        image:tab
        }
        dispatch(postproduct(newProduct));

    
      setTitle("");
      setPrice(0);
      setDescription("");
      setImage([]);
    } catch (error) {
      console.log(error);
    }


    
    }
  return (
    <div className="product-form" style={{ marginTop: "2rem" }}>
    <h3>Add New Product</h3>
    <form>
      <div className="form-group">
        <input onChange={(e)=>setTitle(e.target.value)} type="text"  placeholder="Name Product"id="product-name" required="" />
      </div>
      <div className="form-group">
        <input  onChange={(e)=>setPrice(e.target.value)}type="number" placeholder='Price Product' id="product-price" step="0.01" required="" />
      </div>
      <div className="form-group">
        <textarea  onChange={(e)=>setDescription(e.target.value)}
          placeholder='Description Product'
          id="product-description"
          rows={3}
          required=""
          defaultValue={""}
        />
      </div>
      <div className="form-group">
        <input onChange={(e)=>setImage(e.target.files)} type='file' accept="image/*" multiple placeholder='Link Image' required=""/>
      </div> <br />
      <button onClick={handleSubmit} style={{paddingLeft:"20rem",backgroundColor:"#fcc4d4",color:"white"}} type="submit" className="btn">
        Add Product
      </button>
    </form>
  </div>
  )
}

export default Addproduct