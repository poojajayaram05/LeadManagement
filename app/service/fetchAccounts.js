import * as SecureStore from 'expo-secure-store'
export const FetchAccounts = async () => {
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    console.log(apiToken);  
    const getAccounturl="https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_account_c" ;

    
    try {
        const response = await fetch(getAccounturl, {
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
        throw error;
    }
};
