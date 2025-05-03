import Header from '@/components/Header';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Background from '@/components/ui/Background';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="max-w-full overflow-hidden">
      <Background count={15} />
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
