import StarRating from './StarRating'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/CartSlice';

export default function Productile({ product }) {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)

  function handleAddToCart() {
    dispatch(addToCart(product))
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id))
  }

  return (
    <div className='product-container'>
      <div className="product-card">
        {<img
          src={product.thumbnail}
          alt={product.title}
          className='product-image'
          />}
      <h1 className='product-title'>{product.title}</h1>
      <p className='product-price'>${product.price}</p>
        <StarRating noOfStars={5} className="" />
        <button
          onClick={cart.some(item => item.id === product.id) ? null : handleAddToCart}
          className='btn-add-to-cart'>
          {cart.some(item => item.id === product.id) ? "Added to cart" : "Add to cart"}
        </button>
            </div>
    </div>
  )
}
