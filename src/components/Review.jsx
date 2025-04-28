import ReviewStar from './ReviewStar';
import Tick from "../assets/Frame.png";


export default function Review() {
  return (
    <div className='review-container'>
        <h1>OUR HAPPY CUSTOMERS</h1>
      <div className="review-cards">
        <div className="review-card">
          <ReviewStar noOfStars={4} />
          <h5>James L.  <span><img src={Tick} alt="Tick" className='tick'/></span></h5>
          <p>"As someone who always who's always on the lookout for 
            unique fashion pieces I'm thrilled to have stumbled upon vendox.
            The selection of clothes is not only diverse but also on-point with the latest trends"</p>
        </div>

        <div className="review-card">
          <ReviewStar noOfStars={5} className='ctive'/>
          <h5>Sarah M..  <span><img src={Tick} alt="Tick" className='tick'/></span></h5>
          <p>"I'm blown away by the quality and style of the clothes
            I received from vendox. Frm casual wear to elegant dresses 
            every piece I've bought has exceeded my expectations"</p>
        </div>

        <div className="review-card">
          <ReviewStar noOfStars={4} className='active'/>
          <h5>Dannon A.  <span><img src={Tick} alt="Tick" className='tick'/></span></h5>
          <p>"Finding clothes that align with my personal style used 
            to be a challenge until. I discovered vendox. The range 
            of options they offer is truly remarkable, catering to 
            a variety of tastes and occassions,"</p>
        </div>
        </div>  
    </div>
  )
}
