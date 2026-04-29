'use client';

export default function Goals() {
  return (
    <>
      <style>{`
        .goals-section {
          background: #b8ddd0;
          padding: 60px 60px 0px 60px;
          font-family: 'Space Grotesk', sans-serif;
          overflow: hidden;
          
        }

        .goals-badge {
          display: inline-block;
          border: 1px solid rgba(0,0,0,0.25);
          background: rgba(255,255,255,0.5);
          color: #111;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 0px 20px 0px 0px;
          margin-bottom: 24px;
        }

        .goals-heading {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.15;
          color: #111;
          margin-bottom: 60px;
          max-width: 600px;
        }

        /* The dark card — flush left & bottom, only top-right rounded */
        .goals-card {
          background: #1e3a2f;
          border-radius: 0 120px 0 0; /* only top-right corner */
          padding: 80px 60px 80px 60px;
          // margin-left: -60px; 
          width: calc(75% + 60px);
          margin-right:60px;
        } 

        .goals-card p {
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.7;
          color: #e8f0ec;
          max-width: 680px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .goals-section {
            padding: 48px 24px 0px 24px;
          }

          .goals-card {
            border-radius: 0 80px 0 0;
            padding: 60px 24px 60px 24px;
            margin-left: -24px;
            width: calc(100% + 24px);
          }

          .goals-card p {
            font-size: 18px;
          }
        }
      `}</style>

      <section className="goals-section">
        {/* Badge */}
        <span className="goals-badge">Services</span>

        {/* Heading */}
        <h2 className="goals-heading">
          Our goal is to protect what<br />you care about most
        </h2>

        {/* Dark card — flush left & bottom, top-right curve only */}
        <div className="goals-card">
          <p>
            This is the space to introduce visitors to the business or brand. Briefly explain who&apos;s behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
          </p>
        </div>
      </section>
    </>
  );
}