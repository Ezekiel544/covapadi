
'use client';
import NextImage from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from '../public/logo.svg';
 
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(true);
  const lastScrollY = useRef(0);
 
  const navItems = [ 'About', 'Features', 'FAQ','Claim',];
  
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      if (currentY > lastScrollY.current && currentY > 80) {
        setMobileVisible(false);
        setMenuOpen(false);
      } else {
        setMobileVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const target = document.getElementById(item.toLowerCase());
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  };
 
  return (
    <>
      <header
        className="desktop-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '68px',
          background: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 70px',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'box-shadow 0.3s',
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'Home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <NextImage src={Logo} alt="Covapadi Logo" width={120} height={40} priority />
        </a>
 
        <nav style={{ display: 'flex', gap: 36 }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              style={{
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                color: '#111',
                opacity: 0.7,
                transition: 'opacity 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
            >
              {item}
            </a>
          ))}
        </nav>
 
        <button
          style={{
            background: '#b8f000',
            color: '#111',
            border: 'none',
            cursor: 'pointer',
            padding: '11px 29px',
            borderRadius: 10,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = '#a8e000';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = '#b8f000';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          Get Covered Now
        </button>
      </header>
 
      <header
        className="mobile-header"
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          right: 16,
          zIndex: 100,
          height: '60px',
          background: '#FFFFFF',
          borderRadius: 999,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
          fontFamily: "'Space Grotesk', sans-serif",
          transform: mobileVisible ? 'translateY(0)' : 'translateY(-200%)',
          opacity: mobileVisible ? 1 : 0,
          pointerEvents: mobileVisible ? 'auto' : 'none',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease',
        }}
      >
        <a   href="#home"
      onClick={(e) => handleNavClick(e, 'Home')}
      style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
    >
      <NextImage src={Logo} alt="Covapadi Logo" width={120} height={40} priority />
    </a>
 
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            cursor: 'pointer',
            padding: 4,
            background: 'none',
            border: 'none',
          }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#111', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#111', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#111', borderRadius: 2 }} />
        </button>
      </header>
 
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 90,
            left: 16,
            right: 16,
            background: '#FFFFFF',
            zIndex: 99,
            padding: '20px 24px 28px',
            borderRadius: 24,
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#111',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {item}
            </a>
          ))}
          <button
            style={{
              alignSelf: 'flex-start',
              marginTop: 6,
              background: '#b8f000',
              color: '#111',
              border: 'none',
              cursor: 'pointer',
              padding: '11px 22px',
              borderRadius: 50,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Get Covered Now
          </button>
        </div>
      )}
 
      <style>{`
        .desktop-header { display: flex; }
        .mobile-header { display: none; }
 
        @media (max-width: 900px) {
          .desktop-header { display: none; }
          .mobile-header { display: flex; }
        }
      `}</style>
    </>
  );
}