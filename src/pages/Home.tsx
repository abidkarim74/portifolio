// pages/HomePage.tsx
"use client";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import meImage from "../assets/me.jpeg";
import resume from "../assets/resume.pdf"


const PageStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@300;400;500;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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
      --orange:    #ff6b35;
      --font-display: 'DM Serif Display', serif;
      --font-mono:    'JetBrains Mono', monospace;
      --font-body:    'Syne', sans-serif;
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-body);
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
      overflow-x: hidden;
    }

    .grid-bg {
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
      z-index: 0;
    }

    .orb { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
    .orb-1 {
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%);
      top: -200px; right: -100px;
      animation: float1 8s ease-in-out infinite;
    }
    .orb-2 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%);
      bottom: 100px; left: -100px;
      animation: float2 10s ease-in-out infinite;
    }
    @keyframes float1 {
      0%,100% { transform: translate(0,0); }
      50%      { transform: translate(-30px, 40px); }
    }
    @keyframes float2 {
      0%,100% { transform: translate(0,0); }
      50%      { transform: translate(20px, -30px); }
    }

    .scanline {
      position: absolute; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent);
      animation: scanline 6s linear infinite;
      pointer-events: none;
    }
    @keyframes scanline {
      0%   { top: -2px; }
      100% { top: 100%; }
    }

    .ticker-inner {
      display: flex;
      gap: 60px;
      animation: ticker 20s linear infinite;
      white-space: nowrap;
    }
    @keyframes ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }

    .status-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--green);
      animation: pulse-dot 2s ease-in-out infinite;
      flex-shrink: 0;
    }
    @keyframes pulse-dot {
      0%,100% { opacity: 1; transform: scale(1); }
      50%      { opacity: 0.5; transform: scale(0.8); }
    }

    .hero-panel { position: relative; }
    .hero-panel::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--cyan), var(--green));
    }

    .panel-label::before { content: '//'; color: var(--cyan); margin-right: 8px; }

    .hero-title::after {
      content: '';
      flex: 1;
      max-width: 200px;
      height: 1px;
      background: var(--border2);
    }

    .hero-name .last {
      display: block;
      background: linear-gradient(135deg, var(--cyan), var(--green));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .sec-title span {
      background: linear-gradient(135deg, var(--cyan), var(--green));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

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
    .anim-fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
    .anim-fade-up-4 { animation: fadeUp 0.7s 0.4s ease both; }
    .anim-fade-in-5 { animation: fadeIn 0.9s 0.5s ease both; }

    .pill {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      padding: 4px 9px;
      border: 1px solid var(--border2);
      color: var(--text2);
      transition: all 0.2s;
      cursor: default;
    }
    .pill:hover {
      border-color: var(--cyan);
      color: var(--cyan);
      background: var(--cyan-dim);
    }

    .nav-card { transition: background 0.3s; }
    .nav-card:hover { background: var(--surface2) !important; }
    .nav-card:hover .card-accent { transform: scaleX(1) !important; }

    .stat { transition: background 0.25s; }
    .stat:hover { background: var(--surface2) !important; }

    .btn {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 12px 24px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.25s;
      border: none;
      display: inline-block;
      white-space: nowrap;
    }
    .btn-primary { background: var(--cyan); color: #000; }
    .btn-primary:hover { background: #00b8dc; }
    .btn-ghost { background: transparent; color: var(--text2); border: 1px solid var(--border2); }
    .btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); }

    .side-label {
      position: fixed;
      left: 20px; top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      font-family: var(--font-mono);
      font-size: 0.5rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--muted);
      z-index: 50;
      pointer-events: none;
    }

    .sec-label {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--cyan);
      margin-bottom: 10px;
    }
    .sec-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 2.8rem);
      color: var(--text);
      font-weight: 400;
    }

    /* ── Photo frame ── */
    .photo-frame {
      position: relative;
      width: 100%;
      aspect-ratio: 3 / 4;
      overflow: hidden;
      border: 1px solid var(--border2);
    }
    .photo-frame::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--cyan), var(--green));
      z-index: 2;
    }
    .photo-frame::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(8,12,15,0.6) 0%, transparent 50%);
      z-index: 1;
      pointer-events: none;
    }
    .photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      filter: grayscale(20%) contrast(1.05);
      transition: filter 0.4s ease, transform 0.4s ease;
    }
    .photo-frame:hover img {
      filter: grayscale(0%) contrast(1.1);
      transform: scale(1.03);
    }
    .photo-tag {
      position: absolute;
      bottom: 12px;
      left: 12px;
      z-index: 3;
      font-family: var(--font-mono);
      font-size: 0.52rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--cyan);
      background: rgba(8,12,15,0.75);
      padding: 4px 10px;
      border: 1px solid rgba(0,212,255,0.25);
      backdrop-filter: blur(6px);
    }

    .hero-inner {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 0;
      align-items: center;
      padding: 80px clamp(20px, 5vw, 60px);
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
      position: relative;
      z-index: 2;
    }

    /* Right column: photo on top, panel below */
    .hero-right {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .nav-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2px;
    }

    .hero-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
      .hero-inner {
        grid-template-columns: 1fr 320px;
        gap: 40px;
      }
    }

    @media (max-width: 900px) {
      .hero-inner {
        grid-template-columns: 1fr !important;
        padding: 80px 20px 40px !important;
        gap: 40px !important;
      }
      .hero-panel {
        display: block !important;
        width: 100%;
      }
      .photo-frame {
        aspect-ratio: 4 / 3;
        max-height: 280px;
      }
      .side-label { display: none !important; }
      .hero-panel-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .nav-cards-grid {
        grid-template-columns: 1fr !important;
      }
      .nav-cards-section {
        padding: 60px 20px !important;
      }
    }

    @media (max-width: 480px) {
      .hero-name {
        font-size: clamp(4rem, 18vw, 5.5rem) !important;
      }
      .hero-status {
        font-size: 0.52rem !important;
        padding: 5px 10px !important;
      }
      .btn {
        font-size: 0.58rem !important;
        padding: 11px 18px !important;
      }
      .hero-actions { gap: 10px; }
      .stats-grid {
        grid-template-columns: 1fr 1fr !important;
      }
      .ticker-wrapper {
        padding: 16px 20px !important;
      }
      .sec-label { font-size: 0.55rem; }
    }

    @media (max-width: 360px) {
      .hero-actions { flex-direction: column; }
      .btn { width: 100%; text-align: center; }
    }

    @media (min-width: 481px) and (max-width: 900px) {
      .nav-cards-grid {
        grid-template-columns: 1fr 1fr !important;
      }
      .nav-cards-grid .reveal:last-child {
        grid-column: 1 / -1;
      }
    }
  `}</style>
);

const TICKER_ITEMS: string[] = [
  "AI Backend Engineer", "LUMS CS 2026", "LLM Pipeline Design",
  "RAG Systems", "Open to Work", "Vector Databases",
  "API Infrastructure", "Full Stack Capable", "Technical Mentor",
];

interface Stat { val: string; lbl: string; }
const STATS: Stat[] = [
  { val: "3",    lbl: "TA Positions"      },
  { val: "2",    lbl: "Tech Internships"  },
  { val: "550+", lbl: "Students Impacted" },
  { val: "1",    lbl: "Directed Research" },
];

const AI_STACK:   string[] = ["RAG","LangChain","FastAPI","LLM APIs","PostgreSQL","Vector DBs","Django","Docker","CI/CD","WebSockets"];
const ALSO_STACK: string[] = ["MERN","TypeScript","Node.js","React"];

interface NavCard { num: string; cat: string; title: string; desc: string; color: string; to: string; }

const NAV_CARDS: NavCard[] = [
  { num: "01", cat: "Professional", title: "Experience", desc: "Full-stack software engineering internship at 10Pearls and a financial data internship using SQL & Python at a startup.", color: "var(--cyan)",   to: "/experience" },
  { num: "02", cat: "Academic",     title: "Teaching",   desc: "3 TA positions across CS core courses, mentoring 550+ students.",                                                        color: "var(--green)",  to: "/teaching"   },
  { num: "03", cat: "Personal & Academic", title: "Projects", desc: "AI-powered backend systems and applications built through personal and university projects.",                        color: "var(--orange)", to: "/projects"   },
];

// ── Photo + Panel stacked in right column ─────────────────────
function HeroRight() {
  return (
    <div className="hero-right anim-fade-in-5">
      {/* Photo */}
      <div className="photo-frame">
        <img src={meImage} alt="Abid Karim" />
        <span className="photo-tag">Abid Karim · LUMS '26</span>
      </div>

      {/* Stats panel */}
      <div
        className="hero-panel"
        style={{
          background: "var(--surface)",
          border:     "1px solid var(--border2)",
          padding:    "24px",
        }}
      >
        <div
          className="panel-label"
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color:         "var(--muted)",
            marginBottom:  "20px",
            display:       "flex",
            alignItems:    "center",
          }}
        >
          profile.json
        </div>

        {/* Stats 2×2 */}
        <div
          className="stats-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "1px",
            background:          "var(--border)",
            marginBottom:        "20px",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.lbl}
              className="stat"
              style={{ background: "var(--surface)", padding: "18px 14px" }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.02em", color: "var(--cyan)", lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginTop: "4px" }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "14px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "10px" }}>
            // ai backend stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "5px" }}>
            {AI_STACK.map((p) => <span className="pill" key={p}>{p}</span>)}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", margin: "12px 0 10px" }}>
            // also fluent in
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "5px" }}>
            {ALSO_STACK.map((p) => <span className="pill" key={p} style={{ opacity: 0.6 }}>{p}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      className="ticker-wrapper"
      style={{
        borderTop: "1px solid var(--border)",
        padding:   "16px clamp(20px, 5vw, 60px)",
        overflow:  "hidden",
        position:  "relative",
        zIndex:    2,
      }}
    >
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "0.58rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color:         "var(--muted)",
              display:       "flex",
              alignItems:    "center",
              gap:           "12px",
              flexShrink:    0,
            }}
          >
            {item} <span style={{ color: "var(--cyan)" }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavCards() {
  return (
    <section
      className="nav-cards-section"
      style={{
        padding:  "80px clamp(20px, 5vw, 60px)",
        maxWidth: 1400,
        margin:   "0 auto",
        position: "relative",
        zIndex:   2,
      }}
    >
      <div className="sec-head reveal" style={{ marginBottom: 40 }}>
        <div className="sec-label">Navigate</div>
        <h2 className="sec-title">Explore my <span>work</span></h2>
      </div>

      <div className="nav-cards-grid">
        {NAV_CARDS.map((card) => (
          <Link to={card.to} style={{ textDecoration: "none" }} className="reveal" key={card.num}>
            <div
              className="nav-card"
              style={{
                background: "var(--surface)",
                border:     "1px solid var(--border)",
                padding:    "clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px)",
                position:   "relative",
                overflow:   "hidden",
                cursor:     "pointer",
                height:     "100%",
              }}
            >
              <div
                className="card-accent"
                style={{
                  position:        "absolute",
                  top: 0, left: 0, right: 0,
                  height:          "2px",
                  background:      card.color,
                  transform:       "scaleX(0)",
                  transformOrigin: "left",
                  transition:      "transform 0.35s ease",
                }}
              />
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--border2)", lineHeight: 1, marginBottom: "20px" }}>
                {card.num}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: card.color, marginBottom: "10px" }}>
                {card.cat}
              </div>
              <div style={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--text)", marginBottom: "12px" }}>
                {card.title}
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text2)", lineHeight: 1.7 }}>
                {card.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <PageStyles />
      <div className="grid-bg" />
      <Navbar />
      <div className="side-label">Abid Karim · CS · 2026</div>

      <section
        id="hero"
        style={{
          minHeight:        "100vh",
          display:          "grid",
          gridTemplateRows: "1fr auto",
          position:         "relative",
          overflow:         "hidden",
        }}
      >
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="scanline" />

        <div className="hero-inner">
          {/* ── Left ── */}
          <div className="hero-left">
            <div
              className="hero-status anim-fade-up-0"
              style={{
                display:       "inline-flex",
                alignItems:    "center",
                gap:           "8px",
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:         "var(--green)",
                border:        "1px solid rgba(0,255,136,0.25)",
                padding:       "6px 14px",
                marginBottom:  "36px",
                background:    "var(--green-dim)",
              }}
            >
              <div className="status-dot" />
              Open to full-time, Remote, &amp; internship roles
            </div>

            <h1
              className="hero-name anim-fade-up-1"
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "clamp(4.5rem, 11vw, 11rem)",
                lineHeight:    0.88,
                letterSpacing: "0.02em",
                color:         "var(--text)",
                marginBottom:  "8px",
              }}
            >
              <span className="first" style={{ display: "block" }}>Abid</span>
              <span className="last">Karim</span>
            </h1>

            <div
              className="hero-title anim-fade-up-2"
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "clamp(0.6rem, 1.5vw, 0.75rem)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:         "var(--muted)",
                marginBottom:  "32px",
                display:       "flex",
                alignItems:    "center",
                gap:           "14px",
                flexWrap:      "wrap",
              }}
            >
              AI Backend Engineer · Full Stack · CS @ LUMS
            </div>

            <p
              className="hero-bio anim-fade-up-3"
              style={{
                fontSize:     "clamp(0.9rem, 1.5vw, 1rem)",
                color:        "var(--text2)",
                lineHeight:   1.9,
                maxWidth:     "520px",
                marginBottom: "44px",
                fontWeight:   300,
              }}
            >
              Computer Science graduate from LUMS specialising in AI backend systems —
              LLM pipelines, RAG architectures, and production API infrastructure.
              I design intelligent systems that are fast, reliable, and built to scale.
              Full-stack capable across the Python, Node.js & React.js with TypeScript ecosystem when the product demands it.
            </p>

            <div className="hero-actions anim-fade-up-4">
              <Link to="/contact" className="btn btn-primary">Let&apos;s Connect →</Link>
              <Link to="/projects" className="btn btn-ghost">View Projects</Link>
              <a href={resume} download className="btn btn-ghost">↓ Resume</a>
            </div>
          </div>

          {/* ── Right: photo + panel ── */}
          <HeroRight />
        </div>

        <Ticker />
      </section>

      <NavCards />
    </>
  );
}