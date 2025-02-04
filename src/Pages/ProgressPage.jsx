
import { Link } from "react-router-dom";
import logo1 from "../assets/img/Frame1.png"
import logo2 from "../assets/img/Frame2.png"
import logo3 from "../assets/img/Frame3.png"
const ProgressBarPage = () => {
    const data = [
        { 
        img: logo1,
        title: "What type of incident?",
        description: "Choose the category that best describes the incident." },
        {
        img: logo2,
        title: "Tell us about the incident?",
        description: "Let’s connect the dots and see where to start."
        },
        {
            img: logo3,
            title: "Where did the incident occur?",
            description: "Lorem ipsum dolar sit general sac mascho werho"
            }
    ]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center">Let’s get started</h2>
      <p className="text-gray-500 text-center max-w-lg mt-2">
        Lorem ipsum dolor sit general sac mascho werho. Lorem ipsum dolor sit general sac mascho werho.
      </p>

      <div className="relative w-full max-w-xl h-20">
  {/* Progress line */}
  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>

  {/* Steps */}
  <div className="relative flex justify-between items-center h-full">
    {/*  Left end */}
    <div className="absolute left-0 transform -translate-x-1/2 z-10 w-10 h-10 bg-gray-300 rounded-full">
    </div>

    {/*  Center */}
    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-gray-300 rounded-full">
    </div>

    {/*  Right end */}
    <div className="absolute right-0 transform translate-x-1/2 z-10 w-10 h-10 bg-gray-300 rounded-full">
    </div>
  </div>
</div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
       {
              data.map((item, index) => (
                <div key={index} className="bg-[#F4F4F5] p-6 rounded-lg shadow-lg max-w-[235px]">
                <img src={item.img} alt="" />
                <h3 className="font-bold text-xl text[#09090B] mt-8">{item.title}</h3>
                <p className="text-[14px] text-[#71717A] mt-2">{item.description}</p>
              </div>
              )
       )}
      </div>

      {/* Get Started Button */}
<Link to="/incidents/new-incident">
  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg mt-12 font-bold shadow-md">
    Get started
  </button>
</Link>

    </div>
  );
};

export default ProgressBarPage;