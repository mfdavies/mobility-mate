import { useEffect, useState } from "react";
import { db, getCurrentUser } from "../../../../firebaseConfig";
import { Plus } from "lucide-react";
import NewPatientModal from "./NewPatientModal";

const PatientTable = ({ onPatientClick }) => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = await getCurrentUser();
      try {
        const patientsRef = db
          .collection("practitioners")
          .doc(currentUser.uid)
          .collection("patients");

        const unsubscribe = patientsRef.onSnapshot((snapshot) => {
          setPatients(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
          setIsLoading(false); // Data fetched, loading complete
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // In case of error, also stop loading
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
          className="btn bg-dark-teal text-white hover:bg-gray-600"
          onClick={() => document.getElementById("new_patient_modal").showModal()}
        >
          <Plus />
          New Patient
        </button>
      </div>

      {isLoading ? (
        <div className="w-full bg-gray-50 rounded-lg mt-4 p-5">
          <span>Loading...</span> {/* Replace with your spinner or loading component */}
        </div>
      ) : (
        <div className="w-full bg-gray-50 rounded-lg">
          <table className="table w-full mt-4 rounded-lg">
            <thead>
              <tr className="bg-gray-100 rounded-lg text-gray-700">
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Last Login</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="hover text-gray-500"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRowClick(patient.id)}
                >
                  <td>{patient.id}</td>
                  <th className="text-gray-700">{patient.name}</th>
                  <td>{patient.age}</td>
                  <td>{patient.email}</td>
                  <td>{patient.lastLogin || "Never"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <NewPatientModal />
    </div>
  );
};

export default PatientTable;
