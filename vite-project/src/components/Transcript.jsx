import { useState } from "react";

export default function TranscriptStatus() {
  const [status, setStatus] = useState("not_requested");
  const [showSubjectPopup, setShowSubjectPopup] = useState(false);
  const [subject, setSubject] = useState("");

  const [showStatusBox, setShowStatusBox] = useState(false);
  const [showDownloadBox, setShowDownloadBox] = useState(false);

  // When clicking "Request Transcript" button
  const openSubjectPopup = () => {
    if (status !== "not_requested") return; // prevent multiple requests
    setShowSubjectPopup(true);
  };

  // Submit the subject
  const submitSubject = () => {
    if (!subject.trim()) {
      alert("Please enter a subject!");
      return;
    }
    setStatus("pending");
    setShowSubjectPopup(false);
    alert("Transcript request submitted!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Transcript Section</h2>

      {/* ===== Request Transcript (only once) ===== */}
      <button
        onClick={openSubjectPopup}
        disabled={status !== "not_requested"}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          background: status === "not_requested" ? "#007bff" : "gray",
          color: "white",
          cursor: status === "not_requested" ? "pointer" : "not-allowed"
        }}
      >
        Request Transcript
      </button>

      {/* ===== Status Button ===== */}
      <button
        onClick={() => setShowStatusBox(!showStatusBox)}
        style={{ padding: "10px 20px", marginRight: "10px" }}
      >
        Status
      </button>

      {/* ===== Download Button ===== */}
      <button
        onClick={() => setShowDownloadBox(!showDownloadBox)}
        style={{ padding: "10px 20px" }}
      >
        Download
      </button>

      {/* ===== SUBJECT POPUP ===== */}
      {showSubjectPopup && (
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            width: "350px"
          }}
        >
          <h3>Enter Letter Subject</h3>
          <input
            type="text"
            placeholder="Enter subject..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

          <br />
          <button
            onClick={submitSubject}
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "10px",
              background: "green",
              color: "white",
              borderRadius: "6px"
            }}
          >
            Submit Request
          </button>

          <button
            onClick={() => setShowSubjectPopup(false)}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "10px",
              background: "red",
              color: "white",
              borderRadius: "6px"
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* ===== STATUS BOX ===== */}
      {showStatusBox && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#eef5ff",
            borderRadius: "10px",
            width: "300px"
          }}
        >
          <h4>Status:</h4>
          {status === "not_requested" && <p>❌ No request found</p>}
          {status === "pending" && <p>⏳ Transcript Requested — Pending Approval</p>}
          {status === "approved" && <p>✅ Transcript Approved</p>}
        </div>
      )}

      {/* ===== DOWNLOAD BOX ===== */}
      {showDownloadBox && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#e9ffe9",
            borderRadius: "10px",
            width: "300px"
          }}
        >
          <h4>Download:</h4>
          {status === "approved" ? (
            <a
              href="/transcript.pdf"
              download
              style={{
                padding: "10px",
                background: "green",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px"
              }}
            >
              Download Transcript
            </a>
          ) : (
            <p>❌ Transcript not approved yet</p>
          )}
        </div>
      )}
    </div>
  );
}
