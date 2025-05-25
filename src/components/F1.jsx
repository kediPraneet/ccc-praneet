import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./F1.css";

const F1 = ({ onClose }) => {
  // Refs to last boxes and SOC Manager for arrow positioning
  const level1LastBoxRef = useRef(null);
  const level2LastBoxRef = useRef(null);
  const socManagerRef = useRef(null);
  const [arrowPositions, setArrowPositions] = useState({
    level1: { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
    level2: { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
  });

  useEffect(() => {
    function updatePositions() {
      if (level1LastBoxRef.current && socManagerRef.current && level2LastBoxRef.current) {
        const l1 = level1LastBoxRef.current.getBoundingClientRect();
        const l2 = level2LastBoxRef.current.getBoundingClientRect();
        const soc = socManagerRef.current.getBoundingClientRect();
        const container = socManagerRef.current.offsetParent.getBoundingClientRect();
        setArrowPositions({
          level1: {
            start: {
              x: l1.right - container.left,
              y: l1.top + l1.height / 2 - container.top,
            },
            end: {
              x: soc.left - container.left,
              y: soc.top + soc.height / 2 - container.top,
            },
          },
          level2: {
            start: {
              x: l2.right - container.left,
              y: l2.top + l2.height / 2 - container.top,
            },
            end: {
              x: soc.left - container.left,
              y: soc.top + soc.height / 2 - container.top,
            },
          },
        });
      }
    }
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const level1Boxes = [
    "Analysts check-in CCC Facility",
    "Check Mails and ticketing portal to be updated on ongoing incidents or things that are suspicious that need monitoring",
    "Check the assigned clients and commence with the monitoring & reporting part.",
    "Health check of all log sources and it happens once every 3 hours from now.",
    "Real Time Monitoring with respect to assigned clients and notifying stakeholders as and when alerts/abnormality observed."
  ];
  const level2Boxes = [
    "Lead 1 Check-in CCC facility",
    "Sit with Analysts and help them with their queries.",
    "Check Mails and address adhoc requests raised by clients. Assign clients to Level 1 Analysts.",
    "Sharing the daily reports along with Insights to respective stakeholders",
    "Level 2 Incident Analysis/ Ad-hoc requests / Weekly / Monthly reports / Detailed Incident Observations/ Client calls."
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="f1-flowchart-overlay"
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="f1-flowchart-container"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <button className="f1-close-btn" onClick={onClose}>×</button>
          <div className="f1-title">EY Analyst</div>
          <div className="f1-top-section">
            <div className="f1-phase f1-prepare">
              <span className="f1-phase-icon">
                {/* Gear/Settings Icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="#ffce00" strokeWidth="1.5"/><path d="M10 2v2M10 16v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2M16 10h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#ffce00" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="f1-phase-title">"Prepare"</span>
              <span className="f1-phase-desc">analysts in this phase set up detection rules, baselines, and response playbooks</span>
            </div>
            <div className="f1-phase f1-monitor">
              <span className="f1-phase-icon">
                {/* Eye/Monitor Icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><ellipse cx="10" cy="10" rx="7" ry="4" stroke="#ffce00" strokeWidth="1.5"/><circle cx="10" cy="10" r="2" fill="#ffce00"/></svg>
              </span>
              <span className="f1-phase-title">"Monitor"</span>
              <span className="f1-phase-desc">they continuously observe network and system activity for anomalies</span>
            </div>
            <div className="f1-phase f1-triage">
              <span className="f1-phase-icon">
                {/* Alert/Triangle Icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><polygon points="10,3 18,17 2,17" stroke="#ffce00" strokeWidth="1.5" fill="none"/><circle cx="10" cy="14" r="1" fill="#ffce00"/><rect x="9.25" y="7" width="1.5" height="4" rx="0.75" fill="#ffce00"/></svg>
              </span>
              <span className="f1-phase-title">"Alert Triage"</span>
              <span className="f1-phase-desc">they investigate and prioritize alerts to determine genuine threats.</span>
            </div>
          </div>
          <div className="f1-flow-main">
            <div className="f1-levels">
              <div className="f1-level f1-level1">
                <div className="f1-level-title">Level 1 Analysts</div>
                <div className="f1-box-row">
                  {level1Boxes.map((text, i) => (
                    <React.Fragment key={i}>
                      <motion.div
                        className="f1-box"
                        whileHover={{ scale: 1.05, boxShadow: "0 4px 16px rgba(255, 206, 0, 0.15)" }}
                        ref={i === level1Boxes.length - 1 ? level1LastBoxRef : null}
                      >
                        <span className="f1-box-icon">
                          {/* Example: Office/Check-in */}
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="6" width="14" height="10" rx="2" stroke="#ffce00" strokeWidth="1.5"/>
                            <rect x="7" y="10" width="2" height="2" fill="#ffce00"/>
                            <rect x="11" y="10" width="2" height="2" fill="#ffce00"/>
                          </svg>
                        </span>
                        <span>{text}</span>
                      </motion.div>
                      {i < 4 && (
                        <span className="f1-arrow">
                          <svg width="32" height="16" viewBox="0 0 32 16">
                            <line x1="0" y1="8" x2="28" y2="8" stroke="#ffce00" strokeWidth="2"/>
                            <polygon points="28,4 32,8 28,12" fill="#ffce00"/>
                          </svg>
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="f1-level f1-level2">
                <div className="f1-level-title">Level 2 Analysts</div>
                <div className="f1-box-row">
                  {level2Boxes.map((text, i) => (
                    <React.Fragment key={i}>
                      <motion.div
                        className="f1-box"
                        whileHover={{ scale: 1.05, boxShadow: "0 4px 16px rgba(255, 206, 0, 0.15)" }}
                        ref={i === level2Boxes.length - 1 ? level2LastBoxRef : null}
                      >
                        <span className="f1-box-icon">
                          {/* Example: Office/Check-in */}
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="6" width="14" height="10" rx="2" stroke="#ffce00" strokeWidth="1.5"/>
                            <rect x="7" y="10" width="2" height="2" fill="#ffce00"/>
                            <rect x="11" y="10" width="2" height="2" fill="#ffce00"/>
                          </svg>
                        </span>
                        <span>{text}</span>
                      </motion.div>
                      {i < 4 && (
                        <span className="f1-arrow">
                          <svg width="32" height="16" viewBox="0 0 32 16">
                            <line x1="0" y1="8" x2="28" y2="8" stroke="#ffce00" strokeWidth="2"/>
                            <polygon points="28,4 32,8 28,12" fill="#ffce00"/>
                          </svg>
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="f1-soc-manager-vertical" ref={socManagerRef}>
              <div className="f1-soc-box">SOC Manager</div>
            </div>
            {/* SVG arrows from last boxes to SOC Manager */}
            {arrowPositions.level1.start.x !== 0 && arrowPositions.level1.end.x !== 0 && (
              <svg
                className="f1-connect-arrow level1"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              >
                <path
                  d={`M${arrowPositions.level1.start.x},${arrowPositions.level1.start.y}
                    C${arrowPositions.level1.start.x + 100},${arrowPositions.level1.start.y}
                     ${arrowPositions.level1.end.x - 100},${arrowPositions.level1.end.y}
                     ${arrowPositions.level1.end.x},${arrowPositions.level1.end.y}`}
                  stroke="#ffce00"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <polygon points="0,0 8,4 0,8" fill="#ffce00"/>
                  </marker>
                </defs>
              </svg>
            )}
            {arrowPositions.level2.start.x !== 0 && arrowPositions.level2.end.x !== 0 && (
              <svg
                className="f1-connect-arrow level2"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              >
                <path
                  d={`M${arrowPositions.level2.start.x},${arrowPositions.level2.start.y}
                    C${arrowPositions.level2.start.x + 100},${arrowPositions.level2.start.y}
                     ${arrowPositions.level2.end.x - 100},${arrowPositions.level2.end.y}
                     ${arrowPositions.level2.end.x},${arrowPositions.level2.end.y}`}
                  stroke="#ffce00"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <polygon points="0,0 8,4 0,8" fill="#ffce00"/>
                  </marker>
                </defs>
              </svg>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default F1;
