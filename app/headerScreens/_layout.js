// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import React from 'react'
// import { Ionicons, MaterialIcons } from '@expo/vector-icons'
// import { Slot, router } from 'expo-router'

// export default function ConstantHeader() {
//     const goToLeads = () => {
//         router.navigate('headerScreens/DrawerScreens/leadList')
//     }
//     const goToContacts = () => {
//         router.navigate('headerScreens/DrawerScreens/contacts')
//     }
//     const goToAccounts = () => {
//         router.navigate('headerScreens/DrawerScreens/accounts')
//     }
//     const goToOpportunities = () => {
//         router.navigate('headerScreens/DrawerScreens/deals')
//     }
//     const goToDashboard = () => {
//         router.navigate('headerScreens/DrawerScreens/dashboard')
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.slotContainer}>
//                 <Slot />
//             </View>
//             <View style={styles.tabBar}>

//             <TouchableOpacity style={styles.tabItem} onPress={goToAccounts}>
//                     <MaterialIcons name="account-box" size={25} color="black" />
//                     <Text style={styles.tabText}>Accounts</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.tabItem} onPress={goToContacts}>
//                     <MaterialIcons name="contacts" size={25} color="black" />
//                     <Text style={styles.tabText}>Contacts</Text>
//                 </TouchableOpacity>
           
//                 <TouchableOpacity style={styles.tabItem} onPress={goToDashboard}>
//                     <MaterialIcons name="home" size={25} color="black" />
//                     <Text style={styles.tabText}>Dashboard</Text>
//                 </TouchableOpacity>
                
//                 <TouchableOpacity style={styles.tabItem} onPress={goToLeads}>
//                     <Ionicons name="person" size={25} color="black" />
//                     <Text style={styles.tabText}>Leads</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.tabItem} onPress={goToOpportunities}>
//                     <MaterialIcons name="work" size={25} color="black" />
//                     <Text style={styles.tabText}>Opportunities</Text>
//                 </TouchableOpacity>


//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end',
//     },
//     slotContainer: {
//         flex: 1,
//     },
//     tabBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         // backgroundColor: 'red', // Change as per your design
//         borderTopWidth: 1,
//         borderTopColor: '#e0e0e0', // Change as per your design
//         paddingVertical: 10, // Adjust as per your design
//     },
//     tabItem: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex: 1,
//     },
//     tabText: {
//         fontSize: 10, // Adjust as per your design
//         marginTop: 5, // Adjust as per your design
//     },
// })


import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Slot, router } from 'expo-router'

export default function ConstantHeader() {
    const [selectedTab, setSelectedTab] = useState('Dashboard')

    const goToLeads = () => {
        setSelectedTab('Leads')
        router.navigate('headerScreens/DrawerScreens/leadList')
    }
    const goToContacts = () => {
        setSelectedTab('Contacts')
        router.navigate('headerScreens/DrawerScreens/contacts')
    }
    const goToAccounts = () => {
        setSelectedTab('Accounts')
        router.navigate('headerScreens/DrawerScreens/accounts')
    }
    const goToOpportunities = () => {
        setSelectedTab('Opportunities')
        router.navigate('headerScreens/DrawerScreens/deals')
    }
    const goToDashboard = () => {
        setSelectedTab('Dashboard')
        router.navigate('headerScreens/DrawerScreens/dashboard')
    }

    return (
        <View style={styles.container}>
            <View style={styles.slotContainer}>
                <Slot />
            </View>
            <View style={styles.tabBar}>

                <TouchableOpacity style={styles.tabItem} onPress={goToAccounts}>
                    <MaterialIcons name="account-box" size={25} color={selectedTab === 'Accounts' ? '#023B5E' : 'black'} />
                    <Text style={[styles.tabText, { color: selectedTab === 'Accounts' ? 'blue' : 'black' }]}>Accounts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem} onPress={goToContacts}>
                    <MaterialIcons name="contacts" size={25} color={selectedTab === 'Contacts' ? '#023B5E' : 'black'} />
                    <Text style={[styles.tabText, { color: selectedTab === 'Contacts' ? 'blue' : 'black' }]}>Contacts</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem} onPress={goToDashboard}>
                    <MaterialIcons name="home" size={25} color={selectedTab === 'Dashboard' ? '#023B5E' : 'black'} />
                    <Text style={[styles.tabText, { color: selectedTab === 'Dashboard' ? 'blue' : 'black' }]}>Dashboard</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.tabItem} onPress={goToLeads}>
                    <Ionicons name="person" size={25} color={selectedTab === 'Leads' ? '#023B5E' : 'black'} />
                    <Text style={[styles.tabText, { color: selectedTab === 'Leads' ? 'blue' : 'black' }]}>Leads</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem} onPress={goToOpportunities}>
                    <MaterialIcons name="work" size={25} color={selectedTab === 'Opportunities' ? '#023B5E' : 'black'} />
                    <Text style={[styles.tabText, { color: selectedTab === 'Opportunities' ? 'blue' : 'black' }]}>Opportunities</Text>
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
        borderTopWidth: 1,
        borderTopColor: 'white',
        paddingVertical: 10,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tabText: {
        fontSize: 10,
        marginTop: 5,
    },
})
