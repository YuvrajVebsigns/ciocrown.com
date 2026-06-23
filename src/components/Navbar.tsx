// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import { usePathname } from 'next/navigation';

// // const winnerLinks = [
// //   { label: 'Winner 2025', href: '/winners/winner-2025' },
// //   { label: 'Winner 2024', href: '/winners/winner-2024' },
// //   { label: 'Winner 2023', href: '/winners/winner-2023' },
// // ];

// const speakerLinks = [
//   { label: 'Speaker 2025', href: '/speakers/speaker-2025' },
//   // { label: 'Speaker 2024', href: '/speakers/speaker-2024' },
//   // { label: 'Speaker 2023', href: '/speakers/speaker-2023' },
// ];

// // const partnerLinks = [
// //   { label: 'Partners 2025', href: '/partners/partner-2025' },
// //   // { label: 'Partners 2024', href: '/partners/Partner-2024' },
// //   // { label: 'Partners 2023', href: '/partners/Partner-2023' },
// // ];

// const juryLinks = [
//   { label: 'Jury 2025', href: '/jury/jury-2025' },
//   // { label: 'Jury 2024', href: '/jury/jury-2024' },
//   // { label: 'Jury 2023', href: '/jury/jury-2023' },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [isHidden, setIsHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   // const [winnersOpen, setWinnersOpen] = useState(false);
//   const [speakersOpen, setSpeakersOpen] = useState(false);
//   const [partnersOpen, setPartnersOpen] = useState(false);
//   const [juryOpen, setJuryOpen] = useState(false);
//   const [activeHash, setActiveHash] = useState('');

//   const winnersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const speakersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const partnersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const juryCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const isSpeakerPage = pathname.startsWith('/speakers');
//   const isPartnerPage = pathname.startsWith('/partners');
//   const isJuryPage = pathname.startsWith('/jury');

//   // const openWinners = () => {
//   //   if (winnersCloseTimer.current) clearTimeout(winnersCloseTimer.current);
//   //   winnersCloseTimer.current = null;
//   //   setWinnersOpen(true);
//   // };

//   // const closeWinners = () => {
//   //   if (winnersCloseTimer.current) clearTimeout(winnersCloseTimer.current);
//   //   winnersCloseTimer.current = setTimeout(() => {
//   //     setWinnersOpen(false);
//   //     winnersCloseTimer.current = null;
//   //   }, 140);
//   // };

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

//   const openPartners = () => {
//     if (partnersCloseTimer.current) clearTimeout(partnersCloseTimer.current);
//     partnersCloseTimer.current = null;
//     setPartnersOpen(true);
//   };

//   const closePartners = () => {
//     if (partnersCloseTimer.current) clearTimeout(partnersCloseTimer.current);
//     partnersCloseTimer.current = setTimeout(() => {
//       setPartnersOpen(false);
//       partnersCloseTimer.current = null;
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
//     setWinnersOpen(false);
//     setSpeakersOpen(false);
//     setPartnersOpen(false);
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

//       if (winnersCloseTimer.current) clearTimeout(winnersCloseTimer.current);
//       if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
//       if (partnersCloseTimer.current) clearTimeout(partnersCloseTimer.current);
//       if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
//     };
//   }, [lastScrollY]);

//   return (
//     <header
//       className={`navbar ${isHidden ? 'navbar-hide' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
//     >
//       <div className="navbar-container">
//         {/* <Link href="/" className="navbar-logo" onClick={closeAllMenus}>
//           <Image
//             src="/assets/logo/logo2-removebg.png"
//             alt="Leader Next"
//             width={100}
//             height={200}
//             priority
//           />
//         </Link> */}

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

//           {/* <Link
//             href="/process"
//             className={`nav-link ${pathname === '/nominate' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Process
//           </Link> */}

//           {/* <Link
//             href="/nominate"
//             className={`nav-link ${pathname === '/nominate' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Nominate
//           </Link> */}

//           <div
//             className={`nav-dropdown ${partnersOpen ? 'open' : ''}`}
//             onMouseEnter={openPartners}
//             onMouseLeave={closePartners}
//           >
//             <button
//               type="button"
//               className={`nav-link ${isPartnerPage ? 'active' : ''}`}
//               aria-expanded={partnersOpen}
//               onClick={() => setPartnersOpen((open) => !open)}
//             >
//               Partners 2025
//               {/* <ChevronDown size={16} /> */}
//             </button>

