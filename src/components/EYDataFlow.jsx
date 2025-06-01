import React, { useState } from "react";
import './EYDataFlow.css';
import F1 from "./F1"; // adjust path if needed
import F2 from "./F2"; // adjust path if needed
import F3 from "./F3"; // adjust path if needed

const EYDataFlow = () => {
  const horizontalOffset = 40;
  const [showFlowchart, setShowFlowchart] = useState(false);
  const [showF2, setShowF2] = useState(false);
  const [showF3, setShowF3] = useState(false);

  return (
    <div className="hero-container">
      <h2
        className="text-3xl font-bold mb-6"
        style={{ transform: "translateX(240px)", textAlign: "left" }}
      >
        <span className="text-white">Cognitive </span>
        <span className="text-orange-500">Cybersecurity Centre</span>
        <span className="text-white"> – SOC Workflow</span>
      </h2>
      <div className="ey-flow-border-box">
        {/* Header */}
        <div className="header-box">
          <strong>Cyber Command & Control Centre (CCCC)</strong><br />
          Executive Security Intelligence Briefings, Monitoring/Correlation Rule Design, OPCO Regulatory Security Oversight, Consolidated Monitoring/Security Metrics, Governance, Local/Regulatory Intel, Briefings
        </div>
        
        <div className="flow-container">
          {/* Flow paths */}
          <div className="flow-path path-horizontal-main"></div>
          <div className="flow-path path-horizontal-to-soc"></div>
          <div className="flow-path path-horizontal-to-itsm"></div>
          <div className="flow-path path-horizontal-to-client"></div>
          <div className="flow-path path-vertical-connector"></div>
          <div className="flow-path path-vertical-connector2"></div>
          <div className="flow-path path-vertical-connector_SIEM"></div>
          
          {/* Connection arrows */}
          <svg className="connection-arrow main" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 6L19 12L13 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <svg className="connection-arrow to-soc" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 6L19 12L13 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <svg className="connection-arrow to-itsm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 6L19 12L13 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <svg className="connection-arrow to-client" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 6L19 12L13 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <svg className="connection-arrow to-SIEM" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 6L19 12L13 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          {/* Left column - EY Analyst */}
          <div className="left-column node-column">
            <div
              className="flow-node"
              onClick={() => setShowFlowchart(true)}
              style={{ cursor: "pointer" }}
              title="Click to view EY Analyst flowchart"
            >
              <div className="glow-effect"></div>
              <svg className="node-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#FF5400" strokeWidth="1.5"/>
                <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="#FF5400" strokeWidth="1.5"/>
                <path d="M15 8H9" stroke="#FFFFFF" strokeWidth="1.5"/>
              </svg>
              <h3 className="node-title">EY Analyst</h3>
              <p className="node-description">Expert-led security teams providing threat identification and initial assessment</p>
              <div className="node-hover-info">
                Skilled security professionals who monitor, analyze and respond to potential threats in real-time
                <div className="highlight-effect"></div>
              </div>
            </div>
          </div>
          
          {/* Center column - CIAP */}
          <div className="center-column">
            <div className="flow-node central">
              <div className="glow-effect"></div>
              <svg className="node-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="12" rx="2" stroke="#FF5400" strokeWidth="1.5"/>
                <path d="M3 10H21" stroke="#FFFFFF" strokeWidth="1.5"/>
                <path d="M7 14H12" stroke="#FFFFFF" strokeWidth="1.5"/>
                <path d="M7 17H16" stroke="#FFFFFF" strokeWidth="1.5"/>
              </svg>
              <h3 className="node-title">CIAP</h3>
              <p className="node-description">Cyber Incident Assessment Platform for analyzing security events</p>
              <div className="node-hover-info">
                Advanced intelligence platform that processes and categorizes incidents using real-time threat data
                <div className="highlight-effect"></div>
              </div>
            </div>
          </div>
          
          {/* Right column - Output systems */}
          <div className="right-column">
            <div className="flow-node">
              <div className="glow-effect"></div>
              <svg className="node-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#FF5400" strokeWidth="1.5"/>
                <path d="M12 22V12" stroke="#FFFFFF" strokeWidth="1.5"/>
                <path d="M20 7L12 12L4 7" stroke="#FFFFFF" strokeWidth="1.5"/>
              </svg>
              <div className="node-text-container">
                <h3 className="node-title">SOC Portal</h3>
                <p className="node-description">Security Operations Center interface for incident management</p>
              </div>
              <div className="node-hover-info">
                Centralized command center where threat intelligence is transformed into resolution strategies
                <div className="highlight-effect"></div>
              </div>
            </div>
            
            <div className="flow-node">
              <div className="glow-effect"></div>
              <svg className="node-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="18" rx="2" stroke="#FF5400" strokeWidth="1.5"/>
                <path d="M8 10H16" stroke="#FFFFFF" strokeWidth="1.5"/>
                <path d="M8 14H13" stroke="#FFFFFF" strokeWidth="1.5"/>
                <path d="M2 7H22" stroke="#FF5400" strokeWidth="1.5"/>
              </svg>
              <div className="node-text-container">
                <h3 className="node-title">EY ITSM Dashboard</h3>
                <p className="node-description">Internal tracking system for service delivery and tickets</p>
              </div>
              <div className="node-hover-info">
                Tracks security incidents through resolution with status monitoring and resource allocation
                <div className="highlight-effect"></div>
              </div>
            </div>
            
            <div className="flow-node">
              <div className="glow-effect"></div>
              <svg className="node-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9" stroke="#FF5400" strokeWidth="1.5"/>
                <path d="M13 2V9H20" stroke="#FF5400" strokeWidth="1.5"/>
                <path d="M8 13H16" stroke="#FFFFFF" strokeWidth="1.5"/>
                <path d="M8 17H13" stroke="#FFFFFF" strokeWidth="1.5"/>
              </svg>
              <div className="node-text-container">
                <h3 className="node-title">Client ITSM</h3>
                <p className="node-description">Client-facing ticketing for transparent communication</p>
              </div>
              <div className="node-hover-info">
                Enables clients to monitor security incidents in their environment with appropriate transparency
                <div className="highlight-effect"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Engineering Section */}
        <div className="engineering-section">
          <div className="siem-label">SIEM</div>
          <div className="engineering-header">Engineering / Transition / Project Management / Data Scientists</div>
          <div className="engineering-boxes">
            <div
              className="engineering-box"
              onClick={() => setShowF2(true)}
              style={{ cursor: "pointer" }}
            >
              Architecture & Design
            </div>
            <div className="engineering-box">
              <div className="glow-effect"></div>
              Implementation
            </div>
            <div
              className="engineering-box"
              onClick={() => setShowF3(true)}
              style={{ cursor: "pointer" }}
            >
              Usecase Management
            </div>
          </div>
        </div>

        {/* Data Sources Section */}
        <div className="data-sources-section">
          <h2 className="data-sources-title">Data Sources</h2>
          <div className="data-sources-grid">
            <div className="data-source-item">Analytics / ML / ATDS / AI</div>
            <div className="data-source-item">Collaboration</div>
            <div className="data-source-item">Forensics</div>
            <div className="data-source-item">Firewall Logs</div>
            <div className="data-source-item">IDS/IPS</div>
            <div className="data-source-item">WAF</div>
            <div className="data-source-item">Anti Phishing</div>
            <div className="data-source-item">UCL</div>
            <div className="data-source-item">TIP</div>
            <div className="data-source-item">Server Logs</div>
            <div className="data-source-item">EDR</div>
            <div className="data-source-item">Usecases</div>
          </div>
        </div>
      </div>

      {/* Conditionally render the flowchart */}
      {showFlowchart && <F1 onClose={() => setShowFlowchart(false)} />}

      {/* Show the modal when showF2 is true */}
      {showF2 && <F2 onClose={() => setShowF2(false)} />}

      {showF3 && <F3 onClose={() => setShowF3(false)} />}
    </div>
  );
};

export default EYDataFlow;