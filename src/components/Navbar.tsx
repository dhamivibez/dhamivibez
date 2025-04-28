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
      link: '#projects',
      name: 'Projects',
    },
    {
      link: '#about',
      name: 'About',
    },
    {
      link: '#skills',
      name: 'Skills',
    },
    {
      link: '/blog',
      name: 'Blog',
    },
    {
      link: '#testimonials',
      name: 'Testimonials',
    },
    {
      link: '#contact',
      name: 'Contact',
    },
  ];

  return (
    <nav
      className={`absolute top-0 left-0 flex h-full w-full flex-col gap-4 bg-gray-900 p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex-row md:items-center md:justify-end md:space-y-0 md:space-x-2 md:bg-transparent`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="self-end text-white md:hidden">
        <X />
      </button>

      {navLinks.map(({ link, name }) => (
        <a
          key={link}
          href={link}
          className="relative inline-block py-2 text-white after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};
export default Navbar;