//             {/* {partnersOpen && (
//               <div className="mega-panel" onMouseEnter={openPartners} onMouseLeave={closePartners}>
//                 <div className="mega-inner">
//                   <div className="mega-column">
//                     <ul>
//                       {partnerLinks.map((partner) => (
//                         <li key={partner.href}>
//                           <Link
//                             href={partner.href}
//                             className={`mega-item ${pathname === partner.href ? 'active' : ''}`}
//                             onClick={closeAllMenus}
//                           >
//                             <span className="mega-icon" aria-hidden />
//                             <span>{partner.label}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )} */}
//           </div>

//           {/* <Link
//             href="/blog"
//             className={`nav-link ${pathname === '/blog' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Blog
//           </Link> */}

//           {/* <Link
//             href="/events"
//             className={`nav-link ${pathname === '/events' ? 'active' : ''}`}
//             onClick={closeAllMenus}
//           >
//             Event
//           </Link> */}

//           {/* <div
//             className={`nav-dropdown ${winnersOpen ? 'open' : ''}`}
//             onMouseEnter={openWinners}
//             onMouseLeave={closeWinners}
//           >
//             <button
//               type="button"
//               className={`nav-link ${isWinnerPage ? 'active' : ''}`}
//               aria-expanded={winnersOpen}
//               onClick={() => setWinnersOpen((open) => !open)}
//             >
//               Winners
//               <ChevronDown size={16} />
//             </button>

//             {winnersOpen && (
//               <div className="mega-panel" onMouseEnter={openWinners} onMouseLeave={closeWinners}>
//                 <div className="mega-inner">
//                   <div className="mega-column">
//                     <ul>
//                       {winnerLinks.slice(0, 5).map((winner) => (
//                         <li key={winner.href}>
//                           <Link
//                             href={winner.href}
//                             className={`mega-item ${pathname === winner.href ? 'active' : ''}`}
//                             onClick={closeAllMenus}
//                           >
//                             <span className="mega-icon" aria-hidden />
//                             <span>{winner.label}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mega-column">
//                     <ul>
//                       {winnerLinks.slice(5).map((winner) => (
//                         <li key={winner.href}>
//                           <Link
//                             href={winner.href}
//                             className={`mega-item ${pathname === winner.href ? 'active' : ''}`}
//                             onClick={closeAllMenus}
//                           >
//                             <span className="mega-icon" aria-hidden />
//                             <span>{winner.label}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div> */}

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
//                       {speakerLinks.slice(0, 5).map((speaker) => (
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

//                   <div className="mega-column">
//                     <ul>
//                       {speakerLinks.slice(5).map((speaker) => (
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
//           <Link href="/contact-section" className="talk-btn" onClick={closeAllMenus}>
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
//               setMobileOpen((s) => !s);
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

// // 'use client';

// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
// // import { useEffect, useRef, useState } from 'react';
// // import { usePathname } from 'next/navigation';

// // const winnerLinks = [
// //   { label: 'Winner 2025', href: '/winners/winner-2025' },
// //   { label: 'Winner 2024', href: '/winners/winner-2024' },
// //   { label: 'Winner 2023', href: '/winners/winner-2023' },
// // ];

// // const speakerLinks = [
// //   { label: 'Speaker 2025', href: '/speakers/speaker-2025' },
// //   { label: 'Speaker 2024', href: '/speakers/speaker-2024' },
// //   { label: 'Speaker 2023', href: '/speakers/speaker-2023' },
// // ];

// // const partnerLinks = [
// //   { label: 'Partners 2025', href: '/partners/partner-2025' },
// //   { label: 'Partners 2024', href: '/partners/Partner-2024' },
// //   { label: 'Partners 2023', href: '/partners/Partner-2023' },
// // ];

// // const juryLinks = [
// //   { label: 'Jury 2025', href: '/jury/jury-2025' },
// //   { label: 'Jury 2024', href: '/jury/jury-2024' },
// //   { label: 'Jury 2023', href: '/jury/jury-2023' },
// // ];

