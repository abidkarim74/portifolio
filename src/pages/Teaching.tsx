// pages/Teaching.tsx
"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

// ── Main Teaching Page ──────────────────────────────────────────
const Teaching = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, i * 100);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

        *, *::before, *::after { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        :root {
          --bg:        #080c0f;
          --bg2:       #0d1117;
          --bg3:       #0a0e12;
          --surface:   #0f1419;
          --surface2:  #141b22;
          --border:    rgba(255,255,255,0.06);
          --border2:   rgba(255,255,255,0.10);
          --text:      #e8edf2;
          --text2:     #7a8694;
          --muted:     #445060;
          --cyan:      #00d4ff;
          --cyan-dim:  rgba(0,212,255,0.06);
          --green:     #00ff88;
          --green-dim: rgba(0,255,136,0.06);
          --font-display: 'DM Serif Display', serif;
          --font-mono:    'JetBrains Mono', monospace;
          --font-body:    'Syne', sans-serif;
        }

        html { 
          scroll-behavior: smooth; 
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grid background */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .orb { 
          position: fixed; 
          border-radius: 50%; 
          filter: blur(120px); 
          pointer-events: none; 
          z-index: 0; 
        }
        
        .orb-1 {
          width: 500px; 
          height: 500px;
          background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
          top: -100px; 
          right: -50px;
          animation: float1 10s ease-in-out infinite;
        }
        
        .orb-2 {
          width: 350px; 
          height: 350px;
          background: radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%);
          bottom: 200px; 
          left: -80px;
          animation: float2 12s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-20px, 30px) scale(1.05); }
          66%     { transform: translate(10px, -20px) scale(0.95); }
        }

        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(30px, -25px); }
        }

        /* Scan line */
        .scanline {
          position: fixed; 
          left: 0; 
          right: 0; 
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes scanline {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* Side label */
        .side-label {
          position: fixed;
          left: 20px; 
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
        }

        /* Page counter */
        .page-counter {
          position: fixed;
          right: 20px; 
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          color: var(--muted);
          z-index: 50;
          pointer-events: none;
          writing-mode: vertical-rl;
        }

        /* Page hero */
        .page-hero {
          padding: clamp(100px, 15vh, 140px) clamp(20px, 5vw, 60px) clamp(40px, 8vh, 72px);
          max-width: 1400px;
          margin: 0 auto;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 10;
        }

        .sec-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 16px;
        }

        .sec-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5rem);
          color: var(--text);
          font-weight: 400;
          line-height: 1;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--cyan), #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Impact bar */
        .impact-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          margin: 60px clamp(20px, 5vw, 60px) 0;
          max-width: calc(1400px - clamp(40px, 10vw, 120px));
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 10;
        }

        .impact-cell {
          background: var(--surface);
          padding: 32px 40px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: background 0.3s;
        }

        .impact-cell:hover { 
          background: var(--surface2); 
        }

        .impact-num {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          letter-spacing: 0.02em;
          color: var(--cyan);
          line-height: 1;
          flex-shrink: 0;
        }

        .impact-label {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .impact-desc {
          font-size: 0.85rem;
          color: var(--text2);
          font-weight: 300;
        }

        /* TA section */
        .ta-section {
          padding: 80px clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .ta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        .ta-card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 48px 36px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          cursor: default;
        }

        .ta-card::after {
          content: '';
          position: absolute;
          bottom: 0; 
          left: 0; 
          right: 0;
          height: 2px;
          background: var(--cyan);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .ta-card:hover {
          background: var(--surface2);
          transform: translateY(-4px);
        }

        .ta-card:hover::after { 
          transform: scaleX(1); 
        }

        /* Course code as massive bg number */
        .ta-bg-code {
          position: absolute;
          bottom: -20px;
          right: -10px;
          font-family: var(--font-display);
          font-size: 7rem;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.025);
          line-height: 1;
          pointer-events: none;
          transition: color 0.3s;
        }

        .ta-card:hover .ta-bg-code { 
          color: rgba(0,212,255,0.05); 
        }

        .ta-code-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ta-code-label::before {
          content: '';
          width: 18px;
          height: 1px;
          background: var(--cyan);
          display: inline-block;
        }

        .ta-name {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .ta-lang {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          color: var(--green);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .ta-desc {
          font-size: 0.85rem;
          color: var(--text2);
          line-height: 1.8;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        /* Responsibilities list */
        .ta-responsibilities {
          margin-top: 60px;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 48px;
          position: relative;
        }

        .ta-responsibilities::before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, var(--cyan), transparent);
        }

        .resp-title {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 28px;
        }

        .resp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .resp-icon {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--cyan);
          opacity: 0.3;
          margin-bottom: 10px;
        }

        .resp-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 6px;
        }

        .resp-desc {
          font-size: 0.82rem;
          color: var(--text2);
          line-height: 1.75;
          font-weight: 300;
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }

        /* Reveal class for scroll animations */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.opacity-100 {
          opacity: 1;
        }

        .reveal.translate-y-0 {
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .impact-bar { 
            grid-template-columns: 1fr !important; 
            margin: 40px 20px 0 !important;
          }
          
          .ta-grid { 
            grid-template-columns: 1fr !important; 
          }
          
          .resp-grid { 
            grid-template-columns: 1fr !important; 
          }
          
          .ta-responsibilities { 
            padding: 32px !important; 
          }
          
          .side-label { 
            display: none; 
          }
          
          .page-counter { 
            right: 12px; 
            font-size: 0.45rem; 
          }
        }

        @media (max-width: 768px) {
          .page-counter { 
            display: none; 
          }
          
          .ta-card { 
            padding: 36px 24px !important; 
          }
          
          .ta-bg-code { 
            font-size: 5rem !important; 
          }
        }

        @media (max-width: 480px) {
          .impact-cell {
            padding: 24px !important;
          }
          
          .resp-grid {
            gap: 24px !important;
          }
        }
      `}</style>

      {/* Grid background */}
      <div className="grid-bg" />

      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Scanline effect */}
      <div className="scanline" />

      {/* Navbar */}
      <Navbar />

      {/* Side label */}
      <div className="side-label">Teaching · Assistantships</div>

      {/* Page counter */}
      <div className="page-counter">02 / 05</div>

      {/* Page hero */}
      <div className="page-hero">
        <div className="sec-label anim-fade-up-0">Academic · LUMS</div>
        <h1 className="sec-title anim-fade-up-1">
          Teaching<br />
          <span className="gradient-text">Assistantships</span>
        </h1>
      </div>

      {/* Impact stats */}
      <div className="impact-bar reveal">
        <div className="impact-cell">
          <div className="impact-num">3</div>
          <div>
            <div className="impact-label">TA Positions</div>
            <div className="impact-desc">Across core CS courses at LUMS</div>
          </div>
        </div>
        <div className="impact-cell">
          <div className="impact-num">
            550<span style={{ fontSize: '1.5rem', color: 'var(--text2)' }}>+</span>
          </div>
          <div>
            <div className="impact-label">Students Impacted</div>
            <div className="impact-desc">Mentored, graded, guided</div>
          </div>
        </div>
        <div className="impact-cell">
          <div className="impact-num">4</div>
          <div>
            <div className="impact-label">Years at LUMS</div>
            <div className="impact-desc">Graduated CS Class of 2026</div>
          </div>
        </div>
      </div>

      {/* TA Cards */}
      <div className="ta-section">
        <div className="ta-grid">

          <div className="ta-card reveal">
            <div className="ta-bg-code">100</div>
            <div className="ta-code-label">CS-100</div>
            <div className="ta-name">Computational Thinking &amp; Problem Solving</div>
            <div className="ta-lang">C++ · Logic · Algorithms</div>
            <p className="ta-desc">Assisted students in developing algorithmic thinking and structured problem decomposition. Supported lab sessions and provided hands-on guidance through weekly programming assignments.</p>
          </div>

          <div className="ta-card reveal">
            <div className="ta-bg-code">200</div>
            <div className="ta-code-label">CS-200</div>
            <div className="ta-name">Introduction to Programming</div>
            <div className="ta-lang">C / C++ · OOP · Data Structures</div>
            <p className="ta-desc">Supported students learning C and C++ with a focus on object-oriented programming and core data structures. Ran lab sessions, helped debug code, and graded programming projects.</p>
          </div>

          <div className="ta-card reveal">
            <div className="ta-bg-code">360</div>
            <div className="ta-code-label">CS-360</div>
            <div className="ta-name">Software Engineering</div>
            <div className="ta-lang">Java · Android SDK · Git · GitHub</div>
            <p className="ta-desc">Guided students through SE principles and Android development in Java. Assisted labs as students built Android apps, covering version control, design patterns, and engineering best practices.</p>
          </div>

        </div>

        {/* Responsibilities */}
        <div className="ta-responsibilities reveal">
          <div className="resp-title">// what i did as a TA</div>
          <div className="resp-grid">
            <div>
              <div className="resp-icon">01</div>
              <div className="resp-label">Lab Facilitation</div>
              <div className="resp-desc">Led weekly lab sessions, walking students through programming tasks, debugging live code, and reinforcing lecture concepts with hands-on practice.</div>
            </div>
            <div>
              <div className="resp-icon">02</div>
              <div className="resp-label">Assessment &amp; Grading</div>
              <div className="resp-desc">Graded programming assignments and projects with detailed feedback, maintaining consistency and fairness across large student cohorts.</div>
            </div>
            <div>
              <div className="resp-icon">03</div>
              <div className="resp-label">Office Hours &amp; Mentorship</div>
              <div className="resp-desc">Held office hours to provide 1-on-1 support, helping students overcome conceptual barriers and debugging challenges in C++, Java, and data structures.</div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Teaching;