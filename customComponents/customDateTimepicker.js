import React from 'react';
import { Platform } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CustomDateTimePicker = ({ mode, value, onChange }) => {
  const defaultMode = Platform.OS === 'ios' ? 'spinner' : 'default';

  return (
    <RNDateTimePicker
      value={value || new Date()}
      mode={mode || defaultMode}
      display="default"
      onChange={(event, selectedDate) => onChange(selectedDate)}
    />
  );
};

export default CustomDateTimePicker;
