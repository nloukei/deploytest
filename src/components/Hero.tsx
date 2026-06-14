import { useState, useEffect } from "react";

export default function Hero() {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className={`hero ${isVisible ? "hero--visible" : ""}`}>
      {/* Animated background orbs */}
      <div className="hero__orbs" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Live &amp; Deployed
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Deploy</span>
          <span className="hero__title-line hero__title-line--accent">
            Successful
          </span>
        </h1>

        <p className="hero__subtitle">
          Your Astro + React + TypeScript project is live on Vercel, connected
          to your GoDaddy domain. Everything is working perfectly.
        </p>

        <div className="hero__clock">
          <div className="hero__clock-time">{formatTime(time)}</div>
          <div className="hero__clock-date">{formatDate(time)}</div>
        </div>

        <div className="hero__stack">
          <div className="hero__stack-item">
            <svg className="hero__stack-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="22" x2="12" y2="15.5" />
              <polyline points="22 8.5 12 15.5 2 8.5" />
            </svg>
            <span>Astro</span>
          </div>
          <div className="hero__stack-divider" />
          <div className="hero__stack-item">
            <svg className="hero__stack-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <ellipse cx="12" cy="12" rx="10" ry="4" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            </svg>
            <span>React</span>
          </div>
          <div className="hero__stack-divider" />
          <div className="hero__stack-item">
            <svg className="hero__stack-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M8 17V7h4a4 4 0 0 1 0 6H8" />
            </svg>
            <span>TypeScript</span>
          </div>
          <div className="hero__stack-divider" />
          <div className="hero__stack-item">
            <svg className="hero__stack-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 19 21 12 17 5 21" />
            </svg>
            <span>Vercel</span>
          </div>
        </div>

        <div className="hero__checks">
          <div className="hero__check">
            <svg viewBox="0 0 20 20" fill="currentColor" className="hero__check-icon">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>DNS Configured</span>
          </div>
          <div className="hero__check">
            <svg viewBox="0 0 20 20" fill="currentColor" className="hero__check-icon">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>SSL Active</span>
          </div>
          <div className="hero__check">
            <svg viewBox="0 0 20 20" fill="currentColor" className="hero__check-icon">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Build Passed</span>
          </div>
          <div className="hero__check">
            <svg viewBox="0 0 20 20" fill="currentColor" className="hero__check-icon">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Domain Linked</span>
          </div>
        </div>
      </div>
    </section>
  );
}
