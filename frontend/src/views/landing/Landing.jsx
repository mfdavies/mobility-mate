import landingImage from "/images/landingDoodle.jpeg";
import logo from "/images/mobilityMate-NoBg-lg.png";

const Landing = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <img
            src={landingImage}
            alt="Welcome"
            className="object-cover h-[50%] w-[100%] mt-[-3em]"
          />
        </div>

        <div className="w-px mt-40 mb-40 bg-gray-200"></div>

        <div className="w-2/5 p-12 rounded-xl mt-40">
          <header className="mb-12">
            <div className="flex justify-center items-center text-3xl font-bold text-gray-700">
              <img src={logo} alt="MobilityMate Logo" className="h-12 mr-3" />
              MobilityMate
            </div>
          </header>

          <main>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              Enhancing Your Mobility Journey
            </h1>
            <p className="text-gray-700 mb-8">
              Join us in revolutionizing the way practitioners and patients
              interact. Experience seamless management of exercise routines,
              patient records, and progress tracking.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <a
                href="/practitioner/login"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 flex-grow text-center"
              >
                Sign in as Practitioner
              </a>
            </div>
            <p className="text-gray-700 mb-8 my-2">
              Are you a patient? You can access your account via the link sent
              to your email.
            </p>
          </main>

          <footer className="text-center py-4 mt-12 text-gray-800">
            <p>
              © {new Date().getFullYear()} MobilityMate. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landing;