// // export default function Navbar() {
// //   const pathname = usePathname();

// //   const [isHidden, setIsHidden] = useState(false);
// //   const [lastScrollY, setLastScrollY] = useState(0);
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [winnersOpen, setWinnersOpen] = useState(false);
// //   const [speakersOpen, setSpeakersOpen] = useState(false);
// //   const [partnersOpen, setPartnersOpen] = useState(false);
// //   const [juryOpen, setJuryOpen] = useState(false);
// //   const [activeHash, setActiveHash] = useState('');

// //   const winnersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
// //   const speakersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
// //   const partnersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
// //   const juryCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

// //   const isWinnerPage = pathname.startsWith('/winners');
// //   const isSpeakerPage = pathname.startsWith('/speakers');
// //   const isPartnerPage = pathname.startsWith('/partners');
// //   const isJuryPage = pathname.startsWith('/jury');

// //   const openWinners = () => {
// //     if (winnersCloseTimer.current) clearTimeout(winnersCloseTimer.current);
// //     winnersCloseTimer.current = null;
// //     setWinnersOpen(true);
// //   };

// //   const closeWinners = () => {
// //     if (winnersCloseTimer.current) clearTimeout(winnersCloseTimer.current);
// //     winnersCloseTimer.current = setTimeout(() => {
// //       setWinnersOpen(false);
// //       winnersCloseTimer.current = null;
// //     }, 140);
// //   };

// //   const openSpeakers = () => {
// //     if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
// //     speakersCloseTimer.current = null;
// //     setSpeakersOpen(true);
// //   };

// //   const closeSpeakers = () => {
// //     if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
// //     speakersCloseTimer.current = setTimeout(() => {
// //       setSpeakersOpen(false);
// //       speakersCloseTimer.current = null;
// //     }, 140);
// //   };

// //   const openPartners = () => {
// //     if (partnersCloseTimer.current) clearTimeout(partnersCloseTimer.current);
// //     partnersCloseTimer.current = null;
// //     setPartnersOpen(true);
// //   };

// //   const closePartners = () => {
// //     if (partnersCloseTimer.current) clearTimeout(partnersCloseTimer.current);
// //     partnersCloseTimer.current = setTimeout(() => {
// //       setPartnersOpen(false);
// //       partnersCloseTimer.current = null;
// //     }, 140);
// //   };

// //   const openJury = () => {
// //     if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
// //     juryCloseTimer.current = null;
// //     setJuryOpen(true);
// //   };

// //   const closeJury = () => {
// //     if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
// //     juryCloseTimer.current = setTimeout(() => {
// //       setJuryOpen(false);
// //       juryCloseTimer.current = null;
// //     }, 140);
// //   };

// //   const closeAllMenus = () => {
// //     setMobileOpen(false);
// //     setWinnersOpen(false);
// //     setSpeakersOpen(false);
// //     setPartnersOpen(false);
// //     setJuryOpen(false);
// //     setIsHidden(false);
// //   };

// //   useEffect(() => {
// //     const updateHash = () => setActiveHash(window.location.hash);

// //     updateHash();
// //     window.addEventListener('hashchange', updateHash);

// //     return () => window.removeEventListener('hashchange', updateHash);
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
// //       setLastScrollY(currentScrollY);
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);

// //       if (winnersCloseTimer.current) clearTimeout(winnersCloseTimer.current);
// //       if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
// //       if (partnersCloseTimer.current) clearTimeout(partnersCloseTimer.current);
// //       if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
// //     };
// //   }, [lastScrollY]);

// //   return (
// //     <header className={`navbar ${isHidden ? 'navbar-hide' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
// //       <div className="navbar-container">
// //         <Link href="/" className="navbar-logo" onClick={closeAllMenus}>
// //           <Image src="/assets/logo/logo2.png" alt="CORE Media" width={150} height={100} priority />
// //         </Link>

// //         <nav className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
// //           <Link
// //             href="/"
// //             className={`nav-link ${pathname === '/' && activeHash === '' ? 'active' : ''}`}
// //             onClick={closeAllMenus}
// //           >
// //             Home
// //           </Link>

