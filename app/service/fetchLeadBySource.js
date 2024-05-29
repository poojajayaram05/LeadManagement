import * as SecureStore from 'expo-secure-store'
 
export default async function FetchLeadBySource() {
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    const username = SecureStore.getItem('username');
    console.log(apiToken);  
    const getLeadURL=
    `https://ven06798.service-now.com/api/x_rptp_lead_mana_0/count_of_leads_by_source_for_owner?owner=${username}`;
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
 
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error;
    }
};