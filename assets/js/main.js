// Add your javascript here

import Alpine from 'alpinejs'
import morph from '@alpinejs/morph'
import focus from '@alpinejs/focus'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
window.TOCoffset = 150;

gsap.registerPlugin(ScrollTrigger);
 
window.Alpine = Alpine
Alpine.plugin(morph)
Alpine.plugin(focus)

Alpine.start()
domReadyLoop();

document.addEventListener("DOMContentLoaded", function() {
    loadGsapAnimations();
    //createRadialBackgrounds();
    updateTOC();
    window.dispatchEvent(new CustomEvent('set-route', { detail: { route: window.location.pathname } }));
});

function loadGsapAnimations(){

    

    if(document.getElementById('radical')){
        gsap.to("#radical", {
            scrollTrigger: {
                trigger: "#features-header",
                start: "top 80%",
                end: "bottom 50%",
                scrub: true
            },
            x: -50,
            opacity: 1
        });
    }

    if(document.getElementById('how-to-use-it')){
        gsap.to("#how-to-use-it", {
            scrollTrigger: {
                trigger: "#features",
                start: "bottom 90%",
                end: "bottom 20%",
                scrub: true
            },
            y: -150,
            opacity: 1
        });
    }

    if(document.getElementById('include-code')){
        gsap.to("#include-code", {
            scrollTrigger: {
                trigger: "#include-section",
                start: "top bottom",
                end: "bottom 80%",
                scrub: true,
                debug: true
            },
            y: 0,
            opacity: 1
        });
    }

    if(document.getElementById('include-code')){
        gsap.to("#include-code-box", {
            scrollTrigger: {
                trigger: "#include-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true
            },
            opacity: 1,
            y: 0,
            opacity: 1
        });
    }

    if(document.getElementById('tailwind-code-box')){
        gsap.to("#tailwind-code-box", {
            scrollTrigger: {
                trigger: "#tailwind-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
                debug: true
            },
            scale: 1,
            y: 0
        });
    }

    if(document.getElementById('tailwind-code')){
        gsap.to("#tailwind-code", {
            scrollTrigger: {
                trigger: "#tailwind-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
                debug: true
            },
            opacity: 1
        });
    }

    if(document.getElementById('page-code-box')){
        gsap.to("#page-code-box", {
            scrollTrigger: {
                trigger: "#page-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
                debug: true
            },
            y: 0
        });
    }

    if(document.getElementById('layout-code-box-1')){
        gsap.to("#layout-code-box-1", {
            scrollTrigger: {
                trigger: "#layout-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true
            },
            opacity: 1,
            y: 0,
            opacity: 1
        });
    }

    if(document.getElementById('layout-code-box-2')){
        gsap.to("#layout-code-box-2", {
            scrollTrigger: {
                trigger: "#layout-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true
            },
            opacity: 1,
            y: 0,
            opacity: 1
        });
    }

    if(document.getElementById('layout-text')){
        gsap.to("#layout-text", {
            scrollTrigger: {
                trigger: "#layout-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true
            },
            opacity: 1,
            y: 0,
            opacity: 1
        });
    }

    if(document.getElementById('content-code-box')){
        gsap.to("#content-code-box", {
            scrollTrigger: {
                trigger: "#content-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
                debug: true
            },
            scale: 1,
            y: 0
        });
    }

    if(document.getElementById('reload-code-box')){
        gsap.to("#reload-code-box", {
            scrollTrigger: {
                trigger: "#reload-section",
                start: "top bottom",
                end: "bottom 50%",
                scrub: true,
                debug: true
            },
            scale: 1,
            y: 0
        });
    }

}

