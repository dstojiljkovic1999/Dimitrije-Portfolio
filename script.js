
const navButton = document.getElementById("nav-button");
const navList = document.querySelector(".nav-list");

if (navButton && navList) {
    const icon = navButton.querySelector("i");
    navButton.addEventListener("click", () => {
        navList.classList.toggle("open");
       
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });
}



const nameEl = document.getElementById("my-name");
const textEl = document.getElementById("my-text");

if (nameEl && textEl) {
    const nameContent = "Dimitrije Stojiljković";
    const textContent = "Dobrodošao na moj portfolio";
    let nameIndex = 0;
    let textIndex = 0;

    function typeName() {
        if (nameIndex < nameContent.length) {
            nameEl.textContent += nameContent.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 100); 
        }
    }

    function typeText() {
        if (textIndex < textContent.length) {
            textEl.textContent += textContent.charAt(textIndex);
            textIndex++;
            setTimeout(typeText, 80); 
        }
    }

    
    window.addEventListener('DOMContentLoaded', () => {
        typeName();
        
        setTimeout(typeText, nameContent.length * 100 + 300);
    });
}



const heroLeft = document.querySelector('.hero-left');
const heroRight = document.querySelector('.hero-right');

if (heroLeft && heroRight) {
    window.addEventListener('DOMContentLoaded', () => {
       
        setTimeout(() => {
            heroLeft.classList.add('slide-in');
            heroRight.classList.add('slide-in');
        }, 500); 
    });
}



const aboutContent = document.querySelector('.about-content');

if (aboutContent) {
    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                
            }
        });
    }, { threshold: 0.3 });
    aboutObserver.observe(aboutContent);
}



const fadeElementsMain = document.querySelectorAll('.main-content, .main-image, .card');

if (fadeElementsMain.length > 0) {
    const fadeObserverMain = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                fadeObserverMain.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 });

    fadeElementsMain.forEach(el => fadeObserverMain.observe(el));
}



const featuredProjects = document.querySelectorAll('.projects-text, .gallery, #main-container');

if (featuredProjects.length > 0) {
    
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                projectsObserver.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    featuredProjects.forEach(el => projectsObserver.observe(el));
}



const footerElements = document.querySelectorAll('.footer-about, .footer-links, .footer-contact, .footer-bottom');

if (footerElements.length > 0) {
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                footerObserver.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 });

    footerElements.forEach(el => footerObserver.observe(el));
}

//Project



const galleryImages = {
  graficki: {
    logo: ["Slike/project/logo1.jpg", "Slike/project/logo2.jpg", "Slike/project/logo3.jpg", "Slike/project/logo4.jpg"],
    vizitkarte: ["Slike/project/vizitka1.jpg", "Slike/project/vizitka2.jpg", "Slike/project/vizitka3.jpg", "Slike/project/vizitka4.jpg", "Slike/project/vizitka5.jpg", "Slike/project/vizitka6.jpg"],
    pozivnice: ["Slike/project/pozivnica1.jpg", "Slike/project/pozivnica2.jpg", "Slike/project/pozivnica3.jpg", "Slike/project/pozivnica4.jpg", "Slike/project/pozivnica5.jpg", "Slike/project/pozivnica6.jpg", "Slike/project/pozivnica7.jpg"],
    webflajeri: ["Slike/project/flajer1.jpg", "Slike/project/flajer2.jpg", "Slike/project/flajer3.jpg", "Slike/project/flajer4.jpg", "Slike/project/flajer5.jpg", "Slike/project/flajer6.jpg", "Slike/project/flajer7.jpg", "Slike/project/flajer8.jpg", "Slike/project/flajer9.jpg", "Slike/project/flajer10.jpg", "Slike/project/flajer11.jpg", "Slike/project/flajer12.jpg", "Slike/project/flajer13.jpg", "Slike/project/flajer14.jpg", ],
    itacademyvezbe:[ "Slike/project/ita1.jpg", "Slike/project/ita2.jpg", "Slike/project/ita3.jpg", "Slike/project/ita4.jpg", "Slike/project/ita5.jpg"]
    
  },
  web: {
    itaprojekti: ["Slike/itaweb/2.jpg", "Slike/itaweb/1.jpg", "Slike/itaweb/4.jpg", "Slike/itaweb/3.jpg", "Slike/itaweb/5.jpg", "Slike/itaweb/6.jpg", "Slike/itaweb/7.jpg", "Slike/itaweb/8.jpg", "Slike/itaweb/9.jpg", "Slike/itaweb/10.jpg"],
    mojiitprojekti: ["https://dstojiljkovic1999.github.io/Pozivnica-Ana-i-Marko/"]
  },
  foto: {
    venčanja: ["Slike/Web/1.jpg", "Slike/Web/2.jpg", "Slike/Web/3.jpg", "Slike/Web/4.jpg", "Slike/Web/5.jpg", "Slike/Web/6.jpg"],
    prvirođendani:["Slike/Web/7.jpg", "Slike/Web/8.jpg", "Slike/Web/9.jpg", "Slike/Web/10.jpg", "Slike/Web/11.jpg", "Slike/Web/12.jpg"],
    punoletstva:["Slike/Web/13.jpg", "Slike/Web/14.jpg", "Slike/Web/15.jpg", "Slike/Web/16.jpg", "Slike/Web/17.jpg", "Slike/Web/18.jpg" ]
  }
  
};


const galleryContainer = document.createElement("div");
galleryContainer.id = "gallery-container";
galleryContainer.style.marginTop = "20px";
const cardsContainer = document.querySelector(".cards-container");
if (cardsContainer) {
  cardsContainer.appendChild(galleryContainer);
}


function showGallery(images) {
  galleryContainer.innerHTML = images
    .map(src => {
      if (src.includes("http")) {
        
        return `
          <div style="margin: 20px 0; text-align: center;">
            <a href="${src}" target="_blank" class="project-link">🔗 Pogledaj projekat</a>
          </div>
        `;
      } else {
        
        return `<img src="${src}" alt="Projekat" style="width:100%; max-width:300px; margin:5px;">`;
      }
    })
    .join("");

  galleryContainer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}



const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const dropdown = card.querySelector(".dropdown");
  const items = dropdown.querySelectorAll("li");

  
  card.addEventListener("click", (e) => {
    
    if (e.target.tagName.toLowerCase() === "li") return;

    const allDropdowns = document.querySelectorAll(".dropdown");
    allDropdowns.forEach(d => {
      if (d !== dropdown) d.style.display = "none";
    });

    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  
  items.forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const sectionId = card.id; 
      let category = "";

      if (sectionId.includes("graphic")) category = "graficki";
      else if (sectionId.includes("web")) category = "web";
      else if (sectionId.includes("photo") || sectionId.includes("photography")) category = "foto";

      const key = item.textContent.toLowerCase().replace(/\s/g, "");
      const images = galleryImages[category]?.[key];

      if (images) {
        showGallery(images);
      } else {
        galleryContainer.innerHTML = `<p style="text-align:center;">Nema dostupnih slika za ovu sekciju.</p>`;
      }
    });
  });
});



const elementsToAnimate = document.querySelectorAll('.card, .contact-text, .cta-button');


const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1  
};


const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            entry.target.classList.add('fade-in-active');
            
            observer.unobserve(entry.target); 
        }
    });
};


const observer = new IntersectionObserver(observerCallback, observerOptions);


elementsToAnimate.forEach(element => {
    observer.observe(element);
});