
//..............................hardcodedata.workingcode.............................

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import useIdStore from '../leadStore';
// import { FetchLeadDetails } from '../service/fetchLeadDetails';
// import { useEffect } from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import {DataRow} from '../../customComponents/dataRow'; 
// import { Section } from '../../customComponents/dataRow';
// import { Button } from 'react-native-web';
// import { router } from 'expo-router';

// const leads = {
//   "page_heading": "Lead Details",
//   "header_section": {
//     "first_name": "",
//     "last_name": "",
//     "email": "",
//     "phone": ""
//   },
//   "sections": {
//     "general_details": {
//       "title": "General Information",
//       "sectionId": 1,
//       "fields": {
//         "lead_type": {"label": "Lead Type", "value": "person"},
//         "title": {"label": "Title", "value": "Investment Lead"},
//         "description": {"label": "Description", "value": "Lead meeting management "},
//         "number": {"label": "Number", "value": "LEA0001067"},
//         "gender": {"label": "gender", "value": "male"},
//         "email": {"label": "email", "value": "sharath@gmail.com"},
//         "lead_source": {"label": "lead_source", "value": "web"}
//       }
//     },
//     "contact_details": {
//       "title": "Contact Information",
//       "sectionId": 2,
//       "fields": {
//         "home_phone": {"label": "Home Phone", "value": "9000000909"}
//       }
//     }
//   }
// };

// const Info = () => {
//   const [openSections, setOpenSections] = useState(['general_details']);

//   const toggleSection = (sectionId) => {
//     setOpenSections((prevOpenSections) =>
//       prevOpenSections.includes(sectionId)
//         ? prevOpenSections.filter((item) => item !== sectionId)
//         : [...prevOpenSections, sectionId]
//     );
//   };

//   return (
//     <View style={styles.body}>
//       <View style={{ height: '26%' }}>
//         <LeadDet/>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.container}>
//           {Object.keys(leads.sections).map((sectionId) => (
//             <Section
//               key={sectionId}
//               title={leads.sections[sectionId].title}
//               isOpen={openSections.includes(sectionId)}
//               onPress={() => toggleSection(sectionId)}>
//               {Object.values(leads.sections[sectionId].fields).map((field, index) => (
//                 <DataRow
//                   key={index}
//                   label={field.label}
//                   detail={field.value}
//                 />
//               ))}
//             </Section>
//           ))}
//         </View>
//       </ScrollView>
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
// });

// export default Info;


//.............working with be...........




// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import useIdStore from '../leadStore';
// import { Ionicons } from '@expo/vector-icons';
// import {DataRow,Section}from '../../customComponents/dataRow';
// import * as SecureStore from 'expo-secure-store';
// import { ActivityIndicator } from 'react-native';
// import { TransformApiData } from '../dataMapping/lead';
 
 
// const Info =  () => {
//   const [openSections, setOpenSections] = useState([]);
//   const sys_id = useIdStore((state) => state.sys_id);
//   const [leadData, setLeadData] = useState(null);
//   const[leadsObj, setLeadsObj]=useState(null)
//   const token =   SecureStore.getItem('token'); // Use await to get the token asynchronously
//   const stoken = JSON.parse(token);
//   const apiToken = stoken.accessToken;
//   console.log("api token", apiToken);
//   const[leadsData, setLeadsData]=useState(null)
//   const [isLoading, setIsLoading] = useState(true);
//   const [showNoData, setShowNoData] = useState(false);
 
//   const url = 'https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_c';
 
//   const leads_to_render = {
 
 
//     sections: {
//         general_details: {
//             title: "General Information",
//             sectionId: 1,
//             fields: {
//                 lead_type: { label: "Lead Type" },
//                 title: { label: "Title" },
//                 description: { label: "Description" },
//                 number: { label: "Number" },
//                 gender: { label: "gender" },
//                 email: { label: "email" },
//                 lead_source: { label: "lead_source" }
//             },

//         },
//         contact_details: {
//             title: "Contact Information",
//             sectionId: 2,
//             fields: { home_phone: { label: "Home Phone" },
//            }
 
//         }
//     }
// }
 

// useEffect(() => {
//   const fetchData = async () => {
//       try {
//           console.log("Fetching data...");
//           const leads = await TransformApiData(leads_to_render, apiToken, url, sys_id);
//           console.log("Updated leads:", leads);
//           setLeadsObj(leads);
//           setIsLoading(false);
//       } catch (error) {
//           console.error("Error fetching data:", error);
//           setIsLoading(false);
//           setShowNoData(true);
//       }
//   };

