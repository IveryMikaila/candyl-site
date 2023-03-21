import React from 'react'
import {Link} from 'react-router-dom'

//Import Componenets
import CartItem from './CartItem/CartItem';

//Import Css
import './styles.css'

//BootStrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const Cart = ({cart, handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart,loading}) => {
    //adding the question mark before the .total_items somewhat fixed the issue I had with the blank screen after adding / removing from cart. What finally fized everything was also adding the refresh page functions to each of the states that invole updating the cart
const isEmpty = !cart?.total_items;
console.log(cart)
// console.log(cart.total_items);
//For some reason, the code below does not work! However, I think it's because .length isn't an option inside the cart object. It also wasn't rendering b/c I forgot to use return to render the data inside the Filled /Empty Cart Components
// const isEmpty = !cart.total_items.length;
const EmptyCart = () =>{
    return(
        <div className='emptyCart'>
<h1>Your cart is empty, <Link to={'/shop'}>Shop here </Link> </h1>
</div>
    ) 
}
const FilledCart = () =>{
    return(
        <>
        <Container fluid>
            <Row>
        {cart?.line_items.map((item) =>(
<Col className='cartColumn' key={item.id} sm> 
<CartItem item={item} 
handleUpdateCartQty={handleUpdateCartQty}
handleRemoveFromCart={handleRemoveFromCart}
/>
</Col> ))}
        </Row>
        </Container>
        <div className='cartDteails'>
     <h4>
 Subtotal: {cart.subtotal.formatted_with_symbol}
    </h4>
    <div className='filledCartBtns'>
        <button className='emptyBtn' onClick={handleEmptyCart} >
            Empty Cart
        </button>
        <button className='checkoutBtn'>
            <Link to={'/checkout'}> Checkout</Link>
        </button>
    </div>
        </div>
        </>
    )
}
// if(!cart.total_items) return (<div className='loadingScreen'>
//     <h1>
//     Loading...</h1></div>);

  return (
    <div className='cartContainer'>
  <h4 className='cartTitle'>Your Shopping Cart</h4>
  {
    loading ? <>
 {isEmpty ? <EmptyCart /> : <FilledCart/>}
    </> : <Spinner className='cartSpinner' animation="border" variant="dark" />
  }
    </div>
  )
}

export default Cart;