import React from "react";
import Header from "../layout/Header/TopNav.js";
import PopularSection from "../components/popular section/Pop.js";
import MyCarousel from "../components/carousel";
import Cardhold from "../components/Cardhold";
import AboutSection from "../components/About";
import Collectionprop from "../components/Collectionprop";
import Footer from "../layout/Footer/Footer.jsx";
import Testimonials from "../components/Testimonial";
import Blog from "../components/Blog";
import BasicExample from "../layout/Header/Nav.js";
function HomePage() {
  return (
    <div>
      <BasicExample />
      <MyCarousel />
      <PopularSection />
      <Collectionprop />
      <Blog />
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default HomePage;
