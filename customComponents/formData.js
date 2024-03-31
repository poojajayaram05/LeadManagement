export const formData = {
  
    "elements": [
      {
        "name":"lead_type",
        "type":"dropdown",
        "title":"Lead Type",
        "inputType":"text",
        "placeholder":"Lead Type",
        "dropdownData" :[
          { value: 'person', label: 'Person' },
          {value:'company', label:'Company'}
        ],
        "sectionName":"General",
        "isRequired":true
        
      },
  
      {
        "name": "salutation",
        "type": "dropdown",
        "title": "Salutation",
        "inputType": "text",
        "placeholder":"Salutation",
         "dropdownData" :[
          { value: 'Mr.', label: 'Mr.' },
          { value: 'Ms.', label: 'Ms.' },
          { value: 'Dr.', label: 'Dr.' },
          { value: 'prof', label: 'Prof' },
         ],
         "sectionName":"General"
      },
     
      {
        "name": "first_name",
        "type": "TextInput",
        "title": "First Name",
        "placeholder":"First Name",
        "maxLength": 25,
        'isRequired': true,
        "sectionName":"General"
      },
      {
        "name": "last_name",
        "type": "TextInput",
        "title": "Last Name",
        "inputType": "text",
        "placeholder": "Last Name",
        "isRequired": true,
        "autocomplete": "lastname",
        "sectionName":"General"
      },
      {
        "name": "gender",
        "type":"RadioButton",
        "title": "Gender",
        "rdata" : [
          { label: "Male", id: 'male' },
          { label: "Female", id: 'female' },
          { label: "Other", id: 'other' },
        ],
        'isRequired': true,
        "sectionName":"General"
      }, 
      // {
      //   "name": "qualification",
      //   "type": "dropdown",
      //   "title": "Qualification",
      //   "inputType": "text",
      //   "placeholder":"Qualification",
      //    "dropdownData" :[
      //     { value: 'hot', label: 'Hot' },
      //     { value: 'cold', label: 'Cold' },
      //     { value: 'warm', label: 'Warm' },
      //    ],
      //    "sectionName":"General"
      // },
   {
        "name": "job_title",
        "type": "TextInput",
        "title": "Job Title",
        "inputType": "text",
        "placeholder": "Job Title",
        "sectionName":"General"
       
      }, 
      {
        "name": "description",
        "type": "TextInput",
        "title": "Description",
        "inputType": "text",
        "placeholder": "Description",
        "sectionName":"General",
        "icon":"logo-facebook"
       
      }, 
      {
        "name":"street",
        "type": "TextInput",
        "title": "Street",
        "inputType": "text",
        "placeholder": "Street",
        "sectionName":"Address"
       
      }, 
      {
        "name":"city",
        "type": "TextInput",
        "title": "City",
        "inputType": "text",
        "placeholder": "City",
        "sectionName":"Address",
        "isRequired":true
       
      }, 
      {
        "name":"state_province",
        "type": "TextInput",
        "title": "State",   
        "inputType": "text",
        "placeholder": "State",
        "sectionName":"Address",
        "isRequired":true
       
      }, 
      {
        "name":"zip_postalcode",
        "type": "TextInput",
        "title": "Zip",
        "inputType": "text",
        "placeholder": "Zip",
        "sectionName":"Address"
       
      }, 
      {
        "name":"country",
        "type": "TextInput",
        "title": "Country",
        "inputType": "text",
        "placeholder": "Country",
        "sectionName":"Address",
        "isRequired":true
       
      }, 
      {
        "name": "industry",
        "type": "dropdown",
        "title": "Industry",
        "inputType": "text",
        "placeholder":"Industry",
         "dropdownData" :[
          { value: 'accounting', label: 'Accounting' },
          { value: 'brokers', label: 'Brokers' },
          { value: 'consulting', label: 'Consulting' },
          { value: 'customer_services', label: 'Customer Services'},
          { value: 'financial', label: 'Financial' },
         ],
         "sectionName":"Company"
        
       
      },
      {
        "name": "lead_currency",
        "type": "dropdown",
        "title": "Currency",
        "inputType": "text",
        "placeholder":"Currency",
         "dropdownData" :[
          { value: 'inr', label: 'INR' },
          { value: 'usd', label: 'USD' },
         ],
         "sectionName":"Company"



      },
      
      {
        "name": "company",
        "type": "TextInput",
        "title": "Company Name",
        "description": "Enter Company name",
        "inputType": "text",
        "placeholder":"Company Name",
        "sectionName":"Company"

      },
      {
        "name": "no_of_employees",
        "type": "TextInput",
        "title": "Number Of Employees",
        "description": "Enter the number of employees",
        "inputType": "text",
        "placeholder":"No of employees",
        "sectionName":"Company"

     
      },
      {
        "name":"website",
        "type": "TextInput",
        "title": "Website",
        "description": "Enter a valid website",
        "inputType": "text",
        "placeholder":"Website",
        "sectionName":"Company"

       
      },
      {
        "name":"annual_revenue",
        "type": "TextInput",
        "title": "Annual Revenue",
        "description": "Enter annual revenue",
        "inputType": "number",
        "placeholder":"Annual Revenue",
        "sectionName":"Company"
      },
  
      
      {
        "name": "business_phone",
        "type": "TextInput",
        "title": "Business Phone",
        
        "inputType": "numeric",
        "placeholder":"Business Phone",
        "isRequired": true,
        "sectionName":"Contact",
        "validation": {
          "regex": /^\d{10}$/,
          "message": "Please enter a valid 10-digit phone number."
        },

       
      },
      {
        "name": "mobile_phone",
        "type": "TextInput",
        "title": "Mobile Phone",
        "inputType": "numeric",
        "placeholder":"Mobile Phone",
        "isRequired": true,
        "sectionName":"Contact",
        "validation": {
          "regex": /^\d{10}$/,
          "message": "Please enter a valid 10-digit phone number."
        },
        

       
      },
      {
        "name": "home_phone",
        "type": "TextInput",
        "title": "Home Phone",
        "validation": {
          "regex": /^\d{10}$/,
          "message": "Please enter a valid 10-digit phone number."
        },
       
        "inputType": "numeric",
        "placeholder":"Home Phone",
        "sectionName":"Contact"

       
      },
      {
        "name": "do_not_call",
        "type": "Switch",
        "title": "Do Not Call",
        "sectionName":"ContactMethod"

      },
      {
        "name": "email",
         "type":"email",
        "title": "Email",
        "placeholder":"Email",
        "isRequired": true,
        "sectionName":"Contact",
        "validation": {
          "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "message": "Please enter a valid email address."
        },
      },

      {
        "name": "preffered_method",
        "type": "dropdown",
        "title": "Preferred",
        "placeholder":"Preferred",
        "dropdownData" :[
          { value: 'any', label: 'Any' },
          { value: 'email', label: 'Email' },
          { value: 'bulk_email', label: 'Web' },
          { value: 'phone', label: 'Phone' },
          { value: 'whatsapp', label: 'Whatsapp' },
          
         ],
         "sectionName":"ContactMethod"
      },
      // {
      //   "name": "u_alternate_email_1",
      //   "type": "TextInput",
       
      //   "title": "Alternate Email",
      //   "placeholder":"Alternate Email 1",
      //   "isRequired": true,
      //   "sectionName":"Contact"
      // },
      // {
      //   "name": "u_alternate_email_2",
      //   "type": "email",
      
      //   "title": "Alternate Email",
      //   "placeholder":"Alternate Email 2",
      //   "isRequired": true,
      //   "sectionName":"Contact"
       
      // },
      {
        "name": "u_email",
        "type": "dropdown",
        "title": "Email subscription",
        "placeholder":"Email subscription",
        "dropdownData" :[
          { value: 'allow', label: 'Allow' },
          { value: 'do_not_allow', label: 'Do not allow' },
         ],
         "sectionName":"ContactMethod"

      },
      {
        "name": "phone",
        "type": "dropdown",
        "title": "Phone subscription",
        "placeholder":"Phone subscription",
        "dropdownData" :[
          { value: 'allow', label: 'Allow' },
          { value: 'do_not_allow', label: 'Do not allow' },
         ],
         "sectionName":"ContactMethod"
      },
      {
        "name": "whatsapp",
        "type": "dropdown",
        "title": "Whatsapp subscription",
        "placeholder":"whatsapp subscription",
        "dropdownData" :[
          { value: 'allow', label: 'Allow' },
          { value: 'do_not_allow', label: 'Do not allow' },
         ],
         "sectionName":"ContactMethod"
      },
  
      {
        "name": "email_opt_out",
        "type": "Switch",
        "title": "Email Opt Out",
        "sectionName":"ContactMethod"
      },
  
      {
        "name": "fax",
        "type": "TextInput",
        "title": "Fax",
        "inputType": "text",
        "placeholder":"FAX",
        "sectionName":"Contact"
       
      },
      {
        "name": "company_duns_number",
        "type": "TextInput",
        "title": "Company DUNS Number",
        "inputType": "number",
        "placeholder":"Number",
        "sectionName":"Company"
      },
      {
        "name": "title",
        "type": "TextInput",
        "title": "Lead Title",
        "placeholder":"Lead Title",
        "isRequired": true,
        "sectionName":"General"
      },

      {
        "name": "lead_currency",
        "type": "dropdown",
        "title": "Lead Currency",
        "placeholder":"Currency",
        "dropdownData" :[
          { value: 'inr', label: 'INR' },
          { value: 'usd', label: 'USD' },
          
         ],
         "sectionName":"company"
      },
      {
        "name": "lead_source",
        "type": "dropdown",
        "title": "Lead Source",
        "inputType": "text",
        "placeholder":"Lead Source",
         "dropdownData" :[
          { value: 'advertisement', label: 'Advertisement' },
          { value: 'partner', label: 'Partner' },
          { value: 'web', label: 'Web' },
          { value: 'campaign', label: 'Campaign' },
          { value: 'self_sourced', label: 'Self Sourced' },
         ],
         "sectionName":"General"
      },
      // {
      //   "name": "u_lead_status",
      //   "type": "dropdown",
      //   "title": "Lead Status",
      //   "inputType": "text",
      //   "placeholder":"Lead Status",
      //    "dropdownData" :[
      //     { value: 'new', label: 'New' },
      //     { value: 'Contacted', label: 'Contacted' },
      //     { value: 'qualified', label: 'Qualified' },
      //     { value: 'converted', label: 'Converted' },
      //     { value: 'closed-not_converted', label: 'Closed-Not Converted' },
      //    ],
      //    "sectionName":"Additional"
      // },
      {
        "name": "u_owner_type",
        "type": "dropdown",
        "title": "Owner Type",
        "inputType": "text",
        "placeholder":"Owner Type",
         "dropdownData" :[
          { value: 'team', label: 'Team' },
          { value: 'user', label: 'User' },
         ],
         "sectionName":"Additional"
      },
      {
        "name": "u_owner",
        "type": "TextInput",
        "title": "Owner",
        "inputType": "text",
        "placeholder":"Owner",
        "sectionName":"Additional"

      },
      {
        "name": "instagram",
        "type": "socialMediaInput",
        "logo":"logo-instagram",
        "title": "Instagram",
        "inputType": "text",
        "placeholder":"Instagram",
        "sectionName":"Social"
      },
      {
        "name": "linkedin",
        "type": "socialMediaInput",
        "logo":"logo-linkedin",
        "title": "LinkedIn",
        "inputType": "text",
        "placeholder":"LinkedIn",
        "sectionName":"Social"
      },
      {
        "name": "facebook",
        "type": "socialMediaInput",
        "logo":"logo-facebook",
        "title": "Facebook",
        "inputType": "text",
        "placeholder":"Facebook",
        "sectionName":"Social"
      },
      {
        "name": "twitter",
        "type": "socialMediaInput",
        "logo":"logo-twitter",
        "title": "Twitter",
        "inputType": "text",
        "placeholder":"Twitter",
        "sectionName":"Social"
      },
      {
        "name": "assigned_to",
        "type": "TextInput",
        "title": "Assigned To",
        "inputType": "text",
        "placeholder":"Assigned To",
        "readonly":true,
        "sectionName":"Additional"
      },
      {
        "name": "assignment_group",
        "type": "dropdown",
        "title": "Assignment group",
        "inputType": "text",
        "placeholder":"Assigned Group",
        "dropdownData": [
          { "value": 1, "label": "" },

        ],
        "sectionName":"Additional"
      },
  ],
  };

  export const taskFormData = {
    "elements": [
      {
        "name": "task-type",
        "type": "dropdown",
        "title": "Task Type",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "Call" },
          { "value": 2, "label": "Email" },
          { "value": 3, "label": "Message" },
          { "value": 4, "label": "Follow-Up" },
          { "value": 5, "label": "Appointment" },
      
        ]
      },
      {
        "name": "due-date",
        "type": "calenderDropdown",
        "title": "Due Date",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "Today" },
          { "value": 2, "label": "Tomorrow" },
          { "value": 3, "label": "3 Days From Now" },
          { "value": 4, "label": "One Week From Now" },
          { "value": 5, "label": "1 Month From Now" },
          { "value": 6, "label": "Custom Date" }
        ]
      },
      {
        "name": "title",
        "type": "TextInput",
        "title": "Title",
        "inputType": "text",
        "placeholder":"Enter the title"
      },
      {
        "name": "description",
        "type": "TextInput",
        "title": "Description",
        "inputType": "text",
        "placeholder":"Enter the description"
      },
      {
        "name": "status",
        "type": "dropdown",
        "title": "Status",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "In-progress" },
          { "value": 2, "label": "Completed" },
          {"value":3, "label":"Not Started"}
        ]
      },
      {
        "name": "time",
        "type": "timeInput",
        "title": "Time",
        "placeholder": ""
      },
      {
        "name": "repeat",
        "type": "dropdown",
        "title": "Repeat",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "Daily" },
          { "value": 2, "label": "Weekly" },
          { "value": 3, "label": "Monthly" },
          { "value": 4, "label": "Yearly" },
          { "value": 5, "label": "Don't Repeat" }
        ]
      },
      {
        "name": "owner",
        "type": "dropdown",
        "title": "Owner",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "John Doe" },
          { "value": 2, "label": "Jane Smith" },
          { "value": 3, "label": "Alice Mark" },
          { "value": 4, "label": "Kate Winslet" },
          { "value": 5, "label": "William Henry" },
          { "value": 6, "label": "Jane Peter" },
          { "value": 7, "label": "Carley Wilson" },
          { "value": 8, "label": "William Henry" }
        ]
      },
    //   {
    //     "name": "leads",
    //     "type": "leadDropdown",
    //     "title": "Leads",
    //     "inputType": "text",

    //   }
     ]
  }
  
  export const leadData =
  [
   
    {
   
      "LeadType": "Domestic",
      "Number": "LEA0001509",
      "FirstName":"John",
      "LastName":"Smith",
      "Gender":'M',
      "Email": "johnsmith1@gmail.com",
      "Score":"Null",
      "Owner":"Carla White",
      "LeadSource":"Partner",
      "LeadCurrency":"INR 300000",
      "Description":"John Smith is a potential customer who expressed interest in our services during a recent networking event.",
      "ScoringProfile":"Profile 1",
      "Company":"RPT",
      "NoOfEmployees":"30",
      "AnnualRevenue":"INR 700000",
      "CompanyDUNSNumber":"73245",
      "Industry":"Accounting",
      "AlternateEmail1":"johnsmith0234@gmail.com",
      "AlternateEmail2":"johnsmithh987@gmail.com",
      "EmailOtpOut":"True",
      "BusinessPhone": "8884763231",
      "MobilePhone":"9903672637",
      "HomePhone":"8802374321",
      "DoNotCall":"True",
      "Street":"No. 3, 2nd lane",
      "City":"Boston",
      "State":"California",
      "Zip":"230098",
      "Country":"USA",
      "Preferred":"Any",
      "Email":"johnsmith1@gmail.com",
      "BulkEmail":"Allow",
      "Phone":"8076845632",
      "Whatsapp":"9985435678",
      "label":"hot",
      "Id":"1",
      "Status":"New Lead"
   
    },
   
    {
      "LeadType": "Domestic",
      "Number": "LEA0001510",
      "FirstName": "Emily",
      "LastName": "Johnson",
      "Gender": "F",
      "Email": "emilyjohnson2@gmail.com",
      "Score": "Null",
      "Owner": "David Brown",
      "LeadSource": "Advertisement",
      "LeadCurrency": "USD 250000",
      "Description": "Emily Johnson is interested in our services after attending our webinar.",
      "ScoringProfile": "Profile 2",
      "Company": "XYZ Corp",
      "NoOfEmployees": "50",
      "AnnualRevenue": "USD 900000",
      "CompanyDUNSNumber": "87213",
      "Industry": "Financial",
      "AlternateEmail1": "emily.johnson@xyzcorp.com",
      "AlternateEmail2": "emilyj123@hotmail.com",
      "EmailOtpOut": "False",
      "BusinessPhone": "7894563210",
      "MobilePhone": "9876543210",
      "HomePhone": "8765432109",
      "DoNotCall": "False",
      "Street": "123 Main St",
      "City": "New York",
      "State": "New York",
      "Zip": "10001",
      "Country": "USA",
      "Preferred": "Email",
      "BulkEmail": "Not allowed",
      "Phone": "9876543210",
      "Whatsapp": "Unavailable",
      "label": "cold",
      "Id": "2",
      "Status": "Qualified"
    },
    {
      "LeadType": "International",
      "Number": "LEA0001511",
      "FirstName": "Daniel",
      "LastName": "Brown",
      "Gender": "M",
      "Email": "danielbrown@gmail.com",
      "Score": "Null",
      "Owner": "Maria Garcia",
      "LeadSource": "Web",
      "LeadCurrency": "EUR 400000",
      "Description": "Daniel Brown Contacted us through our website seeking information about our products.",
      "ScoringProfile": "Profile 3",
      "Company": "ABC Ltd",
      "NoOfEmployees": "20",
      "AnnualRevenue": "EUR 600000",
      "CompanyDUNSNumber": "51234",
      "Industry": "Consulting",
      "AlternateEmail1": "danielb987@abcltd.com",
      "AlternateEmail2": "dbrown123@yahoo.com",
      "EmailOtpOut": "True",
      "BusinessPhone": "6547893210",
      "MobilePhone": "9876543210",
      "HomePhone": "8765432109",
      "DoNotCall": "True",
      "Street": "456 Elm St",
      "City": "Los Angeles",
      "State": "California",
      "Zip": "90001",
      "Country": "USA",
      "Preferred": "Phone",
      "BulkEmail": "Allow",
      "Phone": "9876543210",
      "Whatsapp": "Unavailable",
      "label": "warm",
      "Id": "3",
      "Status": "Contacted"
    },
    {
      "LeadType": "Domestic",
      "Number": "LEA0001512",
      "FirstName": "Michael",
      "LastName": "Wilson",
      "Gender": "M",
      "Email": "michaelwilson@gmail.com",
      "Score": "Null",
      "Owner": "Jennifer Rodriguez",
      "LeadSource": "Web",
      "LeadCurrency": "GBP 200000",
      "Description": "Michael Wilson inquired about our services through our online Contact form.",
      "ScoringProfile": "Profile 4",
      "Company": "PQR Inc",
      "NoOfEmployees": "100",
      "AnnualRevenue": "GBP 800000",
      "CompanyDUNSNumber": "93215",
      "Industry": "Customer Services",
      "AlternateEmail1": "mwilson456@pqrinc.com",
      "AlternateEmail2": "michael.wilson23@gmail.com",
      "EmaieOtpOut": "False",
      "BusinessPhone": "1234567890",
      "MobilePhone": "9876543210",
      "HomePhone": "8765432109",
      "DoNotCall": "False",
      "Street": "789 Oak St",
      "City": "Chicago",
      "State": "Illinois",
      "Zip": "60001",
      "Country": "USA",
      "Preferred": "Any",
      "BulkEmail": "Not allowed",
      "Phone": "9876543210",
      "Whatsapp": "Unavailable",
      "label": "hot",
      "Id": "4",
      "Status": "New Lead"
    },
    {
      "LeadType": "International",
      "Number": "LEA0001513",
      "FirstName": "Olivia",
      "LastName": "Taylor",
      "Gender": "F",
      "Email": "oliviataylor@gmail.com",
      "Score": "Null",
      "Owner": "Robert Martinez",
      "LeadSource": "Partner",
      "LeadCurrency": "AUD 350000",
      "Description": "Olivia Taylor was referred to us by one of our business partners.",
      "ScoringProfile": "Profile 5",
      "Company": "LMN Group",
      "NoOfEmployees": "75",
      "AnnualRevenue": "AUD 750000",
      "CompanyDUNSNumber": "74239",
      "Industry": "Accounting",
      "AlternateEmail1": "oliviataylor@lmngroup.com",
      "AlternateEmail2": "olivia.taylor23@hotmail.com",
      "EmailOtpOut": "True",
      "BusinessPhone": "9876543210",
      "MobilePhone": "8765432109",
      "HomePhone": "7654321098",
      "DoNotCall": "True",
      "Street": "101 Pine St",
      "City": "Miami",
      "State": "Florida",
      "Zip": "33001",
      "Country": "USA",
      "Preferred": "Phone",
      "BulkEmail": "Allow",
      "Phone": "9876543210",
      "Whatsapp": "Unavailable",
      "label": "cold",
      "Id": "5",
      "Status": "Qualified"
    },
    {
      "LeadType": "Domestic",
      "Number": "LEA0001514",
      "FirstName": "James",
      "LastName": "Clark",
      "Gender": "M",
      "Email": "jamesclark@gmail.com",
      "Score": "Null",
      "Owner": "Karen Thompson",
      "LeadSource": "Advertisement",
      "LeadCurrency": "CAD 300000",
      "Description": "James Clark saw our ad in a local newspaper and Contacted us for more information.",
      "ScoringProfile": "Profile 6",
      "Company": "QRS Enterprises",
      "NoOfEmployees": "40",
    "AnnualRevenue": "CAD 500000",
    "CompanyDUNSNumber": "61234",
    "Industry": "Financial",
    "AlternateEmail1": "jclark@qrsenterprises.com",
    "AlternateEmail2": "jamesc123@yahoo.com",
    "EmailOtpOut": "False",
    "BusinessPhone": "9876543210",
    "MobilePhone": "8765432109",
    "HomePhone": "7654321098",
    "DoNotCall": "False",
    "Street": "456 Pine St",
    "City": "Houston",
    "State": "Texas",
    "Zip": "77001",
    "Country": "USA",
    "Preferred": "Bulk Email",
    "BulkEmail": "Not allowed",
    "Phone": "9876543210",
    "Whatsapp": "Unavailable",
    "label": "hot",
    "Id": "6",
    "Status": "Contacted"
  },
  {
    "LeadType": "International",
    "Number": "LEA0001515",
    "FirstName": "Sophia",
    "LastName": "Lewis",
    "Gender": "F",
    "Email": "sophialewis@gmail.com",
    "Score": "Null",
    "Owner": "Steven Johnson",
    "LeadSource": "Web",
    "LeadCurrency": "EUR 400000",
    "Description": "Sophia Lewis found our website through an online search and expressed interest in our services.",
    "ScoringProfile": "Profile 7",
    "Company": "STU Solutions",
    "NoOfEmployees": "50",
    "AnnualRevenue": "EUR 900000",
    "CompanyDUNSNumber": "95213",
    "Industry": "Financial",
    "AlternateEmail1": "sophia.l@stusolutions.com",
    "AlternateEmail2": "slewis456@yahoo.com",
    "EmailOtpOut": "False",
    "BusinessPhone": "2345678901",
    "MobilePhone": "8765432109",
    "HomePhone": "7654321098",
    "DoNotCall": "False",
    "Street": "456 Elm St",
    "City": "Los Angeles",
    "State": "California",
    "Zip": "90001",
    "Country": "USA",
    "Preferred": "Phone",
    "BulkEmail": "Not allowed",
    "Phone": "8765432109",
    "Whatsapp": "Unavailable",
    "label": "hot",
    "Id": "7",
    "Status": "Closed"
},
  ]

