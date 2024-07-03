import Banner from './components/Banner/Banner';
import Faq from './components/FAQ/Faq';
import GetSolutions from './components/GetSolutions/GetSolutions';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <GetSolutions />
      <Services />
      <Testimonial />
      <Faq />
      <Offer />
    </>
  );
}

export default App;
