import { useState } from "react";
import { getCurrentUser, db, storage } from "../../../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const emptyForm = {
  title: "",
  description: "",
  steps: "",
};

const ExerciseModal = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [image, setImage] = useState(null);
  const [imageString, setImageString] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageString(reader.result);
      };

      reader.readAsDataURL(selectedImage);
      setImage(selectedImage);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any form fields are empty
    if (
      !formData.title ||
      !formData.description ||
      !formData.steps ||
      !imageString ||
      !image
    ) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    try {
      // Upload the image to Firebase Cloud Storage
      const currentUser = await getCurrentUser();
      const storageRef = ref(
        storage,
        `practitioners/${currentUser.uid}/images/${uuidv4()}`
      );
      await uploadBytes(storageRef, image);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // Add the new exercise to Firestore with the image URL
      await db
        .collection(`practitioners/${currentUser.uid}/exercises`)
        .add({ ...formData, image: downloadURL });

      handleClose();
    } catch (error) {
      console.error("Error adding new exercise:", error);
      alert("Failed to add new exercise. Please try again.");
    }
  };

  const handleClose = () => {
    setFormData(emptyForm);
    document.getElementById("new_exercise_modal").close();
  };

  return (
    <dialog
      id="new_exercise_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create a New Exercise</h3>
        <div className="modal-action w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="title" className="text-gray-800">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Sit to Stand"
                value={formData.title}
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="text-gray-800">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                placeholder="Requires a chair, focusses on knee strength."
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="steps" className="text-gray-800">
                Steps
              </label>
              <textarea
                id="steps"
                name="steps"
                value={formData.steps}
                placeholder="Step 1: Turn a chair away from a table, with room to stand in front of it.
Step 2. Sit down in the chair.
                "
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500 max-h-64 min-h-16"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="image" className="text-gray-800">
                Image Demonstration
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"
                onChange={handleImageChange}
              />
            </div>
            {imageString && (
              <img
                src={imageString}
                alt="Selected"
                className="max-w-full mb-4 rounded"
              />
            )}
            <div className="flex gap-4">
              <button className="btn  bg-dark-teal text-white" type="submit">
                Submit
              </button>
              <button className="btn" type="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ExerciseModal;
