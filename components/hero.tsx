'use client';

import NextImage from 'next/image';
import Heroimg from '../public/heroimg.png';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-visible');
          } else {
            entry.target.classList.remove('hero-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');

        .hero-section {
          min-height: 100vh;
          padding-top: 68px;
          display: flex;
          align-items: center;
          padding-left: 40px;
          padding-right: 40px;
          background: #edecea;
          font-family: 'Space Grotesk', sans-serif;
          overflow: hidden; /* ← add this */
        }

        .hero-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.08;
          color: #111;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
        }

        .hero-sub {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(0,0,0,0.55);
          max-width: 380px;
          margin-bottom: 36px;
        }

        .hero-btn {
          background: #b8f000;
          color: #111;
          border: none;
          cursor: pointer;
          padding: 14px 28px;
          border-radius: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          transition: background 0.2s, transform 0.15s;
        }
        .hero-btn:hover { background: #a8e000; transform: scale(1.03); }

        /* Hero Image Container */
        .hero-right {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          max-height: 560px;
        }

        /* Slide-in animations */
      .hero-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 1.2s ease, transform 1.2s ease;
        }

        .hero-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 1.2s ease 0.6s, transform 1.2s ease 0.6s;
        }

        .hero-left.hero-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .hero-right.hero-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-section {
            padding: 0 20px;
            padding-top: calc(60px + 16px + 40px);
            min-height: auto;
            padding-bottom: 48px;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .hero-sub { max-width: 100%; }

          .hero-right {
            width: 100%;
            aspect-ratio: 1 / 1;
            max-height: 380px;
          }
        }
      `}</style>

      <section className="hero-section" id="home">
        <div className="hero-inner">

          {/* Left: Text */}
          <div className="hero-left" ref={leftRef}>
            <h1 className="hero-title">
              {/* Protect Your Gadgets Anytime, Anywhere */}
              Close gadget sales with financing and protection
            </h1>
            <p className="hero-sub">
              {/* Affordable insurance for phones, laptops, and all your smart devices.
              Get peace of mind with instant coverage. */}
              Covapadi helps merchants make gadget purchases easier by combining financing and protection in one simple flow.
            </p>
            <button className="hero-btn">Get Covered Now</button>
          </div>

          {/* Right: Image */}
          <div className="hero-right" ref={rightRef}>
            <NextImage
              src={Heroimg}
              alt="Covapadi Hero"
              fill
              priority
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>

        </div>
      </section>
    </>
  );
}