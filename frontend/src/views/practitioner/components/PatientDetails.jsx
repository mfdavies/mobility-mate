import { useEffect, useState } from "react";
import { db, getCurrentUser } from "../../../../firebaseConfig";
import { Edit } from "lucide-react";

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
    <div className="w-full py-4 px-8">
      {patient ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">{patient.name}</h1>
          <div className="flex justify-between w-full text-gray-600 text-xl">
            <p>{patientID}</p>
            <p>{patient.age} years old</p>
            <p>{patient.email}</p>
            <p>Last Login: {patient.lastLogin || "Never"}</p>
          </div>
          <div className="flex justify-between w-full text-xl font-bold mt-16">
            <p>Exercise Routine</p>
            <button
              className={"btn bg-dark-teal text-white"}
              onClick={() => {}}
            >
              <Edit />
              Exercises
            </button>
          </div>
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}
    </div>
  );
};

export default PatientDetails;
