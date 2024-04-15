export const opportunityFormData = {
  "elements": [
   {
      "name": "opportunity_name",
      "type":"TextInput",
      "title": "Oppurtunity Name",
      "placeholder": "Enter Opportunity name",
      "sectionName":"General",
       "isRequired":true
    },
 
    {
      "name": "account_name",
      "type": "Adropdown",
      "title": " Account Name",
      "placeholder": "Enter account name",
      "sectionName":"General"
    },
 
 
   {
      "name": "primary_contact",
      "type": "Pdropdown",
      "title": "Primary Contact",
      "placeholder": "",
      "sectionName":"General"
    },
 
   
 
    // {
    //   "name": "status",
    //   "sectionName":"General",
    //   "type": "dropdown",
    //   "title": "Status",
    //   "inputType": "text",
    //   "placeholder":'Select',
    //   "dropdownData": [
    //     { "value": 1, "label": "Open" },
    //     { "value": 2, "label": "Won" },
    //     { "value": 3, "label": "Lost" },
    //     { "value": 4, "label": "Suspended" },
    //     { "value": 5, "label": "Abandoned" },
    //   ]
    // },
 
 
    {
      "name": "category",
      "sectionName":"General",
      "type": "dropdown",
      "title": "Category",
      
      "placeholder":'Select',
      "dropdownData": [
        { key: "new", value: "New" },
        { key: "up_sell", value: "Up-sell" },
        { key: "cross_sell", value: "Cross-sell" },
        { key: "existing", value: "Existing" },
        { key: "renewal", value: "Renewal" },
      ],
       "isRequired":true
    },
 
    {
      "name": "owner",
      "type": "TextInputR",
      "title": "Owner",
      "placeholder": "",
      "sectionName":"General",
    },
   
    {
      "name": "description",
      "type": "TextInputMultiLine",
      "title": "Description",
  
      "placeholder": "Description",
      "sectionName":"General",
    },
    {
      "name": "next_step",
      "type": "TextInput",
      "title": "Next Step",
      "placeholder": "Next Step",
      "sectionName":"General",
    },
 
    {
      "name": "sales_pipeline",
      "sectionName":"General",
      "type": "dropdown",
      "title": "Pipeline",
      "placeholder": "",
      "dropdownData": [
        { key: "default_pipeline", value: "Default Pipeline" },
        { key: "sales_pipeline1", value: "Sales Pipeline 1" },
        { key: "sales_pipeline2", value: "Sales Pipeline 2" },
      ]
     
    },
 
    {
      "name": "sales_stage",
      "sectionName":"General",
      "type": "dropdown",
      "title": "Sales Stage",
   
      "placeholder":'Select',
      "dropdownData": [
        { key: "new", value: "New" },
        { key: "qualification", value: "Qualification" },
        { key: "needs_analysis", value: "Needs Analysis" },
        { key: "proposal", value: "Proposal" },
        { key: "negotiation", value: "Negotiation" },
        { key: "closed", value: "Closed" },
      ]
    },
 
    {
      "name": "forecast_close_date",
      "type": "Date",
      "title": "Forecast Close Date",
      "placeholder": "Select",
      "sectionName":"Forecast",
       "isRequired":true
     
  },
 
//   {
//     "name": "actual_close_date",
//     "type": "Date",
//     "title": "Actual Close Date",
//     "inputType": "text",
//     "placeholder": "Select",
//     "sectionName":"Forecast",
//      "isRequired":true
   
// },
 
    // {
    //   "name": "created_on",
    //   "type":"TextInput",
    //   "title": "Created On",
    //   "inputType": "text",
    //   "sectionName":"Forecast",
    // },
 
 
   
 
 
   
    {
      "name": "probability_of_winning",
      "type": "TextInputP",
      "title": "Probability Of Winning",
      "placeholder": "Probability Of Winning",
      "sectionName":"Forecast",
      "validation": {
        "regex":  /^100$|^\d{0,2}(\.\d{1,2})?%?$/,
        "message": "Please enter percentage"
      },
    },
 
    {
      "name": "opportunity_value",
      "type": "Currency",
      "title": "Opportunity Value",
      "inputType":"numeric",
      "placeholder": "Opportunity Value",
      "sectionName":"Forecast",
      "isRequired":true
    },
 
   
 
    // {
    //   "name": "assigned-to",
    //   "type": "TextInputR",
    //   "title": "Assigned To",
    //   "placeholder": "",
    //   "sectionName":"Forecast",
    // },
]
}
 



