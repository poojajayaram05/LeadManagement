import * as SecureStore from 'expo-secure-store';
import useIdStore from '../leadStore';
import { useEffect, useState } from 'react'; // Import useEffect and useState if you need them

export const FetchLeadDetails = async (sys_id) => {
    const token = await SecureStore.getItemAsync('token'); // Use await to get the token asynchronously
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    console.log("fetch details", sys_id)
    console.log(apiToken);

    const getLeadURL = `https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_c?sys_id=${sys_id}`;

    try {
        const response = await fetch(getLeadURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiToken
            },
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching leads:', error);
        throw error;
    }
};
