import React, { useRef, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/Colors';
import { debounce } from '../utils/CommanUtils';

const LDropdown = ({ label, data, onSelect }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(undefined);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const onItemPress = debounce((item) => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    });

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onItemPress(item)}>
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity ref={DropdownButton} onPress={toggleDropdown}>
                <View style={styles.dropdownButton}>
                    <Text style={styles.selectedText}>{selected ? selected.label : label}</Text>
                    <Icon name={'chevron-down'} style={styles.icon} size={12} color={Colors.DARK_GRAY} />
                </View>
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade">
                <TouchableOpacity style={styles.modalOverlay} onPress={toggleDropdown}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.value.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 13,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 3,
    },
    selectedText: {
        fontSize: 14,
        color: Colors.DARK_GRAY,
    },
    icon: {
        marginLeft: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'right',
        position: 'relative',
    },
    modalContent: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        minHeight: 100,
        maxHeight: 200,
        borderColor: 'black',
        borderWidth: 1,
        position: 'relative',
    },
    label: {
        fontSize: 14,
        paddingVertical: 8,
    },
});

export default LDropdown;
