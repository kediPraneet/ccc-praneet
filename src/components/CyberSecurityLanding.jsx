import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Eye, Brain, Server, AlertTriangle, Database, Network, User, Monitor, Settings, Bell, FileSearch, Zap, Activity } from 'lucide-react';
import './CyberSecurityLanding.css';

const CyberSecurityLanding = () => {
  const [activeNode, setActiveNode] = useState(null);

  // 3D Cube Animation Component
  const AnimatedCube = () => {
    return (
      <div className="cube-wrapper">
        <div className="cube-container">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="grid-overlay" />

      {/* Navigation Header */}
      <header className="relative z-10 px-6 py-4 border-b border-gray-800">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold">EY Security</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
            <a href="#workflow" className="hover:text-orange-400 transition-colors">Workflow</a>
            <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-colors">
              Start for free
            </button>
            <button className="px-6 py-2 border border-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors">
              Documentation
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Incident</span>{' '}
                <span className="text-orange-500">Response</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced cybersecurity incident response powered by AI-driven threat intelligence 
                and automated workflow management. Protect your organization with enterprise-grade security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  Get Started <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-orange-400 rounded-lg font-semibold text-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <AnimatedCube />
            </div>
          </div>
        </div>
      </section>

      {/* CIAP Workflow Section */}
      <section id="workflow" className="relative z-10 px-6 py-20 bg-gray-800/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">CIAP</span>{' '}
              <span className="text-orange-500">Architecture</span>
            </h2>
            <div className="bg-gray-700 px-4 py-2 rounded-lg inline-block">
              <span className="text-orange-400 font-semibold">What is CIAP?</span>
              <p className="text-sm text-gray-300 mt-1">CIAP is a automation tool used to generate alerts</p>
            </div>
          </div>

          {/* Main Workflow Diagram */}
          <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-600">
            
            {/* Top Row - Data Sources */}
            <div className="grid grid-cols-8 gap-4 mb-8">
              {/* Left Group */}
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <Shield className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                <div className="text-xs font-semibold">Firewall Logs</div>
              </div>
              
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <Server className="w-5 h-5 mx-auto mb-1 text-green-400" />
                <div className="text-xs font-semibold">Server Logs</div>
              </div>
              
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <Eye className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
                <div className="text-xs font-semibold">Anti Phishing</div>
              </div>
              
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <AlertTriangle className="w-5 h-5 mx-auto mb-1 text-red-400" />
                <div className="text-xs font-semibold">Threat Intel</div>
              </div>
              
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <Database className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                <div className="text-xs font-semibold">EDR</div>
              </div>
              
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <Shield className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                <div className="text-xs font-semibold">WAF</div>
              </div>
              
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <Network className="w-5 h-5 mx-auto mb-1 text-pink-400" />
                <div className="text-xs font-semibold">IDS/IPS</div>
              </div>
              
              <div className="bg-gray-700 border border-gray-500 p-3 rounded-lg text-center hover:border-orange-400 transition-colors">
                <Brain className="w-5 h-5 mx-auto mb-1 text-indigo-400" />
                <div className="text-xs font-semibold">Use cases</div>
              </div>
            </div>

            {/* Flow Lines to SIEM */}
            <div className="flex justify-center mb-6">
              <svg width="100%" height="80" viewBox="0 0 1000 80" className="overflow-visible">
                {/* Multiple curved paths converging to SIEM */}
                <path d="M60,10 Q300,40 500,70" stroke="#ff5722" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-1" />
                <path d="M180,10 Q350,30 500,70" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-2" />
                <path d="M300,10 Q400,40 500,70" stroke="#eab308" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-3" />
                <path d="M420,10 Q460,40 500,70" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-4" />
                <path d="M540,10 Q520,40 500,70" stroke="#a855f7" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-5" />
                <path d="M660,10 Q580,30 500,70" stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-6" />
                <path d="M780,10 Q640,40 500,70" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-7" />
                <path d="M900,10 Q700,30 500,70" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.8" strokeDasharray="5,5" className="animated-path-8" />
              </svg>
            </div>

            {/* SIEM Block */}
            <div className="flex justify-center mb-8">
              <div className="siem-block">
                <h3 className="text-xl font-bold mb-2 text-white">SIEM</h3>
                <p className="text-sm font-semibold text-purple-100 mb-2">Security Incidents & Events Management</p>
                <p className="text-xs text-purple-200 leading-relaxed">
                  SIEM gathers logs from multiple sources and generates alerts. 
                  These alerts are then made to flow into CIAP
                </p>
                {/* Pulsing effect */}
                <div className="siem-pulse"></div>
              </div>
            </div>

            {/* Arrow to CIAP */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-orange-500"></div>
                <ChevronRight className="w-6 h-6 text-orange-500 rotate-90" />
              </div>
            </div>

            {/* Main Processing Layer */}
            <div className="grid grid-cols-12 gap-6 items-center mb-8">
              
              {/* Left Side - EY Analyst */}
              <div className="col-span-3">
                <div className="bg-yellow-500 border-2 border-yellow-400 p-4 rounded-lg text-center shadow-lg relative">
                  <div className="bg-yellow-600 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-sm text-gray-900">EY Analyst</h4>
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <ChevronRight className="w-4 h-4 text-yellow-600" />
                  </div>
                </div>
              </div>

              {/* Center - CIAP Core */}
              <div className="col-span-6 flex justify-center">
                <div className="relative">
                  <div className="ciap-core">
                    {/* Neural network background pattern */}
                    <div className="neural-network-bg">
                      <svg width="100%" height="100%" viewBox="0 0 200 200">
                        <defs>
                          <pattern id="neural" patternUnits="userSpaceOnUse" width="40" height="40">
                            <circle cx="20" cy="20" r="2" fill="white" opacity="0.6"/>
                            <line x1="20" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1" opacity="0.4"/>
                            <line x1="20" y1="20" x2="20" y2="40" stroke="white" strokeWidth="1" opacity="0.4"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#neural)"/>
                      </svg>
                    </div>
                    
                    <div className="text-3xl font-black text-white mb-1 relative z-10">EY</div>
                    <div className="text-xs font-bold text-white text-center leading-tight relative z-10">
                      <div>Cognitive</div>
                      <div>Intelligence</div>
                      <div>Analysis</div>
                      <div>Platform</div>
                    </div>
                    
                    {/* Rotating ring effects */}
                    <div className="rotating-ring-1"></div>
                    <div className="rotating-ring-2"></div>
                  </div>
                  
                  {/* Connection arrows */}
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
              </div>

              {/* Right Side - SOC Portal and ITSM */}
              <div className="col-span-3 space-y-4">
                {/* SOC Portal */}
                <div className="bg-blue-600 border-2 border-blue-400 p-4 rounded-lg shadow-lg">
                  <h4 className="font-bold text-sm text-center mb-2">SOC Portal</h4>
                  <div className="bg-gray-900 rounded border border-blue-300 p-2 relative overflow-hidden">
                    <div className="text-xs text-center text-blue-300 mb-1">Key Performance Index</div>
                    <div className="text-xs text-center text-blue-300">Dashboard</div>
                    {/* Mock dashboard elements */}
                    <div className="flex justify-between mt-2">
                      <div className="w-4 h-2 bg-green-400 rounded-sm"></div>
                      <div className="w-4 h-2 bg-yellow-400 rounded-sm"></div>
                      <div className="w-4 h-2 bg-red-400 rounded-sm"></div>
                    </div>
                    <div className="w-full h-1 bg-blue-500 mt-1 rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* ITSM Platforms */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-orange-500 border-2 border-orange-400 p-2 rounded-lg text-center">
                    <Settings className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-bold">EY ITSM Platform</div>
                    <div className="text-xs opacity-80">IT Service Management</div>
                  </div>
                  <div className="bg-blue-500 border-2 border-blue-400 p-2 rounded-lg text-center">
                    <Monitor className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-bold">Client ITSM Platform</div>
                    <div className="text-xs opacity-80">IT Service Management</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow arrow down */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-col items-center">
                <ChevronRight className="w-6 h-6 text-purple-500 rotate-90" />
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-purple-500"></div>
              </div>
            </div>

            {/* Bottom Process Layer */}
            <div className="grid grid-cols-6 gap-3">
              <div className="bg-gray-600 border border-gray-400 p-3 rounded-full text-center hover:bg-gray-500 transition-colors">
                <Bell className="w-4 h-4 mx-auto mb-1 text-yellow-400" />
                <div className="text-xs font-semibold">Incident Notification</div>
              </div>
              
              <div className="bg-gray-600 border border-gray-400 p-3 rounded-full text-center hover:bg-gray-500 transition-colors">
                <FileSearch className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                <div className="text-xs font-semibold">Use case Triage Playbooks</div>
              </div>
              
              <div className="bg-gray-600 border border-gray-400 p-3 rounded-full text-center hover:bg-gray-500 transition-colors">
                <Network className="w-4 h-4 mx-auto mb-1 text-green-400" />
                <div className="text-xs font-semibold">Use case Correlations</div>
              </div>
              
              <div className="bg-gray-600 border border-gray-400 p-3 rounded-full text-center hover:bg-gray-500 transition-colors">
                <Zap className="w-4 h-4 mx-auto mb-1 text-orange-400" />
                <div className="text-xs font-semibold">Alert Flood Checks</div>
              </div>
              
              <div className="bg-gray-600 border border-gray-400 p-3 rounded-full text-center hover:bg-gray-500 transition-colors">
                <Activity className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                <div className="text-xs font-semibold">Duplication Checks</div>
              </div>
              
              <div className="bg-gray-600 border border-gray-400 p-3 rounded-full text-center hover:bg-gray-500 transition-colors">
                <Eye className="w-4 h-4 mx-auto mb-1 text-red-400" />
                <div className="text-xs font-semibold">O S I N T Reputation details</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Advanced <span className="text-orange-500">Security Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-orange-400 transition-colors">
              <Brain className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-300">
                Advanced machine learning algorithms analyze threat patterns and automate incident response workflows.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-orange-400 transition-colors">
              <Shield className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Real-time Protection</h3>
              <p className="text-gray-300">
                Continuous monitoring and instant threat detection across all your security infrastructure.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-orange-400 transition-colors">
              <Network className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Integrated Workflow</h3>
              <p className="text-gray-300">
                Seamless integration with existing SIEM, ITSM, and security orchestration platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Security Operations?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join leading enterprises who trust EY's Incident Response platform for their cybersecurity needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 rounded-lg font-semibold text-lg transition-colors">
              Schedule Demo
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-lg font-semibold text-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-orange-500" />
            <span className="text-lg font-bold">EY Security Solutions</span>
          </div>
          <p className="text-gray-400 mb-4">
            Enterprise-grade cybersecurity incident response and threat intelligence platform.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Support</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberSecurityLanding;