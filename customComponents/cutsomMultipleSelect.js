import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

export default function MultiSelectItems({ dropdownData, onSelectedItemsChange }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
    // Pass selected items back to parent component
    onSelectedItemsChange(selectedItems);
  };

  // Ensure each item has a unique id
  const formattedDropdownData = dropdownData.map((item, index) => ({
    id: index.toString(), // You can use a unique id generator here if needed
    ...item
  }));

  return (
    <View style={{ flex: 1 }}>
      
         <MultiSelect
        hideTags
        items={formattedDropdownData}
        uniqueKey="id"
        onSelectedItemsChange={handleSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={(text) => console.log(text)}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="label" // Use 'label' as the display key to show dropdown labels
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#023B5E"
        submitButtonText="Submit"
      />
     
      <View>
        {/* Render dropdown options */}
        {selectedItems.map(item => (
          <Text key={item.id}>{item.label}</Text>
        ))}
      </View>
    </View>
  );
}
