// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-4 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyNextSite. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">LinkedIn</a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">GitHub</a>
          <a href="/privacy" className="hover:text-yellow-300">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
