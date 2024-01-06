const PractitionerSignUp = () => {
    return (
        <div className="bg-gray-800 flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <img src="/src/assets/mobilityMate-NoBg-lg.png" alt="MobilityMate Logo" className="h-20 mr-3" />
                        <span className="text-xl font-bold text-gray-900">MobilityMate</span>
                    </div>
                    <a href="/practitioner/login" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">Login</a>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold mb-6">Create an account</h2>
                    
                    <div className="space-y-4">
                        <input type="email" placeholder="name@example.com" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-gray-500" />

                        <button className="w-full bg-black text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700">Sign Up</button>

                        <div className="text-xs text-gray-600 mt-6">
                            By clicking continue, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                    <p className="text-xs text-gray-600">Your well-being is our priority! Our team is here to assist you every step of the way. Let us be a part of your journey to a better, more fulfilling lifestyle.</p>
                    <p className="text-xs font-semibold text-gray-800 mt-2">The MobilityMate Team 🏋️‍♂️</p>
                </div>
            </div>
        </div>
    );
};

export default PractitionerSignUp;
