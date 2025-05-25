import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodeStyle = {
  borderRadius: 10,
  padding: 10,
  color: "#fff",
  background: "#232323",
  border: "2px solid #ff9900",
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
};

const yellowNodeStyle = {
  ...nodeStyle,
  background: "#ffb300",
  color: "#232323",
  border: "2px solid #ff9900",
};

const nodes = [
  { id: "ey-analyst", data: { label: "EY Analyst" }, position: { x: 60, y: 40 }, style: nodeStyle },
  { id: "ciap", data: { label: "CIAP" }, position: { x: 540, y: 40 }, style: nodeStyle },
  { id: "soc-portal", data: { label: "SOC Portal" }, position: { x: 1020, y: 40 }, style: nodeStyle },
  { id: "kpi-dashboard", data: { label: "Key Performance Index Dashboard" }, position: { x: 1020, y: 140 }, style: yellowNodeStyle },
  { id: "ey-itsm", data: { label: "EY ITSM Platform" }, position: { x: 1020, y: 240 }, style: nodeStyle },
  { id: "client-itsm", data: { label: "Client ITSM Platform" }, position: { x: 1020, y: 340 }, style: nodeStyle },
  { id: "siem", data: { label: "SIEM" }, position: { x: 60, y: 190 }, style: nodeStyle },
  { id: "eng", data: { label: <div style={{ fontSize: 15, textAlign: 'center' }}>Engineering /<br />Transition /<br />Project</div> }, position: { x: 540, y: 190 }, style: nodeStyle },
  { id: "arch", data: { label: "Architecture & Design" }, position: { x: 290, y: 340 }, style: nodeStyle },
  { id: "impl", data: { label: "Implementation" }, position: { x: 540, y: 340 }, style: nodeStyle },
  { id: "usecase-mgmt", data: { label: "Usecase Management" }, position: { x: 790, y: 340 }, style: nodeStyle },
  { id: "analytics", data: { label: "Analytics / ML / ATDS / AI" }, position: { x: 60, y: 490 }, style: yellowNodeStyle },
  { id: "collab", data: { label: "Collaboration" }, position: { x: 260, y: 490 }, style: yellowNodeStyle },
  { id: "forensics", data: { label: "Forensics" }, position: { x: 460, y: 490 }, style: yellowNodeStyle },
  { id: "fwlogs", data: { label: "Firewall Logs" }, position: { x: 660, y: 490 }, style: yellowNodeStyle },
  { id: "idsips", data: { label: "IDS/IPS" }, position: { x: 860, y: 490 }, style: yellowNodeStyle },
  { id: "waf", data: { label: "WAF" }, position: { x: 1060, y: 490 }, style: yellowNodeStyle },
  { id: "antiphishing", data: { label: "Anti Phishing" }, position: { x: 60, y: 610 }, style: yellowNodeStyle },
  { id: "ucl", data: { label: "UCL" }, position: { x: 260, y: 610 }, style: yellowNodeStyle },
  { id: "tip", data: { label: "TIP" }, position: { x: 460, y: 610 }, style: yellowNodeStyle },
  { id: "serverlogs", data: { label: "Server Logs" }, position: { x: 660, y: 610 }, style: yellowNodeStyle },
  { id: "edr", data: { label: "EDR" }, position: { x: 860, y: 610 }, style: yellowNodeStyle },
  { id: "usecases", data: { label: "Usecases" }, position: { x: 1060, y: 610 }, style: yellowNodeStyle },
];

const edges = [
  { id: "e1", source: "ey-analyst", target: "ciap", animated: true },
  { id: "e2", source: "ciap", target: "soc-portal", animated: true },
  { id: "e3", source: "ciap", target: "kpi-dashboard", animated: true },
  { id: "e4", source: "ciap", target: "ey-itsm", animated: true },
  { id: "e5", source: "ciap", target: "client-itsm", animated: true },
  { id: "e6", source: "siem", target: "eng", animated: true },
  { id: "e7", source: "eng", target: "arch", animated: true },
  { id: "e8", source: "eng", target: "impl", animated: true },
  { id: "e9", source: "eng", target: "usecase-mgmt", animated: true },
  { id: "e10", source: "arch", target: "analytics", animated: true },
  { id: "e11", source: "arch", target: "collab", animated: true },
  { id: "e12", source: "impl", target: "forensics", animated: true },
  { id: "e13", source: "impl", target: "fwlogs", animated: true },
  { id: "e14", source: "usecase-mgmt", target: "idsips", animated: true },
  { id: "e15", source: "usecase-mgmt", target: "waf", animated: true },
  { id: "e16", source: "analytics", target: "antiphishing", animated: true },
  { id: "e17", source: "collab", target: "ucl", animated: true },
  { id: "e18", source: "forensics", target: "tip", animated: true },
  { id: "e19", source: "fwlogs", target: "serverlogs", animated: true },
  { id: "e20", source: "idsips", target: "edr", animated: true },
  { id: "e21", source: "waf", target: "usecases", animated: true },
];

const Flowchart = () => {
  return (
    <div style={{ width: "100%", maxWidth: 1200, height: "750px", margin: "0 auto", background: "transparent", borderRadius: 20, boxShadow: "0 0 32px #1118", position: "relative", zIndex: 1, overflowX: 'auto' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        minZoom={1}
        maxZoom={1}
        style={{ background: "transparent", fontFamily: 'Poppins, sans-serif', borderRadius: 20 }}
      >
        <Controls showInteractive={false} />
        <Background color="#222" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Flowchart; 