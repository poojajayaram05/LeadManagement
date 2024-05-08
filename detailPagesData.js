
export const leads_to_render = {
 
     page_heading: 'Lead Details',
    header_section:
    {
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
    },
    sections: {
        general_details: {
            title: "General Information",
            sectionId: 1,
            fields: {
                lead_type: { label: "Lead Type" },
                title: { label: "Title" },
                description: { label: "Description" },
                number: { label: "Number" },
                gender: { label: "gender" },
                email: { label: "email" },
                lead_source: { label: "Lead Source" }
            },
        },
        company_details: {
            title: "Company Information",
            sectionId: 2,
            fields: {
             company: { label: "Company" },
             no_of_employees: { label: "No Of Employees" },
             annual_revenue:{label : "Annual Revenue"},
             job_title:{label:"Job Title"},  
             company_duns_number:{label:"Company DUNS Number"},
             industry:{label:"Industry"},
           },
        },
        contact_details: {
            title: "Contact Information",
            sectionId: 3,
            fields: {
             alternate_email1: { label: "Alternate Email 1" },
             alternate_email2:{label : "Alternate Email 2"},
             business_phone:{label:"Business Phone"},
             mobile_phone:{label:"Mobile Phone"},
             home_phone:{label:"Home Phone"},
           },
        },
        address_details: {
            title: "Address Details",
            sectionId: 4,
            fields: {
             street: { label: "Street" },
             city: { label: "City" },
             state_proviance: {label : "State"},
             zip_postalcode: {label:"Zip"},
             country: {label:"Country"},
           },
        },
        contact_methods: {
            title: "Contact Methods",
            sectionId: 5,
            fields: {
             preffered_method: { label: "Prefered Method To Contact" },
             whatsapp: { label: "WhatsApp" },
             u_email:{label : "Email"},
             phone:{label:"Phone"},
           },
        },
        system_information: {
            title: "System Information",
            sectionId: 6,
            fields: {
             sys_created_by: { label: "Created By" },
             sys_created_on: { label: "Created On" },
             sys_updated_by:{label : "Updated By"},
             sys_updated_on:{label:"Last Updated On"},
           }
        }
    }
}
export const personAccounts_to_render={
     page_heading: 'Lead Details',
    header_section:
    {
        first_name: { label: "First Name" },
        last_name: { label: "Last Name" },
        email: { label: "Email" },
        phone: { label: "Phone" },
    },
    sections: {
        general_details: {
            title: "General Information",
            sectionId: 1,
            fields: {
                title: { label: "Title" },
                account_type: {label:"Account Type"},
                account_name: { label: "Account Name" },
                description: { label: "Description" },
                birthdate: { label: "Birth date" },
                number:{label:"Number"},
                website:{label:"Website"},
                gender: { label: "gender" },
                // email: { label: "email" },
                // owner: { label: "owner" }
            },
 
 
        },
        contact_details: {
            title: "Contact Information",
            sectionId: 2,
            fields: {
             alternate_email1: { label: "Alternate Email 1" },
             alternate_email2:{label : "Alternate Email 2"},
             email_verification_status:{label:"Email verification status"},
             home_phone:{label:"Home Phone"},
             business_phone:{label:"Business Phone"},
             alternate_phone1:{label:"Alternate phone1"},
             alternate_phone2:{label:"Alternate phone2"},
             contact_verified:{label:"Contact verified"},
             other_phone:{label:"Other phone"},
             assistant:{label:"Assistant"},
             assistant_phone:{label:"Assistant phone"},
 
 
           }
 
        },
        personal_details: {
            title: "Personal Information",
            sectionId: 3,
            fields: {
                place_of_birth:{label:"Place of birth"},
                country_of_birth:{label:"Country of birth"},
                age:{label:"Age"},
                father_first_name:{label:"Father first name"},
                father_middle_name:{label:"Father Middle name"},
                father_last_name:{label:"Father last name"},
                mother_first_name:{label:"Mother first name"},
                mother_middle_name:{label:"Mother Middle name"},
                mother_last_name:{label:"Mother last name"},
                marital_status:{label:"Marital status"},
                religion:{label:"Religion"},
                spouse_first_name:{label:"Spouse first name"},
                spouse_middle_name:{label:"Spouse Middle name"},
                spouse_last_name:{label:"Spouse last name"},
                tfValue:{label:"Minority community"},
 
            }
        },
        address_details:{
            title:"Address Details",
            sectionId: 4,
            fields:{
                shipping_address:{label:"Shipping address"},
                state_code:{label:"State"},
                city:{label:"City"},
                other_address:{label:"Other address"},
                mailing_address:{label:"Mailing address"},
                billing_address:{label:"Billing Address"},
 
            }
        },
        company_details:{
            title:"Company Details",
            sectionId: 5,
            fields:{
                company:{label:"Company Name"},
                no_of_employees:{label:"Number of Employees"},
                lead_currency:{label:"Currency"},
                website:{label:"Website"},
                annual_revenue:{label:"Annual Revenue"},
 
            }
        },
        system_details:{
            title:"System Information",
            sectionId: 6,
            fields:{
                sys_created_by:{label:"Created by"},
                sys_created_on:{label:"Created On"},
                sys_updated_by:{label:"Updated By"},
                sys_updated_on:{label:"Last Updated On "},
 
            }
        }
 
    }
 
}
 
