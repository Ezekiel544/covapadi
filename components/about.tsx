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
  `Every day, people want to buy phones, laptops, tablets, and other valuable gadgets that support their work, business, communication, and daily life. But many customers cannot always complete the full cost of purchase at once, and many merchants lose sales because of that gap.`,
  `At the same time, protection is often treated as a separate and confusing process, even though these gadgets are important tools people rely on every day. Covapadi exists to help close that gap.`,
  `We are building a platform that helps merchants sell more gadgets by combining financing and protection into a simpler customer journey. Instead of making customers figure things out through separate systems, Covapadi is focused on a smoother and more practical experience.`,
  `Our platform helps buyers access gadgets more easily while adding protection inside the process — so nothing feels disconnected or out of reach.`,
  `Our goal is to help more merchants close sales and help more customers access the gadgets they need through a process that feels clear, practical, and easy from start to finish.`,
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