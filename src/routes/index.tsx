import { createFileRoute } from '@tanstack/react-router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Background from '@/components/ui/Background';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className='max-w-full overflow-hidden'>
      <Background count={15} />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