export const corporateAccounts_to_render={
     page_heading: 'Lead Details',
    header_section:
    {
        account_name: { label: "Account Name" },
       
        email: { label: "email" },
        mobile: {label:"Mobile"}
    },
    sections: {
        general_details: {
            title: "General Information",
            sectionId: 1,
            fields: {
                title: { label: "Title" },
                account_type: {label:"Account Type"},
                account_name: { label: "Account Name" },
                description: { label: "Description" },
                birthdate: { label: "Birth date" },
                number:{label:"Number"},
                website:{label:"Website"},
                // gender: { label: "gender" },
                // email: { label: "email" },
                // owner: { label: "owner" }
            },
 
 
        },
        contact_details: {
            title: "Contact Information",
            sectionId: 2,
            fields: {
             alternate_email1: { label: "Alternate Email 1" },
             alternate_email2:{label : "Alternate Email 2"},
             email_verification_status:{label:"Email verification status"},
             home_phone:{label:"Home Phone"},
             business_phone:{label:"Business Phone"},
             alternate_phone1:{label:"Alternate phone1"},
             alternate_phone2:{label:"Alternate phone2"},
             contact_verified:{label:"Contact verified"},
             other_phone:{label:"Other phone"},
             assistant:{label:"Assistant"},
             assistant_phone:{label:"Assistant phone"},
 
 
           }
 
        },
        industry_details:{
            title:"Industry Details",
            setionId: 3,
            fields:{
                industry_classification:{label:"Industry classification"},
                industry_sub_classification:{label:"Industry sub classification"},
                no_of_employees:{label:"Number of Employees"},
                account_source:{label:"Account Source"},
                industry:{label:"Industry"},
                annual_revenue:{label:"Annual revenue"},
                department:{label:"Department"},
 
            }
        },
        address_details:{
            title:"Address Details",
            sectionId: 4,
            fields:{
                shipping_address:{label:"Shipping address"},
                state_code:{label:"State"},
                city:{label:"City"},
                other_address:{label:"Other address"},
                mailing_address:{label:"Mailing address"},
                billing_address:{label:"Billing Address"},
 
            }
        },
        company_details:{
            title:"Company Details",
            sectionId: 5,
            fields:{
                company:{label:"Company Name"},
                no_of_employees:{label:"Number of Employees"},
                lead_currency:{label:"Currency"},
                website:{label:"Website"},
                annual_revenue:{label:"Annual Revenue"},
 
            }
        },
        system_details:{
            title:"System Information",
            sectionId: 6,
            fields:{
                sys_created_by:{label:"Created by"},
                sys_created_on:{label:"Created On"},
                sys_updated_by:{label:"Updated By"},
                sys_updated_on:{label:"Last Updated On "},
 
            }
        },
        other_information:{
            title:"Other Information",
            sectionId: 7,
            fields:{
                bsr_code:{label:"BSR code"},
                stamp_duty:{label:"Stamp duty"},
                foreign_tin:{label:"Foreign Tin"},
                tin_issuing_country:{label:"Tin Issuing Country"},
                country_incorporation:{label:"Country of incorporation"},
                country_of_tax_residence:{label:"Country of tax residence"},
 
            }
        }
 
 
 
}
}
export const accounts_to_render={
     page_heading: 'Lead Details',
    header_section:
    {
        first_name: "",
        last_name: "",
        email: "",
        mobile: ""
    },
    sections: {
        general_details: {
            title: "General Information",
            sectionId: 1,
            fields: {
                title: { label: "Title" },
                account_name: { label: "Account Name" },
                description: { label: "Description" },
                birthdate: { label: "Date of birth" },
                gender: { label: "gender" },
                email: { label: "email" },
                owner: { label: "owner" }
            },


        },
        contact_details: {
            title: "Contact Information",
            sectionId: 2,
            fields: { home_phone: { label: "Home Phone" },
             alternate_email1: { label: "Alternate Email 1" },
             alternate_email2:{label : "Alternate Email 2"},
             business_phone:{label:"Business Phone"},
             home_phone:{label:"Home Phone"},
             email_opt_out:{label:"Email Opt Out"},


           }

        }
    }

}




