import Property from './Property';
import SingleProperty from './SingleProperty';

const FeaturedProperties = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <div className="mt-[60px] lg:mt-[80px]">
                <div className="container">
                    <div className="max-w-[500px] mx-auto text-center mb-10">
                        <h2 className="text-4xl text-center font-bold tracking-tight  sm:text-6xl">Latest Spots</h2>
                        <p className="lg:text-xl max-w-[500px] mx-auto mt-6 text-lg leading-8">Discover a fantastic platform where you can buy, sell, and rent properties without dealing with agents or commissions.</p>
                    </div>
                    <Property></Property>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;