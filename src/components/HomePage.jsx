import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import campusimg from '../assets/Campus lost and Found.png'

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#014034] text-white p-2"
    >
      <div className="min-h-screen bg-[#0b4c47] flex flex-col">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-10 md:px-24 py-10 md:py-0 gap-10">
          {/* Left: Text Content */}
          <div className="max-w-xl text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Lost Something On Campus?<br />Let's Help You Find It
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Searched every corner of campus? Don't stress! Post, search, or report lost and found items in minutes. Reconnect with what matters.
            </p>
            <div className="flex gap-4 mb-4">
              <Link to="/report-lost" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-md transition shadow">
                Report an Item
              </Link>
              <Link to="/search" className="bg-orange-300 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-md transition shadow">
                Browse Items
              </Link>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              className="flex flex-col items-center justify-center relative w-[350px] h-[270px]"
              animate={{
                y: [0, -10, 0], // float up and down
                x: [0, -5, 0], // float left and right
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <img src={campusimg} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage; 