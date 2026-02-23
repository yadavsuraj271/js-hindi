// Dates

let myDate = new Date()

// console.log(myDate.toString());
// Output Example:
// Mon Feb 23 2026 22:42:00 GMT+0530 (India Standard Time)
// ✔ Full readable format with timezone

// console.log(myDate.toDateString());
// Output Example:
// Mon Feb 23 2026
// ✔ Only date, no time

// console.log(myDate.toLocaleString());
// Output Example (India):
// 23/2/2026, 10:42:00 pm
// ✔ Based on local system format

// console.log(typeof myDate);
// Output:
// object
// ✔ Date in JavaScript is an object



// Creating Custom Dates

// let myCreatedDate = new Date(2023, 0, 23)
// Output:
// Mon Jan 23 2023
// ✔ Month starts from 0 (January = 0)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// Output:
// Mon Jan 23 2023 05:03:00
// ✔ Added hour and minute

// let myCreatedDate = new Date("2023-01-14")
// ✔ ISO format (YYYY-MM-DD) → Recommended format

let myCreatedDate = new Date("01-14-2023")
// ✔ MM-DD-YYYY format (depends on region)

// console.log(myCreatedDate.toLocaleString());
// Output:
// 14/1/2023, 12:00:00 am



// Timestamp

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// Output Example:
// 1771866720000
// ✔ Milliseconds since 1 Jan 1970

// console.log(myCreatedDate.getTime());
// Output:
// Timestamp of that specific date

// console.log(Math.floor(Date.now()/1000));
// ✔ Converts milliseconds → seconds



// Extracting Values

let newDate = new Date()

console.log(newDate);
// Full current date object

console.log(newDate.getMonth() + 1);
// Output (Feb):
// 2
// ✔ getMonth() gives 0–11
// ✔ +1 because month index starts from 0

console.log(newDate.getDay());
// Output (Monday):
// 1
// ✔ getDay() gives weekday number
// Sunday = 0, Monday = 1, etc.


// `${newDate.getDay()} and the time `
// Example:
// 1 and the time



newDate.toLocaleString('default', {
    weekday: "long",
})
// Output:
// Monday
// ✔ weekday: "long" gives full name







// ================= EXTRA IMPORTANT METHODS =================


// Get Actual Date (Day of Month)

console.log(newDate.getDate());
// Output Example:
// 23
// ✔ Returns actual date of month (1–31)



// Get Full Year

console.log(newDate.getFullYear());
// Output:
// 2026
// ✔ Returns full year



// Get Hours

console.log(newDate.getHours());
// Output Example:
// 22
// ✔ 24-hour format



// Get Minutes

console.log(newDate.getMinutes());
// Output Example:
// 42



// Get Seconds

console.log(newDate.getSeconds());
// Output Example:
// 10



// Get Milliseconds

console.log(newDate.getMilliseconds());
// Output Example:
// 345



// ================= SET METHODS =================


// Change Year

newDate.setFullYear(2030);
console.log(newDate);
// ✔ Updates year to 2030



// Change Month

newDate.setMonth(5);
// ✔ June (because month index starts from 0)



// Change Date

newDate.setDate(15);
// ✔ Sets day of month to 15



// ================= CUSTOM FORMATTING =================


// Format: DD-MM-YYYY

let formattedDate = `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`;
console.log(formattedDate);
// Example:
// 23-2-2026



// Add Leading Zero (Important for Formatting)

let day = String(newDate.getDate()).padStart(2, '0');
let month = String(newDate.getMonth()+1).padStart(2, '0');

let properFormat = `${day}-${month}-${newDate.getFullYear()}`;
console.log(properFormat);
// Example:
// 23-02-2026



// ================= DATE DIFFERENCE =================


// Calculate difference between two dates

let date1 = new Date("2026-02-23");
let date2 = new Date("2026-03-01");

let diff = date2 - date1;
console.log(diff);
// Output:
// Difference in milliseconds


// Convert milliseconds to days

let diffDays = diff / (1000 * 60 * 60 * 24);
console.log(diffDays);
// Output:
// 6
// ✔ 1000 ms = 1 sec
// ✔ 60 sec = 1 min
// ✔ 60 min = 1 hour
// ✔ 24 hr = 1 day



// ================= TIMEZONE =================


// Get timezone offset

console.log(newDate.getTimezoneOffset());
// Output Example:
// -330
// ✔ Difference in minutes from UTC