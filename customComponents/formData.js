export const formData = {
  
    "elements": [
      {
        "name": "name",
        "type": "TextInput",
        "title": "Name",
        "placeholder":"Name",
        "maxLength": 25,
        'isRequired': true
      },
      {
        "name": "u_first_name",
        "type": "TextInput",
        "title": "First Name",
        "placeholder":"First Name",
        "maxLength": 25,
        'isRequired': true
      },
      {
        "name": "u_last_name",
        "type": "TextInput",
        "title": "Last Name",
        "inputType": "text",
        "placeholder": "Last Name",
        "isRequired": true,
        "autocomplete": "lastname"
      },
      {
        "name": "u_gender_identity",
        "type":"RadioButton",
        "title": "Gender",
        "rdata" : [
          { label: "Male", id: 'male' },
          { label: "Female", id: 'female' },
          { label: "Other", id: 'other' },
        ],
        'isRequired': true
      }, {
        "name": "email",
        "type": "TextInput",
        "title": "Email",
        "description": "Enter a valid email",
        "inputType": "email",
        "placeholder":"Email",
        "isRequired": true,
        "autocomplete": "email",
       
      }, {
        "name": "u_title",
        "type": "TextInput",
        "title": "Job Title",
        "inputType": "text",
        "placeholder": "Job Title",
       
      }, 
      {
        "name": "u_description",
        "type": "TextInput",
        "title": "Description",
        "inputType": "text",
        "placeholder": "Description",
       
      }, 
      {
        "name":"street",
        "type": "TextInput",
        "title": "Street",
        "inputType": "text",
        "placeholder": "Street",
       
      }, 
      {
        "name":"city",
        "type": "TextInput",
        "title": "City",
        "inputType": "text",
        "placeholder": "City",
       
      }, 
      {
        "name":"state",
        "type": "TextInput",
        "title": "State",
        "inputType": "text",
        "placeholder": "State",
       
      }, 
      {
        "name":"zip",
        "type": "TextInput",
        "title": "Zip",
        "inputType": "text",
        "placeholder": "Zip",
       
      }, 
      {
        "name":"country",
        "type": "TextInput",
        "title": "Country",
        "inputType": "text",
        "placeholder": "Country",
       
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
        
         ]
        
       
      },
      {
        "name": "u_rating",
        "type": "dropdown",
        "title": "Rating",
        "inputType": "text",
        "placeholder":"Rating",
         "dropdownData" :[
          { value: 'hot', label: 'Hot' },
          { value: 'cold', label: 'Cold' },
          { value: 'warm', label: 'Warm' },
        
        
         ]
      },
      {
        "name": "u_company",
        "type": "TextInput",
        "title": "Company Name",
        "description": "Enter company name",
        "inputType": "text",
        "placeholder":"Company Name",
        "isRequired": true,
      },
      {
        "name":"website",
        "type": "TextInput",
        "title": "Website",
        "description": "Enter a valid website",
        "inputType": "text",
        "placeholder":"Website",
        "isRequired": true,
       
      },
      {
        "name": "u_salutation",
        "type": "dropdown",
        "title": "Salutation",
        "inputType": "text",
        "placeholder":"Salutation",
         "dropdownData" :[
          { value: 'Mr.', label: 'Mr.' },
          { value: 'Ms.', label: 'Ms.' },
          { value: 'Dr.', label: 'Dr.' },
          { value: 'prof', label: 'Prof' },
         ]
      },
     
  
      {
        "name":"u_annual_revenue",
        "type": "TextInput",
        "title": "Annual Revenue",
        "description": "Enter annual revenue",
        "inputType": "number",
        "placeholder":"Annual Revenue",
        "isRequired": true,
       
      },
  
      
      {
        "name": "phone",
        "type": "PhoneNumber",
        "title": "Phone",
        "inputType": "phone",
        "placeholder":"Phone",
        "isRequired": true,
       
      },
  
      {
        "name": "fax",
        "type": "TextInput",
        "title": "Fax",
        "inputType": "text",
        "placeholder":"FAX",
        "isRequired": true,
       
      },
      {
        "name": "company_duns_number",
        "type": "TextInput",
        "title": "Company DUNS Number",
        "inputType": "text",
        "placeholder":"Number",
        "isRequired": true,
      },
      {
        "name": "u_lead_source",
        "type": "dropdown",
        "title": "Lead Source",
        "inputType": "text",
        "placeholder":"Lead Source",
         "dropdownData" :[
          { value: 'advertisement', label: 'Advertisement' },
          { value: 'partner', label: 'Partner' },
          { value: 'web', label: 'Web' },
         ]
      },
      {
        "name": "u_lead_status",
        "type": "dropdown",
        "title": "Lead Status",
        "inputType": "text",
        "placeholder":"Lead Status",
         "dropdownData" :[
          { value: 'open', label: 'Open' },
          { value: 'contacted', label: 'Contacted' },
          { value: 'qualified', label: 'Qualified' },
         ]
      },
      {
        "name": "u_owner_type",
        "type": "dropdown",
        "title": "Owner Type",
        "inputType": "text",
        "placeholder":"Owner Type",
         "dropdownData" :[
          { value: 'team', label: 'Team' },
          { value: 'user', label: 'User' },
       
         ]
      },
      {
        "name": "u_owner",
        "type": "TextInput",
        "title": "Owner",
        "inputType": "text",
        "placeholder":"Owner",
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
          { "value": 5, "label": "Video Meeting" },
          { "value": 6, "label": "Meeting" }
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
      {
        "name": "leads",
        "type": "leadDropdown",
        "title": "Leads",
        "inputType": "text",
        
         
        
      }
    ]
  }
  
  export const leadData =
