import { Plus } from "lucide-react";
import { db, getCurrentUser } from "../../../../firebaseConfig";
import { useEffect, useState } from "react";
import NewPatientModal from "./NewPatientModal";

const PatientTable = ({ onPatientClick }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = await getCurrentUser();
      try {
        const patientsRef = db
          .collection("practitioners")
          .doc(currentUser.uid)
          .collection("patients");

        // Use snapshot listener for real-time updates
        const unsubscribe = patientsRef.onSnapshot((snapshot) => {
          setPatients(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        return () => unsubscribe();
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (patientId) => {
    onPatientClick(patientId);
  };

  return (
    <div className="w-full p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-4">Patients</h1>
        <button
          className="btn bg-dark-teal text-white"
          onClick={() =>
            document.getElementById("new_patient_modal").showModal()
          }
        >
          <Plus />
          New Patient
        </button>
      </div>
      <table className="table w-full mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Last Login</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, idx) => (
            <tr
              key={idx}
              className="hover"
              style={{ cursor: "pointer" }}
              onClick={() => handleRowClick(patient.id)}
            >
              <td>{patient.id}</td>
              <th>{patient.name}</th>
              <td>{patient.age}</td>
              <td>{patient.email}</td>
              <td>{patient.lastLogin || "Never"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NewPatientModal />
    </div>
  );
};

export default PatientTable;