function createRadialBackgrounds(){
    let radialElements = document.querySelectorAll('.radial-background');
    for (let i = 0; i < radialElements.length; i++) {
        radialElements[i].style.backgroundImage = `radial-gradient(circle at 0px 0px, rgba(32, 32, 42, 0.9) 0%, rgba(215, 215, 255, 0.01) 85%, transparent 100%)`;
    }
    window.addEventListener('mousemove', function(event) {
        if (event.target.classList.contains('radial-background') || event.target.closest('.radial-background')) {
            let element = event.target.classList.contains('radial-background') ? event.target : event.target.closest('.radial-background');
            let {
                clientX,
                clientY
            } = event;
            const rect = element.getBoundingClientRect();
            clientX = clientX - rect.left;
            clientY = clientY - rect.top;
            element.style.backgroundImage = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(32, 32, 42, 0.9) 0%, rgba(215, 215, 255, 0.01) 85%, transparent 100%)`;
        }
    });
}

window.scrollTop = function(){
    setTimeout(function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, 20);
}

function domReadyLoop(){
    if(document.getElementById('loader')){
        let intervalCount = 0;
        let maxIntervalCount = 10; // -> 10*500ms = 5s max
        let domReadyInterval = setInterval(function(){
            if(document.readyState === 'complete' || intervalCount++ > maxIntervalCount){
                clearInterval(domReadyInterval);
                
                // Hide the loader
                document.getElementById('loader').classList.add('opacity-0');
                setTimeout(function(){
                    document.getElementById('loader').remove();

                    
                }, 300);

                setTimeout(function(){
                    // start the slide down
                    const tl = gsap.timeline();

                    tl.set('.slideDown', { y: 0, yPercent: -100 })
                                    .to('.slideDown', { duration: 2, ease: 'power3.out', yPercent: 100, force3D: true});
                }, 150);
            }       
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const proseLinks = document.querySelectorAll('.prose ul li a');
    proseLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if(link.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                renderLinkAsTOC(link);
            }
            //console.log(`Link clicked: ${this.href}`);
            // Add any additional functionality as needed
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    hljs.highlightAll();
});

document.addEventListener('htmx:afterSwap', function(evt) {
    setTimeout(function(){
        domReadyLoop();
        hljs.highlightAll();
        loadGsapAnimations();
        //createRadialBackgrounds();
        window.dispatchEvent(new CustomEvent('set-route', { detail: { route: evt.detail.pathInfo.requestPath } }));
//        updateTOC();
    }, 10);
});

document.addEventListener('htmx:afterSettle', function(evt) {
    setTimeout(function(){
        updateTOC();
    }, 10);
});



function updateTOC(){
    if(document.getElementById('table-of-contents')){
        setTimeout(function(){
            console.log('setting...');
            window.dispatchEvent(new CustomEvent('set-toc', { detail: { toc: JSON.parse(document.getElementById('static-content').dataset.toc) } }));
        });
    }    
}

window.renderTocFunctionality = function(){
    const tocALinks = document.querySelectorAll('.toc li a');

    tocALinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            renderLinkAsTOC(link);
        });
    });

    // Get all the <a> elements inside the table of contents
    const tocLinks = document.querySelectorAll('.toc li');

    // Add an event listener to the window scroll event
    window.addEventListener('scroll', () => {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Loop through each table of contents link
        tocLinks.forEach(link => {
            // Get the target element ID from the link's href attribute
            const targetId = link.firstElementChild.getAttribute('href').substring(1);

            // Get the target element by ID
            const targetElement = document.getElementById(targetId);

            

            // Check if the target element exists and is in the viewport
            if (targetElement && isElementAtTopAndNotReachedNextSection(targetElement)) {
                if(!link.classList.contains('active')){
                    // Add the 'active' class to the link
                    link.classList.add('active');
                    setAllOthersToInactive(link);
                }
            }
        });
    });
}

window.renderLinkAsTOC = function(link){
    const targetId = link.getAttribute('href').substring(1);
    const offset = TOCoffset; // Adjust the offset value as per your requirement
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    }
}

// Helper function to check if an element is in the viewport
function isElementAtTopAndNotReachedNextSection(element) {
    const rect = element.getBoundingClientRect();
    const nextSection = document.querySelector('section + section');

    return (
        rect.top <= TOCoffset &&
        (!nextSection || rect.bottom < (nextSection.offsetTop +TOCoffset))
    );
}

function setAllOthersToInactive(link){
    const tocLinks = document.querySelectorAll('.toc li');
    for(let i = 0; i < tocLinks.length; i++){
        if(tocLinks[i] != link){
            tocLinks[i].classList.remove('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
  
    const marquee = document.getElementById('vertical-marquee');
    const itemsContainer = document.getElementById('marquee-container');
  
    // Calculate the height of the content and the container
    const scrollHeight = itemsContainer.scrollHeight;
    const containerHeight = marquee.offsetHeight;
  
    // Create the scroll trigger animation
    gsap.to(itemsContainer, {
      yPercent: -30 * (scrollHeight / containerHeight - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: marquee,
        start: 'top bottom',  // Start the animation when the top of the marquee hits the bottom of the viewport
        end: 'bottom top',    // End the animation when the bottom of the marquee hits the top of the viewport
        scrub: true           // Link the animation to the scroll position
      }
    });
  });