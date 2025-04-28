import React from 'react'
import Visa from '../assets/Visa.png';
import Applepay from '../assets/Applepay.png';
import Mastercard from '../assets/Mastercard.png';
import Paypal from '../assets/Paypal.png';
import GooglePay from '../assets/GooglePay.png'; 
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className="footer-contents">
                <div className="foot-head">
                    <h1>vendox</h1>
                    <p id='foot-para'>Vendox is a mini e-commerce app built to showcase modern
                        frontend development skills. It features product
                        listings, a shopping cart, and a smooth user
                        experience.
                    </p>
                <div className="social footer-icons">
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaTiktok/>
                    <FaInstagram/>
                </div>
                </div>
                <div className="foot-list-itemss">

                <div className="foot-list-items">
                    <h5>COMPANY</h5>
                    <ul className='foot-lists'>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>

                <div className="foot-list-items">
                    <h5 className='list-head'>HELP</h5>
                    <ul className="foot-lists">
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="foot-list-items">
                    <h5>FAQ</h5>
                    <ul className="foot-lists">
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Guarantee</li>
                    </ul>
                </div>

                <div className="foot-list-items">
                    <h5>RESOURCES</h5>
                    <ul className="foot-lists">
                        <li>Free eBook</li>
                        <li>Development Tutorial</li>
                        <li>How to Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
                </div>
            </div>
                <div className="footer-iconss">
                    <div className="footer-icons-text">
                <p>Vendox &copy; 2000-2025. All Rights Reserved </p>
                    </div>
                    <div className="footer-icons pay">
                <img src={Visa} alt="Payment options" className='payment'/>
                <img src={Mastercard} alt="Payment options" className='payment'/>
                <img src={Paypal} alt="Payment options" className='payment'/>
                <img src={Applepay} alt="Payment options" className='payment'/>
                <img src={GooglePay} alt="Payment options" className='payment'/>
                    </div>
                </div>
        </footer>
    )
}
