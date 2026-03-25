import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => (
  <>
    <Navbar />
    <main className="pt-24">
      <ServicesSection showAll />
    </main>
    <Footer />
  </>
);

export default Services;