export const meetingItemsData = {
  elements: [
    {
      id: '1',
      title: 'Meeting 1',
      Description: 'New lead with potential customers.',
      status: 'Confirmed',
      Date:"2024-03-14",
      organizer: 'Jane Smith',
      location: 'Bangalore',
      timezone: 'UTC-5',
      from: 'all day',
      to: 'all day',
      all_day: 'yes',
    },
    {
      id: '2',
      title: 'Meeting 2',
      Description: 'High demand lead looking for property at headquarters.',
      status: 'Confirmed',
      Date:"2024-12-04",
      organizer: 'John Steve',
      location: 'Chennai',
      timezone: 'UTC+0',
      from: '2024-03-20T09:00:00',
      to: '2024-03-20T17:00:00',
      all_day: 'no',
    },
  ],
};

 export const taskData = [
  {
    id: '1',
    taskType: "Meeting",
    state: 'follow-up',
    taskName: 'Carla Demo Lead',
    ownerName: 'John Doe',
    dueDate: "2024-03-01",
    dueTime: "10:00 AM",
    description: "Discuss project details with the client",
    leadName:"John Smith",
    dueState: 'Today',
    assignedToMe: 'Carla',
    assignedByMe: 'Sofia',
  },
  {
    id: '2',
    taskType: "Assignment",
    state: 'in-progress',
    taskName: 'Another Task',
    ownerName: 'Jane Smith',
    dueDate: "2024-03-05",
    dueTime: "2:30 PM",
    description: "Implement new features",
    leadName:"Jane Johnson",
    dueState: 'Upcoming',
    assignedToMe: 'Carla',
    assignedByMe: 'Sara',
  },
  {
    id: '3',
    taskType: "Review",
    state: 'completed',
    taskName: 'Final Task',
    ownerName: 'Bob Johnson',
    dueDate: "2024-03-10",
   dueTime: "3:45 PM",
    description: "Review project progress and plan for next steps",
    leadName:"Michael Brown",
    dueState: 'Today',
    assignedToMe: 'Patty',
    assignedByMe: 'Bhumika',
  },
  {
    id: '4',
    taskType: "Task",
    state: 'in-progress',
    taskName: 'Another Task',
    ownerName: 'Jane Smith',
    dueDate: "2024-03-15",
    dueTime: "9:00 AM",
    description: "Start working on the new project",
    leadName:"Emily Jones",
    dueState: 'Upcoming',
    assignedToMe: 'Capy',
    assignedByMe: 'Nikita',
  },
  {
    id: '5',
    taskType: "Event",
    state: 'completed',
    taskName: 'Final Task',
    ownerName: 'Bob Johnson',
    dueDate: "2024-03-20",
    dueTime: "6:00 PM",
    description: "Team-building activities and dinner",
    leadName:"William Garcia",
    dueState: 'Overdue',
    assignedToMe: 'Arpita',
    assignedByMe: 'Sahil',
  },
  {
    id: '6',
    taskType: "Meeting",
    state: 'pending',
    taskName: 'New Project',
    ownerName: 'Alice Williams',
    dueDate: "2024-03-25",
    dueTime: "11:30 AM",
    description: "Discuss project updates and challenges",
    leadName:"Olivia Miller",
    dueState: 'Overdue',
    assignedToMe: 'Carla',
    assignedByMe: 'Sofia',
  },
  {
    id: '7',
    taskType: "Assignment",
    state: 'follow-up',
    taskName: 'Client Meeting',
    ownerName: 'Chris Davis',
    dueDate: "2024-03-20",
    dueTime: "11:35 AM",
    description: "Prepare project documentation",
    leadName:"James Davis",
    dueState: 'Upcoming',
    assignedToMe: 'Ruby',
    assignedByMe: 'Roxy',
  },
  {
    id: '8',
    taskType: "Meeting",
    state: 'in-progress',
    taskName: 'Coding Task',
    ownerName: 'Eva Brown',
    dueDate: "2024-03-30",
    dueTime: "4:15 PM",
    description: "Discuss project updates",
    leadName:"Benjamin Martinez ",
    dueState: 'Overdue',
    assignedToMe: 'Dhanush',
    assignedByMe: 'Yashas',
  },
];



