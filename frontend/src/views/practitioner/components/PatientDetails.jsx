import { useEffect, useState } from "react";
import { db, getCurrentUser } from "../../../../firebaseConfig";

const PatientDetails = ({ patientID }) => {
  const [patient, setPatient] = useState(null);
  console.log(patientID);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const currentUser = await getCurrentUser();

      const patientRef = db
        .collection("practitioners")
        .doc(currentUser.uid)
        .collection("patients")
        .doc(patientID);

      // Set up a snapshot listener to get real-time updates
      const unsubscribe = patientRef.onSnapshot((doc) => {
        if (doc.exists) {
          setPatient(doc.data());
        } else {
          console.error("Patient not found");
        }
      });

      return () => {
        unsubscribe();
      };
    };

    fetchPatientDetails();
  }, [patientID]);

  return (
    <div>
      {patient ? (
        <div className="p-4">
          <h1 className="text-4xl font-bold mb-4">{patient.name}</h1>
          <div className="flex space-x-4 text-gray-600 text-xl">
            <p>{patientID}</p>
            <p>{patient.age}</p>
            <p>{patient.email}</p>
            <p>{patient.lastLogin || "Never"}</p>
            {/* Render other patient details as needed */}
          </div>
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}
    </div>
  );
};

export default PatientDetails;
