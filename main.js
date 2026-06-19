/*=============== EMAIL JS ===============*/
const contactFrom = document.getElementById("contact-form");
contactMassage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.prebentDefuault();

  emailjs
    .sendForm("service_yybd0t3", "template_ybjr8hz", "contact-form", "rdNIGGWPkOO53hk4l")

    .then(
      () => {
        //SHow Sent Message
        contactMassage.textContent = "Massage Sent Successfully ✅";

        //Remove Message After 5 Sec
        setTimeout(() => {
          contactMassage.textContent = "";
        }, 5000);

        //Clear input field
        contactFrom.reset();
      },
      () => {
        //Show Error message
        contactMassage.textContent = "Message not send (Service erroe) ❌";
      }
    );
};
contactFrom.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350 viewport height,
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav--list a[href*=" + sectionId + "]");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = scrollReveal({
  origin: "top",
  distance: "68px",
  duration: 2000,
  delay: 300,
  reset: true, //Animation repeat
});

sr.reveal(`.perfil, contact--form`);
sr.reveal(`.info`, { origin: "left", delay: 800 });
sr.reveal(`.skills`, { origin: "left", delay: 1000 });
sr.reveal(`.about`, { origin: "right", delay: 1200 });
sr.reveal(`.projects--card, .services--card, .experience--card`, { interval: 100 });
