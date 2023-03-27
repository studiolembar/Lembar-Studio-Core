import Navbar from '../../components/organisms/navbar';
import Footer from '../../components/organisms/footer';
import Hero from '../../components/organisms/herosection';
import Client from '../../components/organisms/clientsection';
import About from '../../components/organisms/aboutsection';
import Service from '../../components/organisms/servicesection';
import Faq from '../../components/organisms/faqsection';
import Contact from '../../components/organisms/contactsection';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* client section */}
      <Client />

      {/* about section */}
      <About />

      {/* service section */}
      <Service />

      {/* faq section */}
      <Faq />

      {/* contact section */}
      <Contact />


      {/* Footer */}
      <Footer />
    </>
  )
}
