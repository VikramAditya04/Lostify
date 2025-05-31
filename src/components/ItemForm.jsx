
import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  'Electronics', 'Books', 'Clothing', 'Accessories', 'Documents', 'Other'
];
const types = [
  'Lost', 'Found'
];
const ItemForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    type: '',
    itemName: '',
    category: '',
    date: '',
    location: '',
    description: '',
    image: null,
    MobileNo: '',
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
    alert("Your report is submitted successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-[#0b4c47] rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Report an Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Did you lose or find an item?</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="bg-[#0b4c47] text-white p-2 border rounded-xl border-blue-400"
          >
            <option value="">Choose a option</option>
            {types.map((type) => (
              <option key={type} value={type} className="text-black bg-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
            className="input p-2 border rounded-xl border-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="bg-[#0b4c47] text-white p-2 border rounded-xl border-blue-400"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category} className="text-black bg-white">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Date {formData.type === 'lost' ? 'Lost' : 'Found'}
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="input p-2 border rounded-xl border-blue-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="input p-2 border rounded-xl border-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="input p-2 border rounded-xl border-blue-400"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="input p-2 border rounded-xl border-blue-400"
          />
        </div>

        {/* Mobile No */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Mobile No.</label>
          <input
            type="number"
            name="MobileNo"
            value={formData.MobileNo}
            onChange={handleChange}
            required
            className="input p-2 border rounded-xl border-blue-400"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            className="input p-2 border rounded-xl border-blue-400"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className={`w-full btn ${formData.type === 'lost' ? 'btn-primary' : 'btn-secondary'}`}
        >
          Submit Report
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ItemForm;
