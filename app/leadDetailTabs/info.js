// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// // import { TouchableOpacity } from 'react-native-gesture-handler';

// // const goBack=()=>{
// //     router.navigate('DrawerScreens/meeting');
// //   }

// const Info = () => {
    
//     // const meetingId = useMeetingStore((state) => state.meetingId); 
//     // const meeting = meetingItems.elements.find((meeting) => meeting.id === meetingId);
//     // const { id, title, organizer, status, description, location, timezone, from, to, all_day } = meeting || {};
  
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Lead details</Text>
//             <Text style={styles.data}>Lead Name: </Text>
//             <Text style={styles.detail}>---</Text>

//             <Text style={styles.title}>Communication</Text>
//             <Text style={styles.data}>Emails: </Text> 
//             <Text style={styles.detail}>---</Text>

//             <Text style={styles.data}>Phone Number: </Text>
//             <Text style={styles.detail}>---</Text>
//             <Text style={styles.title}>Location</Text>
//             <Text style={styles.data}>Address: </Text>
//             <Text style={styles.detail}>---</Text>
//             <Text style={styles.data}>City: </Text>
//             <Text style={styles.detail}>---</Text>
//             <Text style={styles.data}>State: </Text>
//             <Text style={styles.detail}>----</Text>
//             <Text style={styles.data}>Country:</Text>
//             <Text style={styles.detail}>----</Text>
//             <Text style={styles.data}>Zipcode: </Text>
//             <Text style={styles.detail}>---</Text>

//             <Text style={styles.title}>Professional</Text>
//             <Text style={styles.data}>Company Name: </Text>
//             <Text style={styles.detail}>---</Text>
//             {/* <ArrowBack/> */}
//             {/* <TouchableOpacity onPress={goBack}>
//         <ArrowBack />
//       </TouchableOpacity> */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop:40,
//         marginHorizontal: 10,
      
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         textAlign: 'center',
//     },
//     detail: {
//         fontSize: 16,
//         marginBottom: 5,
//         marginBottom:15,
//     },
//     data: {
//         color: '#023B5E',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default Info;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Info = () => {
    return (
        <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
               
                <Text style={styles.title}>Lead details</Text>
                <Text style={styles.data}>Lead Name: </Text>
                <Text style={styles.detail}>---</Text>

                <View style={styles.divider} />

                <Text style={styles.title}>Communication</Text>
                <Text style={styles.data}>Emails: </Text> 
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Phone Number: </Text>
                <Text style={styles.detail}>---</Text>

                <View style={styles.divider} />

                <Text style={styles.title}>Location</Text>
                <Text style={styles.data}>Address: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>City: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>State: </Text>
                <Text style={styles.detail}>----</Text>
                <Text style={styles.data}>Country:</Text>
                <Text style={styles.detail}>----</Text>
                <Text style={styles.data}>Zipcode: </Text>
                <Text style={styles.detail}>---</Text>

                <View style={styles.divider} />

                <Text style={styles.title}>Professional</Text>
                <Text style={styles.data}>Company Name: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Designation: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Company City: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Company Country: </Text>
                <Text style={styles.detail}>---</Text>
                
            </View>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    body:{
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: 30,
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        // textAlign: 'center',
    },
    detail: {
        fontSize: 14,
        marginBottom: 15,
    },
    data: {
        color: '#023B5E',
        fontSize: 14,
        fontWeight: 'bold',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
});

export default Info;