export const leadNoteData = {
  "elements": [
    {
      "name": "first_name",
      "type": "TextInput",
      "title": "Lead Name",
      "inputType": "text",
      "placeholder": "Name",
     
    },
    // {
    //   "name": "lead",
    //   "type": "dropdown",
    //   "title": "Lead",
    //   "inputType": "text",
    //   "placeholder": "Select",
    //   "dropdownData": leadData
    // },
    {
      "name": "note_title",
      "type": "multiLineText",
      "title": "Note title",
      "inputType": "text",
      "placeholder": "Note title"
    },

 
    {
      "name": "notes",
      "type": "multiLineText",
      "title": "Lead Notes",
      "inputType": "text",
      "placeholder": "Write a note"
    }
  ]
};

export const meetingData = {
  "elements": [
    // {
    //   "name": "lead",
    //   "type": "leadDropdown",
    //   "title": "Lead",
    //   "inputType": "text",
    //   "placeholder": "Select",
    //   "dropdownData": leadData
    // },
    {
      "name": "Title",
      "type": "TextInput",
      "title": "Title",
      "inputType": "text",
      "placeholder": "Title"
    },
    {
      "name": "location",
      "type": "TextInput",
      "title": "Location",
      "inputType": "text",
      "placeholder": "Location"
    },
    {
      "name": "Description",
      "type": "TextInput",
      "title": "Description",
      "inputType": "text",
      "placeholder": "Description"
    },

    // {
    //   "name": "attendees",
    //   "type": "MultipleSelect",
    //   "title": "Attendees",
    //   "inputType": "text",
    //   "placeholder":'Select',
    //   "dropdownData": [
    //     { "value": 1, "label": "John Doe" },
    //     { "value": 2, "label": "Jane Smith" },
    //     { "value": 3, "label": "Alice Mark" },
    //     { "value": 4, "label": "Kate Winslet" },
    //     { "value": 5, "label": "William Henry" },
    //     { "value": 6, "label": "Jane Peter" },
    //     { "value": 7, "label": "Carley Wilson" },
      
        
    //   ]
    // },
    {
      "name": "timeZone",
      "type": "dropdown",
      "title": "Time Zone",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "Coordinated Universal Time (UTC)" },
        { "value": 2, "label": "Eastern Standard Time (EST)" },
        { "value": 3, "label": "Central European Time (CET)" },
        { "value": 4, "label": "Pacific Standard Time (PST)" },
        { "value": 5, "label": "India Standard Time (IST)" },
        { "value": 6, "label": "China Standard Time (CST)" },
        
      ]
    },
    {
      "name": "fromDate",
      "type": "Date",
      "title": "From Date",
      "placeholder": "From Date"
    },
    {
      "name": "toDate",
      "type": "Date",
      "title": "To Date",
      "placeholder": "To Date"
    },
    {
      "name": "fromTime",
      "type": "timeInputFrom",
      "title": "From time",
      "placeholder": "Select Time"
    },
    {
      "name": "toTime",
      "type": "timeInputTo",
      "title": "To time",
      "placeholder": "Select Time"
    },
    {
      "name": "allDay",
      "type": "switch",
      "title": "Time Spans",
     
    },
  ]
};


export const requirementFormData={
  "elements":[  
  {
    "name": "lead",
    "type": "TextInput",
    "title": "Lead",
    "inputType": "text",
    "value":"John Smith",
    "dropdownData": leadData,
    "readOnly":true,
    
  },
  {
    "name": "requirement",
    "type": "multiLineText",
    "title": "Requirement",
    "inputType": "text",
    "placeholder": "Notes",
    
  },


  {
    "name": "product",
    "type": "Ldropdown",
    "title": "Product",
    "inputType": "text",
    "placeholder": "Select product",
    "dropdownData":productData
  },
  {
    "name": "expectedDate",
    "type": "dropdown",
    "title": "Expected Date",
    "inputType": "text",
    "placeholder": "Select",
     "dropdownData": [
      { "value": 1, "label": "1 Week" },
      { "value": 2, "label": "15 Days" },
      { "value": 3, "label": "1 Month" },
      { "value": 4, "label": "6 Months" },
    ]
  },
  {
    "name": "value",
    "type": "TextInput",
    "title": "Value ($)",
    "inputType": "number",
    "placeholder": "Value",
    
  },

]

}


export const productData=
[
 
  {
 
    "id":"1",
    "productName":"Topez",
    "productCategory":"topez",
    "categoryCode":"Travel",
    "productDescription":"Topez offers travel insurance, providing coverage for unforeseen events during domestic or international travel.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"INR 500000",
   
 
 
  },
  {
    "id": "2",
    "productName": "Ruby",
    "productCategory": "topez",
    "categoryCode":"Medical",
    "productDescription": "Ruby provides medical insurance coverage for expenses incurred due to illness or injury.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"INR 400000",
   
   
  },
  {
    "id": "3",
    "productName": "Sapphire",
    "productCategory": "sapphire",
    "categoryCode":"Travel",
    "productDescription": "Sapphire offers auto insurance, providing financial protection against physical damage and bodily injury resulting from traffic collisions.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"USD 600000",
 
  },
  {
    "id": "4",
    "productName": "Emerald",
    "productCategory": "emerald",
    "categoryCode":"Home",
    "productDescription": "Emerald provides home insurance coverage for a private residence and its contents.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"USD 700000",
  },
  {
    "id": "5",
    "productName": "Diamond",
    "productCategory": "diamond",
    "categoryCode":"Pet",
    "productDescription": "Diamond offers pet insurance, providing coverage for veterinary expenses and other costs associated with caring for pets. ",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"INR 700000",
  },
  {
    "id": "6",
    "productName": "Pearl",
    "productCategory": "pearl",
    "categoryCode":"Life",
    "productDescription": "Pearl offers life insurance, providing financial protection to the policyholder's beneficiaries in the event of the insured individual's death.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"INR 300000",
  },
]

