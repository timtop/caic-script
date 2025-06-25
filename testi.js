// Swiper
window.addEventListener("load", () => {
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
});

// Accordion logic
const faqItems = document.querySelectorAll(".faq-item");

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
