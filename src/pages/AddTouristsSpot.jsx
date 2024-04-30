import { useContext, useState } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const AddTouristsSpot = () => {

    const { userCurrent } = useContext(AuthContext);

    const handleSubmit = (e) => {
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
        // User Data
        const userEmail = userCurrent.email;
        const userName = userCurrent.displayName;

        const allData = { imgURLs, touristSpotName, countryName, location, shortDescription, seasonName, avrCost, travelTime, totalVisitors, userEmail, userName };
        console.log(allData);


        fetch('https://explore-world-server.vercel.app/add-tourist-spot', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(allData),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast("Item Added, Thank you")
                }
                console.log(data);
            })
    }

    return (
        <div>
            <div className="container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Add a New Item | Furry Travel</title>
                </Helmet>
                <div className="max-w-[600px] mx-auto my-10 border p-10 rounded-lg">
                    <h1 className="text-center text-3xl font-bold mb-5">Add Tourists Spot</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="text-black space-y-1">
                                <label>Add a image URL <span className="text-red-500">*</span></label>
                                <input type="text" required name="imgURL" className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Tourists Spot Name <span className="text-red-500">*</span></label>
                                <input type="text" required name="spotName" className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Country Name <span className="text-red-500">*</span></label>
                                <input type="text" required name="countryName" className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Location <span className="text-red-500">*</span></label>
                                <input type="text" required name="location" className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Short Description<span className="text-red-500">*</span></label>
                                <textarea name="shortDes" required className="input input-bordered w-full"></textarea>
                            </div>
                            <div className="text-black space-y-1">
                                <label>Average Cost <span className="text-red-500">*</span></label>
                                <input type="number" required name="averageCost" className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Season <span className="text-red-500">*</span></label>
                                <input type="text" required placeholder="ex: Winter, Summer" name="season" className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Travel Time <span className="text-red-500">*</span></label>
                                <input type="number" required name="travelTime" placeholder="ex: 7 days" className="input input-bordered w-full" />
                            </div>
                            <div className="text-black space-y-1">
                                <label>Total Visitors Per Year <span className="text-red-500">*</span></label>
                                <input type="number" required name="totalVPY" placeholder="ex: 10,000" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <button className="btn btn-primary w-full">Submit Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddTouristsSpot;