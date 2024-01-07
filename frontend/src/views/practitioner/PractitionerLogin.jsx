import logo from "../../assets/mobilityMate-NoBg-lg.png";
import support from "../../assets/signupPractitioner.jpeg";
const PractitionerLogin = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20">
        
        <div className="w-2/5 p-12 rounded-xl">
          <form method="POST">
            <div className="flex flex-row mb-12">
              <div className="flex justify-center items-center">
                <div className="h-11 w-12 mb-4">
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="font-regular text-3xl text-gray-700 ml-4 mt-[6px]">
                <a href="/">MobilityMate</a>
              </div>
            </div>
            
            <div className="font-medium text-3xl mb-2">Welcome back!</div>
            <div className="font-light text-md mb-8">Please login in to your account.</div>

            <div className="mb-6">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="johndoe@domain.com"
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-6">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password"
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
            </div>

            <div className="flex mb-10">
              <button type="Submit"
                className="w-full h-[55px] bg-black hover:bg-gray-800 text-white py-2 px-4 rounded">
                Login
              </button>
            </div>

            <div className="flex">
              Don&apos;t have an account yet?
              <a href="/practitioner/signUp" className="ml-3">
                <b className="underline hover:text-gray-700">Sign Up</b>
              </a>
            </div>
          </form>
        </div>

        <div className="w-px mt-40 mb-40 bg-gray-200"></div>
        
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src={support} alt="Support For All" className="object-cover h-[110%] w-[100%] mt-[-3em]" />
        </div>

      </div>
    </div>
  );
};

export default PractitionerLogin;
