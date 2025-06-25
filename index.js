// Opening the modal
const enroll = document.querySelectorAll("#enroll");
const modal = document.querySelector(".modal-overlay");

enroll.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";

    gsap.fromTo(
      modal,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  });
});

// Close modal
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        modal.style.display = "none";
      },
    });
  }
});

// Swiper
// window.addEventListener("load", () => {
const testiSwiper = new Swiper(".testi-slider", {
  loop: true,
  speed: 2200,
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".right-arrow",
    prevEl: ".left-arrow",
  },
});

const faqItems = document.querySelectorAll(".faq-item");

// Accordion logic
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    faqItems.forEach((i) => {
      const answer = i.querySelector(".faq-answer");
      const horizontalLine = i.querySelector(".icon-horizontal-line");

      if (i === item) {
        // Toggle the clicked item
        const isOpen = i.classList.contains("active");

        if (isOpen) {
          i.classList.remove("active");
          answer.style.height = "0px";
          horizontalLine.style.transform = "rotate(0deg)";
        } else {
          i.classList.add("active");
          answer.style.height = answer.scrollHeight + "px";
          horizontalLine.style.transform = "rotate(90deg)";
        }
      } else {
        // Close all others
        i.classList.remove("active");
        answer.style.height = "0px";
        horizontalLine.style.transform = "rotate(0deg)";
      }
    });
  });
});
