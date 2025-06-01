import React, { useState } from "react";
import "./F2.css";

const F2 = ({ onClose }) => (
  <div className="f2-flowchart-overlay">
    <div className="f2-flowchart-container">
      <button className="f2-close-btn" onClick={onClose}>×</button>
      <div className="f2-title">Architecture & Design Flow</div>
      <div className="f2-flowchart-layout">
        {/* Top: Architecture & Design */}
        <div className="f2-row f2-row-1">
          <div className="f2-box f2-arch-design">Architecture & Design</div>
        </div>
        {/* Second row: Storage & Hardware, Log Baselines */}
        <div className="f2-row f2-row-2">
          <div className="f2-box f2-storage">
            <b>Storage & Hardware Requirements</b>
            <ul>
              <li>Retention Period</li>
              <li>Data Volume Estimation</li>
              <li>Hardware Sizing</li>
              <li>Redundancy &amp; Failover</li>
              <li>Security Control &amp; Governance</li>
            </ul>
          </div>
          <div className="f2-box f2-log-baselines">
            <b>Log Baselines</b>
            <ul>
              <li>Data Collection</li>
              <li>Normalization</li>
              <li>Analysis Phase</li>
              <li>Baseline Creation</li>
            </ul>
          </div>
        </div>
        {/* Third row: Mapping & Feedback, Additional Logs Integration */}
        <div className="f2-row f2-row-3">
          <div className="f2-box f2-mapping">Mapping &amp; Feedback Loops</div>
          <div className="f2-box f2-additional-logs">
            <b>Additional Logs Integration</b>
            <ul>
              <li>Source Identification</li>
              <li>Connector Setup</li>
              <li>Use Case Mapping</li>
              <li>Test &amp; Validation</li>
            </ul>
          </div>
        </div>
        {/* Fourth row: Automation Tools & SIEM Integration */}
        <div className="f2-row f2-row-4">
          <div className="f2-box f2-automation">Automation Tools &amp; SIEM Integration</div>
        </div>
        {/* Fifth row: Automation Log SIEM Integration */}
        <div className="f2-row f2-row-5">
          <div className="f2-box f2-automation-log">Automation Log SIEM Integration</div>
        </div>
        {/* SVG Arrows/Lines */}
        <svg className="f2-arrows" width="100%" height="100%">
          {/* Down from Architecture & Design to Storage & Hardware */}
          <line x1="50%" y1="60" x2="25%" y2="140" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Architecture & Design to Log Baselines */}
          <line x1="50%" y1="60" x2="75%" y2="140" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Storage & Hardware to Mapping & Feedback Loops */}
          <line x1="25%" y1="220" x2="25%" y2="300" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Log Baselines to Additional Logs Integration */}
          <line x1="75%" y1="220" x2="75%" y2="300" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Right from Storage & Hardware to Additional Logs Integration */}
          <line x1="35%" y1="180" x2="65%" y2="180" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Mapping & Feedback Loops to Automation Tools & SIEM Integration */}
          <line x1="25%" y1="380" x2="50%" y2="460" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Left from Additional Logs Integration to Automation Tools & SIEM Integration */}
          <line x1="75%" y1="380" x2="50%" y2="460" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Automation Tools & SIEM Integration to Automation Log SIEM Integration */}
          <line x1="50%" y1="540" x2="50%" y2="620" stroke="#ffce00" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <polygon points="0,0 8,4 0,8" fill="#ffce00"/>
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

export default F2;
