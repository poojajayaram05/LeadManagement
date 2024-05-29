import * as SecureStore from 'expo-secure-store'
 
export const FetchOpportunityCount = async () => {
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    const username = SecureStore.getItem('username');
    console.log("from store", username);
    console.log(apiToken);  
    //const getLeadURL=`https://ven06798.service-now.com/api/x_rptp_lead_mana_0/total_count_of_leads?sysparm_query=owner=${username}_`;
    // const getLeadURL=`https://ven06798.service-now.com/api/x_rptp_lead_mana_0/count_of_leads_based_on_owner`;
    const getLeadURL=`https://ven06798.service-now.com/api/x_rptp_lead_mana_0/count_of_opportunities_based_on_owner?owner=${username}`;
   // https://ven06798.service-now.com/api/x_rptp_lead_mana_0/count_of_leads_based_on_owner?owner=somnath
   
    console.log(getLeadURL);
    try {
        const response = await fetch(getLeadURL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + apiToken
            },
          })
          const data = await response.json();
          return data;
        //   router.replace('/DrawerScreens/leadList')
    } catch (error) {
        console.error('Error fetching leads:', error);
        throw error; // You can handle the error further or throw it for the caller to handle
    }
};