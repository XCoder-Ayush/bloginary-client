import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import BlogContainer from '../components/BlogContainer/BlogContainer';
import Slider from '../components/Slider/Slider';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

export default function Landing() {
  return (
    <>
      <Navbar />
      <Slider />
      <br></br>
      <BlogContainer />
      <br></br>
      <Banner />
      <br></br>
      <Footer />
    </>
  );
}
