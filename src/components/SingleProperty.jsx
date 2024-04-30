import { Link } from "react-router-dom";

const SingleProperty = ({ property }) => {

    const {area_size, bathrooms, bedrooms, estate_title, price, location, image, status, id, segment_name} = property;

    return (
        <div className="property-item">
            <div className="relative property-image">
                <img src={image} className="rounded-xl" />
                <span className="absolute top-2 left-2 bg-[#65b110] px-5 py-1 text-white rounded-lg capitalize">{status}</span>
            </div>
            <div className="space-y-1 mt-4 mb-4 pb-4 border-b">
                <h3 className="text-[18px] font-[500]">{estate_title}</h3>
                <p><i class="fa-solid fa-location-dot"></i> {location}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> {price}</p>
                <p><i class="fa-solid fa-building"></i> {segment_name}</p>
            </div>
            <div className="mb-4 flex justify-between">
                <p title="Bedroom"><i class="fa-solid fa-bed"></i> {bedrooms}</p>
                <p title="Bathroom"><i class="fa-solid fa-bath"></i> {bathrooms}</p>
                <p title="Land size"><i class="fa-solid fa-expand"></i> {area_size}</p>
            </div>
            <div>
                <Link to={`/property/${id}`} className="w-full btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default SingleProperty;