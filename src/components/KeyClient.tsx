// 'use client';

// import Image from 'next/image';

// export default function KeyClient() {
//   const logos = [
//     '/assets/keyclients/client1.png',
//     '/assets/keyclients/client2.png',
//     '/assets/keyclients/client3.png',
//     '/assets/keyclients/client4.png',
//     '/assets/keyclients/client5.png',
//     '/assets/keyclients/client6.png',
//     '/assets/keyclients/client7.png',
//     '/assets/keyclients/client8.png',
//     '/assets/keyclients/client9.png',
//   ];

//   return (
//     <section className="clients-section">
//       <div className="clients-container">
//         {/* Heading */}

//         <div className="clients-heading">
//           <div className="clients-label">
//             <Image
//               src="/assets/icon.png"
//               alt="Key Clients"
//               width={20}
//               height={20}
//               className="expertise-label-icon"
//             />
//             <span className="clients-label-text">CLIENT SHOWCASE</span>
//           </div>

//           <h2 className="clients-title">
//             Trusted by <span>Key Clients</span> Across Industries
//           </h2>

//           {/* <h2 className="clients-title">
//             Trusted By Industry
//             <br />
//             <span>Leading Brands</span>
//           </h2> */}
//         </div>

//         {/* Slider */}

//         <div className="clients-slider">
//           <div className="clients-track">
//             {[...logos, ...logos].map((logo, index) => (
//               <div key={index} className="client-card">
//                 <Image
//                   src={logo}
//                   alt="Client Logo"
//                   width={180}
//                   height={80}
//                   className="client-logo"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Gradients */}

//           <div className="clients-gradient-left" />

//           <div className="clients-gradient-right" />
//         </div>
//       </div>
//     </section>
//   );
// }

// // 'use client';

// // import Image from 'next/image';

// // export default function KeyClient() {
// //   const logos = [
// //     '/assets/keyclients/client1.png',
// //     '/assets/keyclients/client2.png',
// //     '/assets/keyclients/client3.png',
// //     '/assets/keyclients/client4.png',
// //     '/assets/keyclients/client5.png',
// //     '/assets/keyclients/client6.png',
// //     '/assets/keyclients/client7.png',
// //     '/assets/keyclients/client8.png',
// //     '/assets/keyclients/client9.png',
// //   ];

// //   return (
// //     // <section className="clients-section">
// //       <div className="clients-container">
// //         <div className="clients-slider">
// //           <div className="clients-heading">
// //             <h2 className="clients-title">Key Clients</h2>
// //           </div>

// //           <div className="clients-track">
// //             {[...logos, ...logos].map((logo, index) => (
// //               <div key={index} className="client-card">
// //                 <Image
// //                   src={logo}
// //                   alt="Client Logo"
// //                   width={180}
// //                   height={80}
// //                   className="client-logo"
// //                 />
// //               </div>
// //             ))}
// //           </div>

// //           <div className="clients-gradient-left" />
// //           <div className="clients-gradient-right" />
// //         </div>
// //       </div>
// //     // </section>
// //   );
// // }

'use client';

import Image from 'next/image';

export default function KeyClient() {
  const crownYears = [
    {
      year: '2013',
      location: 'Pattaya, Thailand',
      image: '/assets/ciocrown/2013.jpg',
    },
    {
      year: '2014',
      location: 'Lonavala, India',
      image: '/assets/ciocrown/2014.jpg',
    },
    {
      year: '2015',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2015.jpg',
    },
    {
      year: '2016',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2016.jpg',
    },
    {
      year: '2017',
      location: 'Khopoli, India',
      image: '/assets/ciocrown/2017.jpg',
    },
    {
      year: '2018',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2018.jpg',
    },
    {
      year: '2019',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2019.jpg',
    },
    {
      year: '2020',
      location: 'ALL ONLINE',
      image: '/assets/ciocrown/2020.jpg',
    },
    {
      year: '2021',
      location: 'ALL ONLINE',
      image: '/assets/ciocrown/2021.png',
    },
    {
      year: '2022',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2022.png',
    },
    {
      year: '2023',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2023.png',
    },
    {
      year: '2024',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2024.png',
    },
    {
      year: '2025',
      location: 'Mumbai, India',
      image: '/assets/ciocrown/2025.png',
    },
  ];

  return (
    <section className="crown-history-section">
      <div className="clients-container">
        <div className="clients-heading">
          <div className="clients-label">
            <Image
              src="/assets/icon.png"
              alt="CIO Crown"
              width={20}
              height={20}
              className="expertise-label-icon"
            />

            <span className="clients-label-text">LEGACY OF EXCELLENCE</span>
          </div>

          <h2 className="clients-title">
            Celebrating 15 Years of <span>CIO CROWN</span>
          </h2>

          <p className="crown-subtitle">
            Celebrating over a decade of leadership, innovation, and technology excellence.
          </p>
        </div>

        <div className="crown-grid">
          {crownYears.map((item) => (
            <div key={item.year} className="crown-card">
              <div className="crown-image-wrap">
                <Image
                  src={item.image}
                  alt={`CIO Crown ${item.year}`}
                  width={400}
                  height={280}
                  className="crown-image"
                />

                <div className="crown-year-badge">{item.year}</div>
              </div>

              <div className="crown-content">
                {/* <span className="crown-tag">Recent Achievement</span> */}

                <h3>CIO CROWN {item.year}</h3>

                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
