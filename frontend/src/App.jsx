import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './views/landing/Landing';
import PatientHome from './views/patient/PatientHome';
import PractitionerDashboard from './views/practitioner/PractitionerDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/patient/:patientID" element={<PatientHome />} />
        <Route path="/practitioner/dashboard" element={<PractitionerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