[
 
  {
 
    "firstname": "John",
 
    "lastname": "Smith",
 
    "email": "johnsmith1@gmail.com",
 
    "jobTitle": "Engineer",
 
    "phone": "8884763231",
    "status":"open",
    "temperature":"hot",
    "id":"1",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Jane",
 
    "lastname": "Johnson",
 
    "email": "janejohnson2@yahoo.com",
 
    "jobTitle": "Designer",
 
    "phone": "8891234567",
    "status":"contacted",
    "temperature":"cold",
    "id":"2",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Michael",
 
    "lastname": "Brown",
 
    "email": "michaelbrown3@hotmail.com",
 
    "jobTitle": "Manager",
 
    "phone": "8902345678",
    "status":"qualified",
    "temperature":"warm",
    "id":"3",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Emily",
 
    "lastname": "Jones",
 
    "email": "emilyjones4@outlook.com",
 
    "jobTitle": "Developer",
 
    "phone": "8913456789",
    "status":"accepted",
    "temperature":"cold",
    "id":"4",
    "gender":'F',
 
  },
 
  {
 
    "firstname": "William",
 
    "lastname": "Garcia",
 
    "email": "williamgarcia5@gmail.com",
 
    "jobTitle": "Analyst",
 
    "phone": "8924567890",  
    "status":"accepted",
    "temperature":"hot",
    "id":"5",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Olivia",
 
    "lastname": "Miller",
 
    "email": "oliviamiller6@yahoo.com",
 
    "jobTitle": "Consultant",
 
    "phone": "8935678901",
    "status":"qualified",
    "temperature":"hot",
    "id":"6",
    "gender":'F',
 
  },
 
  {
 
    "firstname": "James",
 
    "lastname": "Davis",
 
    "email": "jamesdavis7@hotmail.com",
 
    "jobTitle": "Coordinator",
 
    "phone": "8946789012",
    "status":"qualified",
    "temperature":"cold",
    "id":"7",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Sophia",
 
    "lastname": "Rodriguez",
 
    "email": "sophiarodriguez8@outlook.com",
 
    "jobTitle": "Administrator",
 
    "phone": "8957890123",
    "status":"qualified",
    "temperature":"warm",
    "id":"8",
    "gender":'F',
 
  },
 
  {
 
    "firstname": "Benjamin",
 
    "lastname": "Martinez",
 
    "email": "benjaminmartinez9@gmail.com",
 
    "jobTitle": "Engineer",
 
    "phone": "8968901234",
    "status":"qualified",
    "temperature":"warm",
    "id":"9",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Emma",
 
    "lastname": "Hernandez",
 
    "email": "emmahernandez10@yahoo.com",
 
    "jobTitle": "Designer",
 
    "phone": "8979012345",
    "status":"qualified",
    "temperature":"cold",
    "id":"10",
    "gender":'F',
 
  }
]

export const meetingItemsData = {
  elements: [
    {
      id: '1',
      title: 'Lead Meeting',
      organizer: 'Jane Smith',
      status: 'Confirmed',
      description: 'New lead with potential customers.',
      location: 'Bangalore',
      timezone: 'UTC-5',
      from: 'all day',
      to: 'all day',
      all_day: 'yes',
    },
    {
      id: '2',
      title: 'Lead follow-up',
      organizer: 'John Steve',
      status: 'Confirmed',
      description: 'High demand lead looking for property at headquarters.',
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
      "name": "account",
      "type": "dropdown",
      "title": "Account",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData":[
        { "value": "lead", "label": "Lead" },
        { "value": "task", "label": "Task" },
        { "value": "meeting", "label": "Meeting" },
      
        
      ]
    },
    {
      "name": "lead",
      "type": "dropdown",
      "title": "Lead",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData": leadData
    },
    {
      "name": "task",
      "type": "dropdown",
      "title": "Task",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData": taskData
    },
    {
      "name": "meeting",
      "type": "dropdown",
      "title": "Meeting",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData": meetingItemsData
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
    {
      "name": "lead",
      "type": "leadDropdown",
      "title": "Lead",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData": leadData
    },
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

    {
      "name": "attendees",
      "type": "MultipleSelect",
      "title": "Attendees",
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
      
        
      ]
    },
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




