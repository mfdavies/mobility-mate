import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import "./styles.css";
import { useState, useEffect, useCallback } from "react";
import VoiceAI from "./components/VoiceAI";
import { db, getCurrentUser } from "../../../firebaseConfig";
import axios from "axios";
import Skeleton from "./components/Skeleton";
import apiUrl from "../../config";
import { LogOut } from "lucide-react";
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';

const PatientHome = () => {
  const navigate = useNavigate();
  const {patientID, practitionerID} = useParams();
  const [patient, setPatient] = useState(null);
  const [convo, setConvo] = useState({
    user: null,
    gpt: null,
  });
  const [userInput, setUserInput] = useState('');
  // const [patientID, setPatientId] = useState('');
  // const [practitionerID, setPractitionerId] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const currentUser = await getCurrentUser();

      // Fetch patient details
      const patientRef = db
        .collection("practitioners")
        .doc(currentUser.uid)
        .collection("patients")
        .doc(patientID);

      const unsubscribePatient = patientRef.onSnapshot((doc) => {
        if (doc.exists) {
          const patientData = doc.data();
          setPatient(patientData);
          console.log(patient)
        } else {
          console.error("Patient not found");
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
      console.error("Error fetching conversation start:", error);
    }
    setUserInput("");
  };

  const updateUserMessage = useCallback((newMessage) => {
    setConvo((prevConvo) => ({ ...prevConvo, user: newMessage }));
  }, []);

  const updateGptResponse = useCallback((newResponse) => {
    setConvo((prevConvo) => ({ ...prevConvo, gpt: newResponse }));
  }, []);

  // useEffect(() => {
  //   // Set the state variables from the path parameters
  //   if (params.patientID) {
  //     setPatientId(params.patientID);
  //   }
  //   if (params.practitionerID) {
  //     setPractitionerId(params.practitionerID);
  //   }
  //   console.log(patientID, practitionerID)
  // }, [params.patientID, params.practitionerID]); 

  useEffect(() => {
    const startConversation = async () => {
      console.log(patientID, practitionerID)
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
        console.error("Error fetching conversation start:", error);
      }

      try {
        const response = await axios.get(
          `${apiUrl}/exercise/get_all?${queryParams.toString()}`,
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
          // TODO: what are thooooose
          params: new URLSearchParams({
            patient: patientID,
            practitioner: practitionerID,
          }),
        }
      );
      navigate("/");
    } catch (error) {
      console.error("Error ending conversation:", error);
    }
  };

  return (
    <div className="outer-frame text-dark-teal  ">
      <div className="inner-frame flex flex-col h-full p-6">
        {/* <Navbar /> */}
        <main className="flex-grow p-6 overflow-hidden">
          <div className="flex h-full gap-12">
            <div className="w-2/3 flex flex-col justify-between h-full left-column">
              <header className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-medium">Welcome Back</h1>
                  <div className="text-2xl">
                  {patient && patient.name ? patient.name : ''}
                  </div>
                </div>
                <button
                  onClick={handleEndSession}
                  className="flex items-center gap-2 btn btn-active btn-glass"
                >
                  Done for the day?
                  <LogOut size={18} />
                </button>
              </header>
              {/* <Conversation messages={messages} /> */}
              <div className="flex flex-col gap-4 w-3/4">
                <p className="text-base">{convo.user}</p>
                <div className="text-xl font-medium">
                  {convo.gpt !== null ? convo.gpt : <Skeleton />}
                </div>
              </div>
              <form className="flex items-center" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="You can type here..."
                  className="input input-bordered w-full max-w-xs mr-2"
                  value={userInput}
                  onChange={handleInputChange}
                />
                <button className="btn btn-neutral">Prompt</button>
              </form>
            </div>
            <div className="border-l-[1px] -my-2"></div>
            <div className="w-1/3 h-full flex flex-col gap-4 justify-center items-center">
              <h3 className="text-lg ml-3">Exercises</h3>
              <Exercises exercises={exercises} />
            </div>
          </div>
        </main>
        <div className="relative">
          <VoiceAI
            patientID={patientID}
            practitionerID={practitionerID}
            updateUserMessage={updateUserMessage}
            updateGptResponse={updateGptResponse}
          />
        </div>
        {/* TODO: finish button that calls conversation/end */}
      </div>
    </div>
  );
};

export default PatientHome;
