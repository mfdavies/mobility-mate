import { useState } from "react";
import Navbar from "./components/Navbar";
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
    <>
      <Navbar
        activeView={activeView}
        onViewChange={(view) => setActiveView(view)}
      />
      <main className="px-2 flex w-full">
        <div className="w-px my-9 bg-gray-200"></div>
        {renderView()}
      </main>
    </>
  );
};

export default PractitionerDashboard;
