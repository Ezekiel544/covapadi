'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

const faqs = [
  {
    question: 'What devices are covered under Covapadi\'s plans?',
    answer: 'Coverage depends on the selected protection plan. In general, Covapadi is focused on eligible gadgets such as phones, laptops, tablets, and other approved personal devices.',
  },
  {
    question: 'What does Covapadi currently cover?',
    answer: 'Covapadi currently provides access to protection for eligible devices against screen damage and liquid damage, depending on the selected plan.',
  },
  {
    question: 'Does Covapadi cover theft?',
    answer: 'No. Covapadi\'s current protection does not cover theft.',
  },
  {
    question: 'How do I get covered?',
    answer: 'You can begin the process through Covapadi\'s platform by submitting the required device and customer information and selecting the available protection option for your eligible gadget.',
  },
  {
    question: 'How do I file a claim if my device is damaged?',
    answer: 'Claims can be initiated by following the support and claims process attached to your selected protection plan. This may require your policy details, device information, and a description of the incident.',
  },
  {
    question: 'How long does it take to process a claim?',
    answer: 'Claim timelines depend on the information provided and the review process attached to the selected plan. Once all required details are submitted, the claim will be reviewed accordingly.',
  },
  {
    question: 'Is there a waiting period before my coverage becomes active?',
    answer: 'The activation timeline depends on the selected plan and provider terms. Any applicable waiting period or start date will be shown clearly during the coverage process.',
  },
  {
    question: 'Can I insure multiple devices?',
    answer: 'This depends on the available plan structure. Some plans may apply to a single device, while others may allow additional coverage options. The available choice will be shown during the process.',
  },
  {
    question: 'What counts as accidental damage?',
    answer: 'Accidental damage refers to sudden and unintended physical damage to a device. However, Covapadi\'s current cover is focused on screen damage and liquid damage for eligible devices, based on the selected plan terms.',
  },
  {
    question: 'What happens if my claim is rejected?',
    answer: 'If a claim is rejected, the reason will usually be communicated based on the plan terms and the information submitted. You can then contact support for more guidance or clarification.',
  },
  {
    question: 'How do I cancel or make changes to my plan?',
    answer: 'Any plan update, cancellation, or change depends on the terms attached to the selected protection plan. Customers can contact support for guidance on available options.',
  },
  {
    question: 'Important note on coverage terms',
    answer: 'Please note that coverage, activation, claims handling, and policy terms may vary depending on the selected plan. Customers should review all plan details carefully before completing the process.',
  },
];
  return (
    <>
      <style>{`
        .faq-section {
          background: #edecea;
          padding: 60px;
          font-family: 'Space Grotesk', sans-serif;
          padding-bottom: 230px;
        }

        .faq-badge {
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

        .faq-heading {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          color: #111;
          margin-bottom: 48px;
        }

        /* Centered container for the accordion */
        .faq-list {
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          border: 1px solid rgba(0,0,0,0.25);
          background: #edecea;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          text-align: left;
          gap: 16px;
        }

        .faq-trigger span {
          font-size: 15px;
          font-weight: 700;
          color: #111;
          line-height: 1.4;
        }

        .faq-chevron {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          color: #111;
          transition: transform 0.2s ease;
        }

        .faq-chevron.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 24px 20px 24px;
          font-size: 14px;
          line-height: 1.75;
          color: #444;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 16px;
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 48px 24px;
          }

          .faq-heading {
            font-size: clamp(32px, 8vw, 48px);
            margin-bottom: 36px;
          }

          .faq-list {
            max-width: 100%;
          }

          .faq-trigger span {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="faq-section" id="faq">
        <span className="faq-badge">FAQ</span>
        <h2 className="faq-heading">Frequently ask questions</h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-trigger"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`faq-chevron ${openIndex === i ? 'open' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openIndex === i && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}