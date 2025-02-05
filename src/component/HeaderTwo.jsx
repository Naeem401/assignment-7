import { Link } from "react-router-dom";

const HeaderTwo = ({ link1, link2, link3, button }) => {
  return (
    <div className="bg-[#E4E4E7]">
      <div className="mx-auto w-[90%] max-w-screen-2xl p-4 sm:p-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Left Section */}
          <div className="flex w-full items-center gap-2 md:w-auto md:gap-4">
            <Link to={link1} className="shrink-0">
              <button className="text-lg font-bold text-gray-500 md:text-xl">✕</button>
            </Link>
            <div className="min-w-0">
              <p className="hidden truncate text-sm text-gray-500 xs:block">
                Home - Incidents - New Incident
              </p>
              <h2 className="truncate text-lg font-bold md:text-xl">New Incident</h2>
            </div>
          </div>

          {/* Progress Bar - Hidden on mobile */}
          <div className="hidden w-full flex-grow md:mx-6 md:block">
            <div className="relative mx-auto h-1 w-3/4 rounded-lg bg-gray-300 lg:w-1/2">
              <div className="h-1 w-1/4 rounded-lg bg-orange-500"></div>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex w-full justify-end gap-2 sm:w-auto sm:justify-normal sm:gap-3">
            <Link to={link2} className="shrink-0">
              <button className="w-full rounded-lg border border-gray-400 px-3 py-2 text-sm text-gray-700 sm:px-4 sm:py-2 sm:text-base md:px-5">
                Back
              </button>
            </Link>
            <Link to={link3} className="shrink-0">
              <button className="w-full rounded-lg bg-orange-500 px-3 py-2 text-sm text-white sm:px-4 sm:py-2 sm:text-base md:px-5">
                {button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;