import { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import { MdErrorOutline } from 'react-icons/md';
import Productile from './Productile';

export default function Home() {
    const allowedCategories = [
        "mens-shirts", "womens-dresses", "mens-shoes", "womens-shoes",
        "womens-watches", "womens-jewellery", "womens-bags", "beauty",
        "fragrances", "skin-care"
    ];

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(false);

    
    useEffect(() => {
        const fetchListOfProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://dummyjson.com/products?limit=50&skip=${count * 50}`);
                if (!res.ok) throw new Error('Something went wrong');
                const data = await res.json();

                
                if (data.products.length < 50) {
                    setDisable(true);  
                } else {
                    setDisable(false);
                }

                setProducts(prev => [...prev, ...data.products]);
                setLoading(false);
                setError(null)
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        };

        fetchListOfProducts();
    }, [count]);

    const filteredProducts = products.filter(product =>
        allowedCategories.includes(product.category.toLowerCase())
    );

    return (
        <div>
            {error ? (
                <h1 className='error'>
                    {error}!!
                    <p>Check Network Connection</p> <MdErrorOutline size={34} color="red" />
                </h1>
            ) : null}

            {loading ? (
                <div className='loading-circle'>
                    <DotLoader size={100} loading={true} />
                </div>
            ) : (
                <>
                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <Productile key={`${product.id}-${product.title}`} product={product} />
                        ))}
                    </div>

                    <div className="load-more">
    {(!disable && !error) && (
        <button
            disabled={disable}
            onClick={() => setCount(count + 1)}
            className='btn-load-more'
        >
            Load more Products
        </button>
    )}

    {disable && (
        <p className='loaded'>All products loaded!</p>
    )}
</div>

                </>
            )} 
        </div>
    );
}
