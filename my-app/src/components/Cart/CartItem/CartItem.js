import React from 'react'
//Bootstrap
import Card from 'react-bootstrap/Card';
//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({item,handleUpdateCartQty,handleRemoveFromCart}) => {
  return (
<>

<Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={item.image.url} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.line_total.formatted_with_symbol}
        </Card.Text>
        <div className='cartButtons'>
<button type='button' onClick={() => handleUpdateCartQty(item.id,item.quantity + 1)}>
<FontAwesomeIcon icon={faPlus} />
</button>
<span className='cartItemQuantity'>
{item.quantity}
</span>
<button type='button'  onClick={() => handleUpdateCartQty(item.id,item.quantity - 1)}>
<FontAwesomeIcon icon={faMinus} />
</button>
<button type='button' onClick={() => handleRemoveFromCart(item.id)} >Remove</button>
        </div>
      </Card.Body>
    </Card>
</>
  )
}

export default CartItem;