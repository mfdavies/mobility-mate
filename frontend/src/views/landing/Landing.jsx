const Landing = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20">
        
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <img src="/src/assets/landingDoodle.jpeg" alt="Welcome" className="object-cover h-[110%] w-[100%] mt-[-3em]" />
        </div>
        
        <div className="w-px mt-40 mb-40 bg-gray-200"></div>
        
        <div className="w-2/5 p-12 rounded-xl">
          <header className="mb-12">
            <div className="flex justify-center items-center">
              <img src="/src/assets/mobilityMate-NoBg-lg.png" alt="MobilityMate Logo" className="h-20 mr-3" />
              <span className="text-3xl font-bold text-gray-700">MobilityMate</span>
            </div>
          </header>
          
          <main>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Enhancing Your Mobility Journey</h1>
            <p className="text-gray-700 mb-8">
              Join us in revolutionizing the way practitioners and patients interact.
              Experience seamless management of exercise routines, patient records, and progress tracking.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <a href="/practitioner/signUp" className="bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 flex-grow text-center">Sign Up as Practitioner</a>
              <a href="/patient/signUp" className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 flex-grow text-center">Join as a Patient</a>
            </div>
          </main>
          
          <footer className="text-center py-4 mt-12 text-gray-800">
            <p>© {new Date().getFullYear()} MobilityMate. All rights reserved.</p>
          </footer>
        </div>
        
      </div>
    </div>
  );
};

export default Landing;
