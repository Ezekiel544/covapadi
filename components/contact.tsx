"use client";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../public/logo.svg';
import NextImage from 'next/image';

export default function ContactAndFooter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await emailjs.send(
        'service_6fypb7a',
        'template_97iz70f',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        'LVZFQEZgim5Uvl9Ea'
      );
      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .contact-footer-wrap {
          font-family: 'Space Grotesk', sans-serif;
          background: #1e3a2f;
          position: relative;
        }

        .contact-card {
          background: #aaee00;
          border-radius: 24px 24px 0 0;
          padding: 60px;
          position: relative;
          z-index: 2;
          margin: -80px 60px 0 60px;
          bottom: 90px;
        }

        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 60px;
          align-items: center;
        }

        .contact-heading {
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          color: #111;
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field label {
          font-size: 13px;
          font-weight: 500;
          color: #111;
        }

        .form-field input,
        .form-field textarea {
          background: transparent;
          border: none;
          border-bottom: 1.5px solid #111;
          padding: 8px 0;
          font-size: 14px;
          color: #111;
          font-family: 'Space Grotesk', sans-serif;
          outline: none;
          width: 100%;
        }

        .form-field textarea {
          resize: none;
          min-height: 60px;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: rgba(0,0,0,0.4);
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: #1e3a2f;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          text-align: center;
          opacity: 1;
          transition: background 0.2s, opacity 0.2s;
        }

        .submit-btn:hover {
          background: #2a4f40;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-success {
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: #1e3a2f;
          background: rgba(0,0,0,0.08);
          padding: 12px;
          border-radius: 8px;
        }

        .form-error {
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: #cc0000;
          background: rgba(204,0,0,0.08);
          padding: 12px;
          border-radius: 8px;
        }

        .footer {
          background: #1e3a2f;
          padding: 60px 60px 40px;
          position: relative;
          z-index: 1;
        }

        .footer-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .footer-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin: 0 0 20px 0;
          max-width: 260px;
        }

        .footer-socials {
          display: flex;
          gap: 16px;
        }

        .footer-socials a {
          color: rgba(255,255,255,0.7);
          transition: color 0.2s;
        }

        .footer-socials a:hover {
          color: #aaee00;
        }

        .footer-socials svg {
          width: 20px;
          height: 20px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
        }

        .footer-nav a {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-nav a:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .contact-card {
            margin: 0;
            border-radius: 0;
            padding: 40px 24px;
          }

          .contact-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footer {
            padding: 40px 24px;
          }

          .footer-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-nav {
            align-items: flex-start;
          }
        }
      `}</style>

      <div style={{ background: '#edecea', paddingBottom: '80px' }} />

      <div className="contact-footer-wrap">
        <div className="contact-card">
          <div className="contact-inner">
            <h2 className="contact-heading">Get<br />inTouch</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>First name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label>Last name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-field">
                <label>Company / Organization Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>How can we help?</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} />
              </div>

              {success && <p className="form-success">Message sent successfully! We will get back to you soon.</p>}
              {error && <p className="form-error">Something went wrong. Please try again.</p>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Get a quote'}
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">
                <a
                  href="#home"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  <NextImage src={Logo} alt="Covapadi Logo" width={100} height={34} priority />
                </a>
              </div>
              <p className="footer-desc">Get reliable protection for your gadget against everyday risks.</p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/covapadi">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://x.com/covapadi">
                  <svg viewBox="0 0 256 256" fill="currentColor">
                    <path d="M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}