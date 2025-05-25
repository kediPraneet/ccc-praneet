import React, { useState } from "react";
import "./Ransomware.css"; // Ensure you have this CSS file for styling
import { Link } from "react-router-dom";

const Ransomware = () => {
  const [step, setStep] = useState(0);

  const steps = [
    "🔒 Identify the ransomware type and isolate the infected device.",
    "📩 Disconnect from the network to prevent spreading.",
    "💾 Restore from backup if available.",
    "🔍 Check for decryption tools from security providers.",
    "🛡️ Strengthen security to prevent future attacks.",
  ];

  return (
    <div className="ransomware-container">
      <h1 className="text-3xl text-center mb-6">
        <span className="text-orange-600">RANSOMWARE</span> RESPONSE FLOWCHART
      </h1>

      {steps.slice(0, step + 1).map((text, index) => (
        <div key={index}>
          <div className="step-box">
            <p className="flow-text">{text}</p>
          </div>
          {index < step && <div className="arrow">↓</div>}
        </div>
      ))}

      {step < steps.length - 1 ? (
        <button className="next-button" onClick={() => setStep(step + 1)}>
          Next
        </button>
      ) : (
        <button className="restart-button" onClick={() => setStep(0)}>
          Restart
        </button>
      )}

      <div className="mt-10">
        <Link to="/" className="text-orange-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Ransomware;