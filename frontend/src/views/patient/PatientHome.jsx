import Navbar from './Navbar';
import Ai3D from './Ai3D';

const PatientHome = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="h-full p-6 flex">
        <div className="h-full w-1/2 bg-baby-blue">
          <h1 className="text-4xl font-medium">Welcome Back</h1>
          <div className="text-3xl">John</div>
          <Ai3D />
        </div>
        <div className="h-full w-1/2 bg-light-teal"></div>
      </main>
    </div>
  );
};

export default PatientHome;
