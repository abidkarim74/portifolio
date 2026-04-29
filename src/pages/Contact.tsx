// pages/Contact.tsx
"use client";

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import resume from "../assets/resume.pdf"

// ── Main Contact Page ───────────────────────────────────────────
const Contact = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

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

        /* Contact wrap */
        .contact-wrap {
          min-height: calc(100vh - 56px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          z-index: 10;
        }

        /* Left: big text + social */
        .contact-left {
          padding: 100px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        /* Big ambient text behind */
        .contact-ambient {
          position: absolute;
          bottom: -40px;
          left: -20px;
          font-family: var(--font-display);
          font-size: 18rem;
          letter-spacing: -0.02em;
          color: rgba(255,255,255,0.018);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .contact-kicker {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: fadeUp 0.6s ease both;
        }

        .contact-kicker::before {
          content: '';
          width: 20px;
          height: 1px;
          background: var(--cyan);
          display: inline-block;
        }

        .contact-heading {
          font-family: var(--font-display);
          font-size: clamp(4rem, 7vw, 8rem);
          letter-spacing: 0.02em;
          color: var(--text);
          line-height: 0.9;
          margin-bottom: 36px;
          animation: fadeUp 0.6s 0.1s ease both;
        }

        .contact-heading .accent { 
          color: var(--cyan); 
        }

        .contact-note {
          font-size: 0.93rem;
          color: var(--text2);
          line-height: 1.85;
          max-width: 380px;
          margin-bottom: 48px;
          font-weight: 300;
          animation: fadeUp 0.6s 0.2s ease both;
        }

        /* Status badge */
        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(0,255,136,0.25);
          background: var(--green-dim);
          padding: 10px 18px;
          animation: fadeUp 0.6s 0.3s ease both;
          width: fit-content;
        }

        .avail-dot {
          width: 8px; 
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,136,0.4); }
          50%    { opacity: 0.6; box-shadow: 0 0 0 6px rgba(0,255,136,0); }
        }

        .avail-text {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--green);
        }

        /* Right: contact items */
        .contact-right {
          padding: 100px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 28px 28px;
          background: var(--surface);
          border: 1px solid var(--border);
          text-decoration: none;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .contact-item::before {
          content: '';
          position: absolute;
          left: 0; 
          top: 0; 
          bottom: 0;
          width: 2px;
          background: var(--cyan);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          background: var(--surface2);
          transform: translateX(6px);
          border-color: var(--border2);
        }

        .contact-item:hover::before { 
          transform: scaleY(1); 
        }

        .contact-icon {
          width: 42px; 
          height: 42px;
          background: var(--cyan-dim);
          border: 1px solid rgba(0,212,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .contact-item:hover .contact-icon {
          background: rgba(0,212,255,0.2);
          box-shadow: 0 0 16px var(--cyan-glow);
        }

        .contact-label {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }

        .contact-value {
          font-size: 0.9rem;
          color: var(--text);
          font-weight: 400;
        }

        .contact-arrow {
          margin-left: auto;
          color: var(--muted);
          transition: all 0.3s;
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        .contact-item:hover .contact-arrow {
          color: var(--cyan);
          transform: translateX(4px);
        }

        /* Footer strip */
        .contact-footer {
          grid-column: 1 / -1;
          border-top: 1px solid var(--border);
          padding: 20px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-footer p {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          letter-spacing: 0.14em;
          color: var(--muted);
          text-transform: uppercase;
        }

        /* Entrance animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

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
          .contact-wrap { 
            grid-template-columns: 1fr !important; 
          }
          
          .contact-left { 
            padding: 80px 20px 40px !important; 
            border-right: none !important; 
            border-bottom: 1px solid var(--border) !important; 
          }
          
          .contact-right { 
            padding: 40px 20px 60px !important; 
          }
          
          .contact-footer { 
            padding: 20px !important; 
            flex-direction: column !important; 
            gap: 8px !important; 
            text-align: center !important;
          }
          
          .contact-ambient { 
            display: none !important; 
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
          
          .contact-heading {
            font-size: clamp(3rem, 10vw, 5rem) !important;
          }
        }

        @media (max-width: 480px) {
          .contact-item {
            padding: 20px !important;
            gap: 14px !important;
          }
          
          .contact-icon {
            width: 36px !important;
            height: 36px !important;
          }
          
          .contact-value {
            font-size: 0.8rem !important;
            word-break: break-all;
          }
          
          .availability-badge {
            padding: 8px 14px !important;
          }
          
          .avail-text {
            font-size: 0.52rem !important;
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
            <div className="side-label">Contact · Connect</div>

            {/* Page counter */}
            <div className="page-counter">05 / 05</div>

            {/* Contact content */}
            <div className="contact-wrap">

                {/* Left */}
                <div className="contact-left">
                    <div className="contact-ambient">HI</div>
                    <div className="contact-kicker">Get in touch</div>
                    <h1 className="contact-heading">
                        Let's<br />
                        build<br />
                        <span className="accent">great</span><br />
                        things.
                    </h1>
                    <p className="contact-note">
                        Fresh CS graduate from LUMS, actively seeking full-time software engineering roles.
                        Open to backend, full-stack, and AI-adjacent positions. Based in Pakistan, open to relocation.
                    </p>
                    <div className="availability-badge">
                        <div className="avail-dot"></div>
                        <span className="avail-text">Available for opportunities</span>
                    </div>
                </div>

                {/* Right */}
                <div className="contact-right">

                    <a href="mailto:karimabid737@gmail.com" className="contact-item reveal">
                        <div className="contact-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">Email</div>
                            <div className="contact-value">karimabid737@gmail.com</div>
                        </div>
                        <span className="contact-arrow">→</span>
                    </a>

                    <a href="https://www.linkedin.com/in/abid-karim123/" target="_blank" rel="noopener noreferrer" className="contact-item reveal">
                        <div className="contact-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">LinkedIn</div>
                            <div className="contact-value">linkedin.com/in/abid-karim123</div>
                        </div>
                        <span className="contact-arrow">→</span>
                    </a>

                    <a href="https://github.com/abidkarim74" target="_blank" rel="noopener noreferrer" className="contact-item reveal">
                        <div className="contact-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">GitHub</div>
                            <div className="contact-value">github.com/abidkarim74</div>
                        </div>
                        <span className="contact-arrow">→</span>
                    </a>

                    <a href="https://x.com/abid_codes" target="_blank" rel="noopener noreferrer" className="contact-item reveal">
                        <div className="contact-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">X (Twitter)</div>
                            <div className="contact-value">x.com/abid_codes</div>
                        </div>
                        <span className="contact-arrow">→</span>
                    </a>

                    <a href={resume} download className="contact-item reveal">
                        <div className="contact-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                <polyline points="14,2 14,8 20,8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">Resume</div>
                            <div className="contact-value">Download PDF</div>
                        </div>
                        <span className="contact-arrow">↓</span>
                    </a>

                </div>

                {/* Footer strip */}
                <div className="contact-footer">
                    <p>© 2026 · Abid Karim · CS @ LUMS</p>
                    <p>Engineered with precision.</p>
                </div>

            </div>
        </>
    );
};

export default Contact;