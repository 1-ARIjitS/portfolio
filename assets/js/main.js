/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
        // Add class when scrolled
        navHeader.classList.add("header-scrolled");
      } else {
        // Remove class when at top
        navHeader.classList.remove("header-scrolled");
      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Data Scientist"], /* Only one title now */
      loop : true,
      typeSpeed : 120, 
      backSpeed : 90,
      backDelay : 3000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT LIST (Simplified Layout) -- */
  // Updated selector from .project-card to .project-item
  sr.reveal('.project-item',{interval: 200}) // Changed selector

  /* -- PUBLICATIONS BOX -- */
  sr.reveal('.publication-card',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  // Changed target from .experience-item to .experience-card and added interval
  srLeft.reveal('.experience-card',{delay: 100, interval: 200}) 

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']'); // Get the link

      if(link) { // Check if the link exists before trying to add/remove class
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
              link.classList.add('active-link')
          }  else {
              link.classList.remove('active-link')
          }
      }
    })
  }

  window.addEventListener('scroll', scrollActive)

/* ----- SOCIAL MEDIA ICONS BUTTON LISTENER ----- */
document.addEventListener('DOMContentLoaded', function () {
    // Define the URLs for different social platforms
    const socialLinks = {
        github: 'https://github.com/1-ARIjitS',
        devpost: 'https://devpost.com/arijits19',
        linkedin: 'https://www.linkedin.com/in/arijit-samal1',
        mail: 'mailto:arijit.samal@student-cs.fr'
    };

    // Function to attach event listeners to social icons
    function attachSocialIconListeners(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (container) {
            Object.keys(socialLinks).forEach(key => {
                const iconElement = container.querySelector(`.icon.${key}`);
                if (iconElement) {
                    // Fix: Open link in new tab on click
                    iconElement.addEventListener('click', function () {
                        window.open(socialLinks[key], '_blank'); 
                    });
                } else {
                    console.warn(`Icon with class '${key}' not found in '${containerSelector}'`);
                }
            });
        } else {
            console.error(`Container '${containerSelector}' not found.`);
        }
    }

    // Attach listeners to both header and footer social icons
    attachSocialIconListeners('.social_icons'); // Header
    attachSocialIconListeners('.footer-social-icons'); // Footer

    function setupDownloadCVButton(buttonSelector) {
        const downloadCVButton = document.querySelector(buttonSelector);
        if (downloadCVButton) {
            downloadCVButton.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior of the button

                const url = 'assets/resume/ARIJIT_RESUME.pdf';

                // Open the CV in a new tab
                const newTab = window.open(url, '_blank');

                if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
                    alert('Popup blocked. Please allow popups for this site.');
                }

                // Trigger the download
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Arijit_Samal_Resume.pdf'; // Set filename for download
                link.click(); // Simulate the click to start the download
            });
        } else {
            console.error(`Download CV button not found: ${buttonSelector}`);
        }
    }

    // Setup the "Download CV" buttons for header, nav-button, and about-btn
    setupDownloadCVButton('.featured-text-btn .btn:not(.blue-btn)'); // Header
    setupDownloadCVButton('.nav-button .btn'); // Nav section
    setupDownloadCVButton('.about-btn .btn'); // About section

    // Add functionality to the "Hire Me" button in the header
    const hireMeButton = document.querySelector('.featured-text-btn .btn.blue-btn');
    if (hireMeButton) {
        hireMeButton.addEventListener('click', function () {
            window.location.href = 'mailto:arijit.samal@student-cs.fr';
        });
    } else {
        console.error('Hire Me button not found in the header.');
    }
});

/* ----- PUBLICATION CARD EXPAND/COLLAPSE ----- */
document.addEventListener('DOMContentLoaded', function() {
    const publicationCards = document.querySelectorAll('.publication-card');

    publicationCards.forEach(card => {
        const detailsButton = card.querySelector('.details-btn');
        const detailsContent = card.querySelector('.publication-details');
        const abstractButton = card.querySelector('.abstract-btn'); // Get abstract button
        const abstractContent = card.querySelector('.publication-abstract'); // Get abstract content

        // Handle Details Button
        if (detailsButton && detailsContent) {
            detailsButton.addEventListener('click', () => {
                const isDetailsExpanded = detailsContent.classList.toggle('expanded');
                detailsButton.innerHTML = isDetailsExpanded ? '<i class="uil uil-minus-circle"></i> Hide Details' : '<i class="uil uil-info-circle"></i> Details';
                
                // Collapse abstract if details are expanded and abstract exists/is expanded
                if (isDetailsExpanded && abstractContent && abstractContent.classList.contains('expanded')) {
                    abstractContent.classList.remove('expanded');
                    if (abstractButton) {
                        abstractButton.innerHTML = '<i class="uil uil-file-alt"></i> Abstract';
                    }
                }
            });
        }

        // Handle Abstract Button
        if (abstractButton && abstractContent) {
            abstractButton.addEventListener('click', () => {
                const isAbstractExpanded = abstractContent.classList.toggle('expanded');
                abstractButton.innerHTML = isAbstractExpanded ? '<i class="uil uil-minus-circle"></i> Hide Abstract' : '<i class="uil uil-file-alt"></i> Abstract';

                 // Collapse details if abstract is expanded and details exists/is expanded
                if (isAbstractExpanded && detailsContent && detailsContent.classList.contains('expanded')) {
                     detailsContent.classList.remove('expanded');
                     if (detailsButton) {
                         detailsButton.innerHTML = '<i class="uil uil-info-circle"></i> Details';
                     }
                }
            });
        }
    });
});


/* ----- PROJECT CARD EXPAND/COLLAPSE ----- */
// Remove this entire section as project cards are no longer expandable

/* ----- THEME TOGGLE ----- */
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'uil uil-sun' : 'uil uil-moon';
}

/* ----- ## -- EMAIL REQUEST FOR COLLABORATION -- ## ----- */
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init("jN4KPTic6keCH-_P2"); // Your Public Key
    console.log("EmailJS Initialized");

    // Function to send email
    function sendEmail() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Name:", name); 
        console.log("Email:", email);
        console.log("Message:", message); 

        // Validate input fields
        if (!name || !email || !message) {
            alert("Please fill out all fields!");
            console.log("Missing fields: Name, Email, or Message");
            return;
        }

        // Prepare the template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        console.log("Sending email with parameters:", templateParams);

        // Send the email using EmailJS - fixed function name
        emailjs.send("service_3ew9t67", "template_tu123hy", templateParams)
            .then((response) => { // Ensure correct block structure
                console.log("EmailJS response:", response);
                alert("Email sent successfully!");
                console.log("SUCCESS:", response.status, response.text);
                // Clear the form fields after successful submission
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            }) // End .then() block
            .catch((error) => { // Ensure correct block structure
                console.log("Error occurred in email sending:", error);
                alert("Failed to send email. Check the console for details.");
                console.error("ERROR:", error);
            }); // End .catch() block and add semicolon
    }

    // Attach the sendEmail function to the button's click event
    const sendButton = document.querySelector(".form-button .btn");
    if (sendButton) {
        sendButton.addEventListener("click", sendEmail);
        console.log("Email send button listener attached");
    } else {
        console.error("Send button not found.");
    }
});