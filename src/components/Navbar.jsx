import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-300 sticky top-0 z-50 w-full px-10 py-2 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl text-orange-400 font-bold">
          <svg className="inline-block w-7 h-7 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Lostify
        </span>
      </div>
      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-white font-medium text-lg">
        <Link to="/" className="hover:text-orange-400 transition">Home</Link>
        <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
        <Link to="/help" className="hover:text-orange-400 transition">Help Centre</Link>
        <Link to="/pickup" className="hover:text-orange-400 transition">Pickup Guildlines</Link>
      </div>
      {/*  Login */}
      <div className="flex items-center gap-4">
        <button className="bg-[#0b4c47] hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-md transition">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;