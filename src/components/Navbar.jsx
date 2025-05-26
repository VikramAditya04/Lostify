import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 shadow-md border-b border-gray-200 backdrop-blur sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold text-primary"
              >
                Lost & Found
              </motion.div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/report-lost" className="btn-primary">
              Report Lost
            </Link>
            <Link to="/report-found" className="btn-secondary">
              Report Found
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;