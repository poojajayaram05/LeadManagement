import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';

const Calendar = ({ value, setValue, week, setWeek, handleDateSelect, weeks }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.picker}>
        <Swiper
          index={1}
          loop={false}
          showsPagination={false}
          onIndexChanged={ind => {
            if (ind === 1) {
              return;
            }
            setTimeout(() => {
              const newIndex = ind - 1;
              const newWeek = week + newIndex;
              setWeek(newWeek);
              setValue(moment(value).add(newIndex, 'week').toDate());
            }, 100);
          }}>
          {weeks.map((dates, index) => (
            <View
              style={[styles.itemRow, { paddingHorizontal: 16 }]}
              key={index}>
              {dates.map((item, dateIndex) => {
                const isActive =
                  value.toDateString() === item.date.toDateString();
                return (
                  <TouchableWithoutFeedback
                    key={dateIndex}
                    onPress={() => handleDateSelect(item.date)}>
                    <View
                      style={[
                        styles.item,
                        isActive && {
                          backgroundColor: '#023B5E',
                          borderColor: '#023B5E',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.itemWeekday,
                          isActive && { color: 'white' },
                        ]}>
                        {item.weekday}
                      </Text>
                      <Text
                        style={[
                          styles.itemDate,
                          isActive && { color: 'white' },
                        ]}>
                        {item.date.getDate()}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
}

export default Calendar;
