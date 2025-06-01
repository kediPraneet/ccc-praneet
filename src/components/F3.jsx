import React from "react";
import "./F3.css";

const F3 = ({ onClose }) => (
  <div className="f3-flowchart-overlay">
    <div className="f3-flowchart-container">
      <button className="f3-close-btn" onClick={onClose}>×</button>
      <div className="f3-title">Usecase Management Flow</div>
      <div className="f3-flowchart-layout">
        {/* Top: Use Case Identification */}
        <div className="f3-row f3-row-1">
          <div className="f3-box f3-usecase-id">
            <b>Use Case Identification</b>
            <ul>
              <li>Threat Research</li>
              <li>Compliance Needs</li>
              <li>Business Objectives</li>
              <li>Initial Scoping</li>
            </ul>
          </div>
        </div>
        {/* Second row: Stakeholder Validation */}
        <div className="f3-row f3-row-2">
          <div className="f3-box f3-stakeholder">
            <b>Stakeholder Validation</b>
            <ul>
              <li>Legal &amp; Compliance</li>
              <li>SOC Leadership Approval</li>
            </ul>
          </div>
        </div>
        {/* Third row: Use Case Development (left), Incident Response Feedback (right) */}
        <div className="f3-row f3-row-3">
          <div className="f3-box f3-usecase-dev">
            <b>Use Case Development</b>
            <ul>
              <li>Data Source Mapping</li>
              <li>Correlation Rules</li>
              <li>Detection Logic</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="f3-box f3-incident-feedback">
            <b>Incident Response Feedback</b>
          </div>
        </div>
        {/* Fourth row: Testing & Deployment (left), Refinement & Optimization (right) */}
        <div className="f3-row f3-row-4">
          <div className="f3-box f3-testing">
            <b>Testing &amp; Deployment</b>
            <ul>
              <li>Integration Testing</li>
              <li>Performance Tuning</li>
              <li>Piolet Development</li>
              <li>Production Rollout</li>
            </ul>
          </div>
          <div className="f3-box f3-refinement">
            <b>Refinement &amp; Optimization</b>
            <ul>
              <li>Tuning of Rules</li>
              <li>Reduction of False Positives</li>
              <li>Adaptation to Threats</li>
            </ul>
          </div>
        </div>
        {/* SVG Arrows/Lines */}
        <svg className="f3-arrows" width="100%" height="100%">
          {/* Down from Use Case Identification to Stakeholder Validation */}
          <line x1="50%" y1="70" x2="50%" y2="150" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Stakeholder Validation to Use Case Development */}
          <line x1="50%" y1="230" x2="28%" y2="320" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Right from Use Case Development to Incident Response Feedback */}
          <line x1="38%" y1="370" x2="72%" y2="370" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Incident Response Feedback to Refinement & Optimization */}
          <line x1="80%" y1="420" x2="80%" y2="520" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Down from Use Case Development to Testing & Deployment */}
          <line x1="28%" y1="420" x2="28%" y2="520" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Right from Testing & Deployment to Refinement & Optimization */}
          <line x1="38%" y1="570" x2="72%" y2="570" stroke="#222" strokeWidth="2" markerEnd="url(#arrowhead)" />
          {/* Feedback loop: Left from Refinement & Optimization to Use Case Development */}
          <path d="M 88% 570 Q 95% 370 72% 370" stroke="#222" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <polygon points="0,0 8,4 0,8" fill="#222"/>
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

export default F3;
