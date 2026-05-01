'use client';

import { useEffect, useRef } from 'react';

export default function Services() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('s-visible');
          } else {
            entry.target.classList.remove('s-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    rowRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  const services = [
  {
    number: '01',
    title: 'Gadgets Insurance',
    description:
      "Covapadi helps customers access protection for eligible gadgets through a simple and guided process. Our focus is on making it easier for people to protect valuable devices they rely on every day.",
  },
  {
    number: '02',
    title: 'Screen Damage Cover',
    description:
      "Phones are one of the most used and most exposed devices in everyday life. Covapadi gives customers access to protection that helps cover screen damage for eligible devices, making repair-related stress easier to manage.",
  },
  {
    number: '03',
    title: 'Liquid Damage Cover',
    description:
      "Liquid damage can happen unexpectedly and become expensive fast. Covapadi helps customers access protection for eligible devices where liquid damage is included under the selected plan.",
  },
  {
    number: '04',
    title: 'Claims Support',
    description:
      "We are focused on making the support process clearer and easier to understand. From questions about coverage to help with claims-related steps, Covapadi is built around a smoother customer experience.",
  },
];

  return (
    <>
      <style>{`
        .services-section {
          background: #1f4a3c;
          color: #fff;
          padding: 80px 100px;
          font-family: 'Space Grotesk', sans-serif;
          overflow: hidden;
        }

        .services-badge {
          display: inline-block;
          background: #edecea;
          border: none;
          color: #111;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 20px;
          border-radius: 0px 20px 0px 0px;
          margin-bottom: 32px;
        }

        .services-heading {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 0;
          max-width: 520px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .services-heading.s-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .services-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.15);
          margin: 48px -100px 0 -100px;
        }

        /* Each service row animates in from left */
        .service-row {
          display: grid;
          grid-template-columns: 160px 220px 1fr;
          align-items: start;
          gap: 0;
          padding: 48px 0;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          margin-left: -100px;
          margin-right: -100px;
          padding-left: 100px;
          padding-right: 100px;
          opacity: 0;
          transform: translateX(-80px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .service-row.s-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .service-row:nth-child(1) { transition-delay: 0.1s; }
        .service-row:nth-child(2) { transition-delay: 0.35s; }
        .service-row:nth-child(3) { transition-delay: 0.6s; }

        /* Number counts up feel via scale */
        .service-number {
          font-size: clamp(56px, 6vw, 80px);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          padding-top: 4px;
          transition: transform 0.4s ease;
        }

        .service-row:hover .service-number {
          transform: scale(1.1);
        }

        .service-title {
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 600;
          color: #fff;
          line-height: 1.3;
          padding-top: 6px;
          padding-right: 40px;
        }

        .service-desc {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.65);
          max-width: 560px;
          padding-top: 6px;
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 60px 24px;
          }

          .services-divider {
            margin-left: -24px;
            margin-right: -24px;
          }

          .service-row {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 36px 24px;
            margin-left: -24px;
            margin-right: -24px;
          }

          .service-number {
            font-size: 36px;
          }

          .service-title {
            font-size: 26px;
            font-weight: 700;
            padding-right: 0;
          }

          .service-desc {
            font-size: 14px;
            max-width: 100%;
          }

          .service-row:nth-child(1) { transition-delay: 0.05s; }
          .service-row:nth-child(2) { transition-delay: 0.2s; }
          .service-row:nth-child(3) { transition-delay: 0.35s; }
        }
      `}</style>

      <section className="services-section">

        <span className="services-badge">Services</span>

        <h2 className="services-heading" ref={headingRef}>
          Tailored insurance for<br />every stage of Life
        </h2>

        <hr className="services-divider" />

        {services.map((s, i) => (
          <div
            className="service-row"
            key={s.number}
            ref={(el) => { rowRefs.current[i] = el; }}
          >
            <div className="service-number">{s.number}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.description}</div>
          </div>
        ))}

      </section>
    </>
  );
}