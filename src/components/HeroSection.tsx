'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="hero-section">
      {show && (
        <div className="hero-image-only animate__animated animate__jackInTheBox">
          <Image
            src="/assets/home/hero-img-cc3.jpg"
            alt="Hero Banner"
            width={1920}
            height={1000}
            priority
            className="hero-image"
          />
        </div>
      )}
    </section>
  );
}
