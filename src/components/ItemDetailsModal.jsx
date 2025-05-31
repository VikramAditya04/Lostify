import { motion } from 'framer-motion';
import ItemList from './ItemList';

const ItemDetailsModal = ({ item, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{item.itemName}</h2>

        {item.image && (
          <img
            src={URL.createObjectURL(item.image)}
            alt={item.itemName}
            className="w-full h-48 object-cover rounded mb-4"
          />
        )}

        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Type:</strong> {item.type}</p>
        <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> {item.location}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Mobile No.:</strong> {item.MobileNo}</p>
        <p><strong>Email:</strong> {item.contactEmail}</p>
      </div>
    </motion.div>
  );
};

export default ItemDetailsModal;