// //           <Link
// //             href="/register"
// //             className={`nav-link ${pathname === '/register' ? 'active' : ''}`}
// //             onClick={closeAllMenus}
// //           >
// //             Registration
// //           </Link>

// //           <Link
// //             href="/prcocess"
// //             className={`nav-link ${pathname === '/prcocess' ? 'active' : ''}`}
// //             onClick={closeAllMenus}
// //           >
// //             Process
// //           </Link>

// //           <Link
// //             href="/nominate"
// //             className={`nav-link ${pathname === '/nominate' ? 'active' : ''}`}
// //             onClick={closeAllMenus}
// //           >
// //             Nominate
// //           </Link>

// //           <div className={`nav-dropdown ${partnersOpen ? 'open' : ''}`} onMouseEnter={openPartners} onMouseLeave={closePartners}>
// //             <button type="button" className={`nav-link ${isPartnerPage ? 'active' : ''}`} aria-expanded={partnersOpen} onClick={() => setPartnersOpen((open) => !open)}>
// //               Partners <ChevronDown size={16} />
// //             </button>

// //             {partnersOpen && (
// //               <div className="mega-panel" onMouseEnter={openPartners} onMouseLeave={closePartners}>
// //                 <div className="mega-inner">
// //                   <div className="mega-column">
// //                     <ul>
// //                       {partnerLinks.map((partner) => (
// //                         <li key={partner.href}>
// //                           <Link href={partner.href} className={`mega-item ${pathname === partner.href ? 'active' : ''}`} onClick={closeAllMenus}>
// //                             <span className="mega-icon" aria-hidden />
// //                             <span>{partner.label}</span>
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           <Link href="/blog" className={`nav-link ${pathname === '/blog' ? 'active' : ''}`} onClick={closeAllMenus}>
// //             Blog
// //           </Link>

// //           <Link href="/events" className={`nav-link ${pathname === '/events' ? 'active' : ''}`} onClick={closeAllMenus}>
// //             Events
// //           </Link>

// //           <div className={`nav-dropdown ${winnersOpen ? 'open' : ''}`} onMouseEnter={openWinners} onMouseLeave={closeWinners}>
// //             <button type="button" className={`nav-link ${isWinnerPage ? 'active' : ''}`} aria-expanded={winnersOpen} onClick={() => setWinnersOpen((open) => !open)}>
// //               Winners <ChevronDown size={16} />
// //             </button>

// //             {winnersOpen && (
// //               <div className="mega-panel" onMouseEnter={openWinners} onMouseLeave={closeWinners}>
// //                 <div className="mega-inner">
// //                   <div className="mega-column">
// //                     <ul>
// //                       {winnerLinks.map((winner) => (
// //                         <li key={winner.href}>
// //                           <Link href={winner.href} className={`mega-item ${pathname === winner.href ? 'active' : ''}`} onClick={closeAllMenus}>
// //                             <span className="mega-icon" aria-hidden />
// //                             <span>{winner.label}</span>
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           <div className={`nav-dropdown ${juryOpen ? 'open' : ''}`} onMouseEnter={openJury} onMouseLeave={closeJury}>
// //             <button type="button" className={`nav-link ${isJuryPage ? 'active' : ''}`} aria-expanded={juryOpen} onClick={() => setJuryOpen((open) => !open)}>
// //               Jury <ChevronDown size={16} />
// //             </button>

// //             {juryOpen && (
// //               <div className="mega-panel" onMouseEnter={openJury} onMouseLeave={closeJury}>
// //                 <div className="mega-inner">
// //                   <div className="mega-column">
// //                     <ul>
// //                       {juryLinks.map((jury) => (
// //                         <li key={jury.href}>
// //                           <Link href={jury.href} className={`mega-item ${pathname === jury.href ? 'active' : ''}`} onClick={closeAllMenus}>
// //                             <span className="mega-icon" aria-hidden />
// //                             <span>{jury.label}</span>
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           <div className={`nav-dropdown ${speakersOpen ? 'open' : ''}`} onMouseEnter={openSpeakers} onMouseLeave={closeSpeakers}>
// //             <button type="button" className={`nav-link ${isSpeakerPage ? 'active' : ''}`} aria-expanded={speakersOpen} onClick={() => setSpeakersOpen((open) => !open)}>
// //               Speakers <ChevronDown size={16} />
// //             </button>

