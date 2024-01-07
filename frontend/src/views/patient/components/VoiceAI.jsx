import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import axios from 'axios';

const VoiceAI = ({ updateUserMessage, updateGptResponse }) => {
  const sphere = useRef();
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isConvoStarted, setIsConvoStarted] = useState(false);

  const userPromptRef = useRef("");

  const [speechRecognition, setSpeechRecognition] = useState(null);

//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       const recognition = new SpeechRecognition();
//       recognition.continuous = true;
//       recognition.interimResults = true;

//       recognition.onresult = (event) => {
//         const latestResult = event.results[event.resultIndex];
//         const latestTranscript = latestResult[0].transcript.trim();

//         if (latestResult.isFinal) {
//           userPromptRef.current += ` ${latestTranscript}`; // Update the ref for final results
//         }

//         console.log(latestTranscript); // Log each word as it is spoken
//       };

//       setSpeechRecognition(recognition);
//     } else {
//       console.warn("Speech recognition not supported in this browser.");
//     }
//   }, [updateUserPrompt]);

  const startRecording = async () => {
    // FIXME: use actual IDs for people here
    const queryParams = new URLSearchParams();
    queryParams.set('patient', 'demo');
    queryParams.set('practitioner', 'demo');

    if (!isConvoStarted) {
      const response = await axios.get(
        `http://localhost:8080/conversation/start?${queryParams.toString()}`
      );
      setIsConvoStarted(true);
      // TODO: speak/display the AI response here
      console.log(response.data.reply);
        // updateUserMessage(latestTranscript);

      userPromptRef.current = "";
      speechRecognition?.start();
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = []; // Array to store audio chunks

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onstop = async () => {
      // Combine all audio chunks into a single Blob
      const audioBlob = new Blob(chunks, { type: 'audio/wav' });

      // Create a FormData object and append the audio file
      const formData = new FormData();
      formData.append('audioFile', audioBlob, 'recorded_audio.wav');

      // Send the FormData to the server using a fetch or XMLHttpRequest
      const userMessage = await axios.post(
        `http://localhost:8080/conversation/transcribe`,
        formData
      );

      // update user message display
      updateUserMessage(userMessage.data.user_msg)
      console.log(userMessage)

      const gptResponse = await axios.post(
        `http://localhost:8080/conversation/send_message?${queryParams.toString()}`,
        {
            "message": userMessage.data.user_msg,
        }
      );

      // update 
      updateGptResponse(gptResponse.data.reply)

      // TODO: speak/display the AI response here
      speechRecognition?.stop();
    };

    recorder.start();

    setMediaStream(stream);
    setMediaRecorder(recorder);

    // Toggle recording state
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaStream) {
      mediaRecorder.stop();
      mediaStream.getTracks().forEach((track) => track.stop());
    }

    // Toggle recording state
    setIsRecording(false);
  };

  function onLoad(spline) {
    spline.setZoom(1);
    const obj = spline.findObjectById('ec9f2de1-4a48-4948-a32f-653838ab50ec');
    sphere.current = obj
  }

  const triggerStart = () => {
    startRecording();
    // sphere.current.emitEvent('start', 'Sphere');
  }

  const triggerEnd = () => {
    stopRecording();
    // sphere.current.emitEvent('mouseHover', 'Sphere');
  }

  return (
    <div>
      {isRecording ? (
        <p>Recording...</p>
      ) : (
        <p>Click Start Recording to begin recording.</p>
      )}
      <button
        onClick={isRecording ? triggerEnd : triggerStart}
        className="absolute bottom-8 left-1/2 w-32 h-32 transform -translate-x-1/2">
            {/* <div className='w-28 h-28 bg-baby-blue rounded-full'></div> */}
            <div className={`${isRecording ? 'animate-pulse' : ''} w-28 h-28 bg-baby-blue rounded-full`}></div>

        {/* <Spline
            className="bg-white"
            onLoad={onLoad}
            scene="https://prod.spline.design/NSKDknA0gocVDcZ9/scene.splinecode" /> */}
      </button>
    </div>
  );
};

export default VoiceAI;
