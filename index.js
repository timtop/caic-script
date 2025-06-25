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
