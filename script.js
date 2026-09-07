/* =========================================
   WEBCRAFT STUDIO
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   CONFIGURATION
========================================= */

const CONFIG = {

    web3forms:
        "https://api.web3forms.com/submit"

};


/* =========================================
   ELEMENTS
========================================= */

const header =
    document.getElementById("header");

const nav =
    document.getElementById("nav");

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelectorAll(".nav-link");

const quoteModal =
    document.getElementById("quoteModal");

const projectModal =
    document.getElementById("projectModal");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================
   YEAR
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   MOBILE MENU
========================================= */

if (menuBtn && nav) {

    menuBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        nav.classList.toggle("open");

        menuBtn.classList.toggle("active");

    });

}


/* =========================================
   CLOSE MOBILE MENU
   WHEN NAV LINK IS CLICKED
========================================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("open");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }

    });

});


/* =========================================
   CLOSE MOBILE MENU
   WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", (event) => {

    if (!nav || !menuBtn) return;


    const clickedInsideNav =
        nav.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);


    if (
        nav.classList.contains("open") &&
        !clickedInsideNav &&
        !clickedMenuButton
    ) {

        nav.classList.remove("open");

        menuBtn.classList.remove("active");

    }

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   MODAL FUNCTIONS
========================================= */

function openModal(modal) {

    if (!modal) return;

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

}


function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

}


/* =========================================
   QUOTE MODAL
========================================= */

const quoteButtons = [

    document.getElementById("openQuoteBtn"),

    document.getElementById("heroQuoteBtn"),

    document.getElementById("portfolioQuoteBtn"),

    document.getElementById("ctaQuoteBtn")

];


quoteButtons.forEach(button => {

    if (!button) return;


    button.addEventListener("click", () => {

        /* Close mobile menu first */

        if (nav) {

            nav.classList.remove("open");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }


        openModal(quoteModal);

    });

});


/* =========================================
   QUOTE MODAL CLOSE
========================================= */

const closeQuoteBtn =
    document.getElementById("closeQuoteBtn");


if (closeQuoteBtn) {

    closeQuoteBtn.addEventListener("click", () => {

        closeModal(quoteModal);

    });

}


/* =========================================
   PROJECT MODAL CLOSE
========================================= */

const closeProjectBtn =
    document.getElementById("closeProjectBtn");


if (closeProjectBtn) {

    closeProjectBtn.addEventListener("click", () => {

        closeModal(projectModal);

    });

}


/* =========================================
   MODAL OVERLAY
========================================= */

document
    .querySelectorAll(".modal-overlay")
    .forEach(overlay => {

        overlay.addEventListener("click", () => {

            const modal =
                overlay.closest(".modal");

            closeModal(modal);

        });

    });


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal(quoteModal);

        closeModal(projectModal);


        /* Also close mobile menu */

        if (nav) {

            nav.classList.remove("open");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }

    }

});


/* =========================================
   PROJECT DATA
========================================= */

const projects = {

    project1: {

        title:
            "Business Website",

        category:
            "Web Design",

        image:
            "img/bussiness.jpeg",

        description:
            "A modern business website designed to build trust, present services clearly and generate more customer inquiries.",

        liveLink:
            "https://agency-web-ijfv.vercel.app/"

    },


    project2: {

        title:
            "Online Store",

        category:
            "E-Commerce",

        image:
            "img/e-commerce.jpg",

        description:
            "A clean and responsive e-commerce experience designed to showcase products and provide a smooth browsing experience.",

        liveLink:
            "https://premium-e-commerce-website-beta.vercel.app/"

    },


    project3: {

        title:
            "Graphic Design Portfolio",

        category:
            "Graphic Design",   

        image:
            "img/graphic.png",

        description:
            "A professional graphic design portfolio created to showcase creative skills, design expertise, services, and standout projects.",

        liveLink:
            "https://thohebul.github.io/Grapic-Design_Web/"

    },


    project4: {

        title:
            "Restaurant Website",

        category:
            "Restaurant",

        image:
            "img/Resturent.jpg",

        description:
            "A visually attractive restaurant website focused on menu presentation, brand identity and customer engagement.",

        liveLink:
            "https://ridwondevs.github.io/Resturent-Web/"

    },


    project5: {

        title:
            "Digital Marketing Services",

        category:
            "Digital Marketing",

        image:
            "img/seo.png",

        description:
            "A high-impact digital marketing & SEO solution designed to boost online visibility, attract the right audience, and turn traffic into real business growth.",

        liveLink:
            "https://thohebul.github.io/SEO_Website/"

    },


    project6: {

        title:
            "Creative Agency",

        category:
            "Agency",

        image:
            "img/agency.jpg",

        description:
            "A modern agency website with a strong visual identity, service presentation and portfolio showcase.",

        liveLink:
            "https://ridwondevs.github.io/Agency-Web/#contact"

    }

};