// //             {speakersOpen && (
// //               <div className="mega-panel" onMouseEnter={openSpeakers} onMouseLeave={closeSpeakers}>
// //                 <div className="mega-inner">
// //                   <div className="mega-column">
// //                     <ul>
// //                       {speakerLinks.map((speaker) => (
// //                         <li key={speaker.href}>
// //                           <Link href={speaker.href} className={`mega-item ${pathname === speaker.href ? 'active' : ''}`} onClick={closeAllMenus}>
// //                             <span className="mega-icon" aria-hidden />
// //                             <span>{speaker.label}</span>
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeAllMenus}>
// //             Contact
// //           </Link>
// //         </nav>

// //         <button
// //           type="button"
// //           className="navbar-toggle"
// //           aria-label="Toggle menu"
// //           aria-expanded={mobileOpen}
// //           onClick={() => setMobileOpen((open) => !open)}
// //         >
// //           {mobileOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>
// //     </header>
// //   );
// // }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const speakerLinks = [{ label: 'Speaker 2025', href: '/speakers/speaker-2025' }];

const juryLinks = [{ label: 'Jury 2025', href: '/jury/jury-2025' }];

export default function Navbar() {
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [speakersOpen, setSpeakersOpen] = useState(false);
  const [juryOpen, setJuryOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const speakersCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const juryCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSpeakerPage = pathname.startsWith('/speakers');
  const isJuryPage = pathname.startsWith('/jury');
  const isPartnerPage = pathname === '/partners/partner-2025';

  const openSpeakers = () => {
    if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
    speakersCloseTimer.current = null;
    setSpeakersOpen(true);
  };

  const closeSpeakers = () => {
    if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);

    speakersCloseTimer.current = setTimeout(() => {
      setSpeakersOpen(false);
      speakersCloseTimer.current = null;
    }, 140);
  };

  const openJury = () => {
    if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
    juryCloseTimer.current = null;
    setJuryOpen(true);
  };

  const closeJury = () => {
    if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);

    juryCloseTimer.current = setTimeout(() => {
      setJuryOpen(false);
      juryCloseTimer.current = null;
    }, 140);
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setSpeakersOpen(false);
    setJuryOpen(false);
    setIsHidden(false);
  };

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);

    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (speakersCloseTimer.current) clearTimeout(speakersCloseTimer.current);
      if (juryCloseTimer.current) clearTimeout(juryCloseTimer.current);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`navbar ${isHidden ? 'navbar-hide' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
    >
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeAllMenus}>
          <Image
            src="/assets/logo/logo2-removebg.png"
            alt="Core Media"
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
              onClick={() => setSpeakersOpen((open) => !open)}
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

          <div
            className={`nav-dropdown ${juryOpen ? 'open' : ''}`}
            onMouseEnter={openJury}
            onMouseLeave={closeJury}
          >
            <button
              type="button"
              className={`nav-link ${isJuryPage ? 'active' : ''}`}
              aria-expanded={juryOpen}
              onClick={() => setJuryOpen((open) => !open)}
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

          <Link
            href="/venue"
            className={`nav-link ${pathname === '/venue' ? 'active' : ''}`}
            onClick={closeAllMenus}
          >
            Venue
          </Link>

          <Link
            href="/register"
            className={`nav-link ${pathname === '/register' ? 'active' : ''}`}
            onClick={closeAllMenus}
          >
            Registration
          </Link>

          <Link
            href="/#contact-section"
            className={`nav-link ${activeHash === '#contact-section' ? 'active' : ''}`}
            onClick={closeAllMenus}
          >
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link href="/#contact-section" className="talk-btn" onClick={closeAllMenus}>
            <span>Let’s Talk</span>

            <div className="talk-btn-icon">
              <ArrowUpRight size={18} />
            </div>
          </Link>

          <button
            className={`menu-btn ${mobileOpen ? 'open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((state) => !state);
              setIsHidden(false);
            }}
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </header>
  );
}
