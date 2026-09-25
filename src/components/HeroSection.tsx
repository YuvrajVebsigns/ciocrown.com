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
            src="/assets/home/783b6eff-8662-42a2-9266-9b56e7938de8 (2).webp"
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
