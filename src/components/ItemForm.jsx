import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  'Electronics',
  'Books',
  'Clothing',
  'Accessories',
  'Documents',
  'Other'
];

const ItemForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    date: '',
    location: '',
    description: '',
    image: null,
    MobileNo:'',
    contactEmail: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    {alert("Your report is Submit Succesfully!");}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-orange-400 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Report {type === 'lost' ? 'Lost' : 'Found'} Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter item name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date {type === 'lost' ? 'Lost' : 'Found'}
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="input"
            placeholder="Provide detailed description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile No.
          </label>
          <input
            type="number"
            name="MobileNo"
            value={formData.MobileNo}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter your mobile no."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Email
          </label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            className="input"
            placeholder="Enter your email"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className={`w-full btn ${type === 'lost' ? 'btn-primary' : 'btn-secondary'}`}
        >
          Submit Report
        </motion.button>

      </form>
    </motion.div>
  );
};

export default ItemForm; 