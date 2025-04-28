import Navbar from '@/components/Navbar';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex h-12 items-center justify-between px-4 shadow-md lg:px-16">
      <h1 className="text-2xl text-white">𝕯𝖍𝖆𝖒𝖎𝖛𝖎𝖇𝖊𝖟</h1>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
};
export default Header;
