const PractitionerDashboard = () => {
    return (
        <div className="min-h-screen bg-green-100">
            <header className="bg-green-600 text-white text-xl py-4 px-6">
                Practitioner Dashboard
            </header>
            <main className="p-12">
                <h1 className="text-2xl font-semibold mb-4">Welcome, Practitioner</h1>
                <p className="text-gray-700">
                    Access patient records, set exercise routines, and view progress reports.
                </p>
            </main>
        </div>
    );
};

export default PractitionerDashboard;