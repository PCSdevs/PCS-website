import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Services from '@/react-app/components/Services';
import Products from '@/react-app/components/Products';
import Portfolio from '@/react-app/components/Portfolio';
import Contact from '@/react-app/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Portfolio />
      <Contact />
    </div>
  );
}
