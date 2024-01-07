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
        <h1 className="text-2xl font-semibold">Exercises</h1>
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
      <div className="w-full bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 p-5">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
              <img src={exercise.image} alt={exercise.title} className="w-80 h-32 sm:h-48 object-fit rounded-t-lg" />
              <h2 className="mt-2 font-bold text-lg">{exercise.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{exercise.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ExerciseModal />
    </div>
  );
};

export default Exercises;
