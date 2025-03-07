import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getorders, getproduct } from '../redux/Action'

function Statistiques() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getorders())
    dispatch (getproduct())
  },[])
  const orders=useSelector(state=>state.orders)
   const listproduct = useSelector(state=>state.products)
  return (
    <div className="content">
        <h2>Analytics</h2>
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-number">{orders.length}</div>
            <div>Total Orders</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{orders.reduce((acc,el)=>acc+el.total,0).toFixed(3)}</div>
            <div>Revenue</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{orders.length}</div>
            <div>Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{listproduct.length}</div>
            <div>Products</div>
          </div>
        </div>
    </div>
  )
}

export default Statistiques