import { motion } from 'framer-motion';
import { useState } from 'react';
import ItemCard from './ItemCard';
import ItemDetailsModal from './ItemDetailsModal';

const SearchPage = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [...new Set(items.map(item => item.category))];
  const types = ['lost', 'found'];

  const filteredItems = items.filter(item => {
    const matchesSearch =
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesType = !selectedType || item.type.toLowerCase() === selectedType;
    const matchesDate = !selectedDate || item.date === selectedDate;

    return matchesSearch && matchesCategory && matchesType && matchesDate;
  });

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="h-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#0b4c47]  shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          </h1>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input border p-2 rounded-xl border-blue-400"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input border p-2 rounded-xl border-blue-400"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="input border p-2 rounded-xl border-blue-400"
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option className="text-black bg-white" key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            ))}
          </select>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input border p-2 rounded-xl border-blue-400"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ItemCard item={item} onViewDetails={handleViewDetails} />
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
        </motion.div>
      )}

      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
};

export default SearchPage;
