import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './views/landing/Landing';
import PatientHome from './views/patient/PatientHome';
import PractitionerDashboard from './views/practitioner/PractitionerDashboard';
import PractitionerSignUp from './views/practitioner/PractitionerSignUp' 
import PractitionerLogin from './views/practitioner/PractitionerLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/patient/:patientID" element={<PatientHome />} />
        <Route path="/practitioner/dashboard" element={<PractitionerDashboard />} />
        <Route path="/practitioner/signUp" element={<PractitionerSignUp />} />
        <Route path="/practitioner/login" element={<PractitionerLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
