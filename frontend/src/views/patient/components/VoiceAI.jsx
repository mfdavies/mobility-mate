import { useState, useEffect, useRef } from "react";
import axios from "axios";
import apiUrl from "../../../config";
import gsap from "gsap";
import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const VoiceAI = ({ updateUserMessage, updateGptResponse }) => {
  const sphere = useRef();
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [speechRecognition, setSpeechRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      let accumulatedTranscript = "";

      recognition.onresult = (event) => {
        accumulatedTranscript = "";
        for (let i = 0; i < event.results.length; i++) {
          accumulatedTranscript += event.results[i][0].transcript.trim() + " ";
        }
        updateUserMessage(accumulatedTranscript);
      };

      setSpeechRecognition(recognition);
    } else {
      console.warn("Speech recognition not supported in this browser.");
    }
  }, [updateUserMessage]);

  const startRecording = async () => {
    const queryParams = new URLSearchParams({
      patient: "demo",
      practitioner: "demo",
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
      const audioBlob = new Blob(chunks, { type: "audio/wav" });
      const formData = new FormData();
      formData.append("audioFile", audioBlob, "recorded_audio.wav");

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
    spline.setZoom(0.1);
    const obj = spline.findObjectById("f5f3b334-53b6-4337-8497-c6815ba02c98");
    sphere.current = obj;
  }

  const triggerStart = () => {
    startRecording();
    console.log(sphere.current.scale);
    gsap.to(sphere.current.scale, {
      duration: 3,
      x: 1.5,
      y: 1.5,
      z: 1.5,
      ease: "power3.out",
    });
  };

  const triggerEnd = () => {
    stopRecording();
    gsap.to(sphere.current.scale, {
      duration: 2,
      x: 1,
      y: 1,
      z: 1,
      ease: "power3.out",
    });
  };

  return (
    <div>
      <button
        onClick={isRecording ? triggerEnd : triggerStart}
        className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-44 h-44"
      >
        {/* <div
          className={`${
            isRecording ? 'animate-ping' : ''
          } w-28 h-28 bg-baby-blue rounded-full`}
        ></div> */}
        <Suspense fallback={<div className="skeleton h-44 w-44"></div>}>
          {/* <Spline
            className="bg-transparent"
            onLoad={onLoad}
            scene="https://prod.spline.design/NSKDknA0gocVDcZ9/scene.splinecode"
          /> */}
          {/* <Spline scene="https://prod.spline.design/NSKDknA0gocVDcZ9/scene.splinecode" /> */}
          <Spline
            className="bg-transparent"
            onLoad={onLoad}
            scene="https://prod.spline.design/Omn4EqepHAUv5XKP/scene.splinecode"
          />
        </Suspense>
      </button>
    </div>
  );
};

export default VoiceAI;
