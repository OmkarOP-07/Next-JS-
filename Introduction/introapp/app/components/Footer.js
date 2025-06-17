// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">Made with ❤️using Next.js & Tailwind CSS by Omkar</p>
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} MyNextSite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
