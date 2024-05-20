import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Slot, router } from 'expo-router'

export default function ConstantHeader() {
    const goToLeads = () => {
        router.navigate('headerScreens/DrawerScreens/leadList')
    }
    const goToContacts = () => {
        router.navigate('headerScreens/DrawerScreens/contacts')
    }
    const goToAccounts = () => {
        router.navigate('headerScreens/DrawerScreens/accounts')
    }
    const goToOpportunities = () => {
        router.navigate('headerScreens/DrawerScreens/deals')
    }
    const goToDashboard = () => {
        router.navigate('headerScreens/DrawerScreens/dashboard')
    }

    return (
        <View style={styles.container}>
            <View style={styles.slotContainer}>
                <Slot />
            </View>
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem} onPress={goToLeads}>
                    <Ionicons name="person" size={20} color="black" />
                    <Text style={styles.tabText}>Leads</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem} onPress={goToAccounts}>
                    <MaterialIcons name="account-box" size={20} color="black" />
                    <Text style={styles.tabText}>Accounts</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.tabItem} onPress={goToDashboard}>
                    <MaterialIcons name="contacts" size={20} color="black" />
                    <Text style={styles.tabText}>Dashboard</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.tabItem} onPress={goToContacts}>
                    <MaterialIcons name="contacts" size={20} color="black" />
                    <Text style={styles.tabText}>Contacts</Text>
                </TouchableOpacity>
 
                <TouchableOpacity style={styles.tabItem} onPress={goToOpportunities}>
                    <MaterialIcons name="contacts" size={20} color="black" />
                    <Text style={styles.tabText}>Opportunities</Text>
                </TouchableOpacity>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    slotContainer: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red', // Change as per your design
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0', // Change as per your design
        paddingVertical: 10, // Adjust as per your design
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tabText: {
        fontSize: 12, // Adjust as per your design
        marginTop: 5, // Adjust as per your design
    },
})
