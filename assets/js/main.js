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

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Data Scientist"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
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
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

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

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

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
                    iconElement.addEventListener('click', function () {
                        const url = socialLinks[key];
                        if (url.startsWith('mailto:')) {
                            window.location.href = url;
                        } else {
                            window.open(url, '_blank');
                        }
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