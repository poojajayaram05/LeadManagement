
const groupBy = require('lodash/groupBy');


const data = [
    {
      "activity_type": "task",
      "all_day": "false",
      "appointment_notes": "",
      "associated_lead": "LEA0001015",
      "attendees": "",
      "date": "",
      "description": "This task is for lead management ",
      "due_date": "2024-04-17",
      "email": "",
      "follow_up_notes": "",
      "from_date": "",
      "location": "",
      "meeting_link": "",
      "number": "",
      "owner": {
        "link": "https://ven06798.service-now.com/api/now/table/sys_user/c89bc86b472b751055784a02516d4317",
        "value": "c89bc86b472b751055784a02516d4317"
      },
      "remainder_before": "1970-01-01 08:00:00",
      "remainder_required": "false",
      "repeat": "dont_repeat",
      "start_time": "1970-01-01 08:00:00",
      "status": "in_progress",
      "subject": "",
      "sys_created_by": "lead.bhavani",
      "sys_created_on": "2024-03-31 13:02:42",
      "sys_id": "3fce2dd147558250e46cb70d416d430a",
      "sys_mod_count": "3",
      "sys_tags": "",
      "sys_updated_by": "bhavani",
      "sys_updated_on": "2024-04-01 06:08:54",
      "time": "05:30:00",
      "time_zone": "",
      "title": "Lead task",
      "to_date": ""
    },

    {
        "activity_type": "task",
        "all_day": "false",
        "appointment_notes": "",
        "associated_lead": "LEA0001015",
        "attendees": "",
        "date": "",
        "description": "This task is for lead management ",
        "due_date": "2024-04-17",
        "email": "",
        "follow_up_notes": "",
        "from_date": "",
        "location": "",
        "meeting_link": "",
        "number": "",
        "owner": {
          "link": "https://ven06798.service-now.com/api/now/table/sys_user/c89bc86b472b751055784a02516d4317",
          "value": "c89bc86b472b751055784a02516d4317"
        },
        "remainder_before": "1970-01-01 08:00:00",
        "remainder_required": "false",
        "repeat": "dont_repeat",
        "start_time": "1970-01-01 08:00:00",
        "status": "in_progress",
        "subject": "",
        "sys_created_by": "lead.bhavani",
        "sys_created_on": "2024-03-31 13:02:42",
        "sys_id": "3fce2dd147558250e46cb70d416d430a",
        "sys_mod_count": "3",
        "sys_tags": "",
        "sys_updated_by": "bhavani",
        "sys_updated_on": "2024-04-01 06:08:54",
        "time": "05:30:00",
        "time_zone": "",
        "title": "Lead task",
        "to_date": ""
      },
    {
      "activity_type": "email",
      "all_day": "false",
      "appointment_notes": "",
      "associated_lead": "LEA0001015",
      "attendees": "",
      "date": "2024-03-08",
      "description": "Deals of lead ",
      "due_date": "",
      "email": "bnbindu879@gmail.com",
      "follow_up_notes": "",
      "from_date": "",
      "location": "",
      "meeting_link": "",
      "number": "",
      "owner": {
        "link": "https://ven06798.service-now.com/api/now/table/sys_user/c89bc86b472b751055784a02516d4317",
        "value": "c89bc86b472b751055784a02516d4317"
      },
      "remainder_before": "",
      "remainder_required": "false",
      "repeat": "",
      "start_time": "1970-01-01 05:30:00",
      "status": "",
      "subject": "Opportunities and deals ",
      "sys_created_by": "lead.bhavani",
      "sys_created_on": "2024-03-31 13:07:40",
      "sys_id": "94ff69d547558250e46cb70d416d430d",
      "sys_mod_count": "2",
      "sys_tags": "",
      "sys_updated_by": "bhavani",
      "sys_updated_on": "2024-04-01 06:09:41",
      "time": "",
      "time_zone": "",
      "title": "Email activity",
      "to_date": ""
    },
    {
      "activity_type": "appointment",
      "all_day": "false",
      "appointment_notes": "This is for leads appointment ",
      "associated_lead": "LEA0001015",
      "attendees": "",
      "date": "2024-03-30",
      "description": "Appointment activity",
      "due_date": "",
      "email": "",
      "follow_up_notes": "",
      "from_date": "",
      "location": "Bangalore ",
      "meeting_link": "",
      "number": "9865473245",
      "owner": {
        "link": "https://ven06798.service-now.com/api/now/table/sys_user/c89bc86b472b751055784a02516d4317",
        "value": "c89bc86b472b751055784a02516d4317"
      },
      "remainder_before": "",
      "remainder_required": "false",
      "repeat": "",
      "start_time": "1970-01-01 05:30:00",
      "status": "",
      "subject": "",
      "sys_created_by": "lead.bhavani",
      "sys_created_on": "2024-03-31 13:12:50",
      "sys_id": "dc21715d47558250e46cb70d416d4381",
      "sys_mod_count": "4",
      "sys_tags": "",
      "sys_updated_by": "bhavani",
      "sys_updated_on": "2024-04-01 05:04:35",
      "time": "",
      "time_zone": "",
      "title": "Appointment",
      "to_date": ""
    },
    {
      "activity_type": "call",
      "all_day": "false",
      "appointment_notes": "",
      "associated_lead": "LEA0001015",
      "attendees": "",
      "date": "2024-03-28",
      "description": "This is a call activity ",
      "due_date": "",
      "email": "",
      "follow_up_notes": "",
      "from_date": "",
      "location": "",
      "meeting_link": "",
      "number": "8899632580",
      "owner": {
        "link": "https://ven06798.service-now.com/api/now/table/sys_user/c89bc86b472b751055784a02516d4317",
        "value": "c89bc86b472b751055784a02516d4317"
      },
      "remainder_before": "",
      "remainder_required": "false",
      "repeat": "",
      "start_time": "1970-01-01 05:30:00",
      "status": "",
      "subject": "",
      "sys_created_by": "lead.bhavani",
      "sys_created_on": "2024-03-31 12:58:52",
      "sys_id": "ebede5dd47158250e46cb70d416d43fc",
      "sys_mod_count": "3",
      "sys_tags": "",
      "sys_updated_by": "bhavani",
      "sys_updated_on": "2024-04-01 06:09:24",
      "time": "7.30",
      "time_zone": "",
      "title": "Call activity",
      "to_date": ""
    },
    {
      "activity_type": "meeting",
      "all_day": "true",
      "appointment_notes": "",
      "associated_lead": "LEA0001015",
      "attendees": "",
      "date": "2024-04-04",
      "description": "Lead meeting ",
      "due_date": "",
      "email": "",
      "follow_up_notes": "",
      "from_date": "2024-03-31 00:00:00",
      "location": "Bangalore ",
      "meeting_link": "www.meeting.com",
      "number": "9546712396",
      "owner": {
        "link": "https://ven06798.service-now.com/api/now/table/sys_user/c89bc86b472b751055784a02516d4317",
        "value": "c89bc86b472b751055784a02516d4317"
      },
      "remainder_before": "1970-01-01 05:30:00",
      "remainder_required": "true",
      "repeat": "",
      "start_time": "",
      "status": "",
      "subject": "",
      "sys_created_by": "lead.bhavani",
      "sys_created_on": "2024-03-31 12:58:16",
      "sys_id": "f6cda19d47158250e46cb70d416d4327",
      "sys_mod_count": "3",
      "sys_tags": "",
      "sys_updated_by": "bhavani",
      "sys_updated_on": "2024-04-01 05:46:10",
      "time": "",
      "time_zone": "pst",
      "title": "Lead meeting ",
      "to_date": "2024-03-02 00:00:00"
    },
    {
      "activity_type": "follow_up",
      "all_day": "false",
      "appointment_notes": "",
      "associated_lead": "LEA0001015",
      "attendees": "",
      "date": "2024-06-09",
      "description": "Followup activity",
      "due_date": "",
      "email": "",
      "follow_up_notes": "This is follow up notes from ui",
      "from_date": "",
      "location": "",
      "meeting_link": "",
      "number": "",
      "owner": {
        "link": "https://ven06798.service-now.com/api/now/table/sys_user/c89bc86b472b751055784a02516d4317",
        "value": "c89bc86b472b751055784a02516d4317"
      },
      "remainder_before": "",
      "remainder_required": "false",
      "repeat": "",
      "start_time": "1970-01-01 05:30:00",
      "status": "",
      "subject": "",
      "sys_created_by": "lead.bhavani",
      "sys_created_on": "2024-04-01 04:57:08",
      "sys_id": "fc49c96147d9c250e46cb70d416d438d",
      "sys_mod_count": "3",
      "sys_tags": "",
      "sys_updated_by": "bhavani",
      "sys_updated_on": "2024-04-01 06:09:32",
      "time": "",
      "time_zone": "",
      "title": "Follow up activity",
      "to_date": ""
    }
  ]
 
const grouped_activities = groupBy(data, function(n) {
    return n.activity_type;
  });

const activity_type_map = {
    "task": "Tasks",
    "meeting":"Meetings",
    "follow_up":"Follow Up",
    "email":"Emails",
    "appointment":"Appointment",
    "call":"Calls",
}
  ;
  let header = ''
for (const [key, value] of Object.entries(grouped_activities)) {

    
      console.log(activity_type_map[key])

//  <display header> header is that accordian structure with caret down and up
//  <display tabs> tabs is that all completed and pending

    value.forEach(function(val) {
        for (const [key, value] of Object.entries(val)) {
            console.log(`  ${key},---->   ${value}`);
        }
        console.log('---------------------')  
    });
    // console.log('---------------------')
  
     
}