export const formData = {
  
    "elements": [
      {
        "name": "lead_type",
        "type": "dropdown",
        "title": "Lead Type",
        "inputType": "text",
        "placeholder": "Lead Type",
        "dropdownData": [
            { "key": 'person', "label": 'Person' },
            { "key": 'company', "label": 'Company' }
        ],
        "sectionName": "General",
        "isRequired": true
    },
    
  
      {
        "name": "salutation",
        "type": "dropdown",
        "title": "Salutation",
        "inputType": "text",
        "placeholder":"Salutation",
         "dropdownData" :[
          { key: 'Mr.', value: 'Mr.' },
          { key: 'Ms.', value: 'Ms.' },
          { key: 'Dr.', value: 'Dr.' },
          { key: 'prof', value: 'Prof' },
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
      //     { key: 'hot', value: 'Hot' },
      //     { key: 'cold', value: 'Cold' },
      //     { key: 'warm', value: 'Warm' },
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
        "title": "Postal Code",
        "inputType": "text",
        "placeholder": "Postal Code",
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
          { key: 'accounting', value: 'Accounting' },
          { key: 'brokers', value: 'Brokers' },
          { key: 'consulting', value: 'Consulting' },
          { key: 'customer_services', value: 'Customer Services'},
          { key: 'financial', value: 'Financial' },
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
          { key: 'inr', value: 'INR' },
          { key: 'usd', value: 'USD' },
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
        "inputType": "numeric",
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
        "title": "Alternate Phone",
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
          { key: 'any', value: 'Any' },
          { key: 'email', value: 'Email' },
          { key: 'bulk_email', value: 'Web' },
          { key: 'phone', value: 'Phone' },
          { key: 'whatsapp', value: 'Whatsapp' },
          
         ],
         "sectionName":"ContactMethod"
      },

      {
        "name": "u_email",
        "type": "dropdown",
        "title": "Email subscription",
        "placeholder":"Email subscription",
        "dropdownData" :[
          { key: 'allow', value: 'Allow' },
          { key: 'do_not_allow', value: 'Do not allow' },
         ],
         "sectionName":"ContactMethod"

      },
      {
        "name": "phone",
        "type": "dropdown",
        "title": "Phone subscription",
        "placeholder":"Phone subscription",
        "dropdownData" :[
          { key: 'allow', value: 'Allow' },
          { key: 'do_not_allow', value: 'Do not allow' },
         ],
         "sectionName":"ContactMethod"
      },
      {
        "name": "whatsapp",
        "type": "dropdown",
        "title": "Whatsapp subscription",
        "placeholder":"whatsapp subscription",
        "dropdownData" :[
          { key: 'allow', value: 'Allow' },
          { key: 'do_not_allow', value: 'Do not allow' },
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
        "inputType": "numeric",
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
          { key: 'inr', value: 'INR' },
          { key: 'usd', value: 'USD' },
          
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
          { key: 'advertisement', value: 'Advertisement' },
          { key: 'partner', value: 'Partner' },
          { key: 'web', value: 'Web' },
          { key: 'campaign', value: 'Campaign' },
          { key: 'self_sourced', value: 'Self Sourced' },
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
      //     { key: 'new', value: 'New' },
      //     { key: 'Contacted', value: 'Contacted' },
      //     { key: 'qualified', value: 'Qualified' },
      //     { key: 'converted', value: 'Converted' },
      //     { key: 'closed-not_converted', value: 'Closed-Not Converted' },
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
          { key: 'team', value: 'Team' },
          { key: 'user', value: 'User' },
         ],
         "sectionName":"Additional"
      },
      {
        "name": "new_owner",
        "type": "TextInputO",
        "title": "Owner",
        "inputType": "text",
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
      // {
      //   "name": "assigned_to",
      //   "type": "TextInput",
      //   "title": "Assigned To",
      //   "inputType": "text",
      //   "placeholder":"Assigned To",
      //   "readonly":true,
      //   "sectionName":"Additional"
      // },
      // {
      //   "name": "assignment_group",
      //   "type": "dropdown",
      //   "title": "Assignment group",
      //   "inputType": "text",
      //   "placeholder":"Assigned Group",
      //   "dropdownData": [
      //     { "key": 1, "value": "" },

      //   ],
      //   "sectionName":"Additional"
      // },
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
          { "key": 1, "value": "Call" },
          { "key": 2, "value": "Email" },
          { "key": 3, "value": "Message" },
          { "key": 4, "value": "Follow-Up" },
          { "key": 5, "value": "Appointment" },
      
        ]
      },
      {
        "name": "due-date",
        "type": "calenderDropdown",
        "title": "Due Date",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "key": 1, "value": "Today" },
          { "key": 2, "value": "Tomorrow" },
          { "key": 3, "value": "3 Days From Now" },
          { "key": 4, "value": "One Week From Now" },
          { "key": 5, "value": "1 Month From Now" },
          { "key": 6, "value": "Custom Date" }
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
          { "key": 1, "value": "In-progress" },
          { "key": 2, "value": "Completed" },
          {"key":3, "value":"Not Started"}
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
          { "key": 1, "value": "Daily" },
          { "key": 2, "value": "Weekly" },
          { "key": 3, "value": "Monthly" },
          { "key": 4, "value": "Yearly" },
          { "key": 5, "value": "Don't Repeat" }
        ]
      },
      {
        "name": "owner",
        "type": "dropdown",
        "title": "Owner",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "key": 1, "value": "John Doe" },
          { "key": 2, "value": "Jane Smith" },
          { "key": 3, "value": "Alice Mark" },
          { "key": 4, "value": "Kate Winslet" },
          { "key": 5, "value": "William Henry" },
          { "key": 6, "value": "Jane Peter" },
          { "key": 7, "value": "Carley Wilson" },
          { "key": 8, "value": "William Henry" }
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
    //     { "key": 1, "value": "John Doe" },
    //     { "key": 2, "value": "Jane Smith" },
    //     { "key": 3, "value": "Alice Mark" },
    //     { "key": 4, "value": "Kate Winslet" },
    //     { "key": 5, "value": "William Henry" },
    //     { "key": 6, "value": "Jane Peter" },
    //     { "key": 7, "value": "Carley Wilson" },
      
        
    //   ]
    // },
    {
      "name": "timeZone",
      "type": "dropdown",
      "title": "Time Zone",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "key": 1, "value": "Coordinated Universal Time (UTC)" },
        { "key": 2, "value": "Eastern Standard Time (EST)" },
        { "key": 3, "value": "Central European Time (CET)" },
        { "key": 4, "value": "Pacific Standard Time (PST)" },
        { "key": 5, "value": "India Standard Time (IST)" },
        { "key": 6, "value": "China Standard Time (CST)" },
        
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
      { "key": 1, "value": "1 Week" },
      { "key": 2, "value": "15 Days" },
      { "key": 3, "value": "1 Month" },
      { "key": 4, "value": "6 Months" },
    ]
  },
  {
    "name": "key",
    "type": "TextInput",
    "title": "key ($)",
    "inputType": "numeric",
    "placeholder": "key",
    
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
      "name": "associated_lead",
      "type":"TextInputLead",
      "title": "Associated Lead",
      "inputType": "text",
   
      
      
    },
    
    {
      "name": "categories",
      "type": "dropdown",
      "title": "Categories",
      "dropdownData": [
        { "key": "health", "value": "Health" },
      ] ,
      "isRequired":true    
    },
 
    {
      "name": "sub_categories",
      "type": "dropdown",
      "title": "Sub Category",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "key": "personal_accident", "value": "Personal Accident",  },
        { "key": "critical_illness", "value": "Critical Illness" },
        // { "key": "fire_insurance", "value": "Fire Insurance" },
        // { "key": "marine", "value": "Marine" },
        { "key": "maternity_insurance", "value": "Maternity Insurance"}
      ],
      "isRequired":true
    },
    {
      "name": "products",
      "type": "dropdown",
      "title": "Products",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "key": "health_first_plan", "value": "Health First Plan",  },
        { "key": "pearl", "value": "Pearl" },
        // { "key": "fire_insurance", "value": "Fire Insurance" },
        // { "key": "marine", "value": "Marine" },
        { "key": "ruby", "value": "Ruby"},
        { "key": "saffire", "value": "Saffire"}
      ],
      "isRequired":true
    },
    {
      "name": "description",
      "type": "TextInput",
      "title": "Description",
      "inputType": "text",
      "placeholder":"Enter the description",
      "isRequired":true 
    },
    // {
    //   "name": "currency",
    //   "type": "TextInput",
    //   "title": "Currency",
    //   "inputType": "text",
    //   "placeholder":'INR',
    //   "key":"INR",
    //   "readonly":true

    // },
    {
      "name": "price",
      "type": "TextInput",
      "title": "Price/key",
      "placeholder":"Enter key in INR",
      "inputType":"numeric",
      "isRequired":true
    },
 
    {
      "name": "quantity",
      "type": "TextInput",
      "title": "Quantity",
      "inputType":"numeric",
      "placeholder":"Enter Quantity",
     
    },
    {
      "name": "expected_purchase_date",
      "type": "date",
      "title": "Expected Purchase Date",
      "placeholder":"Expected Purchase",
     
    },

 
    // {
    //   "name": "images",
    //   "type": "imageUpload",
    //   "title": "Product Images",
    //   "placeholder":"upload picture images"
    // },
 
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
    //     { "key": 1, "value": "Contact" },
    //     { "key": 2, "value": "Lead" },
       
    //   ]
    // },
    {
      "name": "associated_lead",
      "type":"TextInputLead",
      "title": "Associated Lead",
      "inputType": "text",
      
    },


    {
      "name": "phone",
      "type": "TextInputNumber",
      "title": "Phone Number",
      "inputType": 'numeric',
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
        { "key": 1, "value": "OutGoing" },
        { "key": 2, "value": "Incoming" }
      ]
    },
    {
      "name": "outcome",
      "type": "dropdown",
      "title": "Outcome",
      "placeholder":"enter key",
      "dropdownData": [
        { "key": 1, "value": "Missed Call" },
        { "key": 2, "value": "No Answer" },
        { "key": 3, "value": "Busy" },
        { "key": 3, "value": "Rejected" },
        { "key": 4, "value": "Connected" }
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
      "questionName": "associated_lead",
      "questionType":"TextInputLead",
      "questionvalue": "Associated Lead",
      "inputType": "text",
      
      
    },
    
    {
    "questionId":"1",
    "questionvalue":"Age",
    "name":"age",
    "questionType":"dropdown",
    "questionDescription":"age of the lead",
    "placeholder": "Select",
                "dropdownData": [
                    { key: 1, value: "20-30 years" },
                    { key: 2, value: "30-40 years" },
                    { key: 3, value: "40-50 years" },
                    { key: 4, value: "50-60 years" },
                    { key: 5, value: "60-70 years" }
                ],
                'isRequired': true,
    
    },
    {
      "questionId":"2",
      "questionvalue":"Family Income",
      "name":"familyIncome",
      "questionType":"dropdown",
      "questionDescription":"income of the whole family",
      "placeholder": "Select",
                  "dropdownData": [
                      { key: 1, value: "4 - 6 Lakhs" },
                      { key: 2, value: "6 - 10 Lakhs" },
                      { key: 3, value: "10 - 15 Lakhs" },
                      { key: 4, value: "15+ Lakhs" },
                     
                  ],
                  'isRequired': true,
      
      },
      {
        "questionId":"3",
        "questionvalue":"Occupation",
        "name":"occupation",
        "questionType":"dropdown",
        "questionDescription":"occupation of the lead",
        "placeholder": "Select",
                    "dropdownData": [
                        { "key": 1, "value": "Self-Employed" },
                        { "key": 2, "value": "Business" },
                        { "key": 4, "value": "Employee" },
                    ],
                    'isRequired': true,
        },
        {
          "questionId":"4",
          "questionvalue":"Gender",
          "type":"RadioButton",
          "questionDescription":"gender of the lead",
          "rdata" : [
            { value: "Male", id: 'male' },
            { value: "Female", id: 'female' },
            { value: "Other", id: 'other' },
          ],
          'isRequired': true,
          },
          
          {
            "questionId":"4",
            "questionvalue":"Education Qualification",
            "name":"qualification",
            "questionType":"dropdown",
            "questionDescription":"qualification of the lead",
            "placeholder": "Select",
                        "dropdownData": [
                            { "key": 1, "value": "Graduate/Postgraduate/MBA/CA" },
                            { "key": 2, "value": "Undergraduate/Diploma/12th" },
                           
                        ],
                        'isRequired': true,
            },
            {
              "questionId":"5",
              "questionvalue":"Lead Category",
              "name":"leadCategory",
              "questionType":"dropdown",
              "questionDescription":"Category of the lead",
              "placeholder": "Select",
              "dropdownData" :[
                    { key: 'new', value: 'New' },
                    { key: 'Contacted', value: 'Contacted' },
                    { key: 'qualified', value: 'Qualified' },
                    { key: 'converted', value: 'Converted' },
                    { key: 'closed-not_converted', value: 'Closed-Not Converted' },
                   ],
                          'isRequired': true,
              },
            // {
            //   "questionId":"6",
            //   "questionvalue":"Expected FYWP",
            //   "name":"fywp",
            //   "questionType":"dropdown",
            //   "questionDescription":"fywp of the lead",
            //   "placeholder": "Select",
            //               "dropdownData": [
            //                   { "key": 1, "value": "<50K" },
            //                   { "key": 2, "value": ">50K" },
                             
            //               ],
            //               'isRequired': true,
            //   },

  ]
}






