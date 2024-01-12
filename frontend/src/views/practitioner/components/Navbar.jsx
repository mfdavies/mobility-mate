import { auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import logo from "/images/mobilityMate-NoBg-lg.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to sign out?");
    if (confirmLogout) {
      auth
        .signOut()
        .then(function () {
          navigate("/");
          console.log("Worked");
        })
        .catch(function (error) {
          console.error("Error signing out:", error);
        });
    }
  };

  return (
    <div className="navbar bg-gray-50 px-4">
      <div className="flex-1 h-8 items-center">
        <img className="w-7" src={logo} alt="MobilityMate Logo" />
        <a className="btn btn-ghost text-xl p-0 ml-2">MobilityMate</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Navbar;
