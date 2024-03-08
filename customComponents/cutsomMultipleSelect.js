import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
}];

const MultiSelectExample = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        items={items}
        uniqueKey="id"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Select items"
        searchInputPlaceholderText="Search items..."
        onChangeInput={text => console.log(text)}
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
          <Text key={item}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default MultiSelectExample;
