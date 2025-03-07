import React from 'react'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
<div style={{paddingTop:"10rem",}}>
 
  <div className="admin-container">
    <div className="admin-grid">
      <div className="sidebar" style={{height:"17rem",position:"revert-layer"}}>
        <ul>
          <li>
            <a href="/admin" className="active">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/products">Products</a>
          </li>
          <li>
            <a href="/admin/orders">Orders</a>
          </li>
        
        
        </ul>
      </div>
      <div className="content">
        
        <div>
        <Outlet>

        </Outlet>
      </div>
      </div>
      
    </div>
  </div>
</div>

  )
}

export default Admin