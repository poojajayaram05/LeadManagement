import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ArrowBack() {
  return (
    <View style={{ marginLeft: 10 }}>
      <Ionicons name="chevron-back" size={25} color="#023B5E" />
    </View>
  );
}
