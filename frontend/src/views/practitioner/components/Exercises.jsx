import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { db, getCurrentUser } from "../../../../firebaseConfig";
import ExerciseModal from "./ExerciseModal";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = await getCurrentUser();
      try {
        const patientsRef = db
          .collection("practitioners")
          .doc(currentUser.uid)
          .collection("exercises");

        // Use snapshot listener for real-time updates
        const unsubscribe = patientsRef.onSnapshot((snapshot) => {
          setExercises(
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
  return (
    <div className="w-full p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-4">Exercises</h1>
        <button
          className="btn bg-dark-teal text-white"
          onClick={() =>
            document.getElementById("new_patient_modal").showModal()
          }
        >
          <Plus />
          New Exercise
        </button>
      </div>
      {/* TODO: map each exercise into a EXERCISE CARD HERE */}
      <div className="grid">
        {exercises.map((exercise, idx) => (
          <p key={idx}>{exercise.title}</p>
        ))}
      </div>
      <ExerciseModal />
    </div>
  );
};

export default Exercises;
