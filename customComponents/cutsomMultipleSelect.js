import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const CustomMultipleSelect = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };

  // Extract only the first names from the items array
  const firstNames = items.map(item => item.firstname);
  console.log(firstNames);

  return (
    <View>
      <MultiSelect
        items={firstNames} // Use only the first names
        uniqueKey="id"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Select items"
        searchInputPlaceholderText="Search items..."
        onChangeInput={text => console.log(text.firstname)}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
      />
      <View>
        <Text>Selected items:</Text>
        {selectedItems.map(item => (
          <Text key={item}>{item}</Text> // Display selected first names
        ))}
      </View>
    </View>
  );
};

export default CustomMultipleSelect;
