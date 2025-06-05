import React from 'react';
import './DataFlow.css';

const DataFlow = () => {
  return (
    <div className="dataflow-container">
      {/* Header */}
      <div className="header-box">
        <strong>Cyber Command & Control Centre (CCCC)</strong><br />
        Executive Security Intelligence Briefings, Monitoring/Correlation Rule Design, OPCO Regulatory Security Oversight, Consolidated Monitoring/Security Metrics, Governance, Local/Regulatory Intel, Briefings
      </div>

      {/* Main Flow Container */}
      <div className="flow-container">
        {/* Flow paths */}
        <div className="flow-path path-horizontal-main"></div>
        <div className="flow-path path-horizontal-to-alerts"></div>
        <div className="flow-path path-horizontal-to-notification"></div>
        <div className="flow-path path-horizontal-to-automated"></div>
        <div className="flow-path path-vertical-connector"></div>

        {/* Flow labels with steps */}
        <div className="flow-label label-1">1. It collects logs and generate alert</div>
        <div className="flow-label label-2">2. Carries out initial triage based on Usecase SOP</div>
        <div className="flow-label label-3">3. Categorizes the alerts into three categories</div>
        <div className="flow-label label-4">4. Upon analysis if the alert turns out false positive then the alert is closed</div>
        <div className="flow-label label-5">5. Incident is notified through client ITSM platform</div>

        {/* Animated data particles */}
        <div className="data-particle main" style={{animationDelay: '0s'}}></div>
        <div className="data-particle main" style={{animationDelay: '2s'}}></div>
        <div className="data-particle to-alerts" style={{animationDelay: '1s'}}></div>
        <div className="data-particle to-notification" style={{animationDelay: '1.5s'}}></div>
        <div className="data-particle to-automated" style={{animationDelay: '2s'}}></div>

        {/* Pulse circles */}
        <div className="pulse-circle main" style={{animationDelay: '0s'}}></div>
        <div className="pulse-circle to-alerts" style={{animationDelay: '1s'}}></div>
        <div className="pulse-circle to-notification" style={{animationDelay: '1.5s'}}></div>
        <div className="pulse-circle to-automated" style={{animationDelay: '2s'}}></div>

        {/* Left section - Log Sources */}
{/* Left section - Log Sources */}
        <div className="log-sources-section">
          <h3 className="section-title">Log Sources</h3>
          <div className="log-sources-grid">
            <div className="log-source">
              <div className="glow-effect"></div>
              WAF
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              IDS
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              EDR
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              IPS
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              Server logs
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              Anti-Phishing
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              Threat Intel
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              Use Cases
            </div>
            <div className="log-source">
              <div className="glow-effect"></div>
              Firewall Logs
            </div>
          </div>
        </div>

        {/* SIEM */}
        <div className="siem-node">
          <div className="siem-display">
            <div className="siem-screen"></div>
          </div>
          <div className="siem-label">SIEM</div>
        </div>

        {/* Center - CIAP */}
        <div className="ciap-node">
          <div className="ciap-circle">
            <span className="ciap-text">CIAP</span>
          </div>
          <div className="ai-brain">
            <svg viewBox="0 0 24 24" fill="none" className="brain-icon">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
              <path d="M21 9C21 10.1 20.1 11 19 11C17.9 11 17 10.1 17 9C17 7.9 17.9 7 19 7C20.1 7 21 7.9 21 9Z" fill="currentColor"/>
              <path d="M7 9C7 10.1 6.1 11 5 11C3.9 11 3 10.1 3 9C3 7.9 3.9 7 5 7C6.1 7 7 7.9 7 9Z" fill="currentColor"/>
              <path d="M12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Right section - Alert Categories */}
        <div className="alert-categories">
          <div className="alert-category deep-dive">
            <span className="category-label">Deep dive alerts</span>
          </div>
          <div className="alert-category one-click">
            <span className="category-label">One Click Notification</span>
          </div>
          <div className="alert-category automated">
            <span className="category-label">End to End Automated Notification with or without triage</span>
          </div>
        </div>

        {/* Analyst Icon */}
        <div className="analyst-section">
          <div className="analyst-icon">
            <svg viewBox="0 0 24 24" fill="none" className="person-icon">
              <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Close Alert */}
        <div className="close-alert-section">
          <div className="close-icon">
            <svg viewBox="0 0 24 24" fill="none" className="x-icon">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2"/>
              <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span className="close-label">Close Alert</span>
        </div>

        {/* Client ITSM */}
        <div className="client-itsm-section">
          <div className="itsm-platform">
            <div className="itsm-icon">
              <svg viewBox="0 0 24 24" fill="none" className="platform-icon">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9h6v6H9z" fill="currentColor"/>
              </svg>
            </div>
            <div className="itsm-text">
              <div className="itsm-title">Client ITSM Platform</div>
              <div className="itsm-subtitle">IT Service Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFlow;