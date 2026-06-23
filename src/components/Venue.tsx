'use client';

import Image from 'next/image';
import { MapPin, Phone, Building2, Plane } from 'lucide-react';

export default function Venue() {
  return (
    <main className="venue-page">
      {/* Hero */}
      <section className="venue-hero">
        <div className="venue-hero-content">
          <span className="venue-badge">EVENT VENUE</span>

          <h1>
            Novotel Mumbai
            <span> International Airport</span>
          </h1>

          <p>
            Experience world-class hospitality at one of Mumbai&apos;s premier business and event
            destinations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="venue-section">
        <div className="venue-container">
          <div className="venue-grid">
            {/* Left */}
            <div className="venue-image-wrapper">
              <div className="venue-image-card">
                <Image
                  src="/assets/venue/Novote.png"
                  alt="Novotel Mumbai International Airport"
                  width={700}
                  height={500}
                  className="venue-image"
                  priority
                />

                <div className="venue-floating-card">
                  <Plane size={18} />
                  <span>5 Min from Airport</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="venue-content">
              <h2>Novotel Mumbai International Airport</h2>

              <p>
                The property is a contemporary edifice that provides an ideal combination of
                comfort, convenience and magnificence, situated close to Chhatrapati Shivaji Maharaj
                International Airport.
              </p>

              <p>
                The property features 268 well-appointed rooms and suites along with magnificent
                event and meeting spaces spanning over 16,500 sq. ft. Guests can enjoy a progressive
                culinary experience at Gourmet Bar and Food Exchange.
              </p>

              <p>
                The hotel provides easy access to both the Western and Eastern Express Highways and
                is conveniently connected to key industrial, business, and recreational hubs
                including MIDC, SEEPZ, Powai, Andheri Kurla Road, and Bandra Kurla Complex.
              </p>

              <div className="venue-info-grid">
                <div className="venue-info-card">
                  <Building2 size={22} />

                  <div>
                    <h4>Address</h4>

                    <p>
                      CTS 1359 Marol,
                      <br />
                      Next to Airport Metro Station,
                      <br />
                      Entrance No. 3,
                      <br />
                      Andheri Kurla Road,
                      <br />
                      Mumbai 400059
                    </p>
                  </div>
                </div>

                <div className="venue-info-card">
                  <Phone size={22} />

                  <div>
                    <h4>Contact</h4>
                    <p>+91 22 6925 8888</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="venue-map-section">
            <div className="venue-map-header">
              <MapPin size={20} />
              <h3>Location Map</h3>
            </div>

            <iframe
              title="Novotel Mumbai International Airport"
              src="https://www.google.com/maps?q=Novotel%20Mumbai%20International%20Airport&output=embed"
              loading="lazy"
              allowFullScreen
              className="venue-map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
