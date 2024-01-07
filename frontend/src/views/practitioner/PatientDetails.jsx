import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, getCurrentUser } from "../../../firebaseConfig";

const PatientDetails = () => {
  const { patientID } = useParams();
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
        <div>
          <h2>{patient.name}s Details</h2>
          <p>ID: {patientID}</p>
          <p>Age: {patient.age}</p>
          <p>Email: {patient.email}</p>
          <p>Last Login: {patient.lastLogin || "Never"}</p>
          {/* Render other patient details as needed */}
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}
    </div>
  );
};

export default PatientDetails;
