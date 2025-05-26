import { motion } from 'framer-motion';
import { useState } from 'react';

const ItemCard = ({ item, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card overflow-hidden"
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
            onClick={() => onViewDetails(item)}
            className="btn-primary"
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
          <span className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary">
            {item.category}
          </span>
          <span className="px-2 py-1 text-sm rounded-full bg-secondary/10 text-secondary">
            {item.type === 'lost' ? 'Lost' : 'Found'}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          Location: {item.location}
        </p>
        <p className="text-gray-600 text-sm">
          Date: {new Date(item.date).toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  );
};

export default ItemCard; 