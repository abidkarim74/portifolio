// pages/Projects.tsx
"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import NurraImg from "../assets/nurra.jpeg";
import LumspireImg from "../assets/lumspire.jpeg";
import CarawanImg from "../assets/carawan.jpeg";

// ── Main Projects Page ──────────────────────────────────────────
const Projects = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, i * 120);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Video/image hover brightness
    const blocks = document.querySelectorAll('.proj-block');
    blocks.forEach(block => {
      const media = block.querySelector('video, img');
      if (media) {
        block.addEventListener('mouseenter', () => { 
          (media as HTMLElement).style.opacity = '1'; 
          (media as HTMLElement).style.transform = 'scale(1.03)';
        });
        block.addEventListener('mouseleave', () => { 
          (media as HTMLElement).style.opacity = '0.85'; 
          (media as HTMLElement).style.transform = 'scale(1)';
        });
      }
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
          --cyan-glow: rgba(0,212,255,0.2);
          --green:     #00ff88;
          --green-dim: rgba(0,255,136,0.06);
          --orange:    #ff6b35;
          --orange-dim: rgba(255,107,53,0.06);
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

        .orb-3 {
          width: 400px; 
          height: 400px;
          background: radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%);
          top: 40%; 
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

        /* Page hero */
        .page-hero {
          padding: clamp(100px, 15vh, 140px) clamp(20px, 5vw, 60px) clamp(40px, 8vh, 72px);
          max-width: 1400px;
          margin: 0 auto;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          gap: 40px;
          position: relative;
          z-index: 10;
        }

        .page-hero-right {
          font-size: 0.9rem;
          color: var(--text2);
          line-height: 1.9;
          font-weight: 300;
          max-width: 380px;
          margin-left: auto;
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
          font-size: clamp(2.6rem, 6vw, 5rem);
          color: var(--text);
          font-weight: 400;
          line-height: 1.05;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--cyan), #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Projects */
        .projects-wrap {
          padding: 80px clamp(20px, 5vw, 60px);
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
          position: relative;
          z-index: 10;
        }

        .proj-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--surface);
          border: 1px solid var(--border);
          min-height: 480px;
          transition: border-color 0.3s;
          overflow: hidden;
        }

        .proj-block:hover { 
          border-color: var(--border2); 
        }

        .proj-block.flip { 
          direction: rtl; 
        }

        .proj-block.flip > * { 
          direction: ltr; 
        }

        /* Media side */
        .proj-media {
          position: relative;
          background: var(--bg3);
          overflow: hidden;
        }

        /* 
          Nurra is a mobile screenshot — cover + center looks great.
          Lumspire & Carawan are desktop/wide screenshots — use contain
          so the entire UI is visible with no cropping.
        */
        .proj-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          opacity: 0.85;
          transition: opacity 0.4s, transform 0.6s;
        }

        /* Desktop screenshots: contain so full image shows, no cropping */
        .proj-media.desktop-screenshot {
          background: #080c0f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .proj-media.desktop-screenshot img {
          object-fit: contain;
          object-position: center center;
          width: 100%;
          height: 100%;
          padding: 12px;
        }

        /* Overlay on media */
        .proj-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,212,255,0.06), transparent);
          pointer-events: none;
        }

        .proj-num-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          font-family: var(--font-display);
          font-size: 6rem;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.06);
          line-height: 1;
          pointer-events: none;
        }

        /* Content side */
        .proj-content {
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .proj-num {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .proj-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 3.5vw, 3.5rem);
          letter-spacing: 0.04em;
          color: var(--text);
          line-height: 0.95;
          margin-bottom: 8px;
        }

        .proj-tagline {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          color: var(--orange);
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .proj-desc {
          font-size: 0.9rem;
          color: var(--text2);
          line-height: 1.85;
          margin-bottom: 22px;
          font-weight: 300;
        }

        .proj-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .proj-highlights li {
          font-size: 0.84rem;
          color: var(--text2);
          line-height: 1.7;
          padding-left: 18px;
          position: relative;
          font-weight: 300;
        }

        .proj-highlights li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--cyan);
          font-size: 0.7rem;
        }

        .proj-highlights strong { 
          color: var(--text); 
          font-weight: 500; 
        }

        .proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 24px;
        }

        .proj-tech-tag {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 1px solid var(--border2);
          color: var(--text2);
          transition: all 0.2s;
          cursor: default;
        }

        .proj-tech-tag:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          background: var(--cyan-dim);
        }

        .proj-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .proj-link {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cyan);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid rgba(0,212,255,0.3);
          transition: all 0.25s;
        }

        .proj-link:hover {
          background: var(--cyan-dim);
          box-shadow: 0 0 12px var(--cyan-glow);
        }

        .proj-link.secondary {
          border-color: var(--border2);
          color: var(--muted);
        }

        .proj-link.secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
          background: var(--orange-dim);
          box-shadow: none;
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-fade-up-0 { animation: fadeUp 0.7s 0.0s ease both; }
        .anim-fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .anim-fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }

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

        /* ── Responsive ────────────────────────────────────── */

        /* Large tablets / small desktops */
        @media (max-width: 1100px) {
          .proj-content {
            padding: 40px 36px;
          }

          .proj-highlights li {
            font-size: 0.82rem;
          }
        }

        /* Tablets (portrait + landscape) */
        @media (max-width: 900px) {
          .page-hero { 
            grid-template-columns: 1fr;
            padding: 100px 24px 40px;
          }
          
          .page-hero-right {
            max-width: 100%;
            margin-left: 0;
          }
          
          .projects-wrap { 
            padding: 60px 24px;
            gap: 16px;
          }
          
          /* Stack image on top, content below */
          .proj-block { 
            grid-template-columns: 1fr;
            min-height: auto;
          }
          
          /* Remove RTL flip on mobile — always image on top */
          .proj-block.flip { 
            direction: ltr;
          }

          /* On stacked layout, image comes first visually */
          .proj-block.flip .proj-media {
            order: -1;
          }
          
          .proj-media { 
            min-height: 260px;
          }

          .proj-content { 
            padding: 32px 28px;
          }

          .proj-title {
            font-size: clamp(2rem, 6vw, 2.8rem);
          }
          
          .side-label { 
            display: none; 
          }
          
          .page-counter { 
            right: 12px; 
            font-size: 0.45rem; 
          }

          .proj-num-overlay {
            font-size: 5rem;
          }
        }

        /* Phones (landscape) */
        @media (max-width: 768px) {
          .page-counter { 
            display: none; 
          }

          .proj-media {
            min-height: 220px;
          }

          .proj-content {
            padding: 28px 20px;
          }

          .sec-title {
            font-size: clamp(2.2rem, 8vw, 3rem);
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .page-hero {
            padding: 90px 16px 32px;
          }

          .projects-wrap {
            padding: 40px 16px;
          }

          .proj-num-overlay {
            font-size: 3.5rem;
          }
          
          .proj-links {
            flex-direction: column;
          }
          
          .proj-link {
            justify-content: center;
            text-align: center;
          }

          .proj-content {
            padding: 24px 16px;
          }

          .proj-media {
            min-height: 200px;
          }

          .proj-tech {
            gap: 4px;
          }

          .proj-tech-tag {
            font-size: 0.52rem;
            padding: 3px 8px;
          }

          .proj-highlights li {
            font-size: 0.8rem;
          }

          .proj-desc {
            font-size: 0.85rem;
          }
        }

        /* Very small phones */
        @media (max-width: 360px) {
          .sec-title {
            font-size: 2rem;
          }

          .proj-title {
            font-size: 1.8rem;
          }

          .proj-media {
            min-height: 180px;
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
      <div className="side-label">Projects · Portfolio</div>

      {/* Page counter */}
      <div className="page-counter">03 / 05</div>

      {/* Page hero */}
      <div className="page-hero">
        <div>
          <div className="sec-label anim-fade-up-0">Built from scratch</div>
          <h1 className="sec-title anim-fade-up-1">
            Personal &amp; Academic<br />
            <span className="gradient-text">Projects</span>
          </h1>
        </div>
        <p className="page-hero-right anim-fade-up-2">
          Full-stack applications engineered end-to-end — from architecture decisions to production deployments.
          Real problems, real users, real constraints.
        </p>
      </div>

      {/* Projects */}
      <div className="projects-wrap">

        {/* Project 01: Nurra (Senior Year Project) — desktop screenshot, contain */}
        <div className="proj-block reveal">
          <div className="proj-media desktop-screenshot">
            <img 
              src={NurraImg} 
              alt="Nurra Motherhood App"
            />
            <div className="proj-media-overlay" />
            <div className="proj-num-overlay">01</div>
          </div>
          <div className="proj-content">
            <div className="proj-num">Senior Year Capstone · 01</div>
            <h2 className="proj-title">Nurra</h2>
            <div className="proj-tagline">Motherhood App · AI-Powered · Team Lead</div>
            <p className="proj-desc">
              Led a team of 5 developers to build a comprehensive motherhood application supporting mothers 
              through child care with intelligent, data-driven features. Integrated cutting-edge AI capabilities 
              for a truly assistive experience.
            </p>
            <ul className="proj-highlights">
              <li><strong>Vaccination tracking</strong> with reminders for upcoming doses</li>
              <li><strong>Secure record-keeping</strong> for child health data &amp; growth tracking</li>
              <li><strong>Community forum</strong> for mothers to connect and share experiences</li>
              <li><strong>Library of tutorials</strong> and learning resources</li>
              <li>Integrated <strong>multi-tenant RAG system</strong> &amp; SQL agent AI assistant for child growth, vaccinations, and parenting queries</li>
              <li><strong>Local AI inference</strong> using LLaMA.cpp with Qwen2.5:4B model; Gemini for production</li>
            </ul>
            <div className="proj-tech">
              <span className="proj-tech-tag">React</span>
              <span className="proj-tech-tag">TypeScript</span>
              <span className="proj-tech-tag">Tailwind CSS</span>
              <span className="proj-tech-tag">FastAPI</span>
              <span className="proj-tech-tag">PostgreSQL</span>
              <span className="proj-tech-tag">MongoDB</span>
              <span className="proj-tech-tag">LLaMA.cpp</span>
              <span className="proj-tech-tag">Qwen2.5</span>
              <span className="proj-tech-tag">Gemini API</span>
              <span className="proj-tech-tag">FAISS</span>
              <span className="proj-tech-tag">ChromaDB</span>
              <span className="proj-tech-tag">RAG</span>
              <span className="proj-tech-tag">Multi-tenant</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/abidkarim74/SeniorYearProject_MotherhoodApp-FastAPI_React" target="_blank" rel="noopener noreferrer" className="proj-link">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
                GitHub
              </a>
              <a href="#" className="proj-link secondary">Live Demo N/A</a>
            </div>
          </div>
        </div>

        {/* Project 02: CampusCaravan — desktop screenshot, anchor top */}
        <div className="proj-block flip reveal">
          <div className="proj-media desktop-screenshot">
            <img 
              src={CarawanImg} 
              alt="CampusCaravan Screenshot"
            />
            <div className="proj-media-overlay" />
            <div className="proj-num-overlay">02</div>
          </div>
          <div className="proj-content">
            <div className="proj-num">Software Engineering Course · 02</div>
            <h2 className="proj-title">Campus Caravan</h2>
            <div className="proj-tagline">Carpooling · 150+ Users · Jan–May 2024</div>
            <p className="proj-desc">
              Led a team of 5 to design and ship a full-featured carpooling platform for the LUMS community,
              achieving 150+ sign-ups and reducing commuting costs by an estimated 40%.
            </p>
            <ul className="proj-highlights">
              <li>Built backend with <strong>Node.js, TypeScript, PostgreSQL</strong> — owned architecture, schema design, and query optimization.</li>
              <li>Implemented <strong>real-time chat</strong> via WebSockets for live driver-rider coordination.</li>
              <li>Integrated <strong>Gemini API</strong> for AI-powered content moderation.</li>
              <li>Secured with <strong>JWT auth</strong> using HTTP-only cookies.</li>
              <li>Optimized queries improving search performance by <strong>30%</strong>.</li>
            </ul>
            <div className="proj-tech">
              <span className="proj-tech-tag">Node.js</span>
              <span className="proj-tech-tag">TypeScript</span>
              <span className="proj-tech-tag">Express</span>
              <span className="proj-tech-tag">React</span>
              <span className="proj-tech-tag">PostgreSQL</span>
              <span className="proj-tech-tag">WebSockets</span>
              <span className="proj-tech-tag">Gemini API</span>
              <span className="proj-tech-tag">JWT</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/abidkarim74/Software-Engineering-CS-360-PERN-Stack" target="_blank" rel="noopener noreferrer" className="proj-link">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 03: Lumspire — desktop screenshot, anchor top */}
        <div className="proj-block reveal">
          <div className="proj-media desktop-screenshot">
            <img 
              src={LumspireImg} 
              alt="Lumspire Fashion Platform"
            />
            <div className="proj-media-overlay" />
            <div className="proj-num-overlay">03</div>
          </div>
          <div className="proj-content">
            <div className="proj-num">Personal Project · 03</div>
            <h2 className="proj-title">Lumspire</h2>
            <div className="proj-tagline">MERN Stack · Real-time · Visual-first</div>
            <p className="proj-desc">
              A real-time fashion and visual discovery platform where users can explore, share, and organize
              fashion content through an intuitive, interactive interface. Focused on fluid UX, real-time
              updates, and visual-first content organization.
            </p>
            <div className="proj-tech">
              <span className="proj-tech-tag">MongoDB</span>
              <span className="proj-tech-tag">Express</span>
              <span className="proj-tech-tag">React</span>
              <span className="proj-tech-tag">Node.js</span>
              <span className="proj-tech-tag">REST API</span>
              <span className="proj-tech-tag">Real-time</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/abidkarim74/Visual-Discovery-Fashion-Web-App---MERN-Stack-" target="_blank" rel="noopener noreferrer" className="proj-link">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
                GitHub
              </a>
              <a href="#" className="proj-link secondary">Live Demo N/A</a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;