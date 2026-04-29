// pages/Skills.tsx
"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

// ── Main Skills Page ────────────────────────────────────────────
const Skills = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const profSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal observer
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

    // Animate proficiency bars when section is visible
    const profObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const profItems = document.querySelectorAll('.prof-item');
          profItems.forEach((item: Element, i: number) => {
            const htmlItem = item as HTMLElement;
            const pct = htmlItem.dataset.pct;
            setTimeout(() => {
              const fill = htmlItem.querySelector('.prof-fill') as HTMLElement;
              if (fill) {
                fill.style.width = pct + '%';
              }
            }, i * 80 + 300);
          });
          profObserver.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (profSectionRef.current) {
      profObserver.observe(profSectionRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      profObserver.disconnect();
    };
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

        /* Skills wrap */
        .skills-wrap {
          padding: 80px clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Category blocks */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          margin-bottom: 2px;
        }

        .skill-cat {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 44px 40px;
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }

        .skill-cat::before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0;
          width: 2px;
          height: 0;
          background: var(--cyan);
          transition: height 0.4s ease;
        }

        .skill-cat:hover { 
          background: var(--surface2); 
        }

        .skill-cat:hover::before { 
          height: 100%; 
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .cat-icon {
          width: 36px; 
          height: 36px;
          background: var(--cyan-dim);
          border: 1px solid rgba(0,212,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          flex-shrink: 0;
        }

        .cat-name {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text2);
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .skill-chip {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          padding: 7px 14px;
          background: var(--bg3);
          border: 1px solid var(--border);
          color: var(--text2);
          transition: all 0.2s;
          cursor: default;
        }

        .skill-chip:hover {
          background: var(--cyan-dim);
          border-color: rgba(0,212,255,0.4);
          color: var(--cyan);
          transform: translateY(-1px);
        }

        /* Proficiency bar section */
        .proficiency-section {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 48px;
          position: relative;
        }

        .proficiency-section::before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0; 
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--cyan), transparent);
        }

        .prof-title {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 36px;
        }

        .prof-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 60px;
        }

        .prof-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
        }

        .prof-label {
          font-size: 0.85rem;
          color: var(--text);
          font-weight: 400;
        }

        .prof-pct {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }

        .prof-bar {
          height: 2px;
          background: var(--border2);
          position: relative;
          overflow: hidden;
        }

        .prof-fill {
          position: absolute;
          left: 0; 
          top: 0; 
          bottom: 0;
          background: linear-gradient(90deg, var(--cyan), var(--green));
          width: 0;
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
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
          .page-hero { 
            padding: 100px 20px 40px !important; 
          }
          
          .skills-wrap { 
            padding: 60px 20px !important; 
          }
          
          .skills-grid { 
            grid-template-columns: 1fr !important; 
          }
          
          .prof-grid { 
            grid-template-columns: 1fr !important; 
            gap: 20px !important; 
          }
          
          .proficiency-section { 
            padding: 32px !important; 
          }
          
          .side-label { 
            display: none; 
          }
          
          .page-counter { 
            right: 12px; 
            font-size: 0.45rem; 
          }
          
          .skill-cat {
            padding: 32px 24px !important;
          }
        }

        @media (max-width: 768px) {
          .page-counter { 
            display: none; 
          }
        }

        @media (max-width: 480px) {
          .cat-icon {
            width: 28px !important;
            height: 28px !important;
          }
          
          .skill-chip {
            font-size: 0.58rem !important;
            padding: 5px 10px !important;
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
      <div className="side-label">Skills · Expertise</div>

      {/* Page counter */}
      <div className="page-counter">04 / 05</div>

      {/* Page hero */}
      <div className="page-hero">
        <div className="sec-label anim-fade-up-0">Technical Toolkit</div>
        <h1 className="sec-title anim-fade-up-1">
          Skills &<br />
          <span className="gradient-text">Expertise</span>
        </h1>
      </div>

      {/* Skills content */}
      <div className="skills-wrap">

        {/* Skills grid */}
        <div className="skills-grid">

          {/* Languages */}
          <div className="skill-cat reveal">
            <div className="cat-header">
              <div className="cat-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16,18 22,12 16,6"/>
                  <polyline points="8,6 2,12 8,18"/>
                </svg>
              </div>
              <div className="cat-name">Languages</div>
            </div>
            <div className="skill-items">
              <span className="skill-chip">Java</span>
              <span className="skill-chip">TypeScript</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">Python</span>
              <span className="skill-chip">C / C++</span>
              <span className="skill-chip">SQL</span>
              <span className="skill-chip">HTML / CSS</span>
            </div>
          </div>

          {/* Frameworks & Platforms */}
          <div className="skill-cat reveal">
            <div className="cat-header">
              <div className="cat-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div className="cat-name">Frameworks &amp; Platforms</div>
            </div>
            <div className="skill-items">
              <span className="skill-chip">React.js</span>
              <span className="skill-chip">Node.js</span>
              <span className="skill-chip">Express.js</span>
              <span className="skill-chip">FastAPI</span>
              <span className="skill-chip">Django</span>
              <span className="skill-chip">Fastify.js</span>
            </div>
          </div>

          {/* Databases & DevOps */}
          <div className="skill-cat reveal">
            <div className="cat-header">
              <div className="cat-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <div className="cat-name">Databases &amp; DevOps</div>
            </div>
            <div className="skill-items">
              <span className="skill-chip">MongoDB</span>
              <span className="skill-chip">PostgreSQL</span>
              <span className="skill-chip">Git / GitHub</span>
              <span className="skill-chip">CI/CD</span>
              <span className="skill-chip">Docker</span>
              <span className="skill-chip">Kubernetes</span>
            </div>
          </div>

          {/* AI & Architecture */}
          <div className="skill-cat reveal">
            <div className="cat-header">
              <div className="cat-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                </svg>
              </div>
              <div className="cat-name">AI &amp; Architecture</div>
            </div>
            <div className="skill-items">
              <span className="skill-chip">RAG Systems</span>
              <span className="skill-chip">LLM Integration</span>
              <span className="skill-chip">Multi-tenant Design</span>
              <span className="skill-chip">Gemini API</span>
              <span className="skill-chip">System Design</span>
              <span className="skill-chip">OOP &amp; Design Patterns</span>
              <span className="skill-chip">Agile / Scrum</span>
            </div>
          </div>

        </div>

        {/* Proficiency bars */}
        <div className="proficiency-section reveal" ref={profSectionRef}>
          <div className="prof-title">// proficiency levels</div>
          <div className="prof-grid">
            <div className="prof-item" data-pct="90">
              <div className="prof-top">
                <span className="prof-label">Python / FastAPI</span>
                <span className="prof-pct">90%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
            <div className="prof-item" data-pct="85">
              <div className="prof-top">
                <span className="prof-label">Java / C++</span>
                <span className="prof-pct">85%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
            <div className="prof-item" data-pct="85">
              <div className="prof-top">
                <span className="prof-label">Node.js / Express</span>
                <span className="prof-pct">85%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
            <div className="prof-item" data-pct="80">
              <div className="prof-top">
                <span className="prof-label">JavaScript / TypeScript</span>
                <span className="prof-pct">80%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
            <div className="prof-item" data-pct="80">
              <div className="prof-top">
                <span className="prof-label">React.js</span>
                <span className="prof-pct">80%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
            <div className="prof-item" data-pct="75">
              <div className="prof-top">
                <span className="prof-label">PostgreSQL / MongoDB</span>
                <span className="prof-pct">75%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
            <div className="prof-item" data-pct="70">
              <div className="prof-top">
                <span className="prof-label">CI/CD &amp; Docker</span>
                <span className="prof-pct">70%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
            <div className="prof-item" data-pct="70">
              <div className="prof-top">
                <span className="prof-label">AI / RAG Systems</span>
                <span className="prof-pct">70%</span>
              </div>
              <div className="prof-bar"><div className="prof-fill"></div></div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Skills;