import React from 'react';
import Header from '../layout/Header/TopNav.js';
import PopularSection from '../components/popular section/Pop.js';
import MyCarousel from '../components/carousel';
import Cardhold from '../components/Cardhold';
import AboutSection from '../components/About';
//import BlogSection from '../components/Bloghold';
import Collectionprop from '../components/Collectionprop';
import Footer from '../layout/Footer/Footer.jsx';
import Testimonials from '../components/Testimonial';
import Blog from '../components/Blog';
function Home() 
{
  return (
    <div>
      <Header />
      <MyCarousel />
      <PopularSection />
      <Collectionprop />
      <Cardhold />
      <Blog />
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default Home;
