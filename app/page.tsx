import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Features from '@/components/features';
import About from '@/components/about';
import Goals from '@/components/goals';
// import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Goals />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQ />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
