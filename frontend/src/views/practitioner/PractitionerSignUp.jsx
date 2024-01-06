const PractitionerSignUp = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20">

        <div className="w-2/5 p-12 rounded-xl">
          <form method="POST">
            <div className="flex flex-row mb-12">
              <div className="flex justify-center items-center">
                <div className="h-11 w-12 mb-4">
                  <img src="/src/assets/mobilityMate-NoBg-lg.png" alt="MobilityMate Logo" />
                </div>
              </div>
              <div className="font-regular text-3xl text-gray-700 ml-4 mt-[6px]">
                <a href="/">MobilityMate</a>
              </div>
            </div>

            <h2 className="font-medium text-3xl mb-2">Create an account</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" placeholder="name@example.com"
                  className="mt-1 block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
              </div>

              <button className="w-full h-[55px] bg-black hover:bg-gray-800 text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                Sign Up
              </button>

              <p className="text-xs text-gray-600">
                By clicking continue, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div className="flex">
              Already have an account?
              <a href="/practitioner/login" className="ml-3">
                <b className="underline hover:text-gray-700">Login</b>
              </a>
            </div>
          </form>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-xs text-gray-800">
              Your well-being is our priority! Our team is here to assist you every step of the way. Let us be a part of your journey to a better, more fulfilling lifestyle.
              <p className="font-semibold text-gray-800 mt-2">The MobilityMate Team 🏋️‍♂️</p>
            </div>
        </div>

        <div className="w-px mt-40 mb-40 bg-gray-200"></div>

        <div className="w-1/2 h-full flex justify-center items-center">
          <img src="/src/assets/signupPractitioner.jpeg" alt="Support For All" className="object-cover h-[110%] w-[100%] mt-[-3em]" />
        </div>

      </div>
    </div>
  );
};

export default PractitionerSignUp;
