// CONTACT
let contactDisplayStatus = "none";
document.getElementById("contact-info").style.display = contactDisplayStatus;

document.getElementById("contact").onclick = function() {
  if (contactDisplayStatus == "none") {
      contactDisplayStatus = "block";
      document.getElementById("contact-info").style.display = contactDisplayStatus;
      console.log("showing contact");
  }
  else if (contactDisplayStatus == "block") {
      contactDisplayStatus = "none";
      document.getElementById("contact-info").style.display = contactDisplayStatus;
      console.log("hiding contact");
  }
}

// EDUCATION
// let educationDisplayStatus = "none";
// document.getElementById("contact-info").style.display = educationDisplayStatus;
//
// document.getElementById("contact").onclick = function() {
//   if (educationDisplayStatus == "none") {
//       educationDisplayStatus = "block";
//       document.getElementById("contact-info").style.display = educationDisplayStatus;
//       console.log("showing");
//   }
//   else if (educationDisplayStatus == "block") {
//       educationDisplayStatus = "none";
//       document.getElementById("contact-info").style.display = educationDisplayStatus;
//       console.log("hiding");
//   }
// }

// WORK EXPERIENCE
let workexpDisplayStatus = "none";
document.getElementById("work-info").style.display = workexpDisplayStatus;

document.getElementById("workexp").onclick = function() {
  if (workexpDisplayStatus == "none") {
      workexpDisplayStatus = "block";
      document.getElementById("work-info").style.display = workexpDisplayStatus;
      console.log("showing workexp");
  }
  else if (workexpDisplayStatus == "block") {
      workexpDisplayStatus = "none";
      document.getElementById("work-info").style.display = workexpDisplayStatus;
      console.log("hiding workexp");
  }
}
