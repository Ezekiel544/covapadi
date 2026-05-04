'use client';

import Image from 'next/image';
import Fatherone from '../public/fatherone.png';
import Youngman from '../public/youngman.png';
import Woman from '../public/woman.png';
import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('t-visible');
          } else {
            entry.target.classList.remove('t-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Anthony Yusuf',
      image: Fatherone,
      quote: "I never thought insuring my phone could be this straightforward. Covapadi made it feel less like insurance and more like common sense.",
    },
    {
      name: 'Robert ola',
      image: Youngman,
      quote: "My phone is how I run my business. Knowing it's protected gives me peace of mind I didn't even know I needed.",
    },
    {
      name: 'Ella okoye',
      image: Woman,
      quote: "Finally, something built for people like me. No complicated terms, no confusion — just real protection for my device.",
    },
  ];

  return (
    <>
      <style>{`
        .testimonials-section {
          background: #edecea;
          padding: 60px;
          font-family: 'Space Grotesk', sans-serif;
            overflow: hidden; 
        }

        .testimonials-badge {
          display: inline-block;
          border: 1px solid rgba(0,0,0,0.3);
          color: #111;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 0px 20px 0px 0px;
          margin-bottom: 24px;
        }

        .testimonials-heading {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.1;
          color: #111;
          margin-bottom: 48px;
          max-width: 700px;
        }

        /* ── Animate items ── */
        .t-item {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .t-item.t-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .t-item:nth-child(1) { transition-delay: 0s; }
        .t-item:nth-child(2) { transition-delay: 0.2s; }
        .t-item:nth-child(3) { transition-delay: 0.4s; }

        /* ── Desktop ── */
        .testimonials-desktop {
          border: 2px solid #111;
        }

        .testimonials-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 2px solid #111;
        }

        .testimonial-img-cell {
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-img-cell:not(:last-child) {
          border-right: 2px solid #111;
        }

        .img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
        }

        .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .testimonials-texts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .testimonial-text-cell {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 200px;
        }

        .testimonial-text-cell:not(:last-child) {
          border-right: 2px solid #111;
        }

        .testimonial-text-cell p {
          font-size: 14px;
          line-height: 1.7;
          color: #444;
          margin: 0 0 16px 0;
        }

        .testimonial-text-cell strong {
          font-size: 15px;
          font-weight: 700;
          color: #111;
        }

        /* ── Mobile ── */
        .testimonials-mobile {
          display: none;
        }

        .mobile-img-box {
          border: 2px solid #111;
          margin-bottom: -2px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-img-box .img-wrap {
          width: 70%;
          aspect-ratio: 1;
          position: relative;
        }

        .mobile-text-box {
          border: 2px solid #111;
          margin-bottom: -2px;
          padding: 28px 24px;
          text-align: center;
        }

        .mobile-text-box p {
          font-size: 14px;
          line-height: 1.7;
          color: #444;
          margin: 0 0 12px 0;
        }

        .mobile-text-box strong {
          font-size: 15px;
          font-weight: 700;
          color: #111;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 48px 24px;
          }

          .testimonials-heading {
            font-size: clamp(32px, 8vw, 48px);
            margin-bottom: 36px;
          }

          .testimonials-desktop {
            display: none;
          }

          .testimonials-mobile {
            display: block;
          }

          .t-item:nth-child(1) { transition-delay: 0s; }
          .t-item:nth-child(2) { transition-delay: 0.15s; }
          .t-item:nth-child(3) { transition-delay: 0.3s; }
        }
      `}</style>

      <section className="testimonials-section">
        <span className="testimonials-badge">Testimonials</span>
        <h2 className="testimonials-heading">What our clients are saying</h2>

        {/* ── Desktop ── */}
        <div className="testimonials-desktop">
          <div className="testimonials-images">
            {testimonials.map((t, i) => (
              <div
                className="testimonial-img-cell t-item"
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
              >
                <div className="img-wrap">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-texts">
            {testimonials.map((t, i) => (
              <div
                className="testimonial-text-cell t-item"
                key={i}
                ref={(el) => { itemRefs.current[i + 3] = el; }}
              >
                <p>{t.quote}</p>
                <strong>{t.name}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="testimonials-mobile">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="t-item"
              ref={(el) => { itemRefs.current[i + 6] = el; }}
            >
              <div className="mobile-img-box">
                <div className="img-wrap">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
              </div>
              <div className="mobile-text-box">
                <p>{t.quote}</p>
                <strong>{t.name}</strong>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}