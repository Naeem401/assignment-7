import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaSearch } from "react-icons/fa";
import loc1 from "../assets/img/loc1.png";
import loc2 from '../assets/img/loc2.png';
import PropertyCard from "../component/PropertyCard";
import Header from "../component/Header";
const LocationPage = () => {
    const data = [
        {
            title: "Whitechapel Rd.",
            location: "Tulare County, Los Angeles, CA 23415",
            price: "$1,456,654.00",
            image: loc1,
            tag: "Blizzard"
          },
        {
            title: "Whitechapel Rd.",
            location: "Tulare County, Los Angeles, CA 23415",
            price: "$1,456,654.00",
            image: loc2,
            tag: "Blizzard"
          },
        {
            title: "Whitechapel Rd.",
            location: "Tulare County, Los Angeles, CA 23415",
            price: "$1,456,654.00",
            image: loc1,
            tag: "Blizzard"
          },
        {
            title: "Whitechapel Rd.",
            location: "Tulare County, Los Angeles, CA 23415",
            price: "$1,456,654.00",
            image: loc1,
            tag: "Blizzard"
          },
    ]
  return (
    <>
   <Header subTitle="Incidents - DR-4699 March 2023 Severe Storms" title={"DR-4699 March 2023 Severe Storms"} button={"+ New Locations"} link={"/"}/>
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Left Side Content */}
      <div className="md:w-2/3  p-6">
        <h2 className="text-2xl font-bold mb-2">Tulare County, Los Angeles, CA 23415</h2>
        <p className="text-lg font-semibold text-gray-700">Approx. Cost: <span className="text-green-600">$60,607,456.00</span></p>
        <hr className="mt-4" />
        <h3 className="text-xl font-semibold mt-4">Description</h3>
        <p className="text-gray-600 mt-4">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
        <hr className="mt-4" />
        {/* Locations Section */}
        <h3 className="text-xl font-semibold mt-6">Locations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {data.map((item, index) => (
                <PropertyCard key={index} item={item} />
            ))}
        </div>
        <hr className="mt-4" />
        
      </div>

      {/* Right Side Map */}
      <div className="md:w-1/3 p-6">
        <h3 className="text-xl font-semibold mb-4">Incident Map</h3>
        <div className="relative">
          <div className="absolute top-4 left-4 bg-white shadow-md p-2 rounded-md flex items-center gap-2 z-50 w-64">
            <FaSearch className="text-gray-500" />
            <input type="text" placeholder="Enter address or GPS" className="w-full border-none outline-none text-sm" />
          </div>
          <MapContainer center={[34.0522, -118.2437]} zoom={12} className="h-[400px] w-full rounded-md">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[34.0522, -118.2437]} />
          </MapContainer>
        </div>
      </div>
    </div>
    </>
  );
};

export default LocationPage;
