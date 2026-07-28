'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Brands() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 3;

  const headerRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-30px)',
    threshold: 0.1,
  });

  const sliderWrapRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in',
    initialTransform: 'translateY(24px)',
    threshold: 0.1,
  });

  const partners = [
    {
      name: 'Anunta',
      role: 'Premium Partner',
      image: '/assets/partner2026/partner_logo_2.png',
    },
    {
      name: 'Freshworks',
      role: 'Premium Partner',
      image: '/assets/partner2026/freshworks.webp',
    },
    // {
    //   name: 'Ingram',
    //   role: 'Premium Partner',
    //   image: '/assets/partner2026/ingram.png',
    // },
    {
      name: 'Juniper',
      role: 'Premium Partner',
      image: '/assets/partner2026/Juniper-Redington.webp',
    },
    {
      name: 'Neurealm',
      role: 'Premium Partner',
      image: '/assets/partner2026/partner_logo_6.png',
    },
    // {
    //   name: 'NTT',
    //   role: 'Premium Partner',
    //   image: '/assets/partners/ntt.png',
    // },
    // {
    //   name: 'Oracle',
    //   role: 'Premium Partner',
    //   image: '/assets/partners/oracle.png',
    // },
    // {
    //   name: 'AdStringO',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/adstringo.png',
    // },
    {
      name: 'Archon',
      role: 'Associate Partner',
      image: '/assets/partner2026/Archon.webp',
    },
    {
      name: 'Barracuda',
      role: 'Associate Partner',
      image: '/assets/partner2026/Barracuda.webp',
    },
    // {
    //   name: 'CBY',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/cby.png',
    // },
    // {
    //   name: 'COMnet',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/comnet.png',
    // },
    // {
    //   name: 'Datadog',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/datadog.png',
    // },
    // {
    //   name: 'Digital Track',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/digital-track.png',
    // },
    {
      name: 'IceWarp',
      role: 'Associate Partner',
      image: '/assets/partner2026/IceWarp.webp',
    },
    // {
    //   name: 'Karnival',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/karnival.png',
    // },
    {
      name: 'NeoSoft',
      role: 'Associate Partner',
      image: '/assets/partner2026/partner_3.png',
    },
    // {
    //   name: 'New era',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/new-era.png',
    // },
    {
      name: 'Rubrik',
      role: 'Associate Partner',
      image: '/assets/partner2026/partner_logo_8.png',
    },
    // {
    //   name: 'ServiceNow',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/servicenow.png',
    // },
    {
      name: 'SymphonyAI',
      role: 'Associate Partner',
      image: '/assets/partner2026/SY.webp',
    },
    {
      name: 'Tata Communication',
      role: 'Associate Partner',
      image: '/assets/partner2026/Tata-Communications.webp',
    },
    // {
    //   name: 'Zarthi',
    //   role: 'Associate Partner',
    //   image: '/assets/partners/zarthi.png',
    // },
  ];

  const getPageCount = () => Math.ceil(partners.length / cardsPerPage);

  const scrollToPage = (pageIndex: number) => {
    const el = sliderRef.current;
    if (!el) return;

    const maxPage = getPageCount() - 1;
    const nextPage = Math.max(0, Math.min(pageIndex, maxPage));
    const targetIndex = nextPage * cardsPerPage;
    const child = el.children[targetIndex] as HTMLElement;

    if (!child) return;

    el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    setActivePage(nextPage);
  };

  const scrollLeft = () => {
    scrollToPage(activePage - 1);
  };

  const scrollRight = () => {
    scrollToPage(activePage + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) return;

      const maxPage = getPageCount() - 1;

      if (activePage >= maxPage) {
        scrollToPage(0);
      } else {
        scrollToPage(activePage + 1);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [activePage]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;

      const scrollLeftPos = el.scrollLeft;
      let nearestPage = 0;
      let nearestDist = Infinity;

      for (let page = 0; page < getPageCount(); page += 1) {
        const targetIndex = page * cardsPerPage;
        const child = children[targetIndex];
        if (!child) continue;

        const dist = Math.abs(child.offsetLeft - scrollLeftPos);

        if (dist < nearestDist) {
          nearestDist = dist;
          nearestPage = page;
        }
      }

      setActivePage(nearestPage);
    };

    el.addEventListener('scroll', onScroll);
    onScroll();

    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="dialogue-section">
      <div className="dialogue-container">
        <div className="dialogue-header" ref={headerRef}>
          <div>
            <span className="dialogue-subtitle">
              <Image src="/assets/icon.png" alt="" width={18} height={18} className="" />
              <span className="dialogue-subtitle-text">PARTNERS 2025</span>
            </span>

            {/* <h2 className="dialogue-title">
              Our <span>Partners</span>
            </h2> */}
          </div>

          <div className="dialogue-arrows">
            <button
              className="dialogue-arrow-btn"
              onClick={scrollLeft}
              aria-label="Previous partners"
            >
              <ChevronLeft size={22} />
            </button>

            <button className="dialogue-arrow-btn" onClick={scrollRight} aria-label="Next partners">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div ref={sliderWrapRef}>
          <div
            className="dialogue-slider"
            ref={sliderRef}
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
          >
            {partners.map((partner, index) => (
              <div className="dialogue-card partner-card" key={index}>
                <div className="partner-logo-box">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={170}
                    height={90}
                    className="partner-logo"
                  />
                </div>

                <div className="partner-content">
                  {/* <span className="partner-year">Partners 2025</span> */}
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-role">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dialogue-dots">
            {Array.from({ length: getPageCount() }).map((_, idx) => (
              <button
                key={idx}
                className={idx === activePage ? 'dialogue-dot active' : 'dialogue-dot'}
                onClick={() => scrollToPage(idx)}
                aria-label={`Go to partners page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
