import React from 'react'
import './styles.css';
import ProductList from './ProductList';

//Import Bootstrap
import Spinner from 'react-bootstrap/Spinner';


const Shop = ({products, onAddToCart,loading}) => {

  return (
    <div className='shopPage'>
      {loading ? <>
        <h1 className='shopTitle'>shop all</h1>
    <div className="productList">
{products.map((product) =>(
<div key={product.id} className="cardContainer">
<ProductList product={product} onAddToCart={onAddToCart} loading={loading} />
    </div>

))}
     </div>
      </> :
      <Spinner className='shopSpinner' animation="border" variant="dark" />
      }
   
     </div>
  )
}

export default Shop;