//   fetchData();
// }, []);

// console.log("outside useEffect", leadsObj)
//     const toggleSection = (sectionId) => {
//     setOpenSections((prevOpenSections) =>
//       prevOpenSections.includes(sectionId)
//         ? prevOpenSections.filter((item) => item !== sectionId)
//         : [...prevOpenSections, sectionId]
//     );
//   };
 
//   console.log("ready data", leadsObj)
 
//     return (
//       <View style={styles.body}>
//         <View style={{ height: '26%' }}>
//           <LeadDet />
//         </View>
//         {isLoading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//         ) : leadsObj ? ( // Check if leadsObj is not null
//           <ScrollView contentContainerStyle={styles.scrollViewContent}>
//             <View style={styles.container}>
//               {Object.keys(leadsObj.sections).map((sectionId) => (
//                 <Section
//                   key={sectionId}
//                   title={leadsObj.sections[sectionId].title}
//                   isOpen={openSections.includes(sectionId)}
//                   onPress={() => toggleSection(sectionId)}>
//                   {Object.values(leadsObj.sections[sectionId].fields).map((field, index) => (
//                     <DataRow
//                       key={index}
//                       label={field.label}
//                       detail={field.value}
//                     />
//                   ))}
//                 </Section>
//               ))}
//             </View>
//           </ScrollView>
//         ) : (
//           <Text>No data available</Text>
//         )}
//       </View>
//     );
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
 
 
 
 //.............................correctcode.......................



//  import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import useIdStore from '../leadStore';


// import {DataRow,Section}from '../../customComponents/dataRow';

// // import { TransformApiData } from '../../displayDataMap/displayDataMap';
// import { TransformApiData } from '../displayDataMap/displayDataMap'
// import * as SecureStore from 'expo-secure-store';
// import { ActivityIndicator } from 'react-native';
// import { leads_to_render,contacts_to_render, corporateAccounts_to_render, personAccounts_to_render } from '../../detailPagesData';
// import {LEAD_API,CONTACT_API,ACCOUNT_API} from '../../config';
 
// const Info =  () => {
//   const [openSections, setOpenSections] = useState([]);
//   const sys_id = useIdStore((state) => state.sys_id);
//   const [api, setApi] = useState(null);
//   const[leadsObj, setLeadsObj]=useState(null)
//   const token =   SecureStore.getItem('token'); // Use await to get the token asynchronously
//   const stoken = JSON.parse(token);
//   const apiToken = stoken.accessToken;
//   console.log("api token", apiToken);
//   const[data, setData]=useState(null)
//   const [isLoading, setIsLoading] = useState(true);
//   const [showNoData, setShowNoData] = useState(false);
//   const flag = useIdStore((state)=>state.flag);
//   const account_type=useIdStore((state)=>state.account_type);
//   console.log("flag", flag);
 
 
//   useEffect(() => {
//     if (flag === 'lead') {
//       setData(leads_to_render);        
//       setApi(LEAD_API);
//     }
//     else if(flag==='contact'){
//       setData(contacts_to_render);
//       setApi(CONTACT_API)
//     }
//     else if(flag=='account'){
//      // setData(accounts_to_render);
//       setApi(ACCOUNT_API);
//       if(account_type=='person')
//       setData(personAccounts_to_render);
//     else
//       setData(corporateAccounts_to_render);
     
//     }
//   } ,[flag]);
 
   
//   console.log("data", JSON.stringify(data), api)
 
 
 
// useEffect(() => {
//   const fetchLeadData = async () => {  
//     try {
//       console.log("INSIDE FETCH LEAD DATA");
//       const leads = await TransformApiData(data, apiToken, api, sys_id);
//       console.log("inside fetch lead data and use effect", leads)
//       setLeadsObj(leads);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching lead data:", error);
//       setIsLoading(false);
//       setShowNoData(true);
//     }
//   };
 
//   fetchLeadData();
// }, []);
 
 
 
// console.log("outside useEffect", leadsObj)
//     const toggleSection = (sectionId) => {
//     setOpenSections((prevOpenSections) =>
//       prevOpenSections.includes(sectionId)
//         ? prevOpenSections.filter((item) => item !== sectionId)
//         : [...prevOpenSections, sectionId]
//     );
//   };
 
