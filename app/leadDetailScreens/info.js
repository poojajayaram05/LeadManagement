
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { Ionicons } from '@expo/vector-icons';
import {DataRow,Section}from '../../customComponents/dataRow'; 
import { FetchLeadDetails } from '../service/fetchLeadDetails';
import LeadDataMap from '../../displayDataMap/displayDataMap';
import { TransformApiData } from '../../displayDataMap/displayDataMap';
import { FetchData } from '../../displayDataMap/displayDataMap';
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator } from 'react-native';
import { leads_to_render,contacts_to_render, corporateAccounts_to_render, personAccounts_to_render } from '../../detailPagesData';
import {LEAD_API,CONTACT_API,ACCOUNT_API} from '../../config';

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





