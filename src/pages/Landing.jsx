import Navbar from '../components/Navbar/Navbar';
import BlogContainer from '../components/BlogContainer/BlogContainer';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import Poster from '../components/Poster/Poster';

export default function Landing() {
  return (
    <>
      <Navbar />
      <Slider />
      <br></br>
      <BlogContainer />
      <br></br>
      <Poster />
      <br></br>
      <Footer />
    </>
  );
}
