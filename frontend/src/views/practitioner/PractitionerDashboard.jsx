import { useState } from "react";
import Navbar from "./components/Navbar";
import { UserRound, Dumbbell } from "lucide-react";
import PatientTable from "./components/PatientTable";
import PatientDetails from "./components/PatientDetails";
import Exercises from "./components/Exercises";

const PractitionerDashboard = () => {
  const [activeView, setActiveView] = useState("patients");
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const handlePatientClick = (patientId) => {
    setSelectedPatientId(patientId);
    setActiveView("patientDetails");
  };

  const isPatientsActive = activeView === "patients";
  const isExercisesActive = activeView === "exercises";

  const renderView = () => {
    switch (activeView) {
      case "patientDetails":
        return <PatientDetails patientID={selectedPatientId} />;
      case "exercises":
        return <Exercises />;
      default:
        return <PatientTable onPatientClick={handlePatientClick} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-6 flex">
        <div className="flex flex-col w-36 h-auto gap-4 mt-10">
          <button
            className={`btn ${
              isPatientsActive ? "bg-dark-teal text-white hover:bg-gray-600" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveView("patients")}
          >
            <UserRound />
            Patients
          </button>
          <button
            className={`btn ${
              isExercisesActive ? "bg-dark-teal text-white hover:bg-gray-600" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveView("exercises")}
          >
            <Dumbbell />
            Exercises
          </button>
        </div>
        <div className="w-px ml-5 mt-9 bg-gray-200"></div>
        {renderView()}
      </main>
    </div>
  );
};

export default PractitionerDashboard;
