
export default function Newletter() {
  return (
    <div className='news-container'>
      <div className="news-content">
      <div className="news-text">
        <h1>STAY UPTO DATE ABOUT <span className='news-break'>OUR LATEST OFFERS</span> </h1>
      </div>
      <div className="news-input">
        <input type="text" className='search news-field' placeholder='Enter your email address'/>
        <button className=' search btn-suscribe'>Suscribe to Newsletter</button>
      </div>
      </div>
    </div>
  )
}
