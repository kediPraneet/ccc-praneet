import React from "react";
import { FaBrain, FaUser, FaTimes } from "react-icons/fa";
import "./CIAPFlowChart.css";

export default function CIAPFlowChart({ onClose }) {
  return (
    <div className="ciap-flowchart-overlay">
      <div className="ciap-flowchart-container">
        {/* Close Button */}
        <button className="flowchart-close-btn" onClick={onClose}>×</button>
        
        {/* Main Flowchart Content */}
        <div className="flowchart-layout">
          
          {/* Log Sources */}
          <div className="log-sources-section">
            <div className="log-sources">
              <h3>Log Sources</h3>
              <div className="sources-grid">
                <div className="source-item">WAF</div>
                <div className="source-item">IDS</div>
                <div className="source-item">EDR</div>
                <div className="source-item">IPS</div>
                <div className="source-item">Server logs</div>
                <div className="source-item">Anti-Phishing</div>
                <div className="source-item">Threat Intel</div>
                <div className="source-item">Use Cases</div>
                <div className="source-item">Firewall Logs</div>
              </div>
            </div>
          </div>

          {/* Arrow 1: Log Sources to SIEM */}
          <div className="flow-arrow arrow-1">
            <span className="arrow-right">→</span>
          </div>

          {/* SIEM Section */}
          <div className="siem-section">
            <div className="siem-box">
              <div className="siem-icon">[SIEM IMAGE]</div>
              <div className="step-number">1</div>
              <div className="step-description">It collects logs and generate alert.</div>
            </div>
          </div>

          {/* Arrow 2: SIEM to CIAP */}
          <div className="flow-arrow arrow-2">
            <span className="arrow-right">→</span>
          </div>

          {/* CIAP Section */}
          <div className="ciap-section">
            <div className="ciap-circle">
              <div className="ciap-title">CIAP</div>
              <div className="step-number">2</div>
              <div className="step-description">Carries out initial triage based on Usecase SOP</div>
            </div>
          </div>

          {/* Arrow 3: CIAP to Brain */}
          <div className="flow-arrow arrow-3">
            <span className="arrow-right">→</span>
          </div>

          {/* Brain Section */}
          <div className="brain-section">
            <div className="brain-icon-container">
              <FaBrain className="brain-icon" />
              <div className="step-number">3</div>
              <div className="categorization-text">Categorizes the alerts into three categories</div>
            </div>
          </div>

          {/* Alert Categories */}
          <div className="alert-categories-section">
            <div className="alert-category category-1">Deep dive alerts</div>
            <div className="alert-category category-2">One Click Notification</div>
            <div className="alert-category category-3">End to End Automated Notification with or without triage</div>
          </div>

          {/* Close Alert Section */}
          <div className="close-alert-section">
            <div className="close-alert-box">
              <FaTimes className="close-icon" />
              <div className="close-title">Close Alert</div>
              <div className="step-number">4</div>
              <div className="step-description">Upon analysis if the alert turns out false positive then the alert is closed.</div>
            </div>
          </div>

          {/* Client ITSM Section */}
          <div className="itsm-section">
            <div className="itsm-box">
              <FaUser className="itsm-icon" />
              <div className="itsm-title">Client ITSM Platform</div>
              <div className="step-number">5</div>
              <div className="step-description">Incident is notified through client ITSM platform</div>
              <div className="itsm-subtitle">IT Service Management</div>
            </div>
          </div>

        </div>

        {/* CSS-based connection lines */}
        <div className="connection-lines">
          {/* Brain to Alert Categories - 3 horizontal lines */}
          <div className="line brain-to-alert1"></div>
          <div className="line brain-to-alert2"></div>
          <div className="line brain-to-alert3"></div>
          
          {/* Alert Categories to Close Alert */}
          <div className="line alert1-to-close-h"></div>
          <div className="line alert2-to-close-h"></div>
          <div className="line alerts-to-close-v"></div>
          <div className="line to-close-final"></div>
          
          {/* Alert Categories to ITSM */}
          <div className="line alert2-to-itsm-h"></div>
          <div className="line alert3-to-itsm-h"></div>
          <div className="line alerts-to-itsm-v"></div>
          <div className="line to-itsm-final"></div>
          
          {/* Arrows */}
          <div className="arrow arrow-close"></div>
          <div className="arrow arrow-itsm"></div>
        </div>
      </div>
    </div>
  );
}
