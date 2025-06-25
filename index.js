// const lenis = new Lenis();
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// const menu = document.querySelector(".nav-links_wrapper");
// const navBtn = document.querySelector(".c-nav_hamburger");

// navBtn.addEventListener("click", () => {
//   menu.classList.toggle("cc-show");
//   navBtn.classList.toggle("cc-open");
//   document.querySelector("body").classList.toggle("cc-stop-scroll");
// });

// gsap.registerPlugin(SplitText);
// gsap.registerPlugin(ScrollTrigger);
// document.fonts.ready.then(() => {
//   //general text anim
//   const headerText = document.querySelectorAll("[data-header-anim]");
//   headerText.forEach((header) => {
//     gsap.set(headerText, { visibility: "visible", opacity: 1 });
//     let results = new SplitText(header, {
//         type: "lines",
//         linesClass: "header",
//       }),
//       lines = results.lines;
//     const resultsParent = new SplitText(header, {
//       linesClass: "header-parent",
//     });
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: header,
//         start: "top 90%",
//       },
//     });
//     tl.from(results.lines, {
//       duration: 0.8,
//       opacity: 0,
//       yPercent: 50,
//       ease: "power3.out",
//       stagger: 0.25,
//     });
//   });
// });

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

// alert("This is working");
