// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">MyNextSite</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-300">About</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
