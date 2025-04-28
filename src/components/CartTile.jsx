import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/CartSlice';

export default function Cartile({ cartItem }) {

  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id))
    console.log(cartItem.id)
  };

  return (
    <div className=" cart-container product-container">
    <div className='prodcut-card'>
        <img src={cartItem.thumbnail} alt={cartItem.title} className='product-image' />
        <h1 className='product-title'>{cartItem.title}</h1>
        <p className='product-price'>${cartItem.price}</p>
        <button
        onClick={handleRemoveFromCart}
        className='btn-add-to-cart remove'>
            Remove from cart
        </button>
          </div>
    </div>
  )
}
