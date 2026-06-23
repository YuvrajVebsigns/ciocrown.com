import { redirect } from 'next/navigation';

export default function WinnersPage() {
  redirect('/winners/winner-2025');
}

// import Link from 'next/link';

// export default function WinnersPage() {
//   const winners = [
//     { year: '2025', slug: 'winner-2025' },
//     { year: '2024', slug: 'winner-2024' },
//     { year: '2023', slug: 'winner-2023' },
//     { year: '2022', slug: 'winner-2022' },
//     { year: '2021', slug: 'winner-2021' },
//     { year: '2020', slug: 'winner-2020' },
//     { year: '2019', slug: 'winner-2019' },
//     { year: '2018', slug: 'winner-2018' },
//     { year: '2017', slug: 'winner-2017' },
//     { year: '2016', slug: 'winner-2016' },
//   ];

//   return (
//     <main className="winners-page">
//       <section className="winners-hero">
//         <p className="winners-kicker">Winners Archive</p>

//         <h1>Winners Hall of Fame</h1>

//         <p>
//           Explore the remarkable leaders and innovators recognized across the years for
//           their outstanding contributions to business and technology.
//         </p>
//       </section>

//       <section className="winner-section-block">
//         <div className="winner-section-header winner-section-header--centered">
//           <p className="winner-section-kicker">Browse Winners</p>
//           <h2>Winners 2016 - 2025</h2>
//           <span>{winners.length} Winner Editions</span>
//         </div>

//         <div className="winners-grid">
//           {winners.map((winner) => (
//             <Link
//               key={winner.year}
//               href={`/winners/${winner.slug}`}
//               className="winner-card"
//             >
//               <span className="winner-card-label">Winner</span>

//               <strong>{winner.year}</strong>

//               <p>
//                 View all recognised leaders, technology icons and business icons for
//                 {` ${winner.year}`}.
//               </p>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
