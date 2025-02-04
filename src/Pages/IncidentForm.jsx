
import HeaderTwo from "../component/HeaderTwo";

const IncidentForm = () => {
  return (
   <>
    <HeaderTwo link1="/incidents" link2="/incidents/new-incident" link3="/incidents/incident-location" />
    <div className="max-w-2xl mx-auto mt-6">
      {/* Incident Title */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">Let’s give the incident a title?</h2>
        <p className="text-gray-500">Make a title that will easily identify the incidents</p>
        <input
          type="text"
          placeholder="Add title here"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Incident Description */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">Describe what happened during the incident?</h2>
        <p className="text-gray-500">
          Share some information about the incident. The when, where, how.
        </p>
        <textarea
          placeholder="Type here"
          rows="4"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>
      </div>
    </div>
   </>
  );
};

export default IncidentForm;
