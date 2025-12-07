import { useState } from "react";

export default function Transcript() {
  const [status, setStatus] = useState("No requests yet");

  const handleRequest = () => setStatus("Transcript requested");

  return (
    <div>
      <h2>Transcript</h2>
      <p>Status: {status}</p>
      <button onClick={handleRequest}>Request Transcript</button>
    </div>
  );
}
