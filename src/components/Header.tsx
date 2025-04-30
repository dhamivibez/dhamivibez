import Navbar from '@/components/Navbar';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 z-40 flex h-12 w-full items-center justify-between border-b border-white/5 bg-gray-950/80 px-4 backdrop-blur-lg md:h-16 lg:px-16">
      <h1 className="text-2xl text-purple-600">
        Dhami<span className="text-white">vibez</span>
      </h1>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
};
export default Header;
