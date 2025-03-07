
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Admin from './Components/Dashboard/Admin';
import Orderslist from './Components/Dashboard/Orderslist';
import Singleproduct from './Components/singelproduct';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart';
import Productslist from './Components/Dashboard/Productslist';
import Statistiques from './Components/Dashboard/Statistiques';
import Addproduct from './Components/Dashboard/Addproduct';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Welcome from './Components/Welcome';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getcurrent } from './Components/redux/Action';
import Success from './Components/Success';
import Cancel from './Components/Cancel';
import Updateproduct from './Components/Dashboard/UpdateProduct';

function App() {
  const[cartItems,setcartitems]=useState([])
  const location = useLocation();
  const dispatch=useDispatch()
  console.log(location);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getcurrent())
  }, [location]);
  
  return (
    <div className="App">
      <Header cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Products/>} />
        <Route path='/product/:id' element={<Singleproduct  cartItems={cartItems} setcartitems={setcartitems}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<Admin/>}>
        <Route index element={<Statistiques/>}/>
        <Route path='/admin/add' element={<Addproduct/>}/>
        <Route path='/admin/orders' element={<Orderslist/>}/>
        <Route path='/admin/products' element={<Productslist/>}/> 
        <Route path="/admin/update/:id" element={<Updateproduct/>}/>
        </Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} setcartitems={setcartitems}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path="/verify/:token" element={<Welcome/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
    <ToastContainer position='top-right'/>
      <Footer/>
    </div>
  );
}

export default App;
