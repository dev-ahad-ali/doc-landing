import Banner from './components/Banner/Banner';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import GetSolutions from './components/GetSolutions/GetSolutions';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';
import Services from './components/Services/Services';
import Stats from './components/Stats/Stats';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <GetSolutions />
      <Services />
      <Testimonial />
      <Faq />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
