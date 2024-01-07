import { useState } from "react";

const ExerciseListModal = ({ exercises, onAddExercises, onClose }) => {
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleSelectExercise = (exerciseId) => {
    setSelectedExercises((prev) => {
      if (prev.includes(exerciseId)) {
        return prev.filter((id) => id !== exerciseId);
      } else {
        return [...prev, exerciseId];
      }
    });
  };

  const handleClose = () => {
    document.getElementById("exercise_list_modal").close();
    onClose();
  };

  const handleSubmit = () => {
    onAddExercises(selectedExercises);
    onClose();
  };

  return (
    <dialog id="exercise_list_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={handleClose}
        >
          ✕
        </button>
        </form>
        <h3 className="font-bold text-lg">Select Exercises</h3>
        <div className="py-4">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedExercises.includes(exercise.id)}
                onChange={() => handleSelectExercise(exercise.id)}
                className="checkbox checkbox-primary mt-1 border-gray-500 active:bg-gray-500 active:text-gray-500 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-gray-600"
              />
              <span className="ml-2">{exercise.title}</span>
            </div>
          ))}
        </div>
        <div className="modal-action">
          <button onClick={handleSubmit} className="btn bg-gray-800 text-white hover:bg-gray-600">
            Add to Routine
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ExerciseListModal;
