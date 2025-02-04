import { Link } from "react-router-dom";


const HeaderTwo = () => {
  return (

    <div className="bg-[#E4E4E7]">
 <div className="p-4 flex items-center justify-between w-[90%] mx-auto">
  =
      <div className="flex items-center gap-4">
      
        <Link to='/progress-page'>
        <button className="text-gray-500 text-lg font-bold">✕</button>
        </Link>
        
       
        <div>
          <p className="text-gray-500 text-sm">Home - Incidents - New Incident</p>
          <h2 className="text-xl font-bold">New Incident</h2>
        </div>
      </div>

      
      <div className="flex-grow mx-6">
        <div className="h-1 bg-gray-300 w-3/4 rounded-lg relative mx-auto">
          <div className="h-1 bg-orange-500 w-1/4 rounded-lg"></div>
        </div>
      </div>

      
      <div className="flex gap-3">
        <Link to="/progress-page">
        <button className="px-5 py-2 border border-gray-400 rounded-lg text-gray-700">
          Back
        </button>
        </Link>
        <button className="px-5 py-2 bg-orange-500 text-white rounded-lg">
          Next Step
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default HeaderTwo;
