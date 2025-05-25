import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Pricing = () => {
  const [showRolesDropdown, setShowRolesDropdown] = useState(false);
  const [showPlaybookDropdown, setShowPlaybookDropdown] = useState(false);

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-orange-400">
        COMPONENTS
      </h2>
      <div className="flex flex-wrap">
        {/* Incident Response */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-4xl mb-8">Incident Response</p>
            <p className="mb-4 text-neutral-400">
              A structured approach to handling security incidents, minimizing
              damage, and recovering quickly.
            </p>
          </div>
        </div>

        {/* Roles Section with Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-4xl mb-8">Roles</p>
            <p className="mb-4 text-neutral-400">
              Defines key roles in incident response:{" "}
              <span className="text-orange-600">CFO</span>,{" "}
              <span className="text-orange-600">Governance</span>, and others.
            </p>
            <button
              className="flex items-center text-xl text-orange-500 hover:text-orange-700"
              onClick={() => setShowRolesDropdown(!showRolesDropdown)}
            >
              View Roles <ChevronDown className="ml-2" />
            </button>
            {showRolesDropdown && (
              <ul className="mt-4 p-4 border border-neutral-600 rounded-lg">
                <li className="py-1">
                  <a
                    href="https://cfo-webpage-67mi4klpn-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CFO
                  </a>{" "}
                  - Handles financial risks and budget allocation.
                </li>
                <li className="py-1">
                  <a
                    href="https://gov-webpage-khnpeezg0-kp0702s-projects.vercel.app/"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Governance
                  </a>{" "}
                  - Ensures compliance and oversight.
                </li>
                <li className="py-1">
                  <a
                    href="https://it-webpage-4619l86cf-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IT System
                  </a>{" "}
                  - Manages technical infrastructure and system recovery.
                </li>
                <li className="py-1">
                  <a
                    href="https://legal-webpage-3mxhq9q0o-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Legal Division
                  </a>{" "}
                  - Provides legal support during incidents.
                </li>
                <li className="py-1">
                  <a
                    href="https://manage-webpage-m31dyh55a-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marketing
                  </a>{" "}
                  - Handles external communication and public image.
                </li>
                <li className="py-1">
                  <a
                    href="https://sec-page-juusn8n84-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Security
                  </a>{" "}
                  - Investigates breaches and implements controls.
                </li>
                <li className="py-1">
                  <a
                    href="https://vendor-webpage-8rzp0f8qz-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vendor Manager
                  </a>{" "}
                  - Coordinates with third-party vendors for response support.
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Playbook Scenario Section with Dropdown */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-4xl mb-8">Playbook Scenario</p>
            <p className="mb-4 text-neutral-400">
              Predefined action plans for responding to different types of cyber
              threats.
            </p>
            <button
              className="flex items-center text-xl text-orange-500 hover:text-orange-700"
              onClick={() => setShowPlaybookDropdown(!showPlaybookDropdown)}
            >
              View Scenarios <ChevronDown className="ml-2" />
            </button>
            {showPlaybookDropdown && (
              <ul className="mt-4 p-4 border border-neutral-600 rounded-lg">
                <li className="py-1">
                  <a
                    href="https://ddos-webpage-5vz4prv1j-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DDoS
                  </a>{" "}
                  - Mitigation strategies for denial-of-service attacks.
                </li>
                <li className="py-1">
                  <a
                    href="https://ransomware-webpage-3eppuxoxv-kp0702s-projects.vercel.app"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ransomware
                  </a>{" "}
                  - Steps to contain and recover from a ransomware attack.
                </li>
                <li className="py-1">
                  <span className="text-orange-600">Malware</span> - Guidelines
                  for detecting and removing malware infections.
                </li>
                <li className="py-1">
                  <span className="text-orange-600">Phishing</span> - Best
                  practices for identifying and preventing phishing attacks.
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Tabletop Exercise */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-4xl mb-8">Tabletop Exercise</p>
            <p className="mb-4 text-neutral-400">
              A discussion-based simulation to evaluate an organization's
              response to a cybersecurity incident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;