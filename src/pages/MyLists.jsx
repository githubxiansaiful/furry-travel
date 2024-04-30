import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const MyLists = () => {

    const { userCurrent } = useContext(AuthContext);

    const [item, setItem] = useState([]);
    const [controlItem, setControlItem] = useState(false);

    useEffect(() => {
        fetch(`https://explore-world-server.vercel.app/all-tourist-spot/${userCurrent?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })
    }, [userCurrent, controlItem]);

    // Delete item
    const handleDeleteItem = (id) => {
        fetch(`https://explore-world-server.vercel.app/deleteItem/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    setControlItem(!controlItem);
                    toast("Item Deleted, Thank you");
                } else {
                    toast.error("No items were updated");
                }
                console.log(data);
            })
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My List | Furry Travel</title>
            </Helmet>
            <div className="mt-[60px] lg:mt-[80px] animate__animated animate__fadeIn">
                <div className="container">
                    <div className="max-w-[750px] mx-auto text-center mb-[80px]">
                        <h2 className="text-4xl text-center font-bold tracking-tight  sm:text-6xl">My Tourist Spots</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                        {
                            item?.map(itemSpot => (
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
                                    <div className="grid grid-cols-2 gap-3 mt-3">
                                        <Link to={`/spot-details/${itemSpot._id}`}><button className="btn btn-primary w-full"><i class="fa-solid fa-pen-to-square"></i></button></Link>
                                        <button onClick={() => handleDeleteItem(itemSpot._id)} className="btn btn-warning w-full"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyLists;