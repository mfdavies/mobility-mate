import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import VoiceAI from './components/VoiceAI';
import { db, getCurrentUser } from '../../../firebaseConfig';
import axios from 'axios';
import Skeleton from './components/Skeleton';
import apiUrl from '../../config';
import { CheckCircle, Clock3, LogOut } from 'lucide-react';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';

const PatientHome = () => {
  const navigate = useNavigate();
  const { patientID, practitionerID } = useParams();
  const [patient, setPatient] = useState(null);
  const [convo, setConvo] = useState({
    user: null,
    gpt: null,
  });
  const [userInput, setUserInput] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const currentUser = await getCurrentUser();

      // Fetch patient details
      const patientRef = db
        .collection('practitioners')
        .doc(currentUser.uid)
        .collection('patients')
        .doc(patientID);

      const unsubscribePatient = patientRef.onSnapshot((doc) => {
        if (doc.exists) {
          const patientData = doc.data();
          setPatient(patientData);
          console.log(patient);
        } else {
          console.error('Patient not found');
        }
      });

      return () => {
        unsubscribePatient();
      };
    };

    fetchPatientDetails();
  }, [patientID]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setConvo((prevConvo) => ({ ...prevConvo, gpt: null }));
    updateUserMessage(userInput);
    const queryParams = new URLSearchParams({
      patient: patientID,
      practitioner: practitionerID,
    });
    try {
      const response = await axios.post(
        `${apiUrl}/conversation/send_text_message?${queryParams.toString()}`,
        { message: userInput }
      );
      console.log(response.data.reply);
      setConvo((prevConvo) => {
        if (prevConvo.gpt === null) {
          return { ...prevConvo, gpt: response.data.reply };
        }
        return prevConvo;
      });
    } catch (error) {
      console.error('Error fetching conversation start:', error);
    }
    setUserInput('');
  };

  const updateUserMessage = useCallback((newMessage) => {
    setConvo((prevConvo) => ({ ...prevConvo, user: newMessage }));
  }, []);

  const updateGptResponse = useCallback((newResponse) => {
    setConvo((prevConvo) => ({ ...prevConvo, gpt: newResponse }));
  }, []);

  useEffect(() => {
    const startConversation = async () => {
      const queryParams = new URLSearchParams({
        patient: patientID,
        practitioner: practitionerID,
      });
      try {
        const response = await axios.get(
          `${apiUrl}/conversation/start?${queryParams.toString()}`
        );
        setConvo((prevConvo) => {
          if (prevConvo.gpt === null) {
            return { ...prevConvo, gpt: response.data.reply };
          }
          return prevConvo;
        });
      } catch (error) {
        console.error('Error fetching conversation start:', error);
      }

      try {
        const response = await axios.get(
          `${apiUrl}/exercise/get_all?${queryParams.toString()}`
        );
        console.log(response.data.exercises);
        setExercises(response.data.exercises);
      } catch (error) {
        console.error('Error fetching conversation start:', error);
      }
    };
    startConversation();
  }, []);

  const handleEndSession = async () => {
    try {
      await axios.post(
        `${apiUrl}/conversation/end`,
        {},
        {
          params: new URLSearchParams({
            patient: patientID,
            practitioner: practitionerID,
          }),
        }
      );
      navigate('/');
    } catch (error) {
      console.error('Error ending conversation:', error);
    }
  };

  return (
    <div className="outer-frame text-dark-teal  ">
      <div className="inner-frame flex flex-col h-full overflow-hidden">
        <Navbar patient={patient} />
        <main className="flex-grow p-6 overflow-hidden">
          <div className="flex h-full">
            <div className="w-1/4 flex flex-col justify-between h-full left-column">
              {/* <Conversation messages={messages} /> */}
              <div className="flex flex-col gap-2">
                <p className="text-base border-2 p-2 rounded-box">
                  {/* <span className="underline">Carl</span>
                  <br /> */}
                  {convo.user}
                </p>
                <div className="text-lg font-medium border-2 p-2 rounded-box">
                  {/* <span className="underline">MobilityMate</span>
                  <br /> */}
                  {convo.gpt !== null ? convo.gpt : <Skeleton />}
                </div>
              </div>
              <form className="flex items-center" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="You can also type here..."
                  className="input input-bordered w-full max-w-xs mr-2"
                  value={userInput}
                  onChange={handleInputChange}
                />
                <button className="btn bg-dark-teal text-white">Prompt</button>
              </form>
            </div>
            <div className="w-2/4 h-full flex flex-col justify-evenly items-center">
              <VoiceAI
                patientID={patientID}
                practitionerID={practitionerID}
                updateUserMessage={updateUserMessage}
                updateGptResponse={updateGptResponse}
              />
            </div>
            <div className="w-1/4 h-full flex flex-col gap-4 items-center">
              {exercises.length > 0 ? (
                <Exercises exercises={exercises} />
              ) : (
                <div className="skeleton h-full w-full"></div>
              )}
              <div className="flex flex-col justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-box h-1/4 w-full p-4 ">
                <h3 className="flex items-center justify-between gap-1 text-lg font-medium text-left w-full">
                  Daily Progress
                  <button
                    className="text-light-teal flex gap-2 items-center"
                    onClick={handleEndSession}
                  >
                    Exit
                    <LogOut size={16} />
                  </button>
                </h3>
                <div>Your progress for today</div>
                <div className='flex items-center text-base gap-4'>
                  <progress className="progress w-56" value="75" max="100" />
                  <p className='mb-1 text-sm'>75%</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* TODO: finish button that calls conversation/end */}
      </div>
    </div>
  );
};

export default PatientHome;
