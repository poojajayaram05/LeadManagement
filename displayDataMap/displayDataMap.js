function updateValues(fields, api_data) { 
    for (let key in fields) {
        if (api_data.hasOwnProperty(key)) {
            fields[key].value= api_data[key];
        }
    }
}
function updateHeader(fields,leadData) {
    for (let key in fields) {
        if (leadData.hasOwnProperty(key)) {
            fields[key].value = leadData[key];
        }
    }
}
 export const TransformApiData= async( data_to_be_rendered,apiToken1,url1, sys_id)=> {
    const apiUrl=url1+`&sys_id=${sys_id}`
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiToken1
            },
        });
        const api_data = await response.json();
        const leadData = api_data.result[0];
        console.log("lead data displayyy", leadData);

        // const concatenatedAddress = `${leadData.u_town}, ${leadData.u_district}, ${leadData.u_state}, ${leadData.zip_postalcode}, ${leadData.u_country}`;
        // const addressFields = data_to_be_rendered.sections.address_details.fields;
        // addressFields.concatenated_address = { label: "Address", value: concatenatedAddress };


    for (let key in data_to_be_rendered.sections) {
        const fields = data_to_be_rendered.sections[key].fields;
        updateValues(fields,leadData);
    }
    updateHeader(data_to_be_rendered.header_section, leadData)
    return data_to_be_rendered
}