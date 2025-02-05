import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FiSearch } from "react-icons/fi"; // Import Search Icon
import HeaderTwo from "../component/HeaderTwo";

const IncidentLocationPage = () => {
  return (
    <>
    <HeaderTwo link1="/incidents" link2="/incidents/incident-form" link3="/incidents" button="Finished"/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 relative">
        <h2 className="text-2xl font-bold mb-4">Where’s the incident?</h2>
        <p className="text-gray-600 mb-4 max-w-[518px] text-[14px]">
        Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide
        </p>

        <div className="relative">
          {/* Input Fields inside Map */}
          <div className="absolute top-6 left-12 bg-transparent shadow-md p-2 rounded-lg w-80 z-[1000]">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Enter incident address or GPS"
                className="w-full p-2 border border-gray-300 rounded pl-10"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Pinpoint damage"
                className="w-full p-2 border border-gray-300 rounded pl-10"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            </div>
          </div>

          {/* Leaflet Map */}
          <MapContainer
            center={[40.7128, -74.006]} // Default Location (New York)
            zoom={13}
            className="h-[500px] w-full rounded-md z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.7128, -74.006]} />
          </MapContainer>
        </div>
      </div>
    </div>
    </>
  );
};

export default IncidentLocationPage;
