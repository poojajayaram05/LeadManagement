import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Colors from '../utils/Colors';
import DimensionUtils from '../utils/DimensionUtils';
import CommonStyles from '../utils/CommanStyles';

const CalenderModal = ({ visible, saveValues, cancelClicked }) => {
  let today = new Date();
  const[showPicker, setShowPicker]=useState(false);
  const[date, setDate]=useState(new Date);
    const onDateChange = (date) => {
        saveValues(date);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={cancelClicked}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <CalendarPicker
                      todayBackgroundColor="#e6ffe6"
                      selectedDayColor="#66ff33"
                      selectedDayTextColor="#457eb0"
                        
                        onDateChange={onDateChange}
                        width={300}
                       
                        minDate={today}
                       
                    />
                    <TouchableOpacity onPress={cancelClicked}>
                        <Text style={CommonStyles.roboto_normal_14}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: Colors.WHITE_COLOR,
        borderRadius: 6,
        shadowColor: Colors.SHADOW_COLOR,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        elevation: 6,
        shadowOpacity: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Colors.PURPLE_LIGHT_BORDER,
        alignItems: 'center',
        paddingHorizontal: DimensionUtils.pixelSizeHorizontal(13),
        flexDirection: 'row',
        paddingVertical: 20,
    },
});

export default CalenderModal;
