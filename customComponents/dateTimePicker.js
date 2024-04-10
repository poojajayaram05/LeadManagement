// DateTimePicker.js

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

const DateTimePicker = ({ title, value, onChange, mode }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowModal(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <Pressable onPress={() => setShowModal(true)}>
        <View style={styles.dateInput}>
          <Text style={styles.dateText}>
            {value ? value.toLocaleDateString() : 'Select date '}
            <View style={styles.icon}>
              <Ionicons name='calendar' size={20} color='black' />
            </View>
          </Text>
        </View>
      </Pressable>
      {showModal && (
        <RNDateTimePicker
          value={value || new Date()}
          mode={mode}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dateText: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    paddingLeft: 180,
  },
});

export default DateTimePicker;
