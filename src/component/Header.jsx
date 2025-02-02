import { FiSearch } from "react-icons/fi"


function Header({tital}) {
  return (
    <header className="bg-[#E4E4E7] p-4 flex flex-col md:flex-row justify-between items-center w-full shadow-md">
        <div>
        <h4 className="text-[12px] font-normal text-[#71717A]">Welcome back</h4>
        <h1 className="text-xl font-semibold text-gray-900">{tital}</h1>
        </div>
    <div className="flex items-center space-x-3 mt-3 md:mt-0">
      <div className="relative">
        <input
          type="text"
          placeholder="Search incident"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <button className="px-4 py-2 bg-[#FAFAFA] text-gray-700 rounded-lg hover:bg-gray-300">
        Sort By: Date modified
      </button>
      <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
        Cypher AI
      </button>
    </div>
  </header>
  )
}

export default Header