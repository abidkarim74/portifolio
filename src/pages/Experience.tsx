// pages/Experience.tsx
"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

// ── Timeline Item Component ──────────────────────────────────────
interface TimelineItemProps {
  company: string;
  date: string;
  type: string;
  role: string;
  description?: string;
  bullets?: string[];
  tags: string[];
  index: number;
}

const TimelineItem = ({ company, date, type, role, description, bullets, tags, index }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, index * 120);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="timeline-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        marginBottom: '2px',
      }}
    >
      {/* Left: Meta */}
      <div className="timeline-left">
        {/* Timeline dot */}
        <div className="timeline-dot" />

        <h2 className="timeline-company">{company}</h2>
        <div className="timeline-date">{date}</div>
        <span className="timeline-type">{type}</span>
      </div>

      {/* Right: Content */}
      <div className="timeline-right">
        {/* Hover accent bar */}
        <div className="card-accent" />

        <div className="timeline-role">{role}</div>

        {description && (
          <p className="timeline-description">{description}</p>
        )}

        {bullets && (
          <ul className="timeline-bullets">
            {bullets.map((bullet, i) => (
              <li key={i} className="timeline-bullet-item">
                <span className="bullet-arrow">▸</span>
                <span dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            ))}
          </ul>
        )}

        <div className="timeline-tags">
          {tags.map((tag, i) => (
            <span className="tag-pill" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Main Experience Page ────────────────────────────────────────
const Experience = () => {
  const experiences = [
    {
      company: '10Pearls',
      date: '2025',
      type: 'Internship',
      role: 'Software Engineering Intern',
      description: `Worked as part of a professional product engineering team at a leading digital transformation company. Contributed to building a full-stack web application using the MERN stack with TypeScript, under the guidance of a technical mentor. Gained hands-on experience across the full Software Development Life Cycle (SDLC) in a real Agile environment, including sprint planning, code reviews, and production deployments.`,
      tags: ['MERN Stack', 'TypeScript', 'Agile', 'Code Review', 'SDLC', 'Production'],
    },
    {
      company: 'Wetual PVT',
      date: '2025',
      type: 'Internship',
      role: 'Financial Data Analyst',
      description: `Worked at an early-stage startup focused on financial data analysis and investment operations. Analyzed financial datasets using Python and SQL to extract actionable insights, supported the drafting of SAFE agreements for fundraising rounds, and conducted outreach to over 50 startups achieving a 95% positive response rate. Gained exposure to startup finance operations and data-driven decision making.`,
      tags: ['Python', 'SQL', 'Excel', 'Financial Analysis', 'SAFE Agreements', 'Startup Outreach'],
    },
    {
      company: 'LUMS Senior Year Project',
      date: 'Full Year · 2025–2026',
      type: 'Team Lead',
      role: 'Software Engineer — CI/CD & AI Backend',
      bullets: [
        'Led a team of 5 developers in building an AI-powered maternal motherhood application designed to help mothers care for their children more efficiently through intelligent, data-driven features.',
        'Owned the <strong style="color: #e8edf2; font-weight: 500;">CI/CD pipeline</strong> — designed and configured automated build, test, and deployment workflows to enforce quality gates and streamline releases.',
        'Designed and implemented a <strong style="color: #e8edf2; font-weight: 500;">multi-tenant RAG system</strong> powering intelligent, context-aware features for the Motherhood app.',
        'Engineered a <strong style="color: #e8edf2; font-weight: 500;">database AI agent</strong> enabling natural-language querying over relational data, integrating LLM outputs with structured databases using FastAPI. Leveraged Llama.cpp to run a local Qwen model for low-latency, privacy-preserving inference.',
      ],
      tags: [
        'Team Leadership',
        'CI/CD',
        'RAG',
        'LLM',
        'Multi-tenant',
        'FastAPI',
        'Llama.cpp',
        'Qwen',
      ],
    },
    {
      company: 'LUMS Directed Research',
      date: 'Research Assistantship',
      type: 'Research',
      role: 'Backend Engineer Assistant',
      description: `Contributed to a faculty-supervised research project focused on identifying common security risks in modern applications—such as XSS attacks, CSRF vulnerabilities, and insecure authentication flows—and exploring mitigation strategies. Assisted in designing and developing backend systems using FastAPI to prototype and test research findings, including implementing authentication mechanisms, building RESTful APIs, and structuring the data layer while applying strong system design principles.`,
      tags: ['FastAPI', 'Authentication', 'REST APIs', 'System Design', 'Backend', 'Security'],
    },
  ];

  return (
    <>
      {/* Global styles - MUST be first */}
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

        .experience-page {
          position: relative;
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          overflow: hidden;
          font-family: var(--font-body);
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
        
        .orb-3 {
          width: 400px; 
          height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%);
          top: 60%; 
          right: -100px;
          animation: float3 9s ease-in-out infinite;
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

        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(-25px, 20px); }
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

        /* Timeline styles */
        .timeline-item {
          display: grid;
          grid-template-columns: 280px 1fr;
          margin-bottom: 2px;
        }

        .timeline-left {
          position: relative;
          padding: 48px 32px 48px 48px;
          border-bottom: 1px solid var(--border);
          border-right: 1px solid var(--border);
          background: var(--surface);
        }

        .timeline-dot {
          position: absolute;
          right: -5px;
          top: 56px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--cyan);
          z-index: 2;
          animation: pulse-dot 3s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 8px rgba(0,212,255,0.4); }
          50%    { box-shadow: 0 0 20px rgba(0,212,255,0.7); }
        }

        .timeline-company {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          letter-spacing: 0.04em;
          color: var(--text);
          line-height: 1.2;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .timeline-date {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .timeline-type {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid rgba(0,255,136,0.3);
          color: var(--green);
          background: var(--green-dim);
        }

        .timeline-right {
          position: relative;
          padding: 48px;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-left: none;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        .timeline-right:hover {
          background: var(--surface2);
        }

        .card-accent {
          position: absolute;
          top: 0; 
          left: 0; 
          right: 0;
          height: 1px;
          background: transparent;
          transition: background 0.3s ease;
          z-index: 1;
        }

        .timeline-right:hover .card-accent {
          background: linear-gradient(90deg, var(--cyan), transparent);
        }

        .timeline-role {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .timeline-description {
          font-size: clamp(0.85rem, 1.2vw, 0.93rem);
          color: var(--text2);
          line-height: 1.8;
          margin-bottom: 24px;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        .timeline-bullets {
          list-style: none;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .timeline-bullet-item {
          font-size: clamp(0.82rem, 1.1vw, 0.87rem);
          color: var(--text2);
          line-height: 1.8;
          padding-left: 20px;
          position: relative;
          margin-bottom: 12px;
          font-weight: 300;
        }

        .bullet-arrow {
          position: absolute;
          left: 0;
          color: var(--cyan);
          font-size: 0.75rem;
          top: 4px;
        }

        .timeline-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          position: relative;
          z-index: 1;
        }

        .tag-pill {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid var(--border2);
          color: var(--text2);
          transition: all 0.2s;
          cursor: default;
          white-space: nowrap;
        }

        .tag-pill:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--cyan-dim);
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .anim-fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, var(--cyan), #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Hero section */
        .hero-section {
          padding-top: clamp(100px, 15vh, 140px);
          padding-left: clamp(20px, 5vw, 60px);
          padding-right: clamp(20px, 5vw, 60px);
          padding-bottom: clamp(40px, 8vh, 72px);
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 40px;
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 10;
        }

        .timeline-section {
          position: relative;
          padding: clamp(40px, 8vh, 80px) clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          z-index: 10;
        }

        /* Vertical timeline line */
        .timeline-line {
          position: absolute;
          left: 48px;
          top: 80px;
          bottom: 80px;
          width: 1px;
          background: linear-gradient(180deg, var(--cyan) 0%, var(--border) 100%);
          z-index: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .side-label { display: none; }
          .page-counter { right: 12px; font-size: 0.45rem; }
          
          .timeline-item {
            grid-template-columns: 1fr !important;
          }
          
          .timeline-left {
            border-right: none !important;
            padding: 32px 24px !important;
          }
          
          .timeline-right {
            border-left: 1px solid var(--border) !important;
            padding: 32px 24px !important;
          }
          
          .timeline-dot { display: none; }
          .timeline-line { display: none; }
        }

        @media (max-width: 768px) {
          .page-counter { display: none; }
          .hero-section {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .tag-pill {
            font-size: 0.5rem !important;
            padding: 3px 8px !important;
          }
        }
      `}</style>

      {/* Grid background */}
      <div className="grid-bg" />

      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Scanline effect */}
      <div className="scanline" />

      {/* Navbar */}
      <Navbar />

      {/* Side label */}
      <div className="side-label">Experience · Timeline</div>

      {/* Page counter */}
      <div className="page-counter">01 / 05</div>

      {/* Hero section */}
      <div className="hero-section">
        <div>
          <div
            className="anim-fade-up-0"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '16px',
            }}
          >
            Professional & Research
          </div>
          <h1
            className="anim-fade-up-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              letterSpacing: '0.02em',
              color: 'var(--text)',
              lineHeight: 1,
              fontWeight: 400,
            }}
          >
            Work<br />
            <span className="gradient-text">Experience</span>
          </h1>
        </div>
        <div
          className="anim-fade-up-2"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem',
            letterSpacing: '0.16em',
            color: 'var(--text2)',
            textAlign: 'right',
            lineHeight: 2,
          }}
        >
          <div>Internships</div>
          <div>Research Roles</div>
          <div>Project Leadership</div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="timeline-section">
        {/* Vertical timeline line */}
        <div className="timeline-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;