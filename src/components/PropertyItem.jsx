import { useParams } from "react-router-dom";
import realEstateData from '/public/real_estate.json';
import { Helmet } from "react-helmet";
const PropertyItem = () => {

    const getPropertyTitle = document.getElementById('propertyTitle');
    console.log(getPropertyTitle)

    const { id } = useParams();
    const property = realEstateData.find(item => item.id === parseInt(id));

    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <div className="bg-[#F2F2F2] overflow-hidden">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Property | Real Estate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="max-w-[800px] mx-auto">
                <div className="p-5 mt-5 mb-5 bg-white rounded-[5px] border border-[#ddd]">
                    <div>
                        <img src={property.image} />
                    </div>
                    <div className="mt-5">
                        <div className="flex space-x-2">
                            <p><span className="bg-[#dbce26] px-5 py-1 text-white rounded-lg capitalize">Id: {id}</span></p>
                            <p><span className="bg-[#65b110] px-5 py-1 text-white rounded-lg capitalize">{property.status}</span></p>
                            <p><span className="bg-[#106DB1] px-5 py-1 text-white rounded-lg capitalize"> <i class="fa-solid fa-dollar-sign"></i> {property.price}</span></p>
                        </div>
                        <h3 id="propertyTitle" className="text-2xl mt-2">{property.estate_title}</h3>
                        <p>{property.segment_name}</p>
                    </div>
                </div>
                <div className="p-5 mt-5 mb-5 bg-white rounded-[5px] border border-[#ddd]">
                    <h3 className="text-2xl mb-5">Description</h3>
                    <p>{property.description}</p>
                </div>
                <div className="p-5 mt-5 mb-5 bg-white rounded-[5px] border border-[#ddd]">
                    <h3 className="text-2xl mb-5">Overview</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="flex">
                            <div className="bg-[#1f6fe7] text-white rounded-md w-10 items-center flex justify-center mr-2">
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div>
                                <p>Price</p>
                                <p>{property.price}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-[#1f6fe7] text-white rounded-md w-10 items-center flex justify-center mr-2">
                                <i class="fa-solid fa-bath"></i>
                            </div>
                            <div>
                                <p>Bathrooms</p>
                                <p>{property.bathrooms}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-[#1f6fe7] text-white rounded-md w-10 items-center flex justify-center mr-2">
                                <i class="fa-solid fa-bed"></i>
                            </div>
                            <div>
                                <p>Bedrooms</p>
                                <p>{property.bedrooms}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 mt-5 mb-5 bg-white rounded-[5px] border border-[#ddd]">
                    <h3 className="text-2xl mb-5">Address</h3>
                    <p><i class="fa-solid fa-location-dot"></i> {property.location}</p>
                </div>
                <div className="p-5 mt-5 mb-5 bg-white rounded-[5px] border border-[#ddd]">
                    <h3 className="text-2xl mb-5">Facilities</h3>
                    <ul className="space-y-4 mt-5">
                        {property.facilities.map((facility, index) => (
                            <li key={index} className="bg-[#F4FBF2] font-semibold text-[#23BE0A] px-5 py-2 rounded-full">
                                {facility}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PropertyItem;