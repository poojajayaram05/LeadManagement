 
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
//import { leadData } from '../../customComponents/formData';
import { FetchLeadDetails } from '../service/fetchLeadDetails';
import { useEffect } from 'react';
 
const Info = () => {

    const[leadData, setLeadData]=useState([])

    useEffect(() => {


      

       
          const fetchData = async () => {
              try {
                  const ldata = await FetchLeadDetails(); // Call FetchLeads and wait for the result
                  setLeadData(ldata.result); // Set the state with the fetched data
                  //console.log("this is the lead data",ldata.result);
                  setLeadData(ldata.result);
                  console.log(leadData) // Log the fetched data
              } catch (error) {
                  // Handle errors if any
                  console.error('Error in fetching leads:', error);
              }
          };
      
          fetchData(); // Call the fetchData function defined above
      }, []); // Empty dependency array means it will run only once on mount

      
      

    const { first_name,last_name,mobile_phone,email,qualification,lead_status,number,city,street,country,company,email_opt_out,business_phone,home_phone,gender,owner,annual_revenue,lead_source,no_of_employees,industry,company_duns_number,alternate_email1,alternate_email2,zip,lead_type,description,job_title,title,
        sys_updated_by, sys_created_on, sys_created_by, sys_updated_on,preffered_method,zip_postalcode,state_province} = lead || {};
    const leadId = useIdStore((state) => state.number);
    const lead = leadData.find((lead) => lead.number === leadId);
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
            <View style={{ height: '26%' }}>
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
        <Text style={styles.detail}>{lead?.lead_type}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Title:</Text>
        <Text style={styles.detail}>{lead?.title}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Description:</Text>
        <Text style={styles.detail}>{lead?.description}</Text>
    </View>

    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Number:</Text>
        <Text style={styles.detail}>{lead?.number}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Name:</Text>
        <Text style={styles.detail}>{lead?.first_name} {lead?.last_name}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Gender:</Text>
        <Text style={styles.detail}>{lead?.gender}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Email:</Text>
        <Text style={styles.detail}>{lead?.email}</Text>
    </View>
    {/* <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Score:</Text>
        <Text style={styles.detail}>{lead?.Score}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Owner:</Text>
        <Text style={styles.detail}>{lead?.Owner}</Text>
    </View> */}
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Lead Source:</Text>
        <Text style={styles.detail}>{lead?.lead_source}</Text>
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
        <Text style={styles.detail}>{lead?.company}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>No Of Employees:</Text>
        <Text style={styles.detail}>{lead?.no_of_employees}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Annual Revenue:</Text>
        <Text style={styles.detail}>{lead?.annual_revenue}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Job Title:</Text>
        <Text style={styles.detail}>{lead?.job_title}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Company DUNS Number:</Text>
        <Text style={styles.detail}>{lead?.company_duns_number}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Industry:</Text>
        <Text style={styles.detail}>{lead?.industry}</Text>
    </View>
</Section>
 
<Section
    title="Contact Details"
    isOpen={openSections.includes('ContactDetails')}
    onPress={() => toggleSection('ContactDetails')}
>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Alternate Email 1:</Text>
        <Text style={styles.detail}>{lead?.alternate_email1}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Alternate Email 2:</Text>
        <Text style={styles.detail}>{lead?.alternate_email2}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Email OtpOut:</Text>
        <Text style={styles.detail}>{lead?.email_opt_out}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Business Phone:</Text>
        <Text style={styles.detail}>{lead?.business_phone}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Mobile Phone:</Text>
        <Text style={styles.detail}>{lead?.mobile_phone}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Home Phone:</Text>
        <Text style={styles.detail}>{lead?.home_phone}</Text>
    </View>
</Section>
 
<Section
    title="Address Details"
    isOpen={openSections.includes('AddressDetails')}
    onPress={() => toggleSection('AddressDetails')}
>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Street:</Text>
        <Text style={styles.detail}>{lead?.street}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>City:</Text>
        <Text style={styles.detail}>{lead?.city}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>State:</Text>
        <Text style={styles.detail}>{lead?.state_province}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Zip:</Text>
        <Text style={styles.detail}>{lead?.zip_postalcode}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Country:</Text>
        <Text style={styles.detail}>{lead?.country}</Text>
    </View>
</Section>
 
<Section
    title="Contact Methods"
    isOpen={openSections.includes('ContactMethods')}
    onPress={() => toggleSection('ContactMethods')}
>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Preferred Method To Contact:</Text>
        <Text style={styles.detail}>{lead?.preffered_method}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Whatsapp Number:</Text>
        <Text style={styles.detail}>{lead?.Whatsapp}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Qualification:</Text>
        <Text style={styles.detail}>{lead?.qualification}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Status:</Text>
        <Text style={styles.detail}>{lead?.lead_status}</Text>
    </View>
</Section>
<Section
    title="System Information"
    isOpen={openSections.includes('systemDetails')}
    onPress={() => toggleSection('systemDetails')}
>
    <View style={styles.row}>
        <Text style={[styles.data]}>Created by:</Text>
        <Text style={styles.detail}>{lead?.sys_created_by}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Created On:</Text>
        <Text style={styles.detail}>{lead?.sys_created_on}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Updated By:</Text>
        <Text style={styles.detail}>{lead?.sys_updated_by}</Text>
    </View>
    <View style={styles.row}>
        <Text style={[styles.data, styles.label]}>Last Updated On:</Text>
        <Text style={styles.detail}>{lead?.sys_updated_on}</Text>
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
        // backgroundColor: 'yellow',
        fontWeight: 'bold',
    },
    data: {
        color: '#023B5E',
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