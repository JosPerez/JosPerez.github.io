function showSection(sectionId) {
    // Get all the section elements
    const sections = document.getElementsByTagName("section");
  
    // Loop through each section element
    for (let i = 0; i < sections.length; i++) {
      // If the section has the same id as the selected section, show it, otherwise hide it
      if (sections[i].id === sectionId) {
        sections[i].style.display = "block";
      } else {
        sections[i].style.display = "none";
      }
    }
  }
  