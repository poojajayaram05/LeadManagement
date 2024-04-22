import * as SecureStore from 'expo-secure-store'
 
export const FetchOpportunities = async () => {
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const username= SecureStore.getItem('username');
    const apiToken = stoken.accessToken;
    console.log(apiToken);  
    const getOpportunityURL=
    `https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_opportunity_c?sysparm_query=owner=${username}` ;
    try {
        const response = await fetch(getOpportunityURL, {
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