export const productFormData= {
  "elements": [
    {
      "name": "type",
      "type": "RadioButton",
      "title": "Type",
      "rdata": [
        { "value": 1, "label": "Product" },
        { "value": 2, "label": "Service" }
      ]
    },
 
    {
      "name": "category",
      "type": "dropdown",
      "title": "Category",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "Travel" },
        { "value": 2, "label": "Medical" },
        { "value": 3, "label": "Home" },
        { "value": 4, "label": "Pet" },
        { "value": 5, "label": "Life" }
      ]
    },
    {
      "name": "name",
      "type": "TextInput",
      "title": "Name",
      "inputType": "text",
      "placeholder":"Enter the name"
    },
    {
      "name": "description",
      "type": "TextInput",
      "title": "Description",
      "inputType": "text",
      "placeholder":"Enter the description"
    },
    {
      "name": "currency",
      "type": "dropdown",
      "title": "Currency",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "INR" },
        { "value": 2, "label": "USD" }
      ]
    },
    {
      "name": "price",
      "type": "TextInput",
      "title": "Price",
      "placeholder":"enter value",
     
    },
 
    {
      "name": "code",
      "type": "TextInput",
      "title": "SAC Code",
      "inputType": "text",
      "placeholder":"Enter value"
    },
    {
      "name": "active",
      "type": "switch",
      "title": "active",
     
    },
    {
      "name": "images",
      "type": "imageUpload",
      "title": "Product Images",
      "placeholder":"upload picture images"
    },
 
  ]
}

