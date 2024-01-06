import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PatientHome from './views/patient/PatientHome';
import PractitionerDashboard from './views/practitioner/PractitionerDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patient/:patientID" element={<PatientHome />} />
        <Route path="/practitioner/dashboard" element={<PractitionerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
