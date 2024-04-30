import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpotDetails = () => {

    const { id } = useParams();
    const [touristSpot, settouristSpot] = useState({});

    useEffect(() => {
        fetch(`https://explore-world-server.vercel.app/singleSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                settouristSpot(data);
                console.log('SingleSpot', data);
            })
    }, [id]);

    const handleUpdateSpot = (e) => {
        e.preventDefault();

        const imgURLs = e.target.imgURL.value;
        const touristSpotName = e.target.spotName.value;
        const countryName = e.target.countryName.value;
        const location = e.target.location.value;
        const shortDescription = e.target.shortDes.value;
        const seasonName = e.target.season.value;
        const avrCost = e.target.averageCost.value;
        const travelTime = e.target.travelTime.value;
        const totalVisitors = e.target.totalVPY.value;

        const allData = { imgURLs, touristSpotName, countryName, location, shortDescription, seasonName, avrCost, travelTime, totalVisitors };
        console.log(allData);


        fetch(`https://explore-world-server.vercel.app/updateSpot/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(allData),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast("Item Updated, Thank you");
                } else {
                    toast.error("No items were updated");
                }
                console.log(data);
            })
    }

    return (
        <div key={id}>
            <div className="container">
                <div className="max-w-[600px] mx-auto my-10 border p-10 rounded-lg">
                    <h1 className="text-center text-3xl font-bold mb-5">Edit Tourist Spot Details</h1>
                    <form onSubmit={handleUpdateSpot}>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="text-black space-y-1">
                                <label>Add a image URL </label>
                                <input type="text" required name="imgURL" defaultValue={touristSpot.imgURLs} className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Tourists Spot Name </label>
                                <input type="text" required name="spotName" defaultValue={touristSpot.touristSpotName} className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Country Name </label>
                                <input type="text" required name="countryName" defaultValue={touristSpot.countryName} className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Location </label>
                                <input type="text" required name="location" defaultValue={touristSpot.location} className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Short Description</label>
                                <textarea name="shortDes" required defaultValue={touristSpot.shortDescription} className="input input-bordered w-full"></textarea>
                            </div>
                            <div className="text-black space-y-1">
                                <label>Average Cost </label>
                                <input type="number" required name="averageCost" defaultValue={touristSpot.avrCost} className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Season </label>
                                <input type="text" required placeholder="ex: Winter, Summer" name="season" defaultValue={touristSpot.seasonName} className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Travel Time(days) </label>
                                <input type="number" required name="travelTime" placeholder="ex: 7 days" defaultValue={touristSpot.travelTime} className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Total Visitors Per Year </label>
                                <input type="number" required name="totalVPY" placeholder="ex: 10,000" defaultValue={touristSpot.totalVisitors} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <button className="btn btn-primary w-full">Update Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SpotDetails;