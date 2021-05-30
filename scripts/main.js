// Column1 Vars
let aboutDisplayStatus = "none";
let contactDisplayStatus = "none";
let educationDisplayStatus = "none";
let workexpDisplayStatus = "none";
let activitiesDisplayStatus = "none";

// Column2 Vars
let skillsDisplayStatus = "none";
let pubsDisplayStatus = "none";
let instaDisplayStatus = "none";
let twitterDisplayStatus = "none";

document.getElementById("about-info").style.display = aboutDisplayStatus;

document.getElementById("about").onclick = function() {
  // educationDisplayStatus = "none";
  // workexpDisplayStatus = "none";
  // activitiesDisplayStatus = "none";
  if (aboutDisplayStatus == "none") {
      aboutDisplayStatus = "block";
      document.getElementById("about-info").style.display = aboutDisplayStatus;
      // document.getElementById('about').style.margin-bottom = 15;
  }
  else if (aboutDisplayStatus == "block") {
      aboutDisplayStatus = "none";
      document.getElementById("about-info").style.display = aboutDisplayStatus;
      // document.getElementById('about').style.margin-bottom = 0;
  }
}

document.getElementById("contact-info").style.display = contactDisplayStatus;

document.getElementById("contact").onclick = function() {
  // educationDisplayStatus = "none";
  // workexpDisplayStatus = "none";
  // activitiesDisplayStatus = "none";
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

// ACTIVITIES

document.getElementById("activities-info").style.display = activitiesDisplayStatus;

document.getElementById("activities").onclick = function() {
  if (activitiesDisplayStatus == "none") {
      activitiesDisplayStatus = "block";
      document.getElementById("activities-info").style.display = activitiesDisplayStatus;
  }
  else if (activitiesDisplayStatus == "block") {
      activitiesDisplayStatus = "none";
      document.getElementById("activities-info").style.display = activitiesDisplayStatus;
  }
}

// SKILLS

document.getElementById("skills-info").style.display = skillsDisplayStatus;

document.getElementById("skills").onclick = function() {
  if (skillsDisplayStatus == "none") {
      skillsDisplayStatus = "block";
      document.getElementById("skills-info").style.display = skillsDisplayStatus;
  }
  else if (skillsDisplayStatus == "block") {
      skillsDisplayStatus = "none";
      document.getElementById("skills-info").style.display = skillsDisplayStatus;
  }
}

// Publications

document.getElementById("pubs-info").style.display = pubsDisplayStatus;

document.getElementById("pubs").onclick = function() {
  if (pubsDisplayStatus == "none") {
      pubsDisplayStatus = "block";
      document.getElementById("pubs-info").style.display = pubsDisplayStatus;
  }
  else if (pubsDisplayStatus == "block") {
      pubsDisplayStatus = "none";
      document.getElementById("pubs-info").style.display = pubsDisplayStatus;
  }
}

//Instagram

// document.getElementById("instagram-div").style.display = instaDisplayStatus;
//
// document.getElementById("instagram").onclick = function() {
//   if (instaDisplayStatus == "none") {
//       instaDisplayStatus = "block";
//       document.getElementById("instagram-div").style.display = instaDisplayStatus;
//   }
//   else if (instaDisplayStatus == "block") {
//       instaDisplayStatus = "none";
//       document.getElementById("instagram-div").style.display = instaDisplayStatus;
//   }
// }
//
// //Twitter
//
// document.getElementById("twitter-div").style.display = twitterDisplayStatus;
//
// document.getElementById("twitter").onclick = function() {
//   if (twitterDisplayStatus == "none") {
//       twitterDisplayStatus = "block";
//       document.getElementById("twitter-div").style.display = twitterDisplayStatus;
//   }
//   else if (twitterDisplayStatus == "block") {
//       twitterDisplayStatus = "none";
//       document.getElementById("twitter-div").style.display = twitterDisplayStatus;
//   }
// }
