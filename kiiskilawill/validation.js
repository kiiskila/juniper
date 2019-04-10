/*
   COMP 2681
   Mohd Abdullah
   Final Project

   Juniper Taekwon-Do

   Author: Will Kiiskila
   Date:   04/09/2019

   Function List:
   validate()

*/

// function to validate form data

function validate() {
    var name = document.contact.Name.value;
    var email = document.contact.Email.value;
    var subject = document.contact.Subject.value;
    var message = document.contact.Message.value;
  
    // Names must contain at least one character
    if (name == "") {
      alert("Enter a valid name");
    }
  
    // only strings that contain an @ symbol and . are valid
    if (!(email.includes("@") && email.includes("."))) {
      alert("Enter a valid email address");
    }
  
    // Subject must contain at least one character
    if (subject == "") {
      alert("Enter a valid subject");
    }
  
    // Message must contain at least one character
    if (message == "") {
      alert("Enter a valid message");
    }
  }
  