/* =========================================
   PROJECT MODAL + LIVE PROJECT
========================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("click", event => {

        const projectId =
            card.dataset.project;

        const project =
            projects[projectId];


        if (!project) return;


        /* =====================================
           VIEW PROJECT
        ===================================== */

        if (
            event.target.closest(".view-project")
        ) {

            event.preventDefault();

            event.stopPropagation();


            if (project.liveLink) {

                window.open(
                    project.liveLink,
                    "_blank",
                    "noopener,noreferrer"
                );

            }

            return;

        }


        /* =====================================
           PROJECT ARROW
        ===================================== */

        if (
            !event.target.closest(".project-arrow")
        ) {

            return;

        }


        event.preventDefault();

        event.stopPropagation();


        const modalImage =
            document.getElementById(
                "projectModalImage"
            );

        const modalCategory =
            document.getElementById(
                "projectModalCategory"
            );

        const modalTitle =
            document.getElementById(
                "projectModalTitle"
            );

        const modalDescription =
            document.getElementById(
                "projectModalDescription"
            );


        if (modalImage) {

            modalImage.src =
                project.image;

            modalImage.alt =
                project.title;

        }


        if (modalCategory) {

            modalCategory.textContent =
                project.category;

        }


        if (modalTitle) {

            modalTitle.textContent =
                project.title;

        }


        if (modalDescription) {

            modalDescription.textContent =
                project.description;

        }


        openModal(projectModal);

    });

});


/* =========================================
   PROJECT → QUOTE
========================================= */

const projectContactBtn =
    document.getElementById(
        "projectContactBtn"
    );


if (projectContactBtn) {

    projectContactBtn.addEventListener(
        "click",
        () => {

            closeModal(projectModal);


            setTimeout(() => {

                openModal(quoteModal);

            }, 200);

        }
    );

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    if (!toast || !toastMessage) return;


    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}


/* =========================================
   WEB3FORMS
========================================= */

async function submitWeb3Form(
    form,
    resultElement,
    button,
    buttonTextElement,
    defaultText,
    successMessage
) {

    if (!form) return false;


    if (
        !button ||
        !buttonTextElement ||
        !resultElement
    ) {

        return false;

    }


    button.disabled = true;


    buttonTextElement.textContent =
        "Sending...";


    resultElement.textContent = "";

    resultElement.className =
        "form-result";


    try {

        const formData =
            new FormData(form);


        const response =
            await fetch(
                CONFIG.web3forms,
                {

                    method: "POST",

                    headers: {

                        "Accept":
                            "application/json"

                    },

                    body:
                        formData

                }
            );


        const result =
            await response.json();


        console.log(
            "Web3Forms Response:",
            result
        );


        if (result.success) {

            resultElement.textContent =
                successMessage;

            resultElement.className =
                "form-result success";


            showToast(
                "Message sent successfully!"
            );


            form.reset();


            return true;

        }


        resultElement.textContent =
            result.message ||
            "Something went wrong. Please try again.";


        resultElement.className =
            "form-result error";


        return false;


    } catch (error) {

        console.error(
            "Web3Forms Error:",
            error
        );


        resultElement.textContent =
            "Unable to send message. Please check your internet connection and try again.";


        resultElement.className =
            "form-result error";


        return false;


    } finally {

        button.disabled = false;


        buttonTextElement.textContent =
            defaultText;


        setTimeout(() => {

            resultElement.textContent = "";

            resultElement.className =
                "form-result";

        }, 6000);

    }

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const submitBtn =
    document.getElementById(
        "submitBtn"
    );


const submitText =
    document.getElementById(
        "submitText"
    );


const formResult =
    document.getElementById(
        "formResult"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            await submitWeb3Form(

                contactForm,

                formResult,

                submitBtn,

                submitText,

                "Send Message →",

                "✓ Your message has been sent successfully. We'll contact you soon."

            );

        }
    );

}


/* =========================================
   QUOTE FORM
========================================= */

const quoteForm =
    document.getElementById(
        "quoteForm"
    );


const quoteSubmitBtn =
    document.getElementById(
        "quoteSubmitBtn"
    );


const quoteSubmitText =
    document.getElementById(
        "quoteSubmitText"
    );


const quoteResult =
    document.getElementById(
        "quoteResult"
    );


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const success =
                await submitWeb3Form(

                    quoteForm,

                    quoteResult,

                    quoteSubmitBtn,

                    quoteSubmitText,

                    "Send Quote Request →",

                    "✓ Quote request sent successfully!"

                );


            if (success) {

                setTimeout(() => {

                    closeModal(
                        quoteModal
                    );

                }, 1800);

            }

        }
    );

}


/* =========================================
   SMOOTH INTERNAL LINKS
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#" ||
                    !targetId
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });


/* =========================================
   IMAGE FALLBACK
========================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "error",
            () => {

                img.style.objectFit =
                    "contain";

                img.style.padding =
                    "30px";

                img.style.opacity =
                    "0.5";

            }
        );

    });


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%cWebCraft Studio Website Loaded Successfully!",
    "color:#66b3ff;font-size:16px;font-weight:bold;"
);


console.log(
    "%cWeb3Forms Contact & Quote Forms Ready!",
    "color:#42e58a;font-size:14px;font-weight:bold;"
);