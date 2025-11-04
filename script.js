
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
    logo: ["Slike/Project/1.jpg", "Slike/project/2.jpg", "Slike/project/3.jpg", "Slike/project/4.jpg"],
    vizitkarte: ["Slike/project/5.jpg", "Slike/project/6.jpg", "Slike/project/7.jpg", "Slike/project/8.jpg", "Slike/project/9.jpg", "Slike/project/10.jpg"],
    pozivnice: ["Slike/project/11.jpg", "Slike/project/12.jpg", "Slike/project/13.jpg", "Slike/project/14.jpg", "Slike/project/15.jpg", "Slike/project/16.jpg", "Slike/project/17.jpg"],
    webflajeri: ["Slike/project/18.jpg", "Slike/project/19.jpg", "Slike/project/20.jpg", "Slike/project/21.jpg", "Slike/project/22.jpg", "Slike/project/23.jpg", "Slike/project/24.jpg", "Slike/project/25.jpg", "Slike/project/26.jpg", "Slike/project/27.jpg", "Slike/project/28.jpg", "Slike/project/29.jpg", "Slike/project/30.jpg", "Slike/project/31.jpg", ],
    itacademyvezbe:[ "Slike/project/32.jpg", "Slike/project/33.jpg", "Slike/project/34.jpg", "Slike/project/35.jpg", "Slike/project/36.jpg"]
    
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