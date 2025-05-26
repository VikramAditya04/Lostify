import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 shadow-2xl rounded-2xl bg-white/90">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Lost & Found Portal
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Your one-stop solution for reporting lost items and finding your belongings on campus.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card bg-white/80 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">Lost Something?</h2>
              <p className="text-gray-600 mb-6">
                Report your lost item and increase your chances of finding it.
              </p>
              <Link to="/report-lost" className="btn-primary inline-block">
                Report Lost Item
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card bg-white/80 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-secondary mb-4">Found Something?</h2>
              <p className="text-gray-600 mb-6">
                Help others by reporting items you've found on campus.
              </p>
              <Link to="/report-found" className="btn-secondary inline-block">
                Report Found Item
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <Link to="/search" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition font-semibold text-lg">
              Browse Lost & Found Items →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage; 