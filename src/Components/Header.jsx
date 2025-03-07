import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header({cartItems}) {
  const user=useSelector(state=>state.user)
  const [positionY, setPositionY] = useState(window.scrollY)

  useEffect(() => {
    // Define the scroll handler function
    const handleScroll = () => {
      setPositionY(window.scrollY)
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])  // Empty dependency array means this useEffect runs once on mount

  console.log(positionY)
  return (
    <header  >
    {positionY<70?<div className="logo" >Lawahedh Delights</div>:null}
    {positionY<70?
      <>
      
      
      <nav >  
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      { user?.role=="admin"?<a href="/admin">Admin</a>:null}
   { !user?<>
    <a href="/signup">Signup</a>
    <a href="/signin">Signin</a>
    
      </> :null }
    </nav>
    <div className="cart-icon">
      <Link to="/cart">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12"
          stroke="currentColor"
          strokeWidth={2}
        />
        <path
          d="M3.69435 12.6678C3.83942 11.7145 4.67492 11 5.64162 11H18.3584C19.3251 11 20.1606 11.7145 20.3057 12.6678L21.4479 19.6678C21.6318 20.9266 20.6782 22 19.4006 22H4.59941C3.32181 22 2.36824 20.9266 2.55212 19.6678L3.69435 12.6678Z"
          stroke="currentColor"
          strokeWidth={2}
        />

      </svg>
      <span className="cart-count">{user?.cart?.length}</span>
      </Link>
    </div></>:null}
  </header>
  
  )
}

export default Header