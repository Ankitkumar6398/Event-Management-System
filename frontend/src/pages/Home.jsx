import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import UpcomingEvents from "../components/UpcomingEvents";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
    <HeroSection />
      <UpcomingEvents />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Home; 