// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import { usePathname } from 'next/navigation';

// const speakerLinks = [{ label: 'Speaker 2025', href: '/speakers/speaker-2025' }];

// const juryLinks = [{ label: 'Jury 2025', href: '/jury/jury-2025' }];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [isHidden, setIsHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [speakersOpen, setSpeakersOpen] = useState(false);
//   const [juryOpen, setJuryOpen] = useState(false);
//   const [activeHash, setActiveHash] = useState('');

//   const speakersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const juryCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const isSpeakerPage = pathname.startsWith('/speakers');
//   const isJuryPage = pathname.startsWith('/jury');
//   const isPartnerPage = pathname === '/partners/partner-2025';

//   const openSpeakers = () => {
//     if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
//     speakersCloseTimer.current = null;
//     setSpeakersOpen(true);
//   };

//   const closeSpeakers = () => {
//     if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);

//     speakersCloseTimer.current = setTimeout(() => {
//       setSpeakersOpen(false);
//       speakersCloseTimer.current = null;
//     }, 140);
//   };

//   const openJury = () => {
//     if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
//     juryCloseTimer.current = null;
//     setJuryOpen(true);
//   };

//   const closeJury = () => {
//     if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);

//     juryCloseTimer.current = setTimeout(() => {
//       setJuryOpen(false);
//       juryCloseTimer.current = null;
//     }, 140);
//   };

//   const closeAllMenus = () => {
//     setMobileOpen(false);
//     setSpeakersOpen(false);
//     setJuryOpen(false);
//     setIsHidden(false);
//   };

//   useEffect(() => {
//     const updateHash = () => {
//       setActiveHash(window.location.hash);
//     };

//     updateHash();
//     window.addEventListener('hashchange', updateHash);

//     return () => window.removeEventListener('hashchange', updateHash);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);

//       if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
//       if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
//     };
//   }, [lastScrollY]);

//   return (
//     <header
//       className={`navbar ${isHidden ? 'navbar-hide' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
//     >
//       <div className="navbar-container">
//         <Link href="/" className="footer-logo">
//           <Image
//             src="/assets/logo/logo2-removebg.png"
//             alt="Core Media"
//             width={180}
//             height={70}
//             priority
//           />
//         </Link>

//         <nav className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
//           <Link
//             href="/"
//             className={`nav-link ${pathname === '/' && activeHash === '' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Home
//           </Link>

//           <Link
//             href="/partners/partner-2025"
//             className={`nav-link ${isPartnerPage ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Partners 2025
//           </Link>

//           <div
//             className={`nav-dropdown ${speakersOpen ? 'open' : ''}`}
//             onMouseEnter={openSpeakers}
//             onMouseLeave={closeSpeakers}
//           >
//             <button
//               type="button"
//               className={`nav-link ${isSpeakerPage ? 'active' : ''}`}
//               aria-expanded={speakersOpen}
//               onClick={() => setSpeakersOpen((open) => !open)}
//             >
//               Speakers
//               <ChevronDown size={16} />
//             </button>

//             {speakersOpen && (
//               <div className="mega-panel" onMouseEnter={openSpeakers} onMouseLeave={closeSpeakers}>
//                 <div className="mega-inner">
//                   <div className="mega-column">
//                     <ul>
//                       {speakerLinks.map((speaker) => (
//                         <li key={speaker.href}>
//                           <Link
//                             href={speaker.href}
//                             className={`mega-item ${pathname === speaker.href ? 'active' : ''}`}
//                             onClick={closeAllMenus}
//                           >
//                             <span className="mega-icon" aria-hidden />
//                             <span>{speaker.label}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div
//             className={`nav-dropdown ${juryOpen ? 'open' : ''}`}
//             onMouseEnter={openJury}
//             onMouseLeave={closeJury}
//           >
//             <button
//               type="button"
//               className={`nav-link ${isJuryPage ? 'active' : ''}`}
//               aria-expanded={juryOpen}
//               onClick={() => setJuryOpen((open) => !open)}
//             >
//               Jury
//               <ChevronDown size={16} />
//             </button>

//             {juryOpen && (
//               <div className="mega-panel" onMouseEnter={openJury} onMouseLeave={closeJury}>
//                 <div className="mega-inner">
//                   <div className="mega-column">
//                     <ul>
//                       {juryLinks.map((juryItem) => (
//                         <li key={juryItem.href}>
//                           <Link
//                             href={juryItem.href}
//                             className={`mega-item ${pathname === juryItem.href ? 'active' : ''}`}
//                             onClick={closeAllMenus}
//                           >
//                             <span className="mega-icon" aria-hidden />
//                             <span>{juryItem.label}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link
//             href="/venue"
//             className={`nav-link ${pathname === '/venue' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Venue
//           </Link>

