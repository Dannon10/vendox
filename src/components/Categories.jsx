import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import { DotLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/CartSlice';
import { MdErrorOutline } from 'react-icons/md';

export default function Categories() {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  function handleAddToCart(categoryProduct) {
    dispatch(addToCart(categoryProduct));
  }

  const limit = 10;

  const fetchListOfCategoryProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/category/${categoryName}?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      setCategoryProducts((prev) => [...prev, ...data.products]);

      if (skip + limit >= data.total) {
        setHasMore(false);
      }
      setErrorMsg(null)
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  };

  useEffect(() => {
    setCategoryProducts([]);
    setSkip(0);
    setHasMore(true);
  }, [categoryName]);

  useEffect(() => {
    fetchListOfCategoryProducts();
  }, [skip, categoryName]);

  const handleLoadMore = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <div>  {errorMsg ? (
                    <h1 className='error'>
                        {errorMsg}!!
                        <p>Check Network Connection</p> <MdErrorOutline size={34} color="red" />
                    </h1>
                ) : null}
    
      {loading && categoryProducts.length === 0 ? (
        <div className='loading-circle'>
          <DotLoader size={50} loading={true} />
        </div>
      ) : (
        <div className="product-grid ">
          {categoryProducts.map((categoryProduct) => (
          <div className="category-product-container">
            <div key={categoryProduct.id} className="product-card category-product-card">
              <img
                src={categoryProduct.thumbnail}
                alt={categoryProduct.title}
                className="product-image category-product"
              />
              <h2 className="product-title">{categoryProduct.title}</h2>
              <p className="product-price">${categoryProduct.price}</p>
              <StarRating noOfStars={5} />
              <button
                onClick={() => handleAddToCart(categoryProduct)}
                className="btn-add-to-cart"
              >
                {cart.some(item => item.id === categoryProduct.id) ? "Added to cart" : "Add to Cart"}
              </button>
            </div>
          </div>
          ))}
          {
          hasMore && !errorMsg && (
            <button 
            onClick={handleLoadMore}>
              Load More Products
              </button>
          )}
        </div>
      )}
    </div>
  );
}
