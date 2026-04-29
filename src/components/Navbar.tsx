// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Teaching", href: "/teaching" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }
        
        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 4px rgba(0,255,255,0.3), 0 0 8px rgba(0,255,255,0.1); }
          50% { text-shadow: 0 0 8px rgba(0,255,255,0.5), 0 0 16px rgba(0,255,255,0.2), 0 0 24px rgba(0,255,255,0.1); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes magneticOrbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(0,255,255,0.1); }
          50% { border-color: rgba(0,255,255,0.3); }
        }

        .nav-link-underline {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link-underline::before {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
        }

        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #00ffff;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          box-shadow: 0 0 8px rgba(0,255,255,0.5);
        }

        .nav-link-group:hover .nav-link-underline::after {
          width: 100%;
        }

        .logo-glitch:hover {
          animation: glitch 0.3s ease infinite;
        }

        .nav-scrolled {
          border-color: rgba(255,255,255,0.06) !important;
          background: rgba(8,12,15,0.92) !important;
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.10);
          cursor: pointer;
          z-index: 102;
          position: relative;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        
        .hamburger-btn:hover { 
          border-color: #00ffff;
          box-shadow: 0 0 15px rgba(0,255,255,0.2);
        }
        
        .hamburger-line {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #e0e0e0;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        
        .hamburger-btn.open .hamburger-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
          background: #00ffff;
        }
        
        .hamburger-btn.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        
        .hamburger-btn.open .hamburger-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
          background: #00ffff;
        }

        .nav-desktop-links {
          display: flex;
          list-style: none;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 101;
          background: rgba(8,12,15,0.0);
          -webkit-backdrop-filter: blur(0px);
          backdrop-filter: blur(0px);
          visibility: hidden;
          transition: background 0.35s ease, backdrop-filter 0.35s ease, visibility 0.35s;
          pointer-events: none;
        }
        
        .mobile-overlay.open {
          background: rgba(8,12,15,0.6);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          visibility: visible;
          pointer-events: all;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          background: linear-gradient(135deg, #0a0e13 0%, #0d1117 100%);
          border-left: 1px solid rgba(255,255,255,0.07);
          z-index: 102;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
          background: rgba(0,255,255,0.02);
        }

        .drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono), monospace;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #999;
          transition: all 0.3s;
          opacity: 0;
          transform: translateX(16px);
          animation: drawerSlide 0.4s ease forwards;
          position: relative;
          overflow: hidden;
        }
        
        .drawer-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #00ffff, transparent);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }
        
        .drawer-link:hover::before,
        .drawer-link.active-link::before {
          transform: scaleY(1);
        }
        
        .drawer-link.active-link {
          color: #00ffff;
          background: rgba(0,255,255,0.04);
        }
        
        .drawer-link:hover {
          color: #e0e0e0;
          background: rgba(255,255,255,0.03);
          padding-left: 32px;
        }
        
        .drawer-link .link-arrow {
          font-size: 0.7rem;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.3s;
        }
        
        .drawer-link:hover .link-arrow,
        .drawer-link.active-link .link-arrow {
          opacity: 1;
          transform: translateX(0);
          color: #00ffff;
        }
        
        @keyframes drawerSlide {
          to { opacity: 1; transform: translateX(0); }
        }

        .drawer-resume {
          margin: 20px 24px;
          display: block;
          font-family: var(--font-mono), monospace;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 20px;
          background: linear-gradient(135deg, rgba(0,255,255,0.05) 0%, rgba(0,255,255,0.1) 100%);
          border: 1px solid rgba(0,255,255,0.25);
          color: #00ffff;
          text-align: center;
          transition: all 0.3s;
          opacity: 0;
          animation: drawerSlide 0.4s ease forwards;
          position: relative;
          overflow: hidden;
        }
        
        .drawer-resume::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .drawer-resume:hover::before {
          left: 100%;
        }
        
        .drawer-resume:hover {
          background: rgba(0,255,255,0.12);
          border-color: #00ffff;
          box-shadow: 0 0 20px rgba(0,255,255,0.2);
          transform: translateY(-2px);
        }

        .drawer-close {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          color: #999;
          width: 34px;
          height: 34px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          line-height: 1;
          transition: all 0.3s;
          flex-shrink: 0;
          border-radius: 50%;
        }
        
        .drawer-close:hover {
          border-color: #00ffff;
          color: #00ffff;
          box-shadow: 0 0 15px rgba(0,255,255,0.3);
          transform: rotate(90deg);
        }

        @media (max-width: 767px) {
          .hamburger-btn { display: flex !important; }
          .nav-desktop-links { display: none !important; }
        }

        .nav-link {
          font-family: var(--font-mono), monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          padding: 4px 0;
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #00ffff, #00bcd4);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(0,255,255,0.5);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link:hover {
          text-shadow: 0 0 10px rgba(0,255,255,0.3);
          transform: translateY(-1px);
        }
      `}</style>

      {/* Navbar */}
      <nav
        className={scrolled ? "nav-scrolled" : ""}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px clamp(20px, 5vw, 60px)",
          borderBottom: "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="logo-glitch"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00ffff",
            textDecoration: "none",
            flexShrink: 0,
            animation: logoHovered ? "neonPulse 1.5s ease-in-out infinite" : "none",
            transition: "all 0.3s",
            position: "relative",
            textShadow: logoHovered 
              ? "0 0 10px rgba(0,255,255,0.5), 0 0 20px rgba(0,255,255,0.2)"
              : "none",
          }}
        >
          <span style={{ position: "relative" }}>
            AK // LUMS '26
            {logoHovered && (
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(180deg, transparent 50%, rgba(0,255,255,0.1) 50%)",
                  backgroundSize: "100% 4px",
                  animation: "scanLine 2s linear infinite",
                  pointerEvents: "none",
                }}
              />
            )}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop-links">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.label}
              className="nav-link-group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
                transition: "opacity 0.3s",
              }}
            >
              <Link
                to={link.href}
                className="nav-link"
                style={{
                  color: isActive(link.href) ? "#e0e0e0" : "#999",
                  transform: hoveredIndex === index ? "translateY(-1px)" : "none",
                }}
              >
                {/* Magnetic orbit effect on hover */}
                {hoveredIndex === index && (
                  <span
                    style={{
                      position: "absolute",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#00ffff",
                      boxShadow: "0 0 10px rgba(0,255,255,0.8)",
                      animation: "magneticOrbit 1.5s linear infinite",
                    }}
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger-btn${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            borderColor: menuOpen ? "#00ffff" : undefined,
            boxShadow: menuOpen ? "0 0 15px rgba(0,255,255,0.3)" : undefined,
          }}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`mobile-drawer${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="drawer-top">
          <span style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#999",
          }}>
            // navigation
          </span>
          <button
            className="drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className={`drawer-link${isActive(link.href) ? " active-link" : ""}`}
              style={{ animationDelay: `${i * 0.055}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <span className="link-arrow">→</span>
            </Link>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          download
          className="drawer-resume"
          style={{ animationDelay: `${NAV_LINKS.length * 0.055}s` }}
          onClick={() => setMenuOpen(false)}
        >
          ↓ Download Resume
        </a>

        <div style={{
          padding: "16px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#999",
          flexShrink: 0,
        }}>
          Abid Karim · CS · LUMS 2026
        </div>
      </div>
    </>
  );
}