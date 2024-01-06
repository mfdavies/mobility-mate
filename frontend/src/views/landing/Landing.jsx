import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-teal flex flex-col text-dark-teal dark:text-white items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to MobilityMate</h1>
      <p className="text-lg  mb-4">Your companion for physiotherapy and mobility exercises.</p>
      <div className="flex space-x-4">
        <Link to="/patient/home" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
          Patient Area
        </Link>
        <Link to="/practitioner/dashboard" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">
          Practitioner Area
        </Link>
      </div>
    </div>
  );
};

export default Landing;