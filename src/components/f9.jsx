import React, { useState, useEffect, useRef } from 'react';
import "./f9.css";

const SOCDashboard = () => {
  const [activeNav, setActiveNav] = useState('Overview');
  const [metrics, setMetrics] = useState({
    eventsPerSecond: 1247,
    activeAlerts: 23,
    resolvedToday: 156
  });
  const [notifications, setNotifications] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: '' });
  const [showStatusIndicator, setShowStatusIndicator] = useState(false);
  const [statusInfo, setStatusInfo] = useState({});

  const neuralWebRef = useRef(null);

  // Data source descriptions
  const dataSourceDescriptions = {
    'WAF': 'Web Application Firewall monitors and filters HTTP traffic between web applications and the internet.',
    'EDR': 'Endpoint Detection and Response provides continuous monitoring and response to advanced threats.',
    'Server Logs': 'System logs from servers providing detailed activity and security event information.',
    'Threat Intel': 'Real-time threat intelligence feeds from global security research networks.',
    'Anti Phishing': 'Email security solution that detects and blocks phishing attempts and malicious attachments.',
    'Usecases': 'Predefined security use cases and detection rules for common attack patterns.',
    'IDS/IPS': 'Intrusion Detection/Prevention Systems that monitor network traffic for malicious activity.',
    'Firewall Logs': 'Network firewall logs containing connection attempts, blocks, and security events.'
  };

  // Initialize dashboard effects
  useEffect(() => {
    // Real-time metrics updates
    const metricsInterval = setInterval(() => {
      setMetrics({
        eventsPerSecond: Math.floor(Math.random() * 2000) + 800,
        activeAlerts: Math.floor(Math.random() * 50) + 10,
        resolvedToday: Math.floor(Math.random() * 200) + 150
      });
    }, 5000);

    // Neural connections animation
    const neuralInterval = setInterval(() => {
      if (neuralWebRef.current) {
        const pulse = document.createElement('div');
        pulse.className = 'neural-pulse';
        pulse.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffd700;
          border-radius: 50%;
          box-shadow: 0 0 15px #ffd700;
          top: ${Math.random() * 80 + 10}%;
          left: ${Math.random() * 80 + 10}%;
          animation: connectionPulse 1s ease-out forwards;
          pointer-events: none;
        `;
        neuralWebRef.current.appendChild(pulse);
        
        setTimeout(() => {
          if (pulse.parentNode) {
            pulse.parentNode.removeChild(pulse);
          }
        }, 1000);
      }
    }, 2000);

    // Flow particles
    const particleInterval = setInterval(() => {
      createFlowParticle();
    }, 3000);

    // Show welcome notification
    setTimeout(() => {
      showNotification('SOC Dashboard initialized - Real-time monitoring active');
    }, 1000);

    return () => {
      clearInterval(metricsInterval);
      clearInterval(neuralInterval);
      clearInterval(particleInterval);
    };
  }, []);

  const createFlowParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'flow-particle';
    const workflowSection = document.querySelector('.workflow-section');
    if (workflowSection) {
      workflowSection.appendChild(particle);
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 4000);
    }
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    showNotification(`${navItem} section selected`);
  };

  const handleSourceClick = (sourceName) => {
    const description = dataSourceDescriptions[sourceName] || 'Security monitoring component';
    setModalData({ title: sourceName, content: description });
    setShowModal(true);
  };

  const handleNodeClick = (nodeType) => {
    setSelectedNode(nodeType);
    animateDataFlow();
    
    const nodeInfo = getNodeInfo(nodeType);
    if (nodeInfo) {
      setStatusInfo(nodeInfo);
      setShowStatusIndicator(true);
      setTimeout(() => setShowStatusIndicator(false), 3000);
    }
  };

  const getNodeInfo = (nodeType) => {
    switch (nodeType) {
      case 'siem':
        return {
          title: 'SIEM Status',
          status: `Active - Processing ${metrics.eventsPerSecond} events/sec`,
          details: 'Current threat level: Medium'
        };
      case 'one-click':
        return {
          title: 'SOAR Automation',
          status: 'Ready - 23 rules active',
          details: `Analyst decision required for ${metrics.activeAlerts} alerts`
        };
      case 'deep-dive':
        return {
          title: 'Deep Analysis Queue',
          status: '7 alerts pending review',
          details: 'Average resolution time: 45 minutes'
        };
      default:
        return null;
    }
  };

  const animateDataFlow = () => {
    const flowIndicator = document.createElement('div');
    flowIndicator.className = 'flow-indicator';
    document.body.appendChild(flowIndicator);
    
    setTimeout(() => {
      if (flowIndicator.parentNode) {
        document.body.removeChild(flowIndicator);
      }
    }, 2000);
  };

  const showNotification = (message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData({ title: '', content: '' });
  };

  const dataSourceItems = [
    { icon: '🛡️', name: 'WAF', tooltip: 'Web Application Firewall' },
    { icon: '💻', name: 'EDR', tooltip: 'Endpoint Detection & Response' },
    { icon: '🗄️', name: 'Server Logs', tooltip: 'Server Activity Logs' },
    { icon: '🧠', name: 'Threat Intel', tooltip: 'Threat Intelligence Feeds' },
    { icon: '🎣', name: 'Anti Phishing', tooltip: 'Anti-Phishing Protection' },
    { icon: '📋', name: 'Usecases', tooltip: 'Security Use Cases' },
    { icon: '🔍', name: 'IDS/IPS', tooltip: 'Intrusion Detection/Prevention' },
    { icon: '🔥', name: 'Firewall Logs', tooltip: 'Firewall Security Logs' }
  ];

  return (
    <div className="soc-dashboard">
      {/* Animated Background */}
      <div className="animated-grid"></div>
      <div className="wireframe-cube">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="ey-logo">EY</div>
              <div className="logo-text">
                <h1>Cognitive Intelligence Analysis Platform</h1>
                <p>SOC Analysis Workflow</p>
              </div>
            </div>
            <nav className="navigation">
              {['Overview', 'Workflow', 'Platform', 'Contact'].map(item => (
                <button
                  key={item}
                  className={`nav-link ${activeNav === item ? 'active' : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h2 className="hero-title">EY SOC Analysis Workflow</h2>
              <p className="hero-subtitle">Real-time Security Operations Center Intelligence Platform</p>
            </div>
          </div>
        </section>

        {/* Metrics Display */}
        <div className="metrics-display">
          <div className="metric-item">
            📊 {metrics.eventsPerSecond} events/sec
          </div>
          <div className="metric-item">
            ⚠️ {metrics.activeAlerts} active alerts
          </div>
          <div className="metric-item">
            ✅ {metrics.resolvedToday} resolved today
          </div>
        </div>

        {/* Workflow Section */}
        <section className="workflow-section">
          <div className="container">
            {/* Step 1: Data Sources */}
            <div className="workflow-step">
              <div className="step-badge">Step 1</div>
              <div className="data-sources">
                <div className="source-grid">
                  {dataSourceItems.map((source, index) => (
                    <div
                      key={index}
                      className="source-item"
                      data-tooltip={source.tooltip}
                      onClick={() => handleSourceClick(source.name)}
                    >
                      <div className="source-icon">{source.icon}</div>
                      <span>{source.name}</span>
                    </div>
                  ))}
                </div>
                
                {/* Arrow to SIEM */}
                <div className="flow-arrow">
                  <svg className="arrow-svg" viewBox="0 0 100 20">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ff5722"/>
                      </marker>
                    </defs>
                    <line x1="0" y1="10" x2="90" y2="10" stroke="#ff5722" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  </svg>
                </div>

                {/* SIEM Box */}
                <div 
                  className={`siem-box ${selectedNode === 'siem' ? 'path-highlight' : ''}`}
                  onClick={() => handleNodeClick('siem')}
                >
                  <div className="siem-icon">📊</div>
                  <h3>SIEM</h3>
                  <p>Security Information & Event Management</p>
                  <div className="siem-description">
                    SIEM gathers logs from multiple sources and generates alerts. These alerts are then made to flow into CIAP.
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow to CIAP */}
            <div className="main-flow-arrow">
              <svg className="arrow-svg large" viewBox="0 0 200 50">
                <defs>
                  <marker id="arrowhead-large" markerWidth="15" markerHeight="10" refX="14" refY="5" orient="auto">
                    <polygon points="0 0, 15 5, 0 10" fill="#ffd700"/>
                  </marker>
                </defs>
                <line x1="10" y1="25" x2="180" y2="25" stroke="#ffd700" strokeWidth="3" markerEnd="url(#arrowhead-large)"/>
              </svg>
            </div>

            {/* Step 2: CIAP */}
            <div className="workflow-step">
              <div className="step-badge">Step 2</div>
              <div className="ciap-section">
                <div className="ciap-node">
                  <div className="neural-web">
                    <div className="neural-center">
                      <div className="ey-brand">EY</div>
                    </div>
                    <div className="neural-connections" ref={neuralWebRef}></div>
                  </div>
                  <h3>Cognitive Intelligence Analysis Platform</h3>
                  <p>CIAP Carried out initial triage based on Usecase SOP and categorizes the alerts into three categories</p>
                </div>
              </div>
            </div>

            {/* Decision Paths */}
            <div className="decision-paths">
              {/* Path A */}
              <div className="decision-path">
                <div className="step-badge">Step 3.A</div>
                <div className="decision-node">
                  <div className="node-content">
                    <h4>End to End Automated</h4>
                    <p>Notification with or without triage</p>
                  </div>
                </div>
              </div>

              {/* Path B */}
              <div className="decision-path highlighted">
                <div className="step-badge">Step 3.B</div>
                <div 
                  className={`decision-node ${selectedNode === 'one-click' ? 'path-highlight' : ''}`}
                  onClick={() => handleNodeClick('one-click')}
                >
                  <div className="node-content">
                    <h4>One Click Notification</h4>
                    <p>SOAR relies on the analyst to make the final call on whether an incident must be created or not.</p>
                  </div>
                </div>
              </div>

              {/* Path C */}
              <div className="decision-path">
                <div className="step-badge highlighted">Step 3.C</div>
                <div 
                  className={`decision-node ${selectedNode === 'deep-dive' ? 'path-highlight' : ''}`}
                  onClick={() => handleNodeClick('deep-dive')}
                >
                  <div className="node-content">
                    <h4>Deep dive required</h4>
                    <p>An EY analyst investigates the deep dive alerts with logs from the SIEM and creates an incident in the EY ITSM if required</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Destinations */}
            <div className="final-destinations">
              <div className="destination-item">
                <div className="analyst-icon">👨‍💻</div>
                <h4>EY Analyst</h4>
              </div>
              
              <div className="destination-item">
                <div className="itsm-icon">🎫</div>
                <h4>Client ITSM Platform</h4>
                <p>IT Service Management</p>
              </div>
              
              <div className="destination-item close-alert">
                <div className="close-icon">❌</div>
                <h4>Close Alert</h4>
                <p>Upon analysis / CIAP if the analyst feels that this alert is not worth converting into an incident, they will close the alert in CIAP</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalData.title}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p>{modalData.content}</p>
            </div>
          </div>
        </div>
      )}

      {/* Status Indicator */}
      {showStatusIndicator && (
        <div className="status-indicator">
          <div className="status-content">
            <h4>{statusInfo.title}</h4>
            <p className="status-main">{statusInfo.status}</p>
            <p className="status-detail">{statusInfo.details}</p>
          </div>
        </div>
      )}

      {/* Notifications */}
      <div className="notifications-container">
        {notifications.map(notification => (
          <div key={notification.id} className="notification">
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SOCDashboard;