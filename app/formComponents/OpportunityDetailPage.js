// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import useIdStore from '../leadStore';
// import { useOpportunityStore } from '../leadStore';
// //import { leadData } from '../../customComponents/formData';
// import { FetchOpportunities } from '../service/fetchOpportunities';
// import { useEffect } from 'react';
// import { Ionicons } from '@expo/vector-icons';
 
// import DataRow from '../../customComponents/dataRow';
// const sectionDetails = [
//     {
//       title: 'General Details',
//       id: 'leadInfo',
//       fields: [
//         {label: 'Opportunity name:', value: 'opportunity_name' },
//         { label: 'Account Name:', value: '' },
//         { label: 'Primary Contact:', value: ''  },
//         { label: 'Owner:', value: 'owner' },
//         { label: 'Description:', value: 'description' },
//         { label: 'Next Step:', value: 'next_step' },
//         { label: 'Status:', value: 'states' },
//         { label: 'Sales Pipeline:', value: 'sales_pipeline' },
//         { label: 'Sales Stage', value: 'sales_stage' },
//         { label: 'Category', value: 'category' },
 
//       ]
//     },
//     {
//       title: 'Forecast Details',
//       id: 'companyDetails',
//       fields: [
//         { label: 'Probability of winning:', value: 'probability_of_winning' },
//         { label: 'Forecast Close Date:', value: 'forecast_close_date' },
//         { label: 'Opportunity Value:', value: 'opportunity_value' },
//         // { label: 'Company:', value: 'company' },
//       ]
//     },
//   ];
 
 
// const Info = () => {
//   const [opportunityData, setOpportunityData] = useState([]);
//   const [openSections, setOpenSections] = useState(['leadInfo']);
 
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const odata = await FetchOpportunities();
//         setOpportunityData(odata.result);
//         console.log("oppp data",opportunityData);
//       } catch (error) {
//         console.error('Error in fetching leads:', error);
//       }
//     };
//     fetchData();
//   }, []);
 
//   const toggleSection = (sectionId) => {
//     const isOpen = openSections.includes(sectionId);
//     if (isOpen) {
//       setOpenSections(openSections.filter((item) => item !== sectionId));
//     } else {
//       setOpenSections([...openSections, sectionId]);
//     }
//   };
 
//   const renderSectionContent = (sectionId, opportunityData, opportunityId) => {
//     const lead = opportunityData.find((opportunity) => opportunity.number === opportunityId);
//     const section = sectionDetails.find((section) => section.id === sectionId);
 
//     if (!section || !lead) return null;
 
//     return section.fields.map((row, index) => (
//       <DataRow key={index} label={row.label} detail={lead[row.value]} />
//     ));
//   };
 
//   return (
//     <View style={styles.body}>
//       <View style={{ height: '26%' }}>
//         <LeadDet />
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.container}>
//           {sectionDetails.map((section) => (
//             <Section
//               key={section.id}
//               title={section.title}
//               isOpen={openSections.includes(section.id)}
//               onPress={() => toggleSection(section.id)}>
//               {renderSectionContent(section.id, opportunityData, useOpportunityStore((state) => state.number))}
//             </Section>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
 
