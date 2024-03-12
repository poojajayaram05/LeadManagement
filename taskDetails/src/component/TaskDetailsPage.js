
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formData } from '../jsonData';

const TaskDetailsPage = () => {
    const task = formData.elements[0];

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={[styles.title, { color: 'red' }]}>{task.title}</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.rowContainer}>
                    <View style={[styles.rowItem, styles.borderRight]}>
                        <Text style={[styles.label, { color: 'blue' }]}>Task Type:</Text>
                        <Text style={[styles.detail, { color: 'blue' }]}>{task.taskType}</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text style={[styles.label, { color: 'green' }]}>Due Date:</Text>
                        <Text style={[styles.detail, { color: 'green' }]}>{task.dueDate} at {task.dueTime}</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={[styles.rowItem, styles.borderRight]}>
                        <Text style={[styles.label, { color: 'blue' }]}>Created By:</Text>
                        <Text style={[styles.detail, { color: 'blue' }]}>{task.createdBy}</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text style={[styles.label, { color: 'green' }]}>Status:</Text>
                        <Text style={[styles.detail, { color: 'green' }]}>{task.status}</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={[styles.rowItem, styles.borderRight]}>
                        <Text style={[styles.label, { color: 'blue' }]}>Description:</Text>
                        <Text style={[styles.detail, { color: 'blue' }]}>{task.description}</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text style={[styles.label, { color: 'green' }]}>Owner:</Text>
                        <Text style={[styles.detail, { color: 'green' }]}>{task.owner}</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={[styles.label, { color: 'blue' }]}>Collaborators:</Text>
                    <Text style={[styles.detail, { color: 'blue' }]}>{task.collaborators.join(', ')}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E6E1DB',
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    rowItem: {
        width: '48%', 
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: '#ccc',
        paddingRight: 10,
    },
});

export default TaskDetailsPage;
