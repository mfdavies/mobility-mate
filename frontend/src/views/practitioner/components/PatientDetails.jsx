import { useEffect, useState } from "react";
import { db, getCurrentUser } from "../../../../firebaseConfig";
import { Edit } from "lucide-react";
import ExerciseListModal from "./ExerciseListModal";

const PatientDetails = ({ patientID }) => {
  const [patient, setPatient] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [patientExercises, setPatientExercises] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [convos, setConvos] = useState([]); 

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const currentUser = await getCurrentUser();

      // Fetch patient details
      const patientRef = db
        .collection("practitioners")
        .doc(currentUser.uid)
        .collection("patients")
        .doc(patientID);

      const unsubscribePatient = patientRef.onSnapshot((doc) => {
        if (doc.exists) {
          const patientData = doc.data();
          setPatient(patientData);
          if (patientData.exerciseRoutine) {
            setPatientExercises(patientData.exerciseRoutine);
          }
          const conversationsRef = doc.ref.collection("conversations");
          conversationsRef.onSnapshot((snapshot) => {
            console.log(snapshot.docs);
            const sortedConvos = snapshot.docs
              .map((doc) => ({
                date: doc.data().date.toDate(),
                summary: doc.data().summary,
              }))
              .sort((a, b) => b.date - a.date); // Sort by date in ascending order
            setConvos(sortedConvos);
          });
        } else {
          console.error("Patient not found");
        }
      });

      // Fetch exercises
      const exercisesRef = db
        .collection("practitioners")
        .doc(currentUser.uid)
        .collection("exercises");

      const unsubscribeExercises = exercisesRef.onSnapshot((snapshot) => {
        setExercises(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });

      return () => {
        unsubscribePatient();
        unsubscribeExercises();
      };
    };

    fetchPatientDetails();
  }, [patientID]);

  const handleAddExercises = async (selectedExercises) => {
    const currentUser = await getCurrentUser();
    const patientRef = db.collection("practitioners").doc(currentUser.uid).collection("patients").doc(patientID);
    await patientRef.update({
      exerciseRoutine: selectedExercises
    });

    setPatientExercises(selectedExercises);
    setShowModal(false);
  };

  const toggleModal = () => {
    const modal = document.getElementById('exercise_list_modal');
    if (modal) {
      showModal ? modal.close() : modal.showModal();
      setShowModal(!showModal);
    } else {
      console.error("Modal element not found");
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  return (
    <div className="w-full py-4 px-8 mt-4">
      {patient ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">{patient.name}</h1>
          <div className="flex justify-between w-full text-gray-600 text-xl bg-gray-50 rounded-lg pl-2 pr-2">
            <p>{patientID}</p>
            <p>{patient.age} years old</p>
            <p>{patient.email}</p>
            <p>Last Login: {patient.lastLogin || "Never"}</p>
          </div>
          <div className="flex justify-between w-full text-xl font-bold mt-10">
            <p>Exercise Routine</p>
            <button
              className={"btn bg-dark-teal text-white"}
              onClick={toggleModal}
            >
              <Edit />
              Add Exercises
            </button>
          </div>
          {/* Display exercises in the patient's routine as cards */}
          <div className="bg-gray-50 rounded-lg mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
              {patientExercises.length === 0 ? (
                <p className="text-gray-600">No exercises assigned in routine.</p>
              ) : (
                patientExercises.map(exerciseId => {
                  const exercise = exercises.find(e => e.id === exerciseId);
                  return exercise && (
                    <div key={exercise.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                      <img src={exercise.image} alt={exercise.title} className="w-80 h-32 sm:h-48 object-fit rounded-t-lg" />
                      <h3 className="mt-2 font-bold text-lg">{exercise.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{exercise.description}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div>
          { convos && convos.length !== 0 ? (
            <div>
          <p className="flex justify-between w-full text-xl font-bold mt-10">Conversation Summaries</p>
          <div className="flex justify-between w-full text-gray-600 text-xl font-bold bg-gray-50 rounded-lg pl-2 pr-2">
            <p>Date</p>
            <p>Summary</p>
          </div>
          {convos.map((convo, index) => (
            <div key={index} className="flex justify-between w-full text-gray-600 text-xl bg-gray-50 rounded-lg pl-2 pr-2">
              <p>{formatDate(convo.date)}</p>
              <p>{convo.summary}</p>
            </div>
          ))}
          </div>) : (<div></div>) }
            </div>
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}

      <ExerciseListModal
        exercises={exercises}
        onAddExercises={handleAddExercises}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default PatientDetails;
