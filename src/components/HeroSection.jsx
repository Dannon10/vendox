import Hero from '../assets/Rectangle 2.png';
import HeroBig from '../assets/Hero big.png';
import Versace from '../assets/Group.png';
import Zara from '../assets/zara-logo-1 1.png';
import Gucci from '../assets/gucci-logo-1 1.png';
import Prada from '../assets/prada-logo-1 1.png';
import Calvin from '../assets/Group (2).png';
import VersaceBig from '../assets/versace-big.png';
import ZaraBig from '../assets/zara-big.png';
import GucciBig from '../assets/gucci-big.png';
import PradaBig from '../assets/prada-big.png';
import CalvinBig from '../assets/calvin-big.png';


import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <>
    <div className="hero-content">

    <section className="hero-section">
      <div className="hero-text">
        <h1>FIND CLOTHES AND<span className='text-br'> ACCESSORIES THAT
          </span> <span className='text-br'>MATCHES YOUR STYLE 
            </span>  </h1>
        <p>Browse throught our diverse range of meticulously crafted 
          garments, and luxurious accessories designed to bring 
          out your individuality and cater to your sense of style.</p>
      </div>
        <Link to='/products' >
        <button 
          className='btn-shop'>
            Shop Now
            </button>
        </Link> 
      <div className="sale-number">
        <div className="sale">
        <h2>200+</h2>
        <span>International Brands</span>
        </div>
        
        <div className="sale">
        <h2>2000+</h2>
        <span>High Quality Products</span>
        </div>
        <div className="sale">
        <h2>30, 000+</h2>
        <span>Happy Customers</span>
        </div>
      </div>
    </section>
    <section className="image-section">
      <img src={Hero} alt="Hero Image" className='hero'/>
      <img src={HeroBig} alt="Hero Image" className='hero-big'/>
    </section>
    </div>

    <div className="brand-section">
      <div className="brand-img">
      <img src={Versace} alt="Versace-logo" className='small' />
      <img src={Zara} alt="zara-logo" className='small' />
      <img src={Gucci} alt="gucci-logo" className='small' />
      <img src={Prada} alt="prada-logo" className='small' />
      <img src={Calvin} alt="calvin-logo" className='small' />
      <img src={VersaceBig} className=" big" alt='Brand logo' />
      <img src={ZaraBig} className=" big" alt='Brand logo' />
      <img src={GucciBig} className=" big" alt='Brand logo' />
      <img src={PradaBig} className="big"  alt='Brand logo'/>
      <img src={CalvinBig} className=" big" alt='Brand logo' />
      </div>
    </div>
    </>
  )
}
