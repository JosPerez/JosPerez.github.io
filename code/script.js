function showSection(sectionId) {
  // Get all the section elements
  const sections = document.getElementById("resumeSec");
  // Get all the nested section elements inside the parent section
  var childSections = sections.querySelectorAll("section");
  // Loop through each section element
  for (let i = 0; i < childSections.length; i++) {
    // If the section has the same id as the selected section, show it, otherwise hide it
    if (childSections[i].id === sectionId) {
      childSections[i].style.display = "block";
    } else {
      childSections[i].style.display = "none";
    }
  }
}

function showSubmitAlert() {
  // Get all the section elements
  const name = document.getElementById("name");
  const nameText = name.value;
  // Get all the section elements
  const subject = document.getElementById("subject");
  const subjectValue = subject.value;
  alert(nameText + ', Your message with Subject: ' + '"' + subjectValue + '"' + '\n was submitted.');
}