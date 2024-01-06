const PractitionerLogin = () => {
    return (
        <div className="bg-gray-800 flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center mr-4">
                        <img src="/src/assets/mobilityMate-NoBg-lg.png" alt="MobilityMate Logo" className="h-20 mr-3" />
                        <span className="text-xl font-bold text-gray-900">MobilityMate</span>
                    </div>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold mb-6">Login to your account</h2>
                    
                    <div className="space-y-4">
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-gray-500" />
                        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-gray-500" />

                        <button className="w-full bg-black text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700">Login</button>

                        <div className="flex justify-between text-xs text-gray-600">
                            <a href="#" className="hover:text-gray-800">Forgot password?</a>
                            <div className="hover:text-gray-800">Don&apos;t have an account? <a href="/practitioner/signUp" className="font-semibold text-gray-800">Sign Up</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PractitionerLogin;
