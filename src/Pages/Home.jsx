import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection'
import CategorySlide from '../components/CategorySlide';
import Review from '../components/Review'
import NewsLetter from '../components/Newsletter'
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToCategory) {
      const timeout = setTimeout(() => {
        const categorySection = document.getElementById('category-slide-section');
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <div className='home-container'>
      <HeroSection />
      <CategorySlide />
      <Review />
      <NewsLetter />
      <Footer />
    </div>
  );
}