//           <Link
//             href="/register"
//             className={`nav-link ${pathname === '/register' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Registration
//           </Link>

//           <Link
//             href="/#contact-section"
//             className={`nav-link ${activeHash === '#contact-section' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Contact
//           </Link>
//         </nav>

//         <div className="navbar-actions">
//           <Link href="/#contact-section" className="talk-btn" onClick={closeAllMenus}>
//             <span>Let’s Talk</span>

//             <div className="talk-btn-icon">
//               <ArrowUpRight size={18} />
//             </div>
//           </Link>

//           <button
//             className={`menu-btn ${mobileOpen ? 'open' : ''}`}
//             aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//             aria-expanded={mobileOpen}
//             onClick={() => {
//               setMobileOpen((state) => !state);
//               setIsHidden(false);
//             }}
//           >
//             {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const aboutLinks = [
  {
    label: "Founder's Message",
    href: '/foundermessage',
    hash: '#founders-message',
  },
  {
    label: 'About CIO CROWN',
    href: '/aboutus',
    hash: '#about-cio-crown',
  },
];

const speakerLinks = [{ label: 'Speaker 2025', href: '/speakers/speaker-2025' }];

const juryLinks = [{ label: 'Jury 2025', href: '/jury/jury-2025' }];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [speakersOpen, setSpeakersOpen] = useState(false);
  const [juryOpen, setJuryOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const aboutCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speakersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const juryCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHomePage = pathname === '/';
  const isAboutActive =
    isHomePage && (activeHash === '#founders-message' || activeHash === '#about-cio-crown');
  const isSpeakerPage = pathname.startsWith('/speakers');
  const isJuryPage = pathname.startsWith('/jury');
  const isPartnerPage = pathname === '/partners/partner-2025';

  const openAbout = () => {
    if (aboutCloseTimer.current) {
      clearTimeout(aboutCloseTimer.current);
    }

    aboutCloseTimer.current = null;
    setAboutOpen(true);
  };

  const closeAbout = () => {
    if (aboutCloseTimer.current) {
      clearTimeout(aboutCloseTimer.current);
    }

    aboutCloseTimer.current = setTimeout(() => {
      setAboutOpen(false);
      aboutCloseTimer.current = null;
    }, 140);
  };

  const openSpeakers = () => {
    if (speakersCloseTimer.current) {
      clearTimeout(speakersCloseTimer.current);
    }

    speakersCloseTimer.current = null;
    setSpeakersOpen(true);
  };

  const closeSpeakers = () => {
    if (speakersCloseTimer.current) {
      clearTimeout(speakersCloseTimer.current);
    }

    speakersCloseTimer.current = setTimeout(() => {
      setSpeakersOpen(false);
      speakersCloseTimer.current = null;
    }, 140);
  };

  const openJury = () => {
    if (juryCloseTimer.current) {
      clearTimeout(juryCloseTimer.current);
    }

    juryCloseTimer.current = null;
    setJuryOpen(true);
  };

  const closeJury = () => {
    if (juryCloseTimer.current) {
      clearTimeout(juryCloseTimer.current);
    }

    juryCloseTimer.current = setTimeout(() => {
      setJuryOpen(false);
      juryCloseTimer.current = null;
    }, 140);
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setSpeakersOpen(false);
    setJuryOpen(false);
  };

  const toggleAbout = () => {
    setAboutOpen((open) => !open);
    setSpeakersOpen(false);
    setJuryOpen(false);
  };

  const toggleSpeakers = () => {
    setSpeakersOpen((open) => !open);
    setAboutOpen(false);
    setJuryOpen(false);
  };

  const toggleJury = () => {
    setJuryOpen((open) => !open);
    setAboutOpen(false);
    setSpeakersOpen(false);
  };

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();

    window.addEventListener('hashchange', updateHash);

    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setSpeakersOpen(false);
    setJuryOpen(false);

    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash);
    }
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (aboutCloseTimer.current) {
        clearTimeout(aboutCloseTimer.current);
      }

      if (speakersCloseTimer.current) {
        clearTimeout(speakersCloseTimer.current);
      }

      if (juryCloseTimer.current) {
        clearTimeout(juryCloseTimer.current);
      }
    };
  }, []);

  return (
    <header className={`navbar ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="footer-logo" onClick={closeAllMenus}>
          <Image
            src="/assets/logo/logo2-removebg.png"
            alt="CIO Crown"
            width={180}
            height={70}
            priority
          />
        </Link>

        <nav className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          <Link
            href="/"
            className={`nav-link ${pathname === '/' && activeHash === '' ? 'active' : ''}`}
            onClick={closeAllMenus}
          >
            Home
          </Link>

          <div
            className={`nav-dropdown ${aboutOpen ? 'open' : ''}`}
            onMouseEnter={openAbout}
            onMouseLeave={closeAbout}
          >
            <button
              type="button"
              className={`nav-link ${isAboutActive ? 'active' : ''}`}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              onClick={toggleAbout}
            >
              About Us
              <ChevronDown size={16} />
            </button>

            {aboutOpen && (
              <div className="mega-panel" onMouseEnter={openAbout} onMouseLeave={closeAbout}>
                <div className="mega-inner">
                  <div className="mega-column">
                    <ul>
                      {aboutLinks.map((aboutItem) => (
                        <li key={aboutItem.href}>
                          <Link
                            href={aboutItem.href}
                            className={`mega-item ${
                              pathname === '/' && activeHash === aboutItem.hash ? 'active' : ''
                            }`}
                            onClick={closeAllMenus}
                          >
                            <span className="mega-icon" aria-hidden />
                            <span>{aboutItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/partners/partner-2025"
            className={`nav-link ${isPartnerPage ? 'active' : ''}`}
            onClick={closeAllMenus}
          >
            Partners 2025
          </Link>

          <div
            className={`nav-dropdown ${speakersOpen ? 'open' : ''}`}
            onMouseEnter={openSpeakers}
            onMouseLeave={closeSpeakers}
          >
            <button
              type="button"
              className={`nav-link ${isSpeakerPage ? 'active' : ''}`}
              aria-expanded={speakersOpen}
              aria-haspopup="true"
              onClick={toggleSpeakers}
            >
              Speakers
              <ChevronDown size={16} />
            </button>

            {speakersOpen && (
              <div className="mega-panel" onMouseEnter={openSpeakers} onMouseLeave={closeSpeakers}>
                <div className="mega-inner">
                  <div className="mega-column">
                    <ul>
                      {speakerLinks.map((speaker) => (
                        <li key={speaker.href}>
                          <Link
                            href={speaker.href}
                            className={`mega-item ${pathname === speaker.href ? 'active' : ''}`}
                            onClick={closeAllMenus}
                          >
                            <span className="mega-icon" aria-hidden />
                            <span>{speaker.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/venue"
            className={`nav-link ${pathname === '/venue' ? 'active' : ''}`}
            onClick={closeAllMenus}
          >
            Venue
          </Link>

          <div
            className={`nav-dropdown ${juryOpen ? 'open' : ''}`}
            onMouseEnter={openJury}
            onMouseLeave={closeJury}
          >
            <button
              type="button"
              className={`nav-link ${isJuryPage ? 'active' : ''}`}
              aria-expanded={juryOpen}
              aria-haspopup="true"
              onClick={toggleJury}
            >
              Jury
              <ChevronDown size={16} />
            </button>

            {juryOpen && (
              <div className="mega-panel" onMouseEnter={openJury} onMouseLeave={closeJury}>
                <div className="mega-inner">
                  <div className="mega-column">
                    <ul>
                      {juryLinks.map((juryItem) => (
                        <li key={juryItem.href}>
                          <Link
                            href={juryItem.href}
                            className={`mega-item ${pathname === juryItem.href ? 'active' : ''}`}
                            onClick={closeAllMenus}
                          >
                            <span className="mega-icon" aria-hidden />
                            <span>{juryItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <Link
            href="/register"
            className={`nav-link ${pathname === '/register' ? 'active' : ''}`}
            onClick={closeAllMenus}
          >
            Registration
          </Link> */}

          <Link
            href="/#contact-section"
            className={`nav-link ${
              pathname === '/' && activeHash === '#contact-section' ? 'active' : ''
            }`}
            onClick={closeAllMenus}
          >
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link href="/#contact-section" className="talk-btn" onClick={closeAllMenus}>
            <span>Let&apos;s Talk</span>

            <div className="talk-btn-icon">
              <ArrowUpRight size={18} />
            </div>
          </Link>

          <button
            type="button"
            className={`menu-btn ${mobileOpen ? 'open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((state) => !state);
              setAboutOpen(false);
              setSpeakersOpen(false);
              setJuryOpen(false);
            }}
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  );
}
