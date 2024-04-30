import { Helmet } from "react-helmet";
import AnyQuestion from "../components/AnyQuestion";
import HeroSlider from "../components/HeroSlider";
import HowItsWork from "../components/HowItsWork";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {

    const allTouristsSpots = useLoaderData();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Furry Travel</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <HeroSlider></HeroSlider>
            <div className='animate__animated animate__fadeIn'>
                <div className="mt-[60px] lg:mt-[80px]">
                    <div className="container">
                        <div className="max-w-[500px] mx-auto text-center mb-10">
                            <h2 className="text-4xl text-center font-bold tracking-tight  sm:text-6xl">Latest Spots</h2>
                            <p className="lg:text-xl max-w-[500px] mx-auto mt-6 text-lg leading-8">Discover a fantastic platform where you can buy, sell, and rent properties without dealing with agents or commissions.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                            {
                                allTouristsSpots?.map(itemSpot => (
                                    <div key={itemSpot._id} className="rounded-xl border p-5">
                                        <div className="mb-4 my-spot-img">
                                            <img src={itemSpot.imgURLs} alt="" />
                                        </div>
                                        <div className="mb-2">
                                            <h2 className="text-xl font-bold">{itemSpot.touristSpotName}</h2>
                                        </div>
                                        <div className="space-y-2">
                                            <p><i class="fa-solid fa-money-bill-wave"></i> {itemSpot.avrCost}</p>
                                            <p><i class="fa-solid fa-earth-americas"></i> {itemSpot.countryName}</p>
                                            <p><i class="fa-solid fa-location-dot"></i> {itemSpot.location}</p>
                                            <p><i class="fa-solid fa-tree"></i> {itemSpot.seasonName}</p>
                                        </div>
                                        <div className="grid grid-cols-1 mt-3">
                                            <Link to={`/update-details/${itemSpot._id}`}><button className="btn btn-primary w-full">View Details</button></Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <HowItsWork></HowItsWork>
            <AnyQuestion></AnyQuestion>
        </div>
    );
};

export default Home;