import { auth } from '../../../firebaseConfig';

const PractitionerLogin = () => {
  const handleLogin = async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        // Authenticate user
        await auth.signInWithEmailAndPassword(email.value, password.value);

        // TODO: Redirect to "/practitioner/dashboard"
        // Redirect to "/patient/home" as placeholder
        window.location.href = "/patient/home";
      } catch (error) {
        console.error("Login Error: ", error);
        alert("Failed to login. Please check your credentials.");
      }
    };

  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20">
        
        <div className="w-2/5 p-12 rounded-xl">
          <form onSubmit={handleLogin}>
            <div className="flex flex-row mb-12">
              <div className="flex justify-center items-center">
                <div className="h-11 w-12 mb-4">
                  <img src="/src/assets/mobilityMate-NoBg-lg.png" alt="logo" />
                </div>
              </div>
              <div className="font-regular text-3xl text-gray-700 ml-4 mt-[6px]">
                <a href="/">MobilityMate</a>
              </div>
            </div>
            
            <div className="font-medium text-gray-800 text-3xl mb-2">Welcome back!</div>
            <div className="font-light text-gray-800 text-md mb-8">Please login in to your account.</div>

            <div className="mb-6">
              <label htmlFor="email" className="text-gray-800">Email</label>
              <input type="text" id="email" name="email" placeholder="johndoe@domain.com"
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="text-gray-800">Password</label>
              <input type="password" id="password" name="password" placeholder="Password"
                className="block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
            </div>

            <div className="flex mb-10">
              <button type="submit"
                className="w-full h-[55px] bg-black hover:bg-gray-800 text-white py-2 px-4 rounded">
                Login
              </button>
            </div>

            <div className="flex text-gray-800">
              Don&apos;t have an account yet?
              <a href="/practitioner/signUp" className="ml-3">
                <b className="underline hover:text-gray-700">Sign Up</b>
              </a>
            </div>
          </form>
        </div>

        <div className="w-px mt-40 mb-40 bg-gray-200"></div>
        
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src="/src/assets/loginPractitioner.jpeg" alt="Support For All" className="object-cover h-[110%] w-[100%] mt-[-3em]" />
        </div>

      </div>
    </div>
  );
};

export default PractitionerLogin;
