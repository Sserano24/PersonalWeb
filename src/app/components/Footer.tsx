import React from "react";

const Footer = () => {
  return (
    <footer>

      <div className="w-full border-t border-gray-800 text-xs text-gray-500 py-3 px-4 flex flex-col sm:flex-row justify-between items-center bg-gray-950">
        <div>&copy; {new Date().getFullYear()} Saul Serrano. All rights reserved.</div>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms</a>
          <a href="#" className="hover:text-blue-400 transition">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
