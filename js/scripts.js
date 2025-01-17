document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const heroH1 = document.querySelector('.hero h1');
    const heroP = document.querySelector('.hero p');
    const part2 = document.querySelector('.part2');
    const part3 = document.querySelector('.part3');
    const scrollDownButton = document.querySelector('.scroll-down');
    const part1 = document.querySelector('.part1');
    const aboutSection = document.querySelector('.about');
    let currentSection = 1;

    const observeHero = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSection = 1
                heroSection.classList.add('active');
            } else {
                heroSection.classList.remove('active');
                heroH1.style.transform = '';
                heroH1.style.opacity = '';
                heroP.style.transform = '';
                heroP.style.opacity = '';
            }
        });
    }, { threshold: 0.5 });

    observeHero.observe(heroSection);

    const observePart2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                part2.classList.add('active');
            } else {
              part2.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    observePart2.observe(part2);


    scrollDownButton.addEventListener('click', () => {
        part2.scrollIntoView({ behavior: 'smooth' });
        currentSection = 2
    });

    window.addEventListener('wheel', (event) => {
      if (currentSection === 1 && event.deltaY > 0) {
          event.preventDefault();
          currentSection = 2;
          part2.scrollIntoView({ behavior: 'smooth' }); 
        }  else if (currentSection === 2 && event.deltaY < 0) {
          event.preventDefault();
          currentSection = 1;
          part1.scrollIntoView({ behavior: 'smooth' }); 
        }else if(currentSection === 1 && event.deltaY < 0){
          event.preventDefault();
          part1.scrollIntoView({ behavior: 'smooth' }); 
          currentSection = 1;
        }
      
    }, { passive: false });

    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && entry.target === part3) {
              currentSection = 3;
          }
      });
  });

  observer.observe(part3);
    
    
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

window.addEventListener("load", function () {
  if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
  }
});

