import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomCheckbox = ({ isChecked, onChange, label }) => {
  return (
    <TouchableOpacity onPress={() => onChange(!isChecked)}>
      <View style={styles.container}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Ionicons name="checkmark" size={24} color="white" />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8, // Add some space between checkbox and label
  },
  checked: {
    backgroundColor: 'black',
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckbox;