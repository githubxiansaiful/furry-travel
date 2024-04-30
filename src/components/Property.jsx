import { useLoaderData } from "react-router-dom";
import SingleProperty from './SingleProperty';

const Property = () => {

    const propertys = useLoaderData();
    console.log(propertys);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertys.map(property => (
                    <SingleProperty property={property} key={property.id}></SingleProperty>
                ))}
            </div>
        </div>
    );
};

export default Property;