export const opportunity_to_render={
     page_heading: 'Lead Details',
    header_section:
    {
        opportunity_name: { label: "Opportunity Name" },
        states: { label: "Status" },
        forecast_close_date: { label: "Forecast Close Date" },
        opportunity_value: { label: "Opportunity Value" },
    },
    sections:{
        general_details:{
            title:"General Details",
            sectionId:1,
            fields:{
                opportunity_name:{label:"Opportunity name"},
                contact_display_value:{label:"Primary Contact"},
                owner:{label:"Owner"},
                description:{label:"Description"},
                next_step:{label:"Next Step"},
                account_display_value:{label:"Account Name"},
                sales_pipeline:{label:"Sales Pipeline"},
                sales_stage:{label:"Sales Stage"},
                category:{label:"Category"},
                probability_of_winning:{label:"Probability of winning (%)"},
 
            }
        }
    }
}

export const contact_to_render={
     page_heading: 'Lead Details',
    header_section:
    {
        first_name:{label:"First Name"},
        last_name:{label:"Last Name"},
        email: {label:"Email"},
        mobile: {label:"Mobile"}
    },
    sections:{
        general_details: {
            title: "General Information",
            sectionId: 1,
            fields: {
                title: { label: "Title" },
               // account_name: { label: "Account Name" },
                "account_name.display_value": { label: "Account Name" },
                description: { label: "Description" },
                birthdate: { label: "Date of birth" },
                category: { label: "Category" },
                name:{label:"Name"},
                gender: { label: "Gender" },
                owner: { label: "Owner" },
                marital_status:{label:"Marital Status"},
            }
        },
        contact_details: {
            title: "Contact Information",
            sectionId: 2,
            fields: {
                // home_phone: { label: "Home Phone" },
             alternate_email1: { label: "Alternate Email 1" },
             alternate_email2:{label : "Alternate Email 2"},
             alternate_phone1:{label:"Alternate Phone 1"},
             alternate_phone2:{label:"Alternate Phone 2"},
             assistant_phone:{label:"Assistant Phone"},
           }
 
        },
        address_details:{
            title:"Address Details",
            sectionId: 3,
            fields: {
                mailing_address:{
                    label:"Mailing Address"
                },
                other_address:{label:"Other Address"},
            }
        },
        personal_details:{
            title:"Personal Information",
            sectionId: 4,
            fields:{
                assistant:{label:"Assistant"},
                father_first_name:{label:"Father First Name"},
                father_mddle_name:{label:"Father Middle Name"},
                father_last_name:{label:"Father Last Name"},
                mother_first_name:{label:"Mother First Name"},
                mother_mddle_name:{label:"Mother Middle Name"},
                mother_last_name:{label:"Mother Last Name"},
                religion:{label:"Religion"},
               
 
            }
        },
        system_details:{
            title:"System Information",
            sectionId: 5,
            fields:{
                sys_created_by:{label:"Created by"} ,
                sys_created_on:{label:"Created On"},
                sys_updated_by:{label:"Updated By"},
                sys_updated_on:{label:"Last Updated On"},
            }
        }
    }
 
}
