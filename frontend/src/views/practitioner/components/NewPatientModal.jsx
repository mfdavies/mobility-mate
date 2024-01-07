import { useState } from "react";
import { auth, db } from "../../../../firebaseConfig";

const NewPatientModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the new patient data to Firestore
      await db
        .collection(`practitioners/${auth.currentUser.uid}/patients`)
        .add(formData);
      handleClose();
    } catch (error) {
      console.error("Error adding new patient:", error);
    }
  };

  const handleClose = () => {
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
          <form onSubmit={handleSubmit}>
            <div className="form-group w-full">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="ml-4"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="ml-4"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Age
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="ml-4"
                />
              </label>
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
