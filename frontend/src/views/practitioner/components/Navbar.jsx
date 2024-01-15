import { auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { UserRound, Dumbbell } from "lucide-react";
import logo from "/images/mobilityMate-NoBg-lg.png";

const Navbar = ({ activeView, onViewChange }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to sign out?");
    if (confirmLogout) {
      auth
        .signOut()
        .then(() => {
          navigate("/");
        })
        .catch(function (error) {
          console.error("Error signing out:", error);
        });
    }
  };

  const isPatientsActive = activeView === "patients";
  const isExercisesActive = activeView === "exercises";

  return (
    <nav className="px-4 py-2 flex items-center gap-4 bg-dark-teal">
      <button className="btn btn-ghost p-0 text-xl text-white">
        <img className="h-3/5" src={logo} alt="" />
        MobilityMate
      </button>
      <div className="flex-grow"></div>
      <div className="flex gap-4">
        <button
          className={`btn ${
            !isPatientsActive
              ? "bg-dark-teal text-white hover:bg-gray-600"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onViewChange("patients")}
        >
          <UserRound />
          Patients
        </button>
        <button
          className={`btn ${
            !isExercisesActive
              ? "bg-dark-teal text-white hover:bg-gray-600"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onViewChange("exercises")}
        >
          <Dumbbell />
          Exercises
        </button>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
