import React from 'react';
import Scene from '../components/3d/Scene';
import ServicesHero from '../components/services/hero/ServicesHero';
import CoreServices from '../components/services/core/CoreServices';
import ServiceCategories from '../components/services/categories/ServiceCategories';
import ServicePortfolio from '../components/services/portfolio/ServicePortfolio';
import ClientSupport from '../components/services/support/ClientSupport';
import ContactForm from '../components/services/contact/ContactForm';

export default function Services() {
  return (
    <div className="relative min-h-screen bg-black">
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF0000]/10 via-black to-black" />
      
      <div className="relative pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesHero />
          <CoreServices />
          <ServiceCategories />
          <ServicePortfolio />
          <ClientSupport />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}