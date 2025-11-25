import React from 'react';
import HeroPage from './homeComponents/hero';
import WhyChooseUs from './homeComponents/chooseUs'
import ServicesPreview from './homeComponents/services'
import ProjectTeaser from './homeComponents/recentProjects';
import Testimonials from './homeComponents/testimonial';
import CTASection from './homeComponents/contact';
import AboutPreview from './homeComponents/aboutPreview';

const HomePage = () => {
  return (
    <div>
      <HeroPage />

      {/* About Section */}
      <AboutPreview />

      {/* Our Services Section */}
        <ServicesPreview />

      {/* Recent Projects Section */}
        <ProjectTeaser />

      {/* Testimonials Section */}
        <Testimonials />

      {/* Why Choose Us Section */}
        <WhyChooseUs />

      {/* Contact Section */}
      <CTASection />

     </div>
  );
};

export default HomePage;
