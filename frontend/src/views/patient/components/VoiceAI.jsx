import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const VoiceAI = ({ updateUserMessage, updateGptResponse }) => {
  const sphere = useRef();
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [speechRecognition, setSpeechRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      let accumulatedTranscript = '';

      recognition.onresult = (event) => {
        accumulatedTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          accumulatedTranscript += event.results[i][0].transcript.trim() + ' ';
        }
        updateUserMessage(accumulatedTranscript);
      };

      setSpeechRecognition(recognition);
    } else {
      console.warn("Speech recognition not supported in this browser.");
    }
  }, [updateUserMessage]);

  const startRecording = async () => {
    const queryParams = new URLSearchParams({ patient: 'demo', practitioner: 'demo' });

    // Start recording audio
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onstop = async () => {
      updateGptResponse(null);
      // Process and send the audio data to the server for transcription
      const audioBlob = new Blob(chunks, { type: 'audio/wav' });
      const formData = new FormData();
      formData.append('audioFile', audioBlob, 'recorded_audio.wav');

      const response = await axios.post(
        `http://localhost:8080/conversation/send_message?${queryParams.toString()}`,
        formData
      );
      updateGptResponse(response.data.reply);
    };

    recorder.start();
    setMediaStream(stream);
    setMediaRecorder(recorder);
    speechRecognition?.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaStream) {
      mediaRecorder.stop();
      mediaStream.getTracks().forEach((track) => track.stop());
    }
    speechRecognition?.stop();
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
      <button
        onClick={isRecording ? triggerEnd : triggerStart}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            {/* <div className='w-28 h-28 bg-baby-blue rounded-full'></div> */}
            <div className={`${isRecording ? 'animate-ping' : ''} w-28 h-28 bg-baby-blue rounded-full`}></div>

        {/* <Spline
            className="bg-white"
            onLoad={onLoad}
            scene="https://prod.spline.design/NSKDknA0gocVDcZ9/scene.splinecode" /> */}
      </button>
    </div>
  );
};

export default VoiceAI;
