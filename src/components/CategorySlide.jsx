import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { GiTShirt, GiDress, GiConverseShoe, GiHighHeel, GiDiamondRing, GiHandBag, GiLipstick, GiPerfumeBottle, GiLotus } from 'react-icons/gi';
import { MdWatch } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategorySlide() {
    const navigate = useNavigate();

    const categories = [
        { icon: <GiTShirt />, label: "Men's Shirts", value: "mens-shirts" },
        { icon: <GiDress />, label: "Women's Dresses", value: "womens-dresses" },
        { icon: <GiConverseShoe />, label: "Men's Shoes", value: "mens-shoes" },
        { icon: <GiHighHeel />, label: "Women's Shoes", value: "womens-shoes" },
        { icon: <MdWatch />, label: "Watches", value: "womens-watches" },
        { icon: <GiDiamondRing />, label: "Women's Jewellery", value: "womens-jewellery" },
        { icon: <GiHandBag />, label: "Women's Bags", value: "womens-bags" },
        { icon: <GiLipstick />, label: "Beauty", value: "beauty" },
        { icon: <GiPerfumeBottle />, label: "Fragrances", value: "fragrances" },
        { icon: <GiLotus />, label: "Skin Care", value: "skin-care" },
    ];

    const categoriesPerSlide = 6;
    const totalSlides = Math.ceil(categories.length / categoriesPerSlide);
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrevSlide() {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    }

    function handleNextSlide() {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }

    return (
        <section className="category-section" id='category-slide-section'>
            <div className="category-container">
                <div className="category-browse">
                    <h3>Browse by Category</h3>
                    <span>
                        <AiOutlineLeft onClick={handlePrevSlide} className="slider" />
                        <AiOutlineRight onClick={handleNextSlide} className="slider" />
                    </span>
                </div>

                    <div className="category-slider">
                        <div
                            className="category-cards-wrapper"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => 
                            {
                                const slideCategories = categories.slice(
                                    slideIndex * categoriesPerSlide,
                                    (slideIndex + 1) * categoriesPerSlide
                                );

                                return (
                                    <div 
                                    className="category-cards" 
                                    key={slideIndex}>
                                        {slideCategories.map((cat, index) => 
                                        (
                                            <div
                                                className="category-card"
                                                key={index}
                                                style={{ "--i": index }}
                                                onClick={() => navigate(`/category/${cat.value}`)}
                                            >
                                                {cat.icon}
                                                <span>{cat.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
            </div>
        </section>
    );
}
