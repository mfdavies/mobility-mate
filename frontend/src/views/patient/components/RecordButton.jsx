import { useState } from "react";
import axios from "axios";

const RecordButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isConvoStarted, setIsConvoStarted] = useState(false);

  const startRecording = async () => {
    // FIXME: use actual IDs for people here
    const queryParams = new URLSearchParams();
    queryParams.set("patient", "demo");
    queryParams.set("practitioner", "demo");

    if (!isConvoStarted) {
      const response = await axios.get(
        `http://localhost:8080/conversation/start?${queryParams.toString()}`
      );
      setIsConvoStarted(true);
      // TODO: speak/display the AI response here
      console.log(response.data.reply);
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
      const audioBlob = new Blob(chunks, { type: "audio/wav" });

      // Create a FormData object and append the audio file
      const formData = new FormData();
      formData.append("audioFile", audioBlob, "recorded_audio.wav");

      // Send the FormData to the server using a fetch or XMLHttpRequest
      const response = await axios.post(
        `http://localhost:8080/conversation/send_message?${queryParams.toString()}`,
        formData
      );

      // TODO: speak/display the AI response here
      console.log(response.data.reply);
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
  return (
    <div>
      {isRecording ? (
        <p>Recording...</p>
      ) : (
        <p>Click Start Recording to begin recording.</p>
      )}

      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export default RecordButton;
