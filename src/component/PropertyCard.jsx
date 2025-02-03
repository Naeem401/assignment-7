import { IoRainySharp } from "react-icons/io5";


const PropertyCard = ({item}) => {
  const {title, location, price, image, tag} = item || [];
  return (
    <div className="max-w-sm overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={image}
          alt="Property"
        />
        <div className="flex gap-2 items-center absolute top-3 right-3 text-gray-700 px-3 py-1 rounded-full shadow-md text-sm font-semibold">
        <IoRainySharp />
        {tag}
        </div>
      </div>
      <div className="py-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm">{location}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
