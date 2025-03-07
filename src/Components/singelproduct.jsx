import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { updateuser } from "./redux/Action";
import { toast } from "react-toastify";

function Singleproduct({cartItems,setcartitems}) {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  const [mainimage,setimage]=useState("")
  const[loading,setload]=useState(true)
  const [quantity,setquantity]=useState(0)
  const listproduct = useSelector(state=>state.products)
  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()
  useEffect(() => {
    setProduct(listproduct.find((el) => el._id == id));
    setload(false)
   product!==null? setimage(product?.image[0]): setimage("") 
   
  }, [product]);
console.log(user)
  
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div style={{padding:"170px 0",display:"flex",paddingTop:"250px"}}>
      <div
        style={{
      
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      > 
        <img
          style={{ width: "400px", borderRadius: "8px",height:"400px" }}
          src={mainimage}
          
          alt=""
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {product?.image.map((el) => (
            <img style={{ width: "20%", borderRadius: "8px" }} src={el} onClick={()=>setimage(el)} />
          ))}
        </div>
      </div>
          <div style={{width:"55%",display:"flex",flexDirection:"column", gap:"45px",padding:"50px",backgroundColor:"white",borderRadius:"8px"}}>
          <h1 style={{animation:"infinite"}}>{product?.title}</h1>
          <h5>Disponibilité : <span>En stock  <i className="fa-solid fa-check" style={{ color: "#63E6BE" }} />
          </span></h5>
          <h4>{product?.description}</h4>
          <h6>{product?.price} TND</h6>
          <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <button onClick={()=>quantity>0? setquantity(quantity-1):quantity} style={{width:"10%",height:"40px",borderRadius:"8px",background:"#fcc4d4" ,color:"black",overflow:"hidden"}}><i className="fa-solid fa-minus" style={{ color: "#020203" }} />
            </button>

            <span style={{fontSize:"1.3rem"}}>{quantity}</span>
<button onClick={()=>setquantity(quantity+1)} style={{width:"10%",height:"40px",borderRadius:"8px",background:"#fcc4d4" ,color:"black",overflow:"hidden"}}><i className="fa-solid fa-plus" style={{ color: "#010204" }} />

</button>
            </div>
           

            <button onClick={()=>quantity>0 && user?   dispatch(updateuser(user._id,{cart:[...user.cart,{...product,quantity}]})): toast.error("quantity invalid or you are not connected")} style={{borderRadius:"8px",background:"#fcc4d4",width:"25%",height:"50px",padding:"2px",color:"white",background:"#fcc4d4" ,color:"black",overflow:"hidden"}} 
            >Add to cart</button>
          </div>

          </div>
    </div>
  );
}

export default Singleproduct;
