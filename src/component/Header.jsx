import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header({subTitle, title, button, link }) {
  return (
    <header className="bg-[#E4E4E7]">
      <div className="p-4 flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto gap-4 md:gap-0">
        <div className="w-full md:w-auto">
          <h4 className="text-xs md:text-[12px] font-normal text-[#71717A]">{subTitle}</h4>
          <h1 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch w-full md:w-auto gap-3">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search incident"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 text-sm md:text-base"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <button className="w-full md:w-auto px-4 py-2 bg-[#FAFAFA] text-gray-700 rounded-lg hover:bg-gray-300 text-sm md:text-base">
              Sort By: <span className="hidden md:inline">Date modified</span>
              <span className="md:hidden">Date</span>
            </button>
            
           <Link to={link}>
           <button className="w-full md:w-auto px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm md:text-base">
              {button}
            </button>
           </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;