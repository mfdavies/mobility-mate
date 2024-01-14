import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import VoiceAI from './components/VoiceAI';
import { db, getCurrentUser } from '../../../firebaseConfig';
import axios from 'axios';
import apiUrl from '../../config';
import { LogOut } from 'lucide-react';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import Conversation from './components/Conversation';

const PatientHome = () => {
  const navigate = useNavigate();
  const { patientID, practitionerID } = useParams();
  const [patient, setPatient] = useState(null);
  const [convo, setConvo] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [exercises, setExercises] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

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
      updateGptResponse(response.data.reply);
      setUserInput('');
    } catch (error) {
      console.error('Error fetching conversation start:', error);
    }
  };

  const updateUserMessage = useCallback((newMessage) => {
    if (!newMessage) {
      return;
    }
    setConvo((prevConvo) => {
      const lastMessage = prevConvo[prevConvo.length - 1];
      if (!lastMessage || lastMessage.type === 'gpt') {
        return [...prevConvo, { type: 'user', text: newMessage }];
      }
      return prevConvo.map((message, index) =>
        index === prevConvo.length - 1
          ? { ...message, text: newMessage }
          : message
      );
    });
  }, []);

  const updateGptResponse = useCallback((newResponse) => {
    if (!newResponse) {
      return;
    }
    setConvo((prevConvo) => {
      const lastMessage = prevConvo[prevConvo.length - 1];
      if (!lastMessage || lastMessage.type === 'user') {
        return [...prevConvo, { type: 'gpt', text: newResponse }];
      }
      return prevConvo;
    });
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
        updateGptResponse(response.data.reply);
      } catch (error) {
        console.error('Error fetching conversation start:', error);
      }

      try {
        const response = await axios.get(
          `${apiUrl}/exercise/get_all?${queryParams.toString()}`
        );
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
            <div className="w-1/4 flex flex-col justify-between gap-6 h-full left-column">
              <Conversation
                convo={convo}
                isRecording={isRecording}
                setIsRecording={setIsRecording}
              />
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
            <div className="w-2/4 h-full flex flex-col justify-between items-center">
              <VoiceAI
                patientID={patientID}
                practitionerID={practitionerID}
                updateUserMessage={updateUserMessage}
                updateGptResponse={updateGptResponse}
                isRecording={isRecording}
                setIsRecording={setIsRecording}
              />
            </div>
            <div className="w-1/4 h-full flex flex-col items-center ">
              {exercises.length > 0 ? (
                <div className="h-4/5 overflow-x-visible w-full m-auto flex flex-col rounded-box">
                  <Exercises exercises={exercises} />
                </div>
              ) : (
                <div className="skeleton h-full w-full mb-6"></div>
              )}
              <div className="h-1/5 flex flex-col justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-box w-full p-4">
                <h3 className="flex items-center justify-between gap-1 text-lg font-medium text-left w-full">
                  Done for the day?
                  <button
                    className="text-light-teal flex gap-2 items-center"
                    onClick={handleEndSession}
                  >
                    <LogOut size={20} />
                  </button>
                </h3>
                <div>Your progress for today</div>
                <div className="flex items-center text-base gap-4">
                  <progress className="progress w-56" value="75" max="100" />
                  <p className="mb-1 text-sm">75%</p>
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
