// FilterPage.js

import React, { useState } from 'react';
import { View, Text, Button, CheckBox } from 'react-native';

const FilterPage = ({ visible, onClose }) => {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    priceRange: [],
    // Add more filter options as needed
  });

  const handleApplyFilters = () => {
    // Apply filters logic here
    console.log("Applied Filters:", filters);
    onClose(); // Close filter page after applying filters
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Filter Page</Text>
      {/* Add filter options */}
      <Button title="Apply Filters" onPress={handleApplyFilters} />
    </View>
  );
};

export default FilterPage;
