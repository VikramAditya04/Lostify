import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Lostify</h2>
          <p className="text-sm text-gray-300">&copy; {currentYear} Lostify. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition">Know More</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
            <li><Link to="/help" className="hover:text-orange-400 transition">Help Centre</Link></li>
            <li><Link to="/pickup" className="hover:text-orange-400 transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <linearGradient id="SVGID_1__IALWhfjB37gY_gr1" x1="39.328" x2="8.672" y1="8.672" y2="39.328" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60affe"></stop><stop offset=".033" stop-color="#6ab4fe"></stop><stop offset=".197" stop-color="#97cbfe"></stop><stop offset=".362" stop-color="#bddeff"></stop><stop offset=".525" stop-color="#daecff"></stop><stop offset=".687" stop-color="#eef7ff"></stop><stop offset=".846" stop-color="#fbfdff"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><path fill="url(#SVGID_1__IALWhfjB37gY_gr1)" d="M36.5,40.5h-25c-2.209,0-4-1.791-4-4v-25c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v25	C40.5,38.709,38.709,40.5,36.5,40.5z"></path><path fill="none" stroke="#2e9bfe" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M40.5,31.5v5c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"></path><path fill="none" stroke="#2e9bfe" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7.5,18.064V11.5c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"></path><path fill="#2e9bfe" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563L28.587,32.304z"></path><polygon fill="#2e9bfe" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#2e9bfe" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
            </svg>

            </a>
            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/vikramaditya04/" target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="hover:text-orange-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>

            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
              <linearGradient id="jm_nAfYbxsVmTlYr5N4x9a_43625_gr1" x1="32" x2="32" y1="6.667" y2="57.872" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)" d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"></path><linearGradient id="jm_nAfYbxsVmTlYr5N4x9b_43625_gr2" x1="32" x2="32" y1="18.167" y2="45.679" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)" d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z"></path><linearGradient id="jm_nAfYbxsVmTlYr5N4x9c_43625_gr3" x1="46" x2="46" y1="12.75" y2="23.049" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)" d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z"></path>
              </svg>

            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        Made with ❤️ by Vikram Aditya
      </div>
    </footer>
  );
};

export default Footer;
