"use client";


import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
