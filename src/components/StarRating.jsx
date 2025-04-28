import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating(props) {

    const [rating, setRating] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    return (
        <div className='star-rating'>
            {
            [...Array(props.noOfStars)].map((_, index) => {
                index += 1;
                return <FaStar 
                key={index} 
                size={15}
                onClick={() => handleClick(index)}
                className={index <=  rating ? "active" : "inactive"}
                />
            })
        }
        </div>
    )
}
