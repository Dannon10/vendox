import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartTile from "../components/CartTile"

export default function Cart() {

    const [totalCart, setTotalCart] = useState(0)

    const  cart  = useSelector(state => state.cart)

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])


    return (

        <div>
            {
                cart.length > 0 ? (
                    <>
                <div>
                        <div className="product-grid">
                            {
                                cart.map(cartItem => <CartTile cartItem={cartItem} key={cartItem.id} />)
                            }
                        </div>
                    </div>
                    <div>
                        <div className="cart-summary">
                            <h1>Your Cart Summary</h1>
                            <p>
                                <span>Total Items</span>
                                <span>:{cart.length}</span>
                            </p>
                            <p>
                                <span>Total amount:</span>
                                <span>${totalCart.toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                            </>
                    )
                    : (<div className="empty-cart">
                        <h1>Your cart is empty!</h1>
                        <Link to="/products">
                            <button className="btn-load-more"> Shop Now!</button>
                        </Link>
                    </div>)
            }
        </div>
    )
}
