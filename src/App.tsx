/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Offer } from './components/Offer';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111111] antialiased selection:bg-[#C9A227] selection:text-white">
      <TopBar />
      <Hero />
      <Problem />
      <Offer />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
