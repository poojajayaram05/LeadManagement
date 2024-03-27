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

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import useIdStore from '../leadStore';
// import { leadData } from '../../customComponents/formData';
 
 
// const Info = () => {
 
//      const leadId = useIdStore((state) => state.leadId);
//   const lead = leadData.find((lead) => lead.id === leadId);
// //   const { firstname, lastname, status, temperature, } = lead || {};
// const { firstname, lastname, phone, email, status, temperature, id, jobTitle,} = lead || {};
//     return (
//         <View style={styles.body}>
//           <View style={{ height:'30%' }}>
//            <LeadDet/>
//       </View>
//         <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.container}>
//     <Text style={styles.title}>Lead Information</Text>
 
//     <View style={styles.row}>
//         <Text style={styles.data}>Lead Stage:</Text>
//         <Text style={styles.detail}>{status}</Text>
//     </View>
 
//     <View style={styles.row}>
//         <Text style={styles.data}>Lead Owner:</Text>
//         <Text style={styles.detail}>Darwin</Text>
//     </View>
 
//     <View style={styles.divider} />
 
//     <Text style={styles.title}>Communication</Text>
   
//     <View style={styles.row}>
//         <Text style={styles.data}>Emails:</Text>
//         <Text style={styles.detail}>{email}</Text>
//     </View>
 
//     <View style={styles.row}>
//         <Text style={styles.data}>Phone Number:</Text>
//         <Text style={styles.detail}>{phone}</Text>
//     </View>
 
//     <View style={styles.row}>
//         <Text style={styles.data}>Address:</Text>
//         <Text style={styles.detail}>---</Text>
//     </View>
 
//     <View style={styles.divider} />
 
//     <Text style={styles.title}>Professional</Text>
   
//     <View style={styles.row}>
//         <Text style={styles.data}>Company:</Text>
//         <Text style={styles.detail}>Mega groups</Text>
//     </View>
 
//     <View style={styles.row}>
//         <Text style={styles.data}>Designation:</Text>
//         <Text style={styles.detail}>{jobTitle}</Text>
//     </View>
 
//     <View style={styles.row}>
//         <Text style={styles.data}>Company City:</Text>
//         <Text style={styles.detail}>---</Text>
//     </View>
 
//     <View style={styles.row}>
//         <Text style={styles.data}>Company Country:</Text>
//         <Text style={styles.detail}>---</Text>
//     </View>
// </View>
 
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
//         marginTop:10,
//         marginHorizontal: 30,
//         backgroundColor: 'white',
//         flex: 1,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     row:{
//        flexDirection:'row',
     
//     },
//     detail: {
//         fontSize: 14,
//         marginBottom: 15,
//         textAlign: 'right',
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

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { leadData } from '../../customComponents/formData';
 
