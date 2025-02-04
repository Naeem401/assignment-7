
import { useState } from 'react';
import HeaderTwo from '../component/HeaderTwo'
import icon1 from '../assets/img/Avalanche.png'
import icon2 from '../assets/img/Biological.png'
import icon3 from '../assets/img/Blizzard.png'
import icon4 from '../assets/img/Cold.png'
import icon5 from '../assets/img/Drought.png'
import icon6 from '../assets/img/Earthquake.png'
import icon7 from '../assets/img/Flooding.png'
import icon8 from '../assets/img/Heat Wave.png'
import icon9 from '../assets/img/Hail.png'
import icon10 from '../assets/img/Lightning.png'
import icon11 from '../assets/img/Man Made.png'
import icon12 from '../assets/img/Mudslide.png'
import icon13 from '../assets/img/Storm.png'
import icon14 from '../assets/img/Tornado.png'
import icon15 from '../assets/img/Tsunami.png'
import icon16 from '../assets/img/Volcanic Eruption.png'
import icon17 from '../assets/img/Wildfire.png'

function NewIncident() {
    const incidents = [
        { id: 1, name: "Avalanche", icon: icon1 },
        { id: 2, name: "Biological", icon: icon2 },
        { id: 3, name: "Blizzard", icon: icon3 },
        { id: 4, name: "Cold/Freezing", icon: icon4 },
        { id: 5, name: "Drought", icon: icon5 },
        { id: 6, name: "Earthquake", icon: icon6 },
        { id: 7, name: "Flooding", icon: icon7 },
        { id: 8, name: "Heat Wave", icon: icon8 },
        { id: 9, name: "Hail", icon: icon9 },
        { id: 10, name: "Lightning", icon: icon10 },
        { id: 11, name: "Man Made", icon: icon11 },
        { id: 12, name: "Mudslide", icon: icon12 },
        { id: 13, name: "Severe Storm", icon: icon13 },
        { id: 14, name: "Strong Wind", icon: icon13 },
        { id: 15, name: "Tornado", icon: icon14 },
        { id: 16, name: "Tsunami", icon: icon15 },
        { id: 17, name: "Volcanic Eruption", icon: icon16 },
        { id: 18, name: "Wildfire", icon: icon17 },
      ];

      const [selected, setSelected] = useState(null);
  return (
    <div>
        <HeaderTwo link1="/incidents/progress-page" link2="/incidents/progress-page" link3="/incidents/incident-form"/>
        <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl font-bold mb-4">Which of these best describes the incident?</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {incidents.map((incident) => (
          <button
            key={incident.id}
            className={`flex items-center gap-2 p-4 rounded-lg border w-40 justify-center text-gray-700 
            transition duration-300 
            ${
              selected === incident.id
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setSelected(incident.id)}
          >
            <span><img src={incident.icon} alt="" /></span>
            <span>{incident.name}</span>
          </button>
        ))}
      </div>
    </div>
    </div>
  )
}

export default NewIncident