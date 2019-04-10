/*
   COMP 2681
   Mohd Abdullah
   Final Project

   Juniper Taekwon-Do

   Author: Will Kiiskila
   Date:   04/09/2019

   Function List:
   getDate()


*/

// function updates every second and gets the current date
// then is concatinates it into a string and prints to the id clock

setInterval(function getDate() {
   var calendarDay = new Date();
   var thisYear = calendarDay.getFullYear();
   var thisMonth = calendarDay.getMonth();
   var thisDay = calendarDay.getDate();
   var thisMinute = calendarDay.getMinutes();
   var thisSecond = calendarDay.getSeconds();
   var thisHour = calendarDay.getHours();
 
   var months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December"
   ];
   thisMonth = months[thisMonth];
 
   thisMinute = thisMinute < 10 ? "0" + thisMinute : thisMinute;
   thisSecond = thisSecond < 10 ? "0" + thisSecond : thisSecond;
   thisHour = thisHour > 12 ? thisHour - 12 : thisHour;
   thisSecond = thisHour > 12 ? thisSecond + " am" : thisSecond + " pm";
 
   time =
     "Current Time: " +
     thisMonth +
     " " +
     thisDay +
     ", " +
     thisYear +
     " Current Date: " +
     thisHour +
     ":" +
     thisMinute +
     ":" +
     thisSecond;
 
   document.getElementById("clock").innerHTML = time;
 }, 1000);
 