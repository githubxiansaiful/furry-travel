import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateDeatils = () => {
    const { id } = useParams();
    const [touristSpot, settouristSpot] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/updateSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                settouristSpot(data);
                console.log('SingleSpot', data);
            })
    }, [id]);


    return (
        <div key={id}>
            <div className="container">
                <div className="max-w-[600px] mx-auto my-10 border p-10 rounded-lg">
                    <h1 className="text-center text-3xl font-bold mb-5">Tourist Spot Details {touristSpot.length}</h1>
                    <div>
                        <div>
                            <img src={touristSpot.imgURLs} alt="" />
                        </div>
                        <div className="mt-3 space-y-3 single-spot-single-items">
                            <p className="text-xl font-bold">{touristSpot.touristSpotName}</p> 
                            <p>Description: {touristSpot.shortDescription}</p>
                            <p>Location: {touristSpot.location}</p>
                            <p>Country: {touristSpot.countryName}</p>
                            <p>Average Cost: {touristSpot.avrCost}</p>
                            <p>Perfect Season: {touristSpot.seasonName}</p>
                            <p>Travel Time: {touristSpot.travelTime} (Days)</p>
                            <p>Visitors Per Year: {touristSpot.totalVisitors}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDeatils;