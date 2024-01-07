import logo from "../../assets/mobilityMate-NoBg-lg.png";
import support from "../../assets/signupPractitioner.jpeg";
const PractitionerSignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    // Validation
    if (!name.value || !email.value || !password.value) {
      alert("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.value.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    try {
      // Create user for authentication
      const userCredential = await auth.createUserWithEmailAndPassword(email.value, password.value);
      const user = userCredential.user;

      // Add user data to Firestore with userId as the document name
      await db.collection('practitioners').doc(user.uid).set({
        name: name.value,
        email: email.value,
        userId: user.uid
      });

      // TODO: Redirect to "/practitioner/dashboard"
      // Redirect to path="/"
      window.location.href = "/";
    } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('This email is already in use.');
    } else {
      console.error("Error: ", error);
      alert(error.message);
    }
    }
  };

  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="w-full h-full bg-white flex justify-evenly flex-col sm:flex-row p-20">

        <div className="w-2/5 p-12 rounded-xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row mb-12">
              <div className="flex justify-center items-center">
                <div className="h-11 w-12 mb-4">
                  <img src={logo} alt="MobilityMate Logo" />
                </div>
              </div>
              <div className="font-regular text-3xl text-gray-700 ml-4 mt-[6px]">
                <a href="/">MobilityMate</a>
              </div>
            </div>

            <h2 className="font-medium text-3xl text-gray-800 mb-2">Create an account</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="name" id="name" name="name" placeholder="John Doe"
                  className="mt-1 block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" placeholder="name@example.com"
                  className="mt-1 block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" placeholder="Password (at least 8 characters)"
                  className="mt-1 block p-4 w-full text-black bg-[#f1f1f1] rounded-lg border sm:text-md focus:outline-none focus:border-gray-500" />
              </div>

              <button type="submit" className="w-full h-[55px] bg-black hover:bg-gray-800 text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                Sign Up
              </button>

              <p className="text-xs text-gray-600">
                By clicking continue, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div className="flex text-gray-800">
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
          <img src={support} alt="Support For All" className="object-cover h-[110%] w-[100%] mt-[-3em]" />
        </div>

      </div>
    </div>
  );
};

export default PractitionerSignUp;