//   console.log("ready data", leadsObj)
 
//     return (
   
//         <View style={styles.body}>
//           <View style={{ height: '26%' }}>
//             <LeadDet />
//           </View>   
//           {isLoading ? (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#0000ff" /> 
//             </View>
//           ) : leadsObj ? ( // Check if leadsObj is not null
//             <ScrollView contentContainerStyle={styles.scrollViewContent}>
//               <View style={styles.container}>
//                 {Object.keys(leadsObj.sections).map((sectionId) => (
//                   <Section
//                     key={sectionId}
//                     title={leadsObj.sections[sectionId].title}
//                     isOpen={openSections.includes(sectionId)}
//                     onPress={() => toggleSection(sectionId)}>
//                     {Object.values(leadsObj.sections[sectionId].fields).map((field, index) => (
//                       <DataRow
//                         key={index}
//                         label={field.label}
//                         detail={field.value}
//                       />
//                     ))}
//                   </Section>
//                 ))}
//               </View>
//             </ScrollView>
//           ) : (
//             <Text>No data available</Text>
//           )}
//         </View>
//       )
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
 
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
  
import {DataRow,Section}from '../../customComponents/dataRow';
import { TransformApiData } from '../displayDataMap/displayDataMap';

import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator } from 'react-native';
import { leads_to_render,contacts_to_render, corporateAccounts_to_render, personAccounts_to_render } from '../../detailPagesData';
import {LEAD_API,CONTACT_API,ACCOUNT_API} from '../../config'
 
const Info =  () => {
  const [openSections, setOpenSections] = useState([]);
  const sys_id = useIdStore((state) => state.sys_id);
  const [api, setApi] = useState(null);
  const[leadsObj, setLeadsObj]=useState(null)
  const token =   SecureStore.getItem('token'); // Use await to get the token asynchronously
  const stoken = JSON.parse(token);
  const apiToken = stoken.accessToken;
  console.log("api token", apiToken);
  const[data, setData]=useState(null)  
  const [isLoading, setIsLoading] = useState(true);
  const [showNoData, setShowNoData] = useState(false);
  const flag = useIdStore((state)=>state.flag);
  const account_type=useIdStore((state)=>state.account_type);
  console.log("flag", flag);
 
 
  useEffect(() => {
    if (flag === 'lead') {
      setData(leads_to_render);
      setApi(LEAD_API);
    }
    else if(flag==='contact'){
      setData(contacts_to_render);
      setApi(CONTACT_API)
    }
    else if(flag=='account'){
     // setData(accounts_to_render);
      setApi(ACCOUNT_API);
      if(account_type=='person')
      setData(personAccounts_to_render);
    else
      setData(corporateAccounts_to_render);
     
    }
  } ,[flag]);
 
   
  console.log("data", JSON.stringify(data), api)
 
 
 
useEffect(() => {
  const fetchLeadData = async () => {  
    try {
      console.log("INSIDE FETCH LEAD DATA");
      const leads = await TransformApiData(data, apiToken, api, sys_id);
      console.log("inside fetch lead data and use effect", leads)
      setLeadsObj(leads);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching lead data:", error);
      setIsLoading(false);
      setShowNoData(true);
    }
  };
 
  fetchLeadData();
}, []);
 
 
 
console.log("outside useEffect", leadsObj)
    const toggleSection = (sectionId) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(sectionId)     
        ? prevOpenSections.filter((item) => item !== sectionId)
        : [...prevOpenSections, sectionId]
    );
  };
 
  console.log("ready data", leadsObj)
 
    return (
   
        <View style={styles.body}>
          <View style={{ height: '26%' }}>
            <LeadDet />
          </View>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : leadsObj ? ( // Check if leadsObj is not null
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.container}>
                {Object.keys(leadsObj.sections).map((sectionId) => (
                  <Section
                    key={sectionId}
                    title={leadsObj.sections[sectionId].title}
                    isOpen={openSections.includes(sectionId)}
                    onPress={() => toggleSection(sectionId)}>
                    {Object.values(leadsObj.sections[sectionId].fields).map((field, index) => (
                      <DataRow
                        key={index}
                        label={field.label}
                        detail={field.value}
                      />
                    ))}
                  </Section>
                ))}
              </View>
            </ScrollView>
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      )
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
 




