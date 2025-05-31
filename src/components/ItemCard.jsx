import { motion } from 'framer-motion';
import { useState } from 'react';

const ItemCard = ({ item, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isLost = item.type?.toLowerCase() === 'lost';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card overflow-hidden rounded-lg shadow-md cursor-pointer bg-white"
      onClick={() => onViewDetails(item)} 
    >
      <div className="relative h-48 bg-gray-100">
        {item.image ? (
          <img
            src={URL.createObjectURL(item.image)}
            alt={item.itemName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              onViewDetails(item);
            }}
            className="bg-white font-semibold px-4 py-2 rounded border border-white"
          >
            View Details
          </button>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {item.itemName}
        </h3>
        <div className="flex items-center space-x-2 mb-2">
          <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
            {item.category}
          </span>
          <span
            className={`px-2 py-1 text-sm rounded-full ${
            item.type === 'lost'
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {item.type === 'lost' ? 'Lost' : 'Found'}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-1">Location: {item.location}</p>
        <p className="text-gray-600 text-sm">
          Date: {new Date(item.date).toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  );
};

export default ItemCard;
