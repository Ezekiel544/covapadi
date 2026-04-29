'use client';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter $10',
      fill: '#aaee00',
      features: [
        'Coverage for accidental damage',
        'Screen repair support',
        'Basic theft protection',
        'Easy claims process',
      ],
    },
    {
      name: 'Pro plan $15',
      fill: '#B2DCC9',
      features: [
        'Everything in Basic',
        'Full device damage coverage',
        'Theft & loss protection',
        'Faster claim processing',
      ],
    },
    {
      name: 'Premium $30',
      fill: '#ffffff',
      features: [
        'Everything in Standard',
        'Multiple device coverage',
        'Instant claim assistance',
        '24/7 premium support',
      ],
    },
  ];

  return (
    <>
      <style>{`
        .pricing-section {
          background: #edecea;
          padding: 60px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .pricing-badge {
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
          border-radius: 0px 20px 0px 0px;
        }

        .pricing-heading {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.1;
          color: #111;
          margin-bottom: 60px;
          max-width: 600px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          align-items: start;
        }

        .plan-card {
          position: relative;
          width: 85%;
        }

        .plan-card .blob-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .plan-content {
          position: absolute;
          top: 12%;
          left: 10%;
          right: 10%;
          bottom: 10%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #1a1a1a;
        }

        .plan-title {
          font-size: 29px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 20px 0;
          color: #1a1a1a;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 26px;
          flex: 1;
          margin-top: 30px;
        }

        .plan-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          line-height: 1.4;
        }

        .plan-features li svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .plan-btn {
          margin-top: 24px;
          width: 100%;
          padding: 15px;
          background: #111;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          display: block;
          text-align: center;
          box-sizing: border-box;
        }

        .plan-btn:hover { background: #333; }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 40px 20px;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            justify-items: center;
          }

          .plan-card {
            width: 90%;
          }

          .plan-content {
            top: 12%;
            left: 10%;
            right: 10%;
            bottom: 10%;
          }

          .plan-title {
            font-size: 26px;
            margin-bottom: 16px;
          }

          .plan-features {
            gap: 18px;
            margin-top: 20px;
          }

          .plan-features li {
            font-size: 14px;
          }

          .plan-btn {
            padding: 14px;
            font-size: 14px;
          }
        }
          @media (max-width: 1024px) and (min-width: 769px) {
  .pricing-section {
    padding: 60px 20px;
  }

  .pricing-grid {
    gap: 6px;
  }

  .plan-card {
    width: 100%;
  }

  .plan-content {
    top: 8%;
    left: 8%;
    right: 8%;
    bottom: 6%;
    
  }

  .plan-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .plan-features {
    gap: 25px;
    margin-top: 10px;
  }

  .plan-features li {
    font-size: 11px;
  }

  .plan-features li svg {
    width: 15px;
    height: 15px;
  }

  .plan-btn {
    font-size: 12px;
    padding: 10px;
    margin-top: 10px;
  }
}
      `}</style>

      <section className="pricing-section">
        <span className="pricing-badge">Subscriptions</span>
        <h2 className="pricing-heading">A simple plan to protect what matters most.</h2>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className="plan-card" key={i}>
              <svg
                className="blob-svg"
                viewBox="0 0 431 474"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M428.13 58.4448C428.13 27.6475 402.814 2.68555 371.582 2.68555H59.2363C28.0041 2.68555 2.68604 27.6475 2.68604 58.4448C2.68604 77.4164 12.3009 94.162 26.9804 104.236C12.3009 114.309 2.68604 131.058 2.68604 150.027C2.68604 167.524 10.8646 183.132 23.6549 193.355C10.8646 203.577 2.68604 219.188 2.68604 236.686C2.68604 254.832 11.4836 270.949 25.0939 281.131C11.4836 291.313 2.68604 307.43 2.68604 325.573C2.68604 343.858 11.6095 360.083 25.394 370.253C11.6068 380.417 2.68604 396.648 2.68604 414.926C2.68604 445.724 28.0041 470.686 59.2363 470.686H371.582C402.814 470.686 428.13 445.724 428.13 414.926C428.13 396.648 419.209 380.417 405.427 370.253C419.209 360.083 428.13 343.858 428.13 325.573C428.13 307.43 419.335 291.313 405.722 281.131C419.335 270.949 428.13 254.832 428.13 236.686C428.13 219.188 419.951 203.577 407.161 193.355C419.951 183.132 428.13 167.524 428.13 150.027C428.13 131.055 418.515 114.309 403.835 104.236C418.515 94.162 428.13 77.4134 428.13 58.4448Z"
                  fill={plan.fill}
                  stroke="#31302F"
                  strokeWidth="5.37171"
                />
              </svg>

              <div className="plan-content">
                <div>
                  <p className="plan-title">{plan.name}</p>
                  <ul className="plan-features">
                    {plan.features.map((f, j) => (
                      <li key={j}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="9 12 11 14 15 10"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="plan-btn">Subscribe</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}