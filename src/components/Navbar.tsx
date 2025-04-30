import { X } from 'lucide-react';

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  const navLinks = [
    {
      link: '#',
      name: 'Home',
    },
    {
      link: '#about',
      name: 'About',
    },
    {
      link: '#projects',
      name: 'Projects',
    },

    {
      link: '/blog',
      name: 'Blog',
    },

    {
      link: '#contact',
      name: 'Contact',
    },
  ];

  return (
    <nav
      className={`absolute top-0 left-0 z-50 flex h-screen w-full flex-col gap-4 bg-gray-950 p-4 transition-transform duration-300 md:relative ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:h-max md:translate-x-0 md:flex-row md:items-center md:justify-end md:space-y-0 md:space-x-2 md:bg-transparent`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="self-end text-white md:hidden">
        <X />
      </button>

      {navLinks.map(({ link, name }) => (
        <a
          key={link}
          href={link}
          className="relative inline-block py-2 text-white after:transition-all after:duration-300 md:after:absolute md:after:bottom-1.5 md:after:left-1/2 md:after:h-[2px] md:after:w-0 md:after:bg-white md:hover:after:left-0 md:hover:after:w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};
export default Navbar;
