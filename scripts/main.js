let contactDisplayStatus = "none";
document.getElementById("contact-info").style.display = contactDisplayStatus;

document.getElementById("contact").onclick = function() {
  if (contactDisplayStatus == "none") {
      contactDisplayStatus = "block";
      document.getElementById("contact-info").style.display = contactDisplayStatus;
      console.log("showing");
  }
  else if (contactDisplayStatus == "block") {
      contactDisplayStatus = "none";
      document.getElementById("contact-info").style.display = contactDisplayStatus;
      console.log("hiding");
  }
}