export const changeStatusFormData = {
  "elements":[
    {
        
    }
  ]
}

export const callLogFormData= {
  "elements": [
    // {
    //   "name": "category",
    //   "type": "dropdown",
    //   "title": "Select Entry",
    //   "inputType": "text",
    //   "placeholder":'Select',
    //   "dropdownData": [
    //     { "value": 1, "label": "Contact" },
    //     { "value": 2, "label": "Lead" },
       
    //   ]
    // },
    {
      "name": "associatedLeads",
      "type": "leadDropdown",
      "title": "Associated Lead",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData": leadData
    },


    {
      "name": "phone",
      "type": "TextInputNumber",
      "title": "Phone Number",
      "inputType": 'number',
      "placeholder":"Enter the number",
      "keyboardType":"numeric"
    },
    {
      "name": "type",
      "type": "dropdown",
      "title": "Type",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "OutGoing" },
        { "value": 2, "label": "Incoming" }
      ]
    },
    {
      "name": "outcome",
      "type": "dropdown",
      "title": "Outcome",
      "placeholder":"enter value",
      "dropdownData": [
        { "value": 1, "label": "Missed Call" },
        { "value": 2, "label": "No Answer" },
        { "value": 3, "label": "Busy" },
        { "value": 3, "label": "Rejected" },
        { "value": 4, "label": "Connected" }
      ]
     
    },
 
    {
      "name": "time",
      "type": "timeInput",
      "title": "Start Time",
      "placeholder": "Enter the time"
    },
    {
      "name": "date",
      "type": "Date",
      "title": "Date",
      "placeholder": "Date"
    },
    {
      "name": "recoring",
      "type": "document",
      "title": "Recording File",
      "placeholder":"Upload Recording"
    },
 
  ]
}
export const leadScoreFormData={
  "elements":[
    {
    "questionId":"1",
    "questionlabel":"Age",
    "name":"age",
    "questionType":"dropdown",
    "questionDescription":"age of the lead",
    "placeholder": "Select",
                "dropdownData": [
                    { "value": 1, "label": "20-30 years" },
                    { "value": 2, "label": "30-40 years" },
                    { "value": 3, "label": "40-50 years" },
                    { "value": 4, "label": "50-60 years" },
                    { "value": 5, "label": "60-70 years" }
                ],
                'isRequired': true,
    
    },
    {
      "questionId":"2",
      "questionlabel":"Family Income",
      "name":"familyIncome",
      "questionType":"dropdown",
      "questionDescription":"income of the whole family",
      "placeholder": "Select",
                  "dropdownData": [
                      { "value": 1, "label": "4 - 6 Lakhs" },
                      { "value": 2, "label": "6 - 10 Lakhs" },
                      { "value": 3, "label": "10 - 15 Lakhs" },
                      { "value": 4, "label": "15+ Lakhs" },
                     
                  ],
                  'isRequired': true,
      
      },
      {
        "questionId":"3",
        "questionlabel":"Occupation",
        "name":"occupation",
        "questionType":"dropdown",
        "questionDescription":"occupation of the lead",
        "placeholder": "Select",
                    "dropdownData": [
                        { "value": 1, "label": "Self-Employed" },
                        { "value": 2, "label": "Business" },
                        { "value": 4, "label": "Employee" },
                    ],
                    'isRequired': true,
        },
        {
          "questionId":"4",
          "questionlabel":"Gender",
          "type":"RadioButton",
          "questionDescription":"gender of the lead",
          "rdata" : [
            { label: "Male", id: 'male' },
            { label: "Female", id: 'female' },
            { label: "Other", id: 'other' },
          ],
          'isRequired': true,
          },
          
          {
            "questionId":"4",
            "questionlabel":"Education Qualification",
            "name":"qualification",
            "questionType":"dropdown",
            "questionDescription":"qualification of the lead",
            "placeholder": "Select",
                        "dropdownData": [
                            { "value": 1, "label": "Graduate/Postgraduate/MBA/CA" },
                            { "value": 2, "label": "Undergraduate/Diploma/12th" },
                           
                        ],
                        'isRequired': true,
            },
            {
              "questionId":"5",
              "questionlabel":"Lead Category",
              "name":"leadCategory",
              "questionType":"dropdown",
              "questionDescription":"Category of the lead",
              "placeholder": "Select",
              "dropdownData" :[
                    { value: 'new', label: 'New' },
                    { value: 'Contacted', label: 'Contacted' },
                    { value: 'qualified', label: 'Qualified' },
                    { value: 'converted', label: 'Converted' },
                    { value: 'closed-not_converted', label: 'Closed-Not Converted' },
                   ],
                          'isRequired': true,
              },
            {
              "questionId":"6",
              "questionlabel":"Expected FYWP",
              "name":"fywp",
              "questionType":"dropdown",
              "questionDescription":"fywp of the lead",
              "placeholder": "Select",
                          "dropdownData": [
                              { "value": 1, "label": "<50K" },
                              { "value": 2, "label": ">50K" },
                             
                          ],
                          'isRequired': true,
              },

  ]
}



