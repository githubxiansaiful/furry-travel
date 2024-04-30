import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='h-[80vh] flex hero-slide hero-slide1 items-center'>
                    <div className='container text-center'>
                        <div className="slide-content space-y-5">
                            <h1 className='text-4xl font-bold'>Dive into the Serenity of Sundarban</h1>
                            <p className='max-w-[750px] mx-auto'>Explore the world's largest mangrove forest, home to majestic Bengal tigers and exotic wildlife, with breathtaking boat safaris amidst lush greenery.</p>
                            <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-[80vh] flex hero-slide hero-slide2 items-center'>
                    <div className='container text-center'>
                        <div className="slide-content space-y-5">
                            <h1 className='text-4xl font-bold'>Discover the Charms of Angkor Wat</h1>
                            <p className='max-w-[750px] mx-auto'>Unravel the mysteries of ancient Khmer civilization as you wander through the awe-inspiring temple complex, adorned with intricate carvings and captivating history.</p>
                            <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='h-[80vh] flex hero-slide hero-slide3 items-center'>
                <div className='container text-center'>
                    <div className="slide-content space-y-5">
                        <h1 className='text-4xl font-bold'>Surrender to the Allure of Santorini</h1>
                        <p className='max-w-[750px] mx-auto'>Lose yourself in the enchanting beauty of Santorini's azure waters, whitewashed villages, and stunning sunsets, creating timeless memories in this Greek island paradise.</p>
                        <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                    </div>
                </div>
            </div></SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;