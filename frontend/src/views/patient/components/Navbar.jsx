import logo from '/images/mobilityMate-NoBg-lg.png';

const Navbar = ({ patient }) => {
  return (
    <div className="navbar h-16 bg-base-100 border-b-2 px-6">
      <div className="w-1/4 flex justify-start">
        <div className="text-xl font-bold flex gap-2">
          Welcome Back! <span className="font-light">
            {/* {patient && patient.name ? patient.name : ''} */}
            Carl
            </span>
        </div>
      </div>
      <div className="w-2/4 flex gap-2 justify-center">
        <img src={logo} alt="MobilityMate Logo" className="h-8" />
        <a className="font-medium text-xl">MobilityMate</a>
      </div>
      <div className="w-1/4 flex justify-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://pm1.aminoapps.com/6561/160cd9c12aa9d47eec8935eb3385dd79570319bf_00.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
