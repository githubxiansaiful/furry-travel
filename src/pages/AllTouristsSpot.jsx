import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
    const allTouristsSpots = useLoaderData();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Tourist Spot | Furry Travel</title>
            </Helmet>
            <div className="mt-[60px] lg:mt-[80px] animate__animated animate__fadeIn">
                <div className="container">
                    <div className="max-w-[750px] mx-auto text-center mb-[80px]">
                        <h2 className="text-4xl text-center font-bold tracking-tight  sm:text-6xl">All Tourist Spots</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                        {allTouristsSpots?.map(itemSpot => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpot;