export const activityForm=[
  {
    "name": "subject",
    "type":"TextInput",
    "title": "Subject",
    "inputType": "text",
    
  },
  {
    "name": "description",
    "type":"TextInput",
    "title": "Description",
    "inputType": "text",
  },
  {
    "name": "due_date",
    "type":"TextInput",
    "title": "Due Date",
    "inputType": "text",
    
  },
  {
    "name": "priority",
    "type":"TextInput",
    "title": "Priority",
    "inputType": "text",
    
  },
  {
    "name": "created_on",
    "type":"date",
    "title": "Created On",
    "inputType": "text",
    
  },
  {
    "name": "status",
    "type": "dropdown",
    "title": "Status",
    "placeholder": "Select",
    "dropdownData": [
        { "key": "pending", "key": "Pending" },
        { "key": "completed", "key": "Completed" },
       
    ],
    "isRequired":true
},


 
   
]


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
              "name": "subject",
              "type":"TextInput",
              "title": "Subject",
              "inputType": "text",
              "placeholder":"Enter the subject",

              
            },
            {
                "name": "description",
                "type": "TextInput",
                "title": "Description",
                "inputType": "text",
                "placeholder": "Enter the description",
                "isRequired":true
            },
            {
              "name": "status",
              "type": "dropdown",
              "title": "Status",
              "placeholder": "Select",
              "dropdownData": [
                  { "key": "pending", "value": "Pending" },
                  { "key": "completed", "value": "Completed" },
                 
              ],
              "isRequired":true
          },
            {
                "name": "start_time",
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
                    { "key": "daily", "value": "Daily" },
                    { "key": "weekly", "value": "Weekly" },
                    { "key": "monthly", "value": "Monthly" },
                    { "key": "yearly", "value": "Yearly" },
                    { "key": "dont_repeat", "value": "Don't Repeat" }
                ],
              
            },
            {
              "name": "priority",
              "type":"dropdown",
              "title": "Priority",
              "dropdownData": [
                { "key": "high", "value": "High" },
                { "key": "medium", "value": "Medium" },
                { "key": "low", "value": "Low" },
            ],
        
              
              
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
            "name": "due_date",
            "type": "Date",
            "title": "Due Date",
            "inputType": "text",
            "placeholder": "Select",
            "isRequired":true
           
        },
        {
          "name": "start_time",
          "type": "timeInput",
          "title": "Time",
          "inputType": "text",
          "placeholder": "Select",
         
         
      },
        {
          "name": "subject",
          "type":"TextInput",
          "title": "Subject",
          "inputType": "text",
          "placeholder":"Enter the subject",
          "isRequired":true
          
        },
        {
            "name": "description",
            "type": "TextInput",
            "title": "Description",
            "inputType": "text",
            "placeholder": "Enter the description",
            "isRequired":true
        },
        {
          "name": "priority",
          "type":"dropdown",
          "title": "Priority",
          "dropdownData": [
            { "key": "high", "value": "High" },
            { "key": "medium", "value": "Medium" },
            { "key": "low", "value": "Low" }
        ],
    
          
          
        },
        {
          "name": "status",
          "type": "dropdown",
          "title": "Status",
          "placeholder": "Select",
          "dropdownData": [
              { "key": "pending", "value": "Pending" },
              { "key": "completed", "value": "Completed" },
             
          ],
          "isRequired":true
      },
        {
          "name": "attendees",
          "type": "multipleSelect",
          "title": "Attendees",
          "placeholder": "Select",
          "dropdownData": [
              { "key": "lead.bhavani", "value": "lead.bhavani" },
              { "key": "lead.kruthika", "value": "lead.kruthika" },
              
          ],
      },
            {
              "name": "meeting_link",
              "type": "TextInput",
              "title": "Meeting Link",
              "inputType": "text",
              "placeholder": "Link"
          },
       
       
        
            // {
            //     "name": "attendees",
            //     "type": "MultipleSelect",
            //     "title": "Attendees",
            //     "inputType": "text",
            //     "placeholder": "Select",
            //     "dropdownData": [
            //         { "key": 1, "value": "John Doe" },
            //         { "key": 2, "value": "Jane Smith" },
            //         { "key": 3, "value": "Alice Mark" },
            //         { "key": 4, "value": "Kate Winslet" },
            //         { "key": 5, "value": "William Henry" },
            //         { "key": 6, "value": "Jane Peter" },
            //         { "key": 7, "value": "Carley Wilson" }
            //     ]
            // },
            {
                "name": "time_zone",
                "type": "dropdown",
                "title": "Time Zone",
                "inputType": "text",
                "placeholder": "Select",
                "dropdownData": [
                    { "key": "utc", "value": "Coordinated Universal Time (UTC)" },
                    { "key": "est", "value": "Eastern Standard Time (EST)" },
                    { "key": "cet", "value": "Central European Time (CET)" },
                    { "key": "pst", "value": "Pacific Standard Time (PST)" },
                    { "key": "ist", "value": "India Standard Time (IST)" },
                    { "key": "cst", "value": "China Standard Time (CST)" }
                ]
            },
            // {
            //     "name": "from_date",
            //     "type": "Date",
            //     "title": "From Date",
            //     "placeholder": "From Date",
            //     "isRequired":true
            // },
     
        
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
          "name": "subject",
          "type":"TextInput",
          "title": "Subject",
          "inputType": "text",
          "placeholder":"Enter the subject",
          "isRequired":true

          
        },
        {
          "name": "status",
          "type": "dropdown",
          "title": "Status",
          "placeholder": "Select",
          "dropdownData": [
            { "key": "pending", "value": "Pending" },
            { "key": "completed", "value": "Completed" },
          ],
          "isRequired":true
      },
       
     
     
        {
          "name": "number",
          "type": "TextInput",
          "title": "Phone Number",
          "inputType": 'numeric',
          "placeholder":"Enter the number",
          "keyboardType":"numeric",
          "isRequired":true,
          "validation": {
            "regex": /^\d{10}$/,
            "message": "Please enter a valid 10-digit phone number."
          },
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
          "placeholder": "Enter the time",
          "isRequired":true
        },
        {
          "name": "due_date",
          "type": "Date",
          "title": "Date",
          "placeholder": "Date",
          "isRequired":true
        },
        {
          "name": "priority",
          "type":"dropdown",
          "title": "Priority",
          "dropdownData": [
            { "key": "high", "value": "High" },
            { "key": "medium", "value": "Medium" },
            { "key": "low", "value": "Low" }
        ],
     
          
          
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
          "placeholder": "Enter the time",
          "isRequired":true
        },
        {
          "name": "due_date",
          "type": "Date",
          "title": "Date",
          "placeholder": "Date",
          "isRequired":true
        },
        {
          "name": "follow_up_notes",
          "type": "TextInput",
          "title": "Follow up notes",
          "placeholder": "Notes",
          "isRequired":true
          
        },
  
        {
          "name": "subject",
          "type":"TextInput",
          "title": "Subject",
          "isRequired":true,
          
          "placeholder":"Enter the subject"
          
        },
        {
            "name": "description",
            "type": "TextInput",
            "title": "Description",
            "inputType": "text",
            "isRequired":true,
            "placeholder": "Enter the description"
        },
        {
            "name": "status",
            "type": "dropdown",
            "title": "Status",
            "placeholder": "Select",
            "dropdownData": [
              { "key": "pending", "value": "Pending" },
              { "key": "completed", "value": "Completed" },
            ],
            "isRequired":true
        },
        {
          "name": "priority",
          "type":"dropdown",
          "title": "Priority",
          "dropdownData": [
            { "key": "high", "value": "High" },
            { "key": "medium", "value": "Medium" },
            { "key": "low", "value": "Low" }
        ],
        
          
          
        },
       

      ]
  }

  },
  // {
  //   activityId: '5', 
  //   activityType: 'appointment', 
  //   Data: {
  //     "elements": [
  //       {
  //         "name": "associated_lead",
  //         "type":"TextInputLead",
  //         "title": "Associated Lead",
  //         "inputType": "text",
          
          
  //       },
     
     
  //       {
  //         "name": "start_time",
  //         "type": "timeInput",
  //         "title": "Start Time",
  //         "placeholder": "Enter the time"
  //       },
  //       {
  //         "name": "date",
  //         "type": "Date",
  //         "title": "Date",
  //         "placeholder": "Date"
  //       },
  //       {
  //         "name": "appointment_notes",
  //         "type": "TextInput",
  //         "title": "Appointment notes",
  //         "placeholder": "Notes"
  //       },
  //       {
  //         "name": "location",
  //         "type": "TextInput",
  //         "title": "Appointment location",
  //         "placeholder": "location"
  //       },

       

  //     ]
  // }

  // },

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
          "placeholder": "Enter the time",
          "isRequired":true
        },
        {
          "name": "due_date",
          "type": "Date",
          "title": "Date",
          "placeholder": "Date",
          "isRequired":true
        },
        {
          "name": "description",
          "type": "TextInput",
          "title": "Email description",
          "placeholder": "description",
          "isRequired":true,
        },
        {
          "name": "subject",
          "type": "TextInput",
          "title": "Subject",
          "placeholder": "subject",
          "isRequired":true,
        },
        {
          "name": "email",
          "type": "TextInput",
          "title": "email id",
          "placeholder": "email",  
          "isRequired":true,
          "validation": {
            "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "message": "Please enter a valid email address."
          },
        },
       
        {
            "name": "status",
            "type": "dropdown",
            "title": "Status",
            "placeholder": "Select",
            "dropdownData": [
                { "key": "pending", "value": "Pending" },
                { "key": "completed", "value": "Completed" },
                
            ]
        },
        {
          "name": "priority",
          "type":"dropdown",
          "title": "Priority",
          "dropdownData": [
            { "key": "high", "value": "High" },
            { "key": "medium", "value": "Medium" },
            { "key": "low", "value": "Low" }
        ]
          
          
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

export const statusFormData = {
  "elements": [
    {
      "name": "reason",
      "type": "dropdown",
      "title": "Reason",
      "placeholder":'Enter the reason',
      "dropdownData":[
        { "key":1, "value":"Not Reachable"},
        { "key":2, "value":"Ringing"},
        { "key":3, "value":"Wrong Number"},
        {"key":4, "value":"Busy"},
        {"key":5, "value":"Appointment fixed"},
      ]
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

export const markAsCompletedFormData={
  "elements": [
    {
      "name": "Lead_Id",
      "type":"TextInputLead",
      "title": "Lead Id",
      "inputType": "text",  
    },
    {
      "name": "Task_Id",
      "type":"TextInputLeadA",
      "title": "Task Id",
      "inputType": "text",  
    },
    {
      "name": "notes",
      "type": "multiLineText",
      "title": "Completion Notes",
      "inputType": "text",
      "placeholder": "Write a note",
    }
 
  ]
}

export const contactFormData={
  "elements": [

  
    {
      "name": "account_name",
      "type":"dropdownAccounts",
      "title": "Accounts",
      "inputType": "text", 
      "sectionName":"General" 
    },
    {
      "name": "alternate_email1",
      "type": "TextInput",
      "title": "Alternate Email 1",
      "inputType": "text",
      "placeholder": "Enter Email",
      // "validation": {
      //   "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      //   "message": "Please enter a valid email address."
      // },
      "sectionName":"Contact"
    },
    {
      "name": "alternate_email2",
      "type": "TextInput",
      "title": "Alternate Email 2",
      "inputType": "text",
      "placeholder": "Enter Email",
      // "validation": {
      //   "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      //   "message": "Please enter a valid email address."
      // },
      "sectionName":"Contact"
    },
    {
      "name": "alternate_phone1",
      "type": "TextInput",
      "title": "Alternate Phone 1",
      "inputType": "numeric",
      "placeholder": "Enter Phone Number",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
      "sectionName":"Contact"
    },
    {
      "name": "alternate_phone2",
      "type": "TextInput",
      "title": "Alternate Phone 2",
      "inputType": "numeric",
      "placeholder": "Enter Phone Number",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
      "sectionName":"Contact"
    },
    {
      "name": "assistant",
      "type": "TextInput",
      "title": "Assistant",
      "inputType": "text",
      "placeholder": "Enter Assistant name",
      "sectionName":"Personal"
      
    },
    {
      "name": "assistant_phone",
      "type": "TextInput",
      "title": "Assistant Phone",
      "inputType": "numeric",
      "placeholder": "Enter Assistant Phone",
      "sectionName":"Contact"
      
    },
    {
      "name": "birthdate",
      "type": "Date",
      "title": "Birthdate",
      "placeholder": "Enter birth date",
      
      "sectionName":"General"
      
    },
    {
      "name": "category",
      "type": "dropdown",
      "title": "Category",
      "placeholder": "Enter Category",
      "dropdownData": [
        { key: 'general', value: 'General' },
        { key: 'obc',value: 'OBC' },
        { key: 'sc', value: 'SC' },
        { key: 'st', value: 'ST' },
        { key: 'others', value: 'Others' },
    ],
    "sectionName":"General"
      
    },
    {
      "name": "ckyc_number",
      "type": "TextInput",
      "title": "CKYC Number",
      "placeholder": "Enter CKYC number",
      "inputType": "text",
      "sectionName":"General"
    },
    {
      "name": "contact_verfied",
      "type": "Switch",
      "title": "Contact Verified",
      "sectionName":"Contact"
    },
    {
      "name": "department",
      "type": "dropdown",
      "title": "Department",
      "placeholder": "Select Department",
      "dropdownData": [
        { key: 'person', value: 'Person' },
        { key: 'company',value: 'Company' }
    ],
    "sectionName":"General"
    },
    {
      "name": "description",
      "type": "MultilineText",
      "title": "Description",
      "placeholder": "Enter Description",
      "inputType": "text",
      "sectionName":"General"
    },
    {
      "name": "do_not_call",
      "type": "Switch",
      "title": "Do not call",
      "sectionName":"Contact"
    },
    {
      "name": "ebc_eligibility_date",
      "type": "Date",
      "title": "EBC Eligibility date",
      "sectionName":"General"
    },
    {
      "name": "email",
      "type": "TextInput",
      "title": "Email",
      "placeholder": "Enter Email",
      "validation": {
        "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "message": "Please enter a valid email address.",
        
      },
      "sectionName":"Contact"

    },
    {
      "name": "email_opt_out",
      "type": "Switch",
      "title": "Email Opt Out",
      "sectionName":"Contact"
    },
    {
      "name": "father_first_name",
      "type": "TextInput",
      "title": "Father First Name",
      "placeholder": "Enter First Name",
      "sectionName":"Personal"
    },
    {
      "name": "father_last_name",
      "type": "TextInput",
      "title": "Father Last Name",
      "placeholder": "Enter Last Name",
      "sectionName":"Personal"
    },
    {
      "name": "father_middle_name",
      "type": "TextInput",
      "title": "Father Middle Name",
      "placeholder": "Enter Middle Name",
      "sectionName":"Personal"
    },
    {
      "name": "fax",
      "type": "TextInput",
      "title": "Fax",
      "placeholder": "Enter Fax",
      "sectionName":"Contact"
    },
    {
      "name": "fax_opt_out",
      "type": "Switch",
      "title": "Fax Opt Out", 
      "sectionName":"Contact"
    },
    {
      "name": "first_name",
      "type": "TextInput",
      "title": "First Name",
      "placeholder": "First Name",
      "sectionName":"General"
    },
    {
      "name": "funding_value_base_loan",
      "type": "TextInput",
      "inputType":"numeric",
      "title": "Funding Value Base Loan",
      "placeholder":"Funding Value Base Loan",
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
    {
      "name": "home_phone",
      "type": "TextInput",
      "inputType":"numeric",
      "title": "Enter Home Phone",
      "placeholder": "Enter Home Phone",
      "sectionName":"Contact"
    },
    {
      "name": "last_name",
      "type": "TextInput",
      "inputType":"text",
      "title": "Enter Last Name",
      "placeholder": "Enter Last Name",
      "sectionName":"General"
    },
    {
      "name": "middle_name",
      "type": "TextInput",
      "inputType":"text",
      "title": "Enter Middle Name",
      "placeholder": "Enter Middle Name",
      "sectionName":"General"
    },
    {
      "name": "mailing_address",
      "type": "TextInput",
      "inputType":"text",
      "title": "Enter Mailing Address",
      "placeholder": "Enter Mailing Address",
      "sectionName":"Address"
    },
    {
      "name": "marital_status",
      "type":"dropdown",
      "title": "Marital Status",
      "dropdownData": [
        { key: 'single', value: 'Single' },
        { key: 'married', value: 'Married' }
    ],
      'isRequired': true,
      "sectionName":"Personal"
    }, 
    {
      "name": "minority_community",
      "type":"Switch",
      "title": "Minority Community",
      "sectionName":"Personal"
    }, 
    {
      "name": "mobile",
      "type":"TextInput",
      "title": "Mobile",
      'isRequired': true,
      "sectionName":"Contact",
      "inputType":"numeric",
      "placeholder":"Enter mobile number"
    }, 
    {
      "name": "mother_first_name",
      "type":"TextInput",
      "title": "Mother First Name",
      "sectionName":"Personal",
      "placeholder":"Mother's First Name"
    },
    {
      "name": "mother_last_name",
      "type":"TextInput",
      "title": "Mother Last Name",
      "sectionName":"Personal",
      "placeholder":"Mother's Last Name"
    },  
    {
      "name": "mother_middle_name",
      "type":"TextInput",
      "title": "Mother Middle Name",
      "sectionName":"Personal",
      "placeholder":"Mother's Middle Name"
    },  
    {
      "name": "name",
      "type":"TextInput",
      "title": "Name",
      "sectionName":"General",
      "placeholder":"Enter name"
    }, 
    {
      "name": "other_address",
      "type":"TextInput",
      "title": "Other Address",
      "sectionName":"Address",
      "placeholder":"Enter other address"
    },
    {
      "name": "other_phone",
      "type":"TextInput",
      "title": "Other Phone",
      "sectionName":"Contact",
      "inputType":"numeric",
      "placeholder":"Enter other phone"
    },
    {
      "name": "owner",
      "type":"TextInputO",
      "title": "Owner",
      "sectionName":"General",
      
    },
    {
      "name": "religion",
      "type":"dropdown",
      "title": "Religion",
      "dropdownData": [
        { key: 'hinduism', value: 'Hinduism' },
        { key: 'christianity', value: 'Christianity' },
        { key: 'sikhism', value: 'Sikhism' },
        {key: 'jainism', value: 'Jainism' },
        {key: 'islam', value: 'Islam' },


    ],
    "sectionName":"Personal",
    },
    {
      "name": "salutation",
      "type": "dropdown",
      "title": "Salutation",
      "inputType": "text",
      "placeholder":"Salutation",
       "dropdownData" :[
        { key: 'mr.', value: 'Mr.' },
        { key: 'ms.', value: 'Ms.' },
        { key: 'dr.', value: 'Dr.' },
        { key: 'prof.', value: 'Prof' },
       ],
       "sectionName":"General"
    },
    {
      "name": "spouse_first_name",
      "type":"TextInput",
      "title": "Spouse First Name",
      "sectionName":"Personal",
      "placeholder":"Spouse First Name"
      
    },
    {
      "name": "spouse_last_name",
      "type":"TextInput",
      "title": "Spouse Last Name",
      "sectionName":"Personal",
      "placeholder":"Spouse Last Name"
      
    },
    {
      "name": "spouse_middle_name",
      "type":"TextInput",
      "title": "Spouse Middle Name",
      "sectionName":"Personal", 
      "placeholder":"Spouse Middle Name"
    },
    {
      "name": "title",
      "type":"TextInput",
      "title": "Title",
      "sectionName":"General", 
      "placeholder":"Enter Title"
    },
    {
      "name": "last_stay_in_touch_req_date",
      "type":"Date",
      "title": "Last stay in touch ",
      "sectionName":"General", 
    },
    {
      "name": "last_stay_in_touch_save_date",
      "type":"Date",
      "title": "Last stay in touch save",
      "sectionName":"General", 
    },
    {
      "name": "do_not_call",
      "type": "Switch",
      "title": "Do Not Call",
      "sectionName":"Contact"
    },

    {
      "name": "preffered_method",
      "type": "dropdown",
      "title": "Preferred",
      "placeholder":"Preferred",
      "dropdownData" :[
        { key: 'any', value: 'Any' },
        { key: 'email', value: 'Email' },
        { key: 'bulk_email', value: 'Web' },
        { key: 'phone', value: 'Phone' },
        { key: 'whatsapp', value: 'Whatsapp' },
        
       ],
       "sectionName":"Contact"
    },

    {
      "name": "u_email",
      "type": "dropdown",
      "title": "Email subscription",
      "placeholder":"Email subscription",
      "dropdownData" :[
        { key: 'allow', value: 'Allow' },
        { key: 'do_not_allow', value: 'Do not allow' },
       ],
       "sectionName":"Contact"

    },
    {
      "name": "phone",
      "type": "dropdown",
      "title": "Phone subscription",
      "placeholder":"Phone subscription",
      "dropdownData" :[
        { key: 'allow', value: 'Allow' },
        { key: 'do_not_allow', value: 'Do not allow' },
       ],
       "sectionName":"Contact"
    },
    {
      "name": "whatsapp",
      "type": "dropdown",
      "title": "Whatsapp subscription",
      "placeholder":"whatsapp subscription",
      "dropdownData" :[
        { key: 'allow', value: 'Allow' },
        { key: 'do_not_allow', value: 'Do not allow' },
       ],
       "sectionName":"Contact"
    },

    {
      "name": "email_opt_out",
      "type": "Switch",
      "title": "Email Opt Out",
      "sectionName":"Contact"
    },

  ]
}

export const accountFormData = {
  
  "elements": [
    {
      "name":"account_type",
      "type":"dropdown",
      "title":"Account Type",
      "inputType":"text",
      "placeholder":"Lead Type",
      "dropdownData" :[
        { "key": "person", "value": "person" },
        { "key": "corporate", "value": "corporate" }
      ],
      "sectionName":"General",
      "isRequired":true
      
    },
    {
      "name": "account_name",
      "type": "TextInput",
      "title": "Account name",
      "placeholder":"account name",
      "maxLength": 25,
      "inputType": "text",
      'isRequired': true,
      "sectionName":"General"
    },
    {
      "name": "title",
      "type": "TextInput",
      "title": "Title",
      "placeholder":"title",
      "maxLength": 25,
      "inputType": "text",
      // 'isRequired': true,
      "sectionName":"General"
    },

    {
      "name": "salutation",
      "type": "dropdown",
      "title": "Salutation",
      "inputType": "text",
      "placeholder":"Salutation",
       "dropdownData" :[
        { key: 'Mr.', value: 'Mr.' },
        { key: 'Ms.', value: 'Ms.' },
        { key: 'Dr.', value: 'Dr.' },
        { key: 'prof', value: 'Prof' },
       ],
       "sectionName":"General"
    },
   
    {
      "name": "first_name",
      "type": "TextInput",
      "title": "First Name",
      "placeholder":"First Name",
      "maxLength": 25,
      "inputType": "text",
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
      "name": "middle_name",
      "type": "TextInput",
      "title": "Middle Name",
      "inputType": "text",
      "placeholder": "Last Name",
      "sectionName":"General"
    },

    {
      "name": "account_number",
      "type": "TextInput",
      "title": "Account number",
      "inputType": "numeric",
      "isRequired": true,
      "placeholder": "account number",
      "sectionName":"General"
    },

    {
      "name": "birth-date",
      "type": "dateInput",
      "title": "Birth date",
      "placeholder": "birth date",
      "sectionName":"General"
    },

    {
      "name": "account_source",
      "type": "dropdown",
      "title": "Account source",
      "inputType": "text",
      "placeholder":"Salutation",
       "dropdownData" :[
        { key: 'advertisement_customer', value: 'Advertisement/Customer' },
        { key: 'adwords_other', value: 'Adwords/Others' },
        { key: 'event_employee', value: 'Event/Employee' },
        { key: 'list_trade', value: 'List/Trade' },
        { key: 'partner_purchased', value: 'Partner/Purchased' },
        { key: 'referral_google', value: 'Referal/Google' },
        { key: 'webinar_website', value: 'Webinar/Website' }
       ],
       "sectionName":"General"
    },
    // {
    //   "name": "account_site",
    //   "type": "TextInput",
    //   "title": "Account site",
    //   "inputType": "text",
    //   "placeholder": "account site",
    //   "sectionName":"General"
    // },
    {
      "name": "website",
      "type": "TextInput",
      "title": "Website",
      "inputType": "text",
      "placeholder": "url",
      "sectionName":"General"
    },
    {
      "name": "account_owner",
      "type": "dropdown",
      "title": "Account owner",
      "inputType": "text",
      "placeholder":"Salutation",
       "dropdownData" :[
        { key: 'Mr.', value: 'Acer Four' },
        { key: 'Ms.', value: 'Acer One' },
        { key: 'Dr.', value: 'Adobe User-A' },
        { key: 'prof', value: 'Adobe User-B' },
        { key: 'prof', value: 'Adam Haro' }
       ],
       "sectionName":"General"
    },
    {
      "name": "description",
      "type": "TextInput",
      "title": "Description",
      "inputType": "text",
      "placeholder": "description",
      "sectionName":"General"
    },
    {
      "name": "parent_account",
      "type": "dropdown",
      "title": "Parent account",
      "inputType": "text",
      "placeholder":"parent account",
       "dropdownData" :[
        { key: 'Mr.', value: 'test-1' },
        { key: 'Mr.', value: 'test-2' },
      
       ],
       "sectionName":"General"
    },
    
    {
      "name":"shipping_address",
      "type": "TextInput",
      "title": "Shipping address",
      "inputType": "text",
      "placeholder": "Street",
      "sectionName":"Address Details"
     
    }, 
    {
      "name":"state_code",
      "type": "TextInput",
      "title": "State Code",
      "inputType": "numeric",
      "placeholder": "City",
      "sectionName":"Address Details",
      // "isRequired":true
     
    }, 
    {
      "name":"other_address",
      "type": "TextInput",
      "title": "Other address",
      "inputType": "text",
      "placeholder": "other address",
      "sectionName":"Address Details"
     
    }, 
    {
      "name":"mailing_address",
      "type": "TextInput",
      "title": "Mailing address",
      "inputType": "text",
      "placeholder": "mailing address",
      "sectionName":"Address Details",
      "isRequired": true,
     
    }, 
    {
      "name":"billing_address",
      "type": "TextInput",
      "title": "Billing address",
      "inputType": "text",
      "placeholder": "billing address",
      "sectionName":"Address Details"
     
    }, 
    {
      "name":"state_province",
      "type": "TextInput",
      "title": "State",   
      "inputType": "text",
      "placeholder": "State",
      "sectionName":"Address",
      "dropdownData" :[
        { key: '', value: '' },
       ],
      "isRequired":true
     
    }, 
    {
      "name":"zip_postalcode",
      "type": "TextInput",
      "title": "Postal Code",
      "inputType": "text",
      "placeholder": "Postal Code",
      "sectionName":"Address"
     
    }, 
    {
      "name":"country",
      "type": "dropdown",
      "title": "Country",
      "inputType": "text",
      "placeholder": "Country",
      "sectionName":"Address",
      "dropdownData" :[
        { key: 'india', value: 'India' },
       ],
      "isRequired":true
     
    }, 
    // {
    //   "name": "industry",
    //   "type": "dropdown",
    //   "title": "Industry",
    //   "inputType": "text",
    //   "placeholder":"Industry",
    //    "dropdownData" :[
    //     { value: 'accounting', label: 'Accounting' },
    //     { value: 'brokers', label: 'Brokers' },
    //     { value: 'consulting', label: 'Consulting' },
    //     { value: 'customer_services', label: 'Customer Services'},
    //     { value: 'financial', label: 'Financial' },
    //    ],
    //    "sectionName":"Other Information"
    // },
    {
      "name": "date_of_inception",
      "type": "dateInput",
      "title": "Date of inception",
      "inputType": "text",
      "placeholder":'date of inception',
      "sectionName":"Other Information"
    },
    {
      "name": "bsr_code",
      "type": "TextInput",
      "title": "BSR code",
      "inputType": "numeric",
      "placeholder":'bsr code',
      "sectionName":"Other Information"
    },
    {
      "name": "stamp_duty",
      "type": "TextInput",
      "title": "Stamp duty",
      "inputType": "numeric",
      "placeholder":'Stamp duty',
      "sectionName":"Other Information"
    },
    {
      "name": "foreign_tin",
      "type": "TextInput",
      "title": "Foreign Tin",
      "inputType": "text",
      "placeholder":'foreign tin',
      "sectionName":"Other Information"
    },
    {
      "name": "tin_issuing_country",
      "type": "TextInput",
      "title": "TIN Issuing country",
      "inputType": "text",
      "placeholder":'tin issuing country',
      "sectionName":"Other Information"
    },
    {
      "name": "country_of_incorporation",
      "type": "TextInput",
      "title": "Country of Incorporation",
      "inputType": "text",
      "placeholder":'country of incorporation',
      "sectionName":"Other Information"
    },
    {
      "name": "country_of_tax_residence",
      "type": "TextInput",
      "title": "Country of tax residence",
      "inputType": "text",
      "placeholder":'country of tax residence',
      "sectionName":"Other Information"
    },
    {
      "name": "lead_currency",
      "type": "dropdown",
      "title": "Currency",
      "inputType": "text",
      "placeholder":"Currency",
       "dropdownData" :[
        { key: 'inr', value: 'INR' },
        { key: 'usd', value: 'USD' },
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
      "inputType": "numeric",
      "placeholder":"Annual Revenue",
      "sectionName":"Company"
    },

    
    // {
    //   "name": "email",
    //    "type":"email",
    //   "title": "Email",
    //   "placeholder":"Email",
    //   // "isRequired": true,
    //   "sectionName":"Contact",
    //   "validation": {
    //     "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //     "message": "Please enter a valid email address."
    //   },
    // },
    {
      "name": "email",
      "type": "TextInput",
      "title": "Email",
      "inputType": "text",
      "placeholder":"email",
      // "isRequired": true,
      "sectionName":"Contact",
    },
    {
      "name": "alternate_email1",
      "type": "TextInput",
      "title": "Alternate Email 1",
      "inputType": "text",
      "placeholder":"email",
      // "isRequired": true,
      "sectionName":"Contact",
     
    },
    {
      "name": "alternate_email2",
      "type": "TextInput",
      "title": "Alternate Email 2",
      "inputType": "text",
      "placeholder":"email",
      // "isRequired": true,
      "sectionName":"Contact",
    },
    {
      "name": "phone",
      "type": "TextInput",
      "title": "Phone",
      "inputType": "numeric",
      "placeholder":"Phone number",
      // "isRequired": true,
      "sectionName":"Contact",
      "validation": {
        "regex": /^\d{10}$/,
        "message": "Please enter a valid 10-digit phone number."
      },
    },
    {
      "name": "mobile",
      "type": "TextInput",
      "title": "Mobile",
      "inputType": "numeric",
      "placeholder":"mobile number",
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
      "title": "Home phone",
      "inputType": "numeric",
      "placeholder":"home number",
      // "isRequired": true,
      "sectionName":"Contact",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
    },
    {
      "name":"assistant",
      "type": "TextInput",
      "title": "Assistant",
      "inputType": "text",
      "placeholder":"assistant",
      "sectionName":"Contact"
    },
    {
      "name": "assistant_phone",
      "type": "TextInput",
      "title": "Assistant phone",
      "inputType": "numeric",
      "placeholder":"Phone number",
      // "isRequired": true,
      "sectionName":"Contact",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
    },

    {
      "name": "do_not_call",
      "type": "checkbox",
      "title": "Do Not Call",
      "sectionName":"Contact"

    },
    {
      "name": "business_phone",
      "type": "TextInput",
      "title": "Business phone",
      "inputType": "numeric",
      "placeholder":"business number",
      // "isRequired": true,
      "sectionName":"Contact",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
    },
    {
      "name": "alternate_phone1",
      "type": "TextInput",
      "title": "Alternate phone 1",
      "inputType": "numeric",
      "placeholder":"alternate phone",
      // "isRequired": true,
      "sectionName":"Contact",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
    },
    {
      "name": "alternate_phone2",
      "type": "TextInput",
      "title": "Alternate phone 2",
      "inputType": "numeric",
      "placeholder":"alternate phone",
      // "isRequired": true,
      "sectionName":"Contact",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
    },
    {
      "name": "email",
      "type": "checkbox",
      "title": "Email opt out",
      "sectionName":"Contact",
      "isRequired": true,

    },
    {
      "name": "ekyc_otp",
      "type": "checkbox",
      "title": "EKYC Otp",
      "sectionName":"Contact"

    },
    {
      "name": "contact_verified",
      "type": "checkbox",
      "title": "Contact Verified",
      "sectionName":"Contact"

    },
    {
      "name": "email_verification_status",
      "type": "dropdown",
      "title": "Email Verification Status",
      "inputType": "text",
      "placeholder":"Industry",
       "dropdownData" :[
        { key: 'Valid', value: 'accounting' },
        { key: 'Invalid', value: 'brokers' },
        { key: 'No response', value: 'consulting' },
        { key: 'Verified', value: 'customer_services' }
       ],
       "sectionName":"Contact"
      
     
    },
    {
      "name": "other_phone",
      "type": "TextInput",
      "title": "Other phone",
      "inputType": "numeric",
      "placeholder":"Phone number",
      // "isRequired": true,
      "sectionName":"Contact",
      // "validation": {
      //   "regex": /^\d{10}$/,
      //   "message": "Please enter a valid 10-digit phone number."
      // },
    },
 
    {
      "name":"suffix",
      "type": "TextInput",
      "title": "Suffix",
      "inputType": "text",
      "placeholder":"suffix",
      "sectionName":"Personal Details"
    },
    {
      "name":"place_of_birth",
      "type": "TextInput",
      "title": "Place of birth",
      "inputType": "text",
      "placeholder":"place of birth",
      "sectionName":"Personal Details"
    },
    {
      "name":"country_of_birth",
      "type": "TextInput",
      "title": "Country of birth",
      "inputType": "text",
      "placeholder":"country of birth",
      "sectionName":"Personal Details"
    },
    {
      "name":"age",
      "type": "TextInput",
      "title": "Age",
      "inputType": "numeric",
      "placeholder":"age",
      "sectionName":"Personal Details"
    },
    {
      "name":"father_first_name",
      "type": "TextInput",
      "title": "Father first name",
      "inputType": "text",
      "placeholder":"father first name",
      "sectionName":"Personal Details"
    },
    {
      "name":"father_middle_name",
      "type": "TextInput",
      "title": "Father middle name",
      "inputType": "text",
      "placeholder":"father middle name",
      "sectionName":"Personal Details"
    },
    {
      "name":"father_last_name",
      "type": "TextInput",
      "title": "Father last name",
      "inputType": "text",
      "placeholder":"father last name",
      "sectionName":"Personal Details"
    },
    {
      "name":"mother_first_name",
      "type": "TextInput",
      "title": "Mother first name",
      "inputType": "text",
      "placeholder":"mother first name",
      "sectionName":"Personal Details"
    },
    {
      "name":"mother_middle_name",
      "type": "TextInput",
      "title": "Mother middle name",
      "inputType": "text",
      "placeholder":"mother middle name",
      "sectionName":"Personal Details"
    },
    {
      "name":"mother_last_name",
      "type": "TextInput",
      "title": "Mother last name",
      "inputType": "text",
      "placeholder":"mother last name",
      "sectionName":"Personal Details"
    },
    {
      "name": "marital_status",
      "type": "dropdown",
      "title": "Marital Status",
      "inputType": "text",
      "placeholder":"Industry",
       "dropdownData" :[
        { key: 'accounting', value: 'married' },
        { key: 'brokers', value: 'single' },
       ],
       "sectionName":"Personal Details"
    },
    {
      "name": "religion",
      "type": "dropdown",
      "title": "Religion",
      "inputType": "text",
      "placeholder":"Industry",
       "dropdownData" :[
        { key: 'Islam', value: 'accounting' },
        { key: 'Buddhism', value: 'brokers' },
         { key: 'Sikhism', value: 'brokers' },
         { key: 'Christianity', value: 'brokers' },
         { key: 'Hinduism', value: 'brokers' }
       ],
       "sectionName":"Personal Details"
    },
    {
      "name":"spouse_first_name",
      "type": "TextInput",
      "title": "Spouse first name",
      "inputType": "text",
      "placeholder":"spouse first name",
      "sectionName":"Personal Details"
    },
    {
      "name":"spouse_middle_name",
      "type": "TextInput",
      "title": "Spouse middle name",
      "inputType": "text",
      "placeholder":"spouse middle name",
      "sectionName":"Personal Details"
    },
    {
      "name":"spouse_last_name",
      "type": "TextInput",
      "title": "Spouse last name",
      "inputType": "text",
      "placeholder":"spouse last name",
      "sectionName":"Personal Details"
    },
    {
      "name": "minority_community",
      "type": "dropdown",
      "title": "Minority Community",
      "inputType": "text",
      "placeholder":"Industry",
       "dropdownData" :[
        { key: 'accounting', value: 'yes' },
        { key: 'brokers', value: 'no' },
       ],
       "sectionName":"Personal Details"
    },
  
    {
      "name": "u_email",
      "type": "dropdown",
      "title": "Email subscription",
      "placeholder":"Email subscription",
      "dropdownData" :[
        { key: 'allow', value: 'Allow' },
        { key: 'do_not_allow', value: 'Do not allow' },
       ],
       "sectionName":"Contact     Method"

    },
    {
      "name": "phone",
      "type": "dropdown",
      "title": "Phone subscription",
      "placeholder":"Phone subscription",
      "dropdownData" :[
        { key: 'allow', value: 'Allow' },
        { key: 'do_not_allow', value: 'Do not allow' },
       ],
       "sectionName":"ContactMethod"
    },
    {
      "name": "whatsapp",
      "type": "dropdown",
      "title": "Whatsapp subscription",
      "placeholder":"whatsapp subscription",
      "dropdownData" :[
        { key: 'allow', value: 'Allow' },
        { key: 'do_not_allow', value: 'Do not allow' },
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
      "name": "company_duns_number",
      "type": "TextInput",
      "title": "Company DUNS Number",
      "inputType": "text",
      "placeholder":"Number",
      "sectionName":"Company"
    },
  
    {
      "name": "lead_currency",
      "type": "dropdown",
      "title": "Lead Currency",
      "placeholder":"Currency",
      "dropdownData" :[
        { key: 'inr', value: 'INR' },
        { key: 'usd', value: 'USD' },
        
       ],
       "sectionName":"company"
    },
  
    {
      "name": "industry_classification",
      "type": "TextInput",
      "title": "Industry Classification",
      "inputType": "text",
      "placeholder":"industry classification",
      "sectionName":"Industry Details"
    },
    {
      "name": "industry_sub_classification",
      "type": "TextInput",
      "title": "Industry Sub Classification",
      "inputType": "text",
      "placeholder":"industry sub classification",
      "sectionName":"Industry Details"
    },
    {
      "name": "no_of_employee",
      "type": "TextInput",
      "title": "No of Employee",
      "inputType": "text",
      "placeholder":"no of employee",
      "sectionName":"Industry Details"
    },
    {
      "name": "sic_code",
      "type": "TextInput",
      "title": "SIC Code",
      "inputType": "numeric",
      "placeholder":"sic code",
      "sectionName":"Industry Details"
    },
    {
      "name": "sic_description",
      "type": "TextInput",
      "title": "SIC description",
      "inputType": "text",
      "placeholder":"sic description",
      "sectionName":"Industry Details"
    },
    {
      "name": "industry",
      "type": "dropdown",
      "title": "Industry",
      "inputType": "text",
      "placeholder":"industry",
       "dropdownData" :[
        { key: 'team', value: 'agriculture' },
        { key: 'user', value: 'engineering' },
       ],
       "sectionName":"Industry Details"
    },
    {
      "name": "annual_revenue",
      "type": "TextInput",
      "title": "Annual Revenue",
      "inputType": "numeric",
      "placeholder":"annual revenue",
      "sectionName":"Industry Details"
    },
    {
      "name": "department",
      "type": "TextInput",
      "title": "Department",
      "inputType": "text",
      "placeholder":"department",
      "sectionName":"Industry Details"
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

],
};

export const PersonData = {
  "elements": [
    {
      "name": "type",
      "type": "dropdown",
      "title": "Type",
      "inputType": "text",
      "placeholder": "---none---",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "person" },
        { "value": "america/toronto", "label": "corporate" }
      ],
      "dataType": "string"
    },
    {
      "name": "account_name",
      "type": "TextInput",
      "title": "Account name",
      "inputType": "text",
      "placeholder": "Enter name",
      "dataType": "string"
    },
    {
      "name": "first_name",
      "type": "TextInput",
      "title": "First name",
      "inputType": "text",
      "placeholder": "Enter first name",
      "dataType": "string"
    },
    {
      "name": "middle_name",
      "type": "TextInput",
      "title": "Middle name",
      "inputType": "text",
      "placeholder": "Enter middle name",
      "dataType": "string"
    },
    {
      "name": "last_name",
      "type": "TextInput",
      "title": "Last name",
      "inputType": "text",
      "placeholder": "Enter last name",
      "dataType": "string"
    }
  ]
}

export const CorporateData = {
  "elements": [
    {
      "name": "type",
      "type": "dropdown",
      "title": "Type",
      "inputType": "text",
      "placeholder": "---none---",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "person" },
        { "value": "america/toronto", "label": "corporate" }
      ],
      "dataType": "string"
    },
    {
      "name": "account_name",
      "type": "TextInput",
      "title": "corporate ",
      "inputType": "text",
      "placeholder": "Enter name",
      "dataType": "string"
    },
    {
      "name": "corporate",
      "type": "TextInput",
      "title": "corporation",
      "inputType": "text",
      // "placeholder": "Enter first ",
      "dataType": "string"
    }
  ]
}


