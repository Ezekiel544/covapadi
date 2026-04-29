'use client';

import Manimg from '../public/man.svg';

export default function Features() {
  return (
    <>
      <style>{`
        .features-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Left: image fills full half */
        .features-image-wrap {
          position: relative;
          width: 100%;
          min-height: 700px;
          overflow: hidden;
        }

        /* Right: black panel */
        .features-content {
          background: #000;
          color: #fff;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Badge */
        .features-badge {
          display: inline-block;
          background: #fff;
          color: #111;
          font-size: 13px;
          font-weight: 500;
          padding: 10px 22px;
          border-radius: 999px;
          margin-bottom: 40px;
          align-self: flex-start;
        }

        /* Heading */
        .features-heading {
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          line-height: 1.2;
          color: #fff;
          margin-bottom: 40px;
        }

        /* List */
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .features-list li {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
        }

        .features-bullet {
          color: #fff;
          font-size: 18px;
          line-height: 1.7;
          flex-shrink: 0;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .features-section {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .features-image-wrap {
            min-height: 380px;
            height: 380px;
          }

          .features-content {
            padding: 48px 24px;
          }

          .features-heading {
            font-size: clamp(26px, 7vw, 36px);
          }

          .features-list li {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="features-section" id="features">

        {/* Left: Image */}
        <div className="features-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={Manimg.src}
            alt="Person with device"
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center ',
            }}
          />
        </div>

        {/* Right: Dark content */}
        <div className="features-content">
          <span className="features-badge">What we offer</span>

          <h2 className="features-heading">
            Your Complete Device Protection Plan Overview.
          </h2>

          <ul className="features-list">
            <li>
              <span className="features-bullet">•</span>
              <span>Protect your devices from unexpected accidents like screen cracks, liquid spills, or drops.</span>
            </li>
            <li>
              <span className="features-bullet">•</span>
              <span>Stay covered if your device is stolen or goes missing. With proper verification, you can get compensation or a replacement</span>
            </li>
            <li>
              <span className="features-bullet">•</span>
              <span>Covers internal faults affecting performance, ensuring fast support, repairs, or replacement when devices fail unexpectedly.</span>
            </li>
          </ul>
        </div>

      </section>
    </>
  );
}