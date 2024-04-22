import * as SecureStore from 'expo-secure-store'


export const FetchContactDetail = async () => {
    // const leadId = useIdStore((state) => state.number);
    const token = SecureStore.getItem('token');
    const username= SecureStore.getItem('username');
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    console.log(apiToken);  
    const getContactsUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_contact_c?sysparm_query=owner=${username}&sysparm_display_value=true` ;
    try {
        const response = await fetch(getContactsUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + apiToken
             
            },

          })
          const data = await response.json();
          return data;
    } catch (error) {
        console.error('Error fetching leads:', error);
        throw error; // You can handle the error further or throw it for the caller to handle
    }
};
