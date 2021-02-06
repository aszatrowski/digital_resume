// CONTACT
let contactDisplayStatus = "none";
document.getElementById("contact-info").style.display = contactDisplayStatus;

document.getElementById("contact").onclick = function() {
  if (contactDisplayStatus == "none") {
      contactDisplayStatus = "block";
      document.getElementById("contact-info").style.display = contactDisplayStatus;
  }
  else if (contactDisplayStatus == "block") {
      contactDisplayStatus = "none";
      document.getElementById("contact-info").style.display = contactDisplayStatus;
  }
}

//EDUCATION
let educationDisplayStatus = "none";
document.getElementById("education-info").style.display = educationDisplayStatus;

document.getElementById("education").onclick = function() {
  if (educationDisplayStatus == "none") {
      educationDisplayStatus = "block";
      document.getElementById("education-info").style.display = educationDisplayStatus;
  }
  else if (educationDisplayStatus == "block") {
      educationDisplayStatus = "none";
      document.getElementById("education-info").style.display = educationDisplayStatus;
  }
}

// WORK EXPERIENCE
let workexpDisplayStatus = "none";
document.getElementById("work-info").style.display = workexpDisplayStatus;

document.getElementById("workexp").onclick = function() {
  if (workexpDisplayStatus == "none") {
      workexpDisplayStatus = "block";
      document.getElementById("work-info").style.display = workexpDisplayStatus;
  }
  else if (workexpDisplayStatus == "block") {
      workexpDisplayStatus = "none";
      document.getElementById("work-info").style.display = workexpDisplayStatus;
  }
}
