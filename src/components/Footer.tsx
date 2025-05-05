const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <p className="text-sm text-white/70">&copy; {new Date().getFullYear()} Dhamivibez. All rights reserved.</p>
        <p className="text-sm text-white/60">Built with passion</p>
      </div>
    </footer>
  );
};
export default Footer;
