'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const paragraphs = paragraphsRef.current;
    const totalParagraphs = paragraphs.length;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = -sectionTop;
      const scrollableDistance = sectionHeight - windowHeight;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      paragraphs.forEach((p, i) => {
        const threshold = i / totalParagraphs;
        const nextThreshold = (i + 1) / totalParagraphs;
        const pProgress = Math.min(
          Math.max((progress - threshold) / (nextThreshold - threshold), 0),
          1
        );

        p.style.opacity = String(pProgress);
        p.style.transform = `translateY(${(1 - pProgress) * 24}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const paragraphs = [
  `Covapadi is a microinsurance distribution platform focused on making gadget protection easier to access in Nigeria. We are building around a simple idea: people depend on their gadgets every day for work, business, communication, and daily life, so protecting those devices should not feel confusing or out of reach.`,
  `Our goal is to make insurance more practical, more understandable, and easier to access through a smoother customer experience. Instead of making protection feel too technical or disconnected from real life, Covapadi is focused on helping customers get covered in a way that feels clear, simple, and trustworthy.`,
  `We are starting with gadget protection because phones and devices are some of the most important tools people use every day. By improving how protection is distributed and experienced, Covapadi is helping more people protect what matters to them most.`,
];

  return (
    <>
      <style>{`
        .about-section {
          background: #edecea;
          font-family: 'Space Grotesk', sans-serif;
          position: relative;
          z-index: 0;
          height: ${paragraphs.length * 100}vh;
          padding-bottom: 50px;
        }

        .about-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .about-badge {
          display: inline-block;
          border: 1px solid rgba(0,0,0,0.3);
          color: #111;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 4px;
          margin-bottom: 24px;
          width: fit-content;
        }

        .about-heading {
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          color: #111;
          margin-bottom: 32px;
        }

        .about-body {
          display: flex;
          justify-content: center;
        }

        .about-right {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-right p {
          font-size: 15px;
          line-height: 1.8;
          color: #111;
          margin: 0;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.1s ease, transform 0.1s ease;
          will-change: opacity, transform;
        }

        @media (max-width: 768px) {
          .about-sticky {
            padding: 40px 24px;
            justify-content: flex-start;
            padding-top: 80px;
          }

          .about-heading {
            font-size: clamp(26px, 8vw, 36px);
            margin-bottom: 24px;
          }

          .about-right {
            width: 100%;
            gap: 14px;
          }

          .about-right p {
            font-size: 14px;
            line-height: 1.7;
          }
        }
      `}</style>

      <section className="about-section" ref={sectionRef} id="about">
        <div className="about-sticky">
          <span className="about-badge">About Us</span>
          <h2 className="about-heading">All About Covapadi</h2>

          <div className="about-body">
            <div className="about-right">
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  ref={(el) => {
                    if (el) paragraphsRef.current[i] = el;
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}