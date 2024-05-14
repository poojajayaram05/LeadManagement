import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';
 
const FilterModal = ({ isVisible, onClose, filterOptions, onFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
 
 
  const applyFilters = () => {
    onFilter(selectedFilters);
  };
 
  const resetFilters = () => {
    setSelectedFilters({});
    onFilter({}, false);
  };
 
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.resetButtonSmall} onPress={resetFilters}>
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Filter</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="caret-back" size={24} color="black" />
              </TouchableOpacity>
              </View>
          {filterOptions.map((option, index) => (
            <View key={index} style={styles.filter}>
              <View style={styles.titleContainer}>
                <Text style={styles.labelText}>{option.title}</Text>
              </View>
              <View style={styles.selectListContainer}>
                <SelectList
                  boxStyles={styles.dropdown}
                  setSelected={(label) =>
                    setSelectedFilters((prevFilters) => ({
                      ...prevFilters,
                      [option.key]: label,
                    }))
                  }
                  data={option.dropdownData.map((item) => ({ value: item, label: item }))}
                />
              </View>
            </View>
          ))}
          <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
            <Text>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
 
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: '90%',
    height: '70%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelText: {
    color: '#023B5E',
    fontWeight: 'bold',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  filter: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleContainer: {},
  selectListContainer: {},
  applyButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  resetButtonSmall: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  resetText: {
    fontSize: 12,
  },
  closeButton: {},
});
 
export default FilterModal;