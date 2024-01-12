import { useState } from "react";
import { getCurrentUser, db } from "../../../../firebaseConfig";
import apiUrl from "../../../config";
import axios from "axios";

const emptyForm = {
  name: "",
  email: "",
  age: "",
};

const NewPatientModal = () => {
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, age } = formData;

    // Validation
    if (!name || !email || !age) {
      alert("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (isNaN(age) || age <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    try {
      // Check if patient email already exists in Firestore
      const currentUser = await getCurrentUser();
      const patientsRef = db.collection(`practitioners/${currentUser.uid}/patients`);
      const existingPatient = await patientsRef.where("email", "==", email).get();

      if (!existingPatient.empty) {
        alert("A patient with this email already exists.");
        return;
      }

      // Add the new patient data to Firestore
      const patientDoc = await patientsRef.add(formData);

      // Send patient an email access link
      await axios.post(`${apiUrl}/patient/send-link`, {
        practitionId: currentUser.uid,
        patientId: patientDoc.id,
        name,
        email,
      });

      handleClose();
    } catch (error) {
      console.error("Error adding new patient:", error);
    }
  };

  const handleClose = () => {
    setFormData(emptyForm);
    document.getElementById("new_patient_modal").close();
  };

  return (
    <dialog
      id="new_patient_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Register a New Patient</h3>
        {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
        <div className="modal-action w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-800">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                placeholder="johndoe@domain.com"
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-800">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                placeholder="75"
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500"
                onChange={handleChange}
              />
            </div>
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

export default NewPatientModal;
