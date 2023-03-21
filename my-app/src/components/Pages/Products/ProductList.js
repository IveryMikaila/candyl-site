import React from 'react'

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const ProductList = ({product, onAddToCart,loading}) => {
    // console.log(product);
    // return <div>test</div>
  return (
        <div className='card'>
        <img src={product.image.url} alt={product.description} title={product.name} />
       <div className='cardContent'>
        <h5 className='cardTitle'>
            {product.name}
        </h5>
        <h5 className='cardPrice'>
            {product.price.formatted_with_symbol}
        </h5>
        <p className='cardDescription'
        dangerouslySetInnerHTML={{__html:product
        .description}}/>
        </div> 
        <div className='cardActions'>
        <button className='cardButton'>
            <FontAwesomeIcon icon={faPlus} onClick={() => onAddToCart ( product.id && product.id,1)} />
        {/* <AddShoppingCart /> */}
        </button>
        </div>
    </div>
  )
}

export default ProductList;