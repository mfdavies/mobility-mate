import Navbar from "./components/Navbar";
import RecordButton from "./components/RecordButton";

const PatientHome = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to Your Home Page
        </h1>
        <p className="text-gray-700">
          Here you can find your daily routines, track your progress, and manage
          your health journey.
        </p>
        <RecordButton />
      </main>
    </div>
  );
};

export default PatientHome;
