// ListItem.js
import React from 'react';
import { View, Text } from 'react-native';

const ActivityListItem = ({ title, date, organizer, description }) => (
  <View style={[styles.section, styles.cardContainer]}>
    <View style={styles.detailBox}>
      <Text style={styles.title1}>{title}</Text>
      <Text style={styles.detailText}>{date}</Text>
      <Text style={styles.detailText}>{organizer}</Text>
      <Text style={styles.detailText}>{description}</Text>
    </View>
  </View>
);

export default ActivityListItem;
