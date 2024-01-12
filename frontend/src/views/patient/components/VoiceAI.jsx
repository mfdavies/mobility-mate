import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import apiUrl from '../../../config';
import gsap from 'gsap';
import { Mic, AudioLines } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const VoiceAI = ({
  patientID,
  practitionerID,
  updateUserMessage,
  updateGptResponse,
}) => {
  const sphere = useRef();
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
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
      console.warn('Speech recognition not supported in this browser.');
    }
  }, [updateUserMessage]);

  const startRecording = async () => {
    const queryParams = new URLSearchParams({
      patient: patientID,
      practitioner: practitionerID,
    });

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
        `${apiUrl}/conversation/send_message?${queryParams.toString()}`,
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
    const obj = spline.findObjectById('03141e7a-30b4-4f13-ba4b-2db4af29b67f');
    sphere.current = obj;
    if (sphere.current) {
      setIsModelLoaded(true);
    }
  }

  const triggerStart = () => {
    startRecording();
    console.log(sphere.current.scale);
    gsap.to(sphere.current.scale, {
      duration: 3,
      x: 1.3,
      y: 1.3,
      z: 1.3,
      ease: 'power3.out',
    });
  };

  const triggerEnd = () => {
    stopRecording();
    gsap.to(sphere.current.scale, {
      duration: 2,
      x: 1,
      y: 1,
      z: 1,
      ease: 'power3.out',
    });
  };

  return (
    <>
      {!isModelLoaded && <div className="skeleton h-[500px] w-[500px]"></div>}
      <div
        className={`${
          isModelLoaded ? 'visible' : 'hidden'
        } bg-transparent h-[500px] w-[500px]`}
      >
        <Spline
          className="bg-transparent mt-3"
          onLoad={onLoad}
          // scene="https://prod.spline.design/Omn4EqepHAUv5XKP/scene.splinecode"
          scene="https://prod.spline.design/9r7siidIpuP9UpJY/scene.splinecode"
        />
      </div>
      <button
        className="flex btn btn-glass w-44"
        onClick={isRecording ? triggerEnd : triggerStart}
      >
        {!isRecording && (
          <>
            <Mic size={18} /> Begin talking...
          </>
        )}
        {isRecording && (
          <>
            <span className="loading loading-ring loading-sm"></span>Listening...
          </>
        )}
      </button>
    </>
  );
};

export default VoiceAI;