// const Section = ({ title, isOpen, onPress, children }) => {
//   return (
//     <View style={styles.sectionContainer}>
//       <TouchableOpacity onPress={onPress}>
//         <View style={styles.sectionHeader}>
//         <Text style={styles.sectionHeaderText}>{title}</Text>
//           <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
//         </View>
//       </TouchableOpacity>
//       {isOpen && <View>{children}</View>}
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   scrollViewContent: {
//     flexGrow: 1,
//   },
//   body: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     marginTop: 10,
//     marginHorizontal: 30,
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionHeaderText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
 
// export default Info;


import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { useOpportunityStore } from '../leadStore';
//import { leadData } from '../../customComponents/formData';
import { FetchOpportunitiesDetail } from '../service/fetchOpportunityDetail';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import OpportunityHeader from '../../customComponents/opportunityDetailHeader';
import { useContactStore } from '../leadStore';
 
import DataRow from '../../customComponents/dataRow';
 
 
const sectionDetails = [
    {
      title: 'General Details',
      id: 'leadInfo',
      fields: [
        { label: 'Opportunity name:', value: 'opportunity_name' },
        { label: 'Primary Contact:', value: 'contact.display_value'},
        
        { label: 'Owner:', value: 'owner' },
        { label: 'Description:', value: 'description' },
        { label: 'Next Step:', value: 'next_step' },
        { label: 'Account Name:', value: 'account.display_value'},
  
        { label: 'Sales Pipeline:', value: 'sales_pipeline' },
        { label: 'Sales Stage:', value: 'sales_stage' },
        { label: 'Category:', value: 'category' },
        { label: 'Probability of winning (%):', value: 'probability_of_winning' },
 
      ]
    },
    // {
    //   title: 'Forecast Details',
    //   id: 'companyDetails',
    //   fields: [
    //     { label: 'Probability of winning (%):', value: 'probability_of_winning' },
    //     { label: 'Forecast Close Date:', value: 'forecast_close_date' },
    //     { label: 'Opportunity Value:', value: 'opportunity_value' },
    //     // { label: 'Company:', value: 'company' },
    //   ]
    // },
  ];
 
 
const Info = () => {
  const [opportunityData, setOpportunityData] = useState([]);
  const [openSections, setOpenSections] = useState(['leadInfo']);
  const{sys_id, setSysId}=useIdStore();
  //const{sys_iid, setCSysId}=useContactStore();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const odata = await FetchOpportunitiesDetail();
        setOpportunityData(odata.result);
      } catch (error) {
        console.error('Error in fetching opp:', error);
      }
    };
    fetchData();
  }, []);

  const extractSysId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  // const csys_id=useContactStore((state) => state.number);
 
 
  const toggleSection = (sectionId) => {
    const isOpen = openSections.includes(sectionId);
    if (isOpen) {
      setOpenSections(openSections.filter((item) => item !== sectionId));
    } else {
      setOpenSections([...openSections, sectionId]);
    }
  };
 
  const renderSectionContent = (sectionId, opportunityData, opportunityId) => {
    const oppData = opportunityData.find((opportunity) => opportunity.number === opportunityId);
    console.log("oppp data",oppData);
    const section = sectionDetails.find((section) => section.id === sectionId);
 
    if (!section || !oppData) return null;
 
    return section.fields.map((row, index) => {
      if (row.value === 'account.display_value') {
        <TouchableOpacity
        key={index}
        onPress={() => {
          const sysId = extractSysId(oppData.account.link);
          setSysId(sysId);
         
          console.log("sys_id",oppData.account.link);
          
          router.navigate('/formComponents/accountDetailPage');
   
        }}>
        <DataRow color={'blue'} label={row.label} detail={oppData.account.display_value} />
      </TouchableOpacity>
      } else if (row.value === 'contact.display_value') {
        return(
          <TouchableOpacity
          key={index}
          onPress={() => {
            const sysId = extractSysId(oppData.contact.link);
            setSysId(sysId);
           
            console.log("sys_id",oppData.contact.link);
            
            router.navigate('/contactDetailPage/contactDetail');
     
          }}>
          <DataRow color={'blue'} label={row.label} detail={oppData.contact.display_value} />
        </TouchableOpacity>
        )
      } else {
        return <DataRow key={index} label={row.label} detail={oppData[row.value]} />;
      }
    });
  };
 
  return (
    <View style={styles.body}>
      <View style={{ height: '26%' }}>
        {/* <LeadDet /> */}
        <OpportunityHeader/>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {sectionDetails.map((section) => (
            <Section
              key={section.id}
              title={section.title}
              isOpen={openSections.includes(section.id)}
              onPress={() => toggleSection(section.id)}>
              {renderSectionContent(section.id, opportunityData, useOpportunityStore((state) => state.number))}
            </Section>
          ))}
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
          <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
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