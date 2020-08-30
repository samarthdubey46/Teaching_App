import { App_Colors } from "./colors"

const Avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

export const Book_Data = [
    { Subject: "Hindi", id: '1' },
    { Subject: "English", id: '2' },
    { Subject: "Maths", id: '3' },
    { Subject: "Social", id: '4' },
    { Subject: "Science", id: '5' },
    { Subject: "Sanskrit", id: '6' },
]
export const Options_Data = [
    { Text: "Exams", type: "Ionicons", icon: "list" },
    { Text: "Study Material", type: "Ionicons", icon: "book-outline" },
    { Text: "Notifications", type: "AntDesign", icon: "notification" },
    { Text: "Chat", type: "Ionicons", icon: "chatbox-ellipses" },
]
export const Options_Data_Study_Material = [
    { Text: "Videos", type: "Entypo", icon: "video",color:'red' },
    { Text: "Chapters", type: "Entypo", icon: "book",color:App_Colors.PrimaryColor },
    { Text: "Documents", type: "Ionicons", icon: "document",color:'black' },
    { Text: "Extra Activities", type: "Ionicons", icon: "football-outline",color:'black' },
]

export const Days = [
    { day: "Sun", days: [1, 8, 15, 22, 29] },
    { day: "Mon", days: [2, 9, 16, 23, 30] },
    { day: "Tue", days: [3, 10, 17, 24, 31] },
    { day: "Wed", days: [4, 11, 18, 25] },
    { day: "Thu", days: [5, 12, 19, 26] },
    { day: "Fri", days: [6, 13, 20, 27] },
    { day: "Sat", days: [7, 14, 21, 28] }
]
export const Marked_Dates = [
    { year: 2020, month: 8, day: 30, name: "Test" }
]
export const Subjects = [
    { Teacher: 'Prathiba Pandey', Avatar: Avatar, Subject: "Hindi", id: '1' },
    { Teacher: 'Sushma Sing', Avatar: Avatar, Subject: "English", id: '2' },
    { Teacher: 'Abijit Charkasdas', Avatar: Avatar, Subject: "Maths", id: '3' },
    { Teacher: 'Arun Shrivastav', Avatar: Avatar, Subject: "Social", id: '4' },
    { Teacher: 'Arun Shrivastav', Avatar: Avatar, Subject: "Science", id: '5' },
    { Teacher: 'Arun Shrivastav', Avatar: Avatar, Subject: "Sanskrit", id: '6' },
    { Teacher: 'Arun Shrivastav', Avatar: Avatar, Subject: "Sports", id: '7' },
    { Teacher: 'Arun Shrivastav', Avatar: Avatar, Subject: "Yoga", id: '8' },
    { Teacher: 'Arun Shrivastav', Avatar: Avatar, Subject: "Music", id: '9' },
    { Teacher: 'Arun Shrivastav', Avatar: Avatar, Subject: "Art", id: '10' },
]
export const Days_In_Months = [
    { month: 0, days: 31 },
    { month: 1, days: 28 },
    { month: 2, days: 31 },
    { month: 3, days: 30 },
    { month: 4, days: 31 },
    { month: 5, days: 30 },
    { month: 6, days: 31 },
    { month: 7, days: 31 },
    { month: 8, days: 30 },
    { month: 9, days: 31 },
    { month: 10, days: 30 },
    { month: 11, days: 31 },
]
export let Months = new Array();
Months[0] = "January";
Months[1] = "February";
Months[2] = "March";
Months[3] = "April";
Months[4] = "May";
Months[5] = "June";
Months[6] = "July";
Months[7] = "August";
Months[8] = "September";
Months[9] = "October";
Months[10] = "November";
Months[11] = "December";


export const Exams_Data = [
    {
        data: [
            { Subject: "Hindi", Teacher: "Prathiba Pandey", date: '20 aug 2020', complete: true, Start: '20:00 PM', End: '21:00 PM' }
        ],
        title: "Weekly Test"
    },
    {
        data: [
            { Subject: "English", Teacher: "Sushma Sing", date: '20 aug 2020', complete: false, Start: '20:00 PM', End: '21:00 PM' }
        ],
        title: "SA-1"
    }
]
export const Notification = [
    { text: "Accusam elitr dolores accusam sanctus duo sit diam sit ipsum et, dolor ", Teacher: "Lourem" },
    { text: "Accusam elitr dolores accusam sanctus duo sit diam sit ipsum et, dolor ", Teacher: "Lourem" },
    { text: "Accusam elitr dolores accusam sanctus duo sit diam sit ipsum et, dolor ", Teacher: "Lourem" },
    { text: "Accusam elitr dolores accusam sanctus duo sit diam sit ipsum et, dolor ", Teacher: "Lourem" },
]
