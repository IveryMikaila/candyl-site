//React Imports
import React,{useState,useEffect} from 'react';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';

//Components Imports
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import Checkout from './components/CheckoutForm/Checkout/Checkout'

//Pages Imports
import Home from './components/Pages/Home'
import Shop from './components/Pages/Products/Shop'

//CSS Imports
import './index.css'

//Bootstrap 
import 'bootstrap/dist/css/bootstrap.css';

//Commerce JS Imports
import {commerce} from './lib/commerce'

function App() {
//LOADING SCREEN
const [loading,setLoading] =useState(false);

//REFRESHPAGE
function refreshPage() {
  window.location.reload(false);
}

  //Fetching API DATA
  //Products
const [products,setProducts] =useState([]);
const fetchProducts = async () =>{
  const {data} = await commerce.products.list();
  setProducts(data);
  setLoading(true);
}
//Cart
const [cart ,setCart]= useState({});
const fetchCart = async () =>{
  setCart(await commerce.cart.retrieve());
  setLoading(true);
}
const handleAddToCart = async (productId, 
quantity) =>{
const {cart} = await commerce.cart.add(productId);
setCart(cart);
setLoading(true);
refreshPage();
}
const handleUpdateCartQty = async (productId, quantity) =>{
  const {cart}  = await commerce.cart.update(productId,{quantity});
  setCart(cart);
  setLoading(true);
  refreshPage();
}
const handleRemoveFromCart = async(productId) =>{
  const {cart} = await commerce.cart.remove(productId);
  setCart(cart);
  setLoading(true);
  refreshPage();
}
const handleEmptyCart = async ()=>{
  const {cart} = await commerce.cart.empty();
  setCart(cart);
  setLoading(true);
  refreshPage();
}

//NEW ORDERS FUNCTION
const [order,setOrder] = useState({});
const [errorMessage, setErrorMessage] = useState('');
const refreshCart = async () =>{
  const newCart = await commerce.cart.refresh();
  setCart(newCart);
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) =>{
  try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId,newOrder);
    setOrder(incomingOrder);
    refreshCart();
  } catch (error) {
    setErrorMessage(error.data.error.message);
  }
}

useEffect(()=>{
fetchProducts();
fetchCart();
},[]);

  return (
    <div className="App">
      <Router>
        <Navbar 
        loading={loading}
        cart={cart} />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop'  exact element={<Shop products={products} onAddToCart={handleAddToCart} loading={loading} />} />
        <Route path='/cart' exact element={<Cart cart={cart}
        loading={loading}
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}
        />}/>
        <Route path='/checkout' exact element={<Checkout 
         cart={cart}
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}
        />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
