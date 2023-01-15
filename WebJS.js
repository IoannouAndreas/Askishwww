window.onload = function() {
    // Get all the main menu options
    var mainMenuOptions = document.querySelectorAll("nav a");
  
    // Add an event listener for each main menu option
    mainMenuOptions.forEach(function(option) {
      option.addEventListener("click", function(event) {
        event.preventDefault();
  
        // Get the ID of the selected main menu option
        var selectedOption = this.getAttribute("href");
  
        // Get all the side menu elements
        var sideMenus = document.querySelectorAll(".side-menu");
  
        // Hide all the side menu elements
        sideMenus.forEach(function(menu) {
          menu.style.display = "none";
        });
  
        // Show the side menu corresponding to the selected main menu option
        document.querySelector(selectedOption + "-menu").style.display = "block";
      });
    });
  };
  function toggleErlylife() {
    var paragraph = document.getElementById("early-life-paragraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
};
function toggleCareer() {
    var paragraph = document.getElementById("career-paragraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
};
function togglePersonalPhotos() {
    var personalPhotos = document.getElementById("personal-photos");
    var professionalPhotos = document.getElementById("professional-photos");
    personalPhotos.style.display = "block";
    professionalPhotos.style.display = "none";
};

function toggleProfessionalPhotos() {
    var personalPhotos = document.getElementById("personal-photos");
    var professionalPhotos = document.getElementById("professional-photos");
    personalPhotos.style.display = "none";
    professionalPhotos.style.display = "block";
};
function toggleWritingProjects() {
    var writingProjects = document.getElementById("writing-projects");
    var otherProjects = document.getElementById("other-projects");
    writingProjects.style.display = "block";
    otherProjects.style.display = "none";
};

function toggleOtherProjects() {
    var writingProjects = document.getElementById("writing-projects");
    var otherProjects = document.getElementById("other-projects");
    writingProjects.style.display = "none";
    otherProjects.style.display = "block";
};

function togglelinkBIO() {
  var paragraph = document.getElementById("link-bio");
  if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
  } else {
      paragraph.style.display = "none";
  }
};