export const statusFormData = {
  "elements": [
    {
      "name": "reason",
      "type": "multiLineText",
      "title": "Reason",
      "inputType": "text",
      "placeholder":'Enter the reason', 
    },
    {
      "name": "remarks",
      "type": "multiLineText",
      "title": "Remarks",
      "inputType": "text",
      "placeholder":"Enter the Remarks"
    },
   ]
}


export const activityFormData = [
  {
    activityId: '1', 
    activityType: 'task', 
    Data: {
        "elements": [
          {
            "name": "associated_lead",
            "type":"TextInputLead",
            "title": "Associated Lead",
            "inputType": "text",
            
            
          },
           
            {
                "name": "due_date",
                "type": "Date",
                "title": "Due Date",
                "inputType": "text",
                "placeholder": "Select",
                "isRequired":true
               
            },
            {
                "name": "title",
                "type": "TextInput",
                "title": "Title",
                "inputType": "text",
                "placeholder": "Enter the title",
                "isRequired":true
            },
            {
                "name": "description",
                "type": "TextInput",
                "title": "Description",
                "inputType": "text",
                "placeholder": "Enter the description"
            },
            {
                "name": "status",
                "type": "dropdown",
                "title": "Status",
                "placeholder": "Select",
                "dropdownData": [
                    { "value": "1", "label": "In-progress" },
                    { "value": "2", "label": "Completed" },
                    { "value": "3", "label": "Not Started" }
                ]
            },
            {
                "name": "time",
                "type": "timeInput",
                "title": "Time",
                "placeholder": "",
                "isRequired":true
            },
            {
                "name": "repeat",
                "type": "dropdown",
                "title": "Repeat",
                "inputType": "text",
                "placeholder": "Select",
                "dropdownData": [
                    { "value": "daily", "label": "Daily" },
                    { "value": "weekly", "label": "Weekly" },
                    { "value": "monthly", "label": "Monthly" },
                    { "value": "yearly", "label": "Yearly" },
                    { "value": "dont_repeat", "label": "Don't Repeat" }
                ]
            },
            // {
            //     "name": "owner",
            //     "type": "dropdown",
            //     "title": "Owner",
            //     "inputType": "text",
            //     "placeholder": "Select",
               
            // }
        ]
    }
  },
  {
    activityId: '2', 
    activityType: 'meeting', 
    Data: {
        "elements": [
          {
            "name": "associated_lead",
            "type":"TextInputLead",
            "title": "Associated Lead",
            "inputType": "text",
            
            
          },
            {
                "name": "title",
                "type": "TextInput",
                "title": "Title",
                "inputType": "text",
                "placeholder": "Title",
                "isRequired":true

            },
            {
              "name": "meeting_link",
              "type": "TextInput",
              "title": "Meeting Link",
              "inputType": "text",
              "placeholder": "Link"
          },
            {
                "name": "location",
                "type": "TextInput",
                "title": "Location",
                "inputType": "text",
                "placeholder": "Location"
            },
            {
                "name": "description",
                "type": "TextInput",
                "title": "Description",
                "inputType": "text",
                "placeholder": "Description"
            },
        
            // {
            //     "name": "attendees",
            //     "type": "MultipleSelect",
            //     "title": "Attendees",
            //     "inputType": "text",
            //     "placeholder": "Select",
            //     "dropdownData": [
            //         { "value": 1, "label": "John Doe" },
            //         { "value": 2, "label": "Jane Smith" },
            //         { "value": 3, "label": "Alice Mark" },
            //         { "value": 4, "label": "Kate Winslet" },
            //         { "value": 5, "label": "William Henry" },
            //         { "value": 6, "label": "Jane Peter" },
            //         { "value": 7, "label": "Carley Wilson" }
            //     ]
            // },
            {
                "name": "time_zone",
                "type": "dropdown",
                "title": "Time Zone",
                "inputType": "text",
                "placeholder": "Select",
                "dropdownData": [
                    { "value": "utc", "label": "Coordinated Universal Time (UTC)" },
                    { "value": "est", "label": "Eastern Standard Time (EST)" },
                    { "value": "cet", "label": "Central European Time (CET)" },
                    { "value": "pst", "label": "Pacific Standard Time (PST)" },
                    { "value": "ist", "label": "India Standard Time (IST)" },
                    { "value": "cst", "label": "China Standard Time (CST)" }
                ]
            },
            {
                "name": "from_date",
                "type": "Date",
                "title": "From Date",
                "placeholder": "From Date"
            },
            {
                "name": "to_date",
                "type": "Date",
                "title": "To Date",
                "placeholder": "To Date"
            },
           
        
            {
                "name": "all_day",
                "type": "Switch",
                "title": "All Day"
            },
            {
              "name": "remainder_required",
              "type": "Switch",
              "title": "Remainder Required"
          },
          {
            "name": "remainder_before",
            "type": "timeInput",
            "title": "Remainder Before",
            "placeholder": "Remainder before"
        },
        ]
    }
  },
  {
    activityId: '3', 
    activityType: 'call', 
    Data: {
      "elements": [
        {
          "name": "associated_lead",
          "type":"TextInputLead",
          "title": "Associated Lead",
          "inputType": "text",
          
          
        },
       
     
     
        {
          "name": "number",
          "type": "TextInput",
          "title": "Phone Number",
          "inputType": 'numeric',
          "placeholder":"Enter the number",
          "keyboardType":"numeric",
          "isRequired":true
        },
        {
          "name": "description",
          "type": "TextInput",
          "title": "Description ",
          "inputType": "text",
          "placeholder": "Enter description",
          "isRequired":true
        },

        {
          "name": "start_time",
          "type": "timeInput",
          "title": "Start Time",
          "placeholder": "Enter the time"
        },
        {
          "name": "date",
          "type": "Date",
          "title": "Date",
          "placeholder": "Date",
          "isRequired":true
        },
     
     
      ]
  }

  },
  {
    activityId: '4', 
    activityType: 'follow_up', 
    Data: {
      "elements": [
       
        {
          "name": "associated_lead",
          "type":"TextInputLead",
          "title": "Associated Lead",
          "inputType": "text",
          
          
        },
     
        {
          "name": "start_time",
          "type": "timeInput",
          "title": "Start Time",
          "placeholder": "Enter the time"
        },
        {
          "name": "date",
          "type": "Date",
          "title": "Date",
          "placeholder": "Date"
        },
        {
          "name": "follow_up_notes",
          "type": "TextInput",
          "title": "Follow up notes",
          "placeholder": "Notes",
          "isRequired":true
        },
       

      ]
  }

  },
  {
    activityId: '5', 
    activityType: 'appointment', 
    Data: {
      "elements": [
        {
          "name": "associated_lead",
          "type":"TextInputLead",
          "title": "Associated Lead",
          "inputType": "text",
          
          
        },
     
     
        {
          "name": "start_time",
          "type": "timeInput",
          "title": "Start Time",
          "placeholder": "Enter the time"
        },
        {
          "name": "date",
          "type": "Date",
          "title": "Date",
          "placeholder": "Date"
        },
        {
          "name": "appointment_notes",
          "type": "TextInput",
          "title": "Appointment notes",
          "placeholder": "Notes"
        },
        {
          "name": "location",
          "type": "TextInput",
          "title": "Appointment location",
          "placeholder": "location"
        },

       

      ]
  }

  },

  {
    activityId: '6', 
    activityType: 'email', 
    Data: {
      "elements": [
        {
          "name": "associated_lead",
          "type":"TextInputLead",
          "title": "Associated Lead",
          "inputType": "text",
         
          
        },
     
        {
          "name": "start_time",
          "type": "timeInput",
          "title": "Start Time",
          "placeholder": "Enter the time"
        },
        {
          "name": "date",
          "type": "Date",
          "title": "Date",
          "placeholder": "Date"
        },
        {
          "name": "description",
          "type": "TextInput",
          "title": "Email description",
          "placeholder": "description"
        },
        {
          "name": "subject",
          "type": "TextInput",
          "title": "Subject",
          "placeholder": "subject"
        },
        {
          "name": "email",
          "type": "TextInput",
          "title": "email id",
          "placeholder": "email",  
          "isRequired":true
        },

       

      ]
  }

  }

  
];


export const callLogData=
[
 
  {
    "PhoneNumber":"9903746532",
    "Type":"Incoming",
    "Outcome":"Missed Call",
    "Time":"9:00 AM",
    "Date":"29-03-2024"
  },
 
  {
    "PhoneNumber": "9334567890",
    "Type": "Incoming",
    "Outcome": "Missed Call",
    "Time": "10:15 AM",
    "Date": "2024-03-30"
  },
  {
    "PhoneNumber": "9876543210",
    "Type": "Outgoing",
    "Outcome": "No Answer",
    "Time": "2:30 PM",
    "Date": "2024-03-30"
  },
  {
    "PhoneNumber": "8088222333",
    "Type": "Incoming",
    "Outcome": "Connected",
    "Time": "5:45 PM",
    "Date": "2024-03-3"
  },
  {
    "PhoneNumber": "8045556666",
    "Type": "Outgoing",
    "Outcome": "Busy",
    "Time": "11:00 AM",
    "Date": "2024-03-31"
  },
  {
    "PhoneNumber": "9078889999",
    "Type": "Incoming",
    "Outcome": "Rejected",
    "Time": "3:20 PM",
    "Date": "2024-03-31"
  }
];
