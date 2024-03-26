// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import LeadDetail from '../../leadComponents/leadDetailHeader';
// import LeadDet from '../../leadComponents/leadDetHeader';
 
// const Info = () => {
//     return (
//         <View style={styles.body}>
//           <View style={{ height:'27%' }}>
//            <LeadDet/>
//       </View>
//         <ScrollView contentContainerStyle={styles.scrollViewContent}>
//             <View style={styles.container}>
               
//                 {/* <Text style={styles.title}>Lead details</Text>
//                 <Text style={styles.data}>Lead Name: </Text>
//                 <Text style={styles.detail}>---</Text>
 
//                 <View style={styles.divider} /> */}
 
//                 <Text style={styles.title}>Communication</Text>
//                 <Text style={styles.data}>Emails: </Text>
//                 <Text style={styles.detail}>---</Text>
//                 <Text style={styles.data}>Phone Number: </Text>
//                 <Text style={styles.detail}>---</Text>
 
//                 <View style={styles.divider} />
 
//                 <Text style={styles.title}>Location</Text>
//                 <Text style={styles.data}>Address: </Text>
//                 <Text style={styles.detail}>---</Text>
//                 <Text style={styles.data}>City: </Text>
//                 <Text style={styles.detail}>---</Text>
//                 <Text style={styles.data}>State: </Text>
//                 <Text style={styles.detail}>----</Text>
//                 <Text style={styles.data}>Country:</Text>
//                 <Text style={styles.detail}>----</Text>
//                 <Text style={styles.data}>Zipcode: </Text>
//                 <Text style={styles.detail}>---</Text>
 
//                 <View style={styles.divider} />
 
//                 <Text style={styles.title}>Professional</Text>
//                 <Text style={styles.data}>Company Name: </Text>
//                 <Text style={styles.detail}>---</Text>
//                 <Text style={styles.data}>Designation: </Text>
//                 <Text style={styles.detail}>---</Text>
//                 <Text style={styles.data}>Company City: </Text>
//                 <Text style={styles.detail}>---</Text>
//                 <Text style={styles.data}>Company Country: </Text>
//                 <Text style={styles.detail}>---</Text>
               
//             </View>
//         </ScrollView>
//         </View>
//     );
// };
 
// const styles = StyleSheet.create({
//     scrollViewContent: {
//         flexGrow: 1,
//     },
//     body:{
//         backgroundColor: 'white',
//         flex: 1,
//     },
//     container: {
//         flex: 1,
       
//         marginHorizontal: 30,
//         backgroundColor: 'white',
//         flex: 1,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         // textAlign: 'center',
//     },
//     detail: {
//         fontSize: 14,
//         marginBottom: 15,
//     },
//     data: {
//         color: '#023B5E',
//         fontSize: 14,
//         fontWeight: 'bold',
//     },
//     divider: {
//         borderBottomColor: 'black',
//         borderBottomWidth: 1,
//         marginBottom: 10,
//     },
// });
 
// export default Info;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { leadData } from '../../customComponents/formData';
 
 
const Info = () => {
 
     const leadId = useIdStore((state) => state.leadId);
  const lead = leadData.find((lead) => lead.id === leadId);
//   const { firstname, lastname, status, temperature, } = lead || {};
const { firstname, lastname, phone, email, status, temperature, id, jobTitle,} = lead || {};
    return (
        <View style={styles.body}>
          <View style={{ height:'30%' }}>
           <LeadDet/>
      </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
    <Text style={styles.title}>Lead Information</Text>
 
    <View style={styles.row}>
        <Text style={styles.data}>Lead Stage:</Text>
        <Text style={styles.detail}>{status}</Text>
    </View>
 
    <View style={styles.row}>
        <Text style={styles.data}>Lead Owner:</Text>
        <Text style={styles.detail}>Darwin</Text>
    </View>
 
    <View style={styles.divider} />
 
    <Text style={styles.title}>Communication</Text>
   
    <View style={styles.row}>
        <Text style={styles.data}>Emails:</Text>
        <Text style={styles.detail}>{email}</Text>
    </View>
 
    <View style={styles.row}>
        <Text style={styles.data}>Phone Number:</Text>
        <Text style={styles.detail}>{phone}</Text>
    </View>
 
    <View style={styles.row}>
        <Text style={styles.data}>Address:</Text>
        <Text style={styles.detail}>---</Text>
    </View>
 
    <View style={styles.divider} />
 
    <Text style={styles.title}>Professional</Text>
   
    <View style={styles.row}>
        <Text style={styles.data}>Company:</Text>
        <Text style={styles.detail}>Mega groups</Text>
    </View>
 
    <View style={styles.row}>
        <Text style={styles.data}>Designation:</Text>
        <Text style={styles.detail}>{jobTitle}</Text>
    </View>
 
    <View style={styles.row}>
        <Text style={styles.data}>Company City:</Text>
        <Text style={styles.detail}>---</Text>
    </View>
 
    <View style={styles.row}>
        <Text style={styles.data}>Company Country:</Text>
        <Text style={styles.detail}>---</Text>
    </View>
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
        marginTop:10,
        marginHorizontal: 30,
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row:{
       flexDirection:'row',
     
    },
    detail: {
        fontSize: 14,
        marginBottom: 15,
        textAlign: 'right',
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