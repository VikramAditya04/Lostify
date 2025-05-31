import { useState } from 'react';
import ItemCard from './ItemCard';
import ItemDetailsModal from './ItemDetailsModal';

const ItemList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => setSelectedItem(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} onViewDetails={handleViewDetails} />
      ))}

      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
};

export default ItemList;