const Info = () => {
    const leadId = useIdStore((state) => state.leadId);
    const lead = leadData.find((lead) => lead.Id === leadId);
    const [openSections, setOpenSections] = useState(['leadInfo']);
 
    const toggleSection = (section) => {
        const isOpen = openSections.includes(section);
        if (isOpen) {
            setOpenSections(openSections.filter((item) => item !== section));
        } else {
            setOpenSections([...openSections, section]);
        }
    };
 
    return (
        <View style={styles.body}>
            <View style={{ height: '30%' }}>
                <LeadDet/>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                <Section
    title="General Information"
    isOpen={openSections.includes('leadInfo')}
    onPress={() => toggleSection('leadInfo')}
>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Lead Type:</Text>
        <Text style={styles.detail}>{lead?.LeadType}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Number:</Text>
        <Text style={styles.detail}>{lead?.Number}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Name:</Text>
        <Text style={styles.detail}>{lead?.FirstName} {lead?.LastName}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Gender:</Text>
        <Text style={styles.detail}>{lead?.Gender}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Email:</Text>
        <Text style={styles.detail}>{lead?.Email}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Score:</Text>
        <Text style={styles.detail}>{lead?.Score}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Owner:</Text>
        <Text style={styles.detail}>{lead?.Owner}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Lead Source:</Text>
        <Text style={styles.detail}>{lead?.LeadSource}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Lead Amount:</Text>
        <Text style={styles.detail}>{lead?.LeadCurrency}</Text>
    </View>
    {/* <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Description:</Text>
        <Text style={styles.detail}>{lead?.Description}</Text>
    </View> */}
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Scoring Profile:</Text>
        <Text style={styles.detail}>{lead?.ScoringProfile}</Text>
    </View>
</Section>
 
 
 
<Section
    title="Company Details"
    isOpen={openSections.includes('companyDetails')}
    onPress={() => toggleSection('companyDetails')}
>
    <View style={styles.row}>
        <Text style={[styles.data]}>Company:</Text>
        <Text style={styles.detail}>{lead?.Company}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>No Of Employees:</Text>
        <Text style={styles.detail}>{lead?.NoOfEmployees}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Annual Revenue:</Text>
        <Text style={styles.detail}>{lead?.AnnualRevenue}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Company DUNS Number:</Text>
        <Text style={styles.detail}>{lead?.CompanyDUNSNumber}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Industry:</Text>
        <Text style={styles.detail}>{lead?.Industry}</Text>
    </View>
</Section>
 
<Section
    title="Contact Details"
    isOpen={openSections.includes('ContactDetails')}
    onPress={() => toggleSection('ContactDetails')}
>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Alternate Email 1:</Text>
        <Text style={styles.detail}>{lead?.AlternateEmail1}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Alternate Email 2:</Text>
        <Text style={styles.detail}>{lead?.AlternateEmail2}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Email OtpOut:</Text>
        <Text style={styles.detail}>{lead?.EmailOtpOut}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Business Phone:</Text>
        <Text style={styles.detail}>{lead?.BusinessPhone}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Mobile Phone:</Text>
        <Text style={styles.detail}>{lead?.MobilePhone}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Home Phone:</Text>
        <Text style={styles.detail}>{lead?.HomePhone}</Text>
    </View>
</Section>
 
<Section
    title="Address Details"
    isOpen={openSections.includes('AddressDetails')}
    onPress={() => toggleSection('AddressDetails')}
>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Street:</Text>
        <Text style={styles.detail}>{lead?.Street}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>City:</Text>
        <Text style={styles.detail}>{lead?.City}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>State:</Text>
        <Text style={styles.detail}>{lead?.State}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Zip:</Text>
        <Text style={styles.detail}>{lead?.Zip}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Country:</Text>
        <Text style={styles.detail}>{lead?.Country}</Text>
    </View>
</Section>
 
<Section
    title="Contact Methods"
    isOpen={openSections.includes('ContactMethods')}
    onPress={() => toggleSection('ContactMethods')}
>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Preferred Method To Call:</Text>
        <Text style={styles.detail}>{lead?.Preferred}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Whatsapp Number:</Text>
        <Text style={styles.detail}>{lead?.Whatsapp}</Text>
    </View>
    {/* <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Qualification:</Text>
        <Text style={styles.detail}>{lead?.Qualification}</Text>
    </View> */}
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Status:</Text>
        <Text style={styles.detail}>{lead?.Status}</Text>
    </View>
</Section>
 
 
                </View>
            </ScrollView>
        </View>
    );
};
 
const Section = ({ title, isOpen, onPress, children }) => {
    return (
        <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>{title}</Text>
                    <Text>{isOpen ? '-' : '+'}</Text>
                </View>
            </TouchableOpacity>
            {isOpen && <View>{children}</View>}
        </View>
    );
};
 
const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    body: {
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Ensures each row occupies the full width
        width: '100%',
    },
    detail: {
        fontSize: 14,
        marginBottom: 15,
        // textAlign: 'left',
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#023B5E',
        // backgroundColor: 'yellow',
    },
    data: {
        color: 'black',
        fontSize: 14,
       
        textAlign: 'left',
        // backgroundColor: 'red',
 
     
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
 
export default Info;