import "./style.scss";
import gsap from "gsap";

// Select elements
const chipsYellow = document.querySelector(".chips-yellow");
const chipsRed = document.querySelector(".chips-red");

// Start state
gsap.set([chipsYellow, chipsRed], { opacity: 0 });

// Timeline
const tl = gsap.timeline();

// Blinkningar som blir snabbare
tl
  // Gul start
  .to(chipsYellow, {
    opacity: 1,
    duration: 0.2
  })

  // Fastna på gult lite längre
  .to({}, { duration: 0.4 })

  .to(chipsYellow, {
    opacity: 0,
    duration: 0.12
  })

  // Röd
  .to(chipsRed, {
    opacity: 1,
    duration: 0.18
  })
  .to(chipsRed, {
    opacity: 0,
    duration: 0.1
  }, "+=0.06")

  // Gul snabbare
  .to(chipsYellow, {
    opacity: 1,
    duration: 0.14
  })
  .to(chipsYellow, {
    opacity: 0,
    duration: 0.08
  }, "+=0.03")

  // Röd snabbare
  .to(chipsRed, {
    opacity: 1,
    duration: 0.1
  })
  .to(chipsRed, {
    opacity: 0,
    duration: 0.05
  })

  // Intensiva blinkningar
  .to(chipsYellow, {
    opacity: 1,
    duration: 0.04
  })
  .to(chipsYellow, {
    opacity: 0,
    duration: 0.04
  })

  .to(chipsRed, {
    opacity: 1,
    duration: 0.04
  })
  .to(chipsRed, {
    opacity: 0,
    duration: 0.04
  })

  // Börjar "försöka" fastna på gult
  .to(chipsYellow, {
    opacity: 1,
    duration: 0.12
  })
  .to({}, { duration: 0.12 })

  .to(chipsYellow, {
    opacity: 0,
    duration: 0.08
  })

  // Rött tar över igen
  .to(chipsRed, {
    opacity: 1,
    duration: 0.14
  })
  .to({}, { duration: 0.1 })

  .to(chipsRed, {
    opacity: 0,
    duration: 0.08
  })

  // Ett sista försök på gult
  .to(chipsYellow, {
    opacity: 1,
    duration: 0.18
  })
  .to({}, { duration: 0.15 })

  .to(chipsYellow, {
    opacity: 0,
    duration: 0.1
  })

  // Rött vinner slutligen
  .to(chipsRed, {
    opacity: 1,
    duration: 0.25,
    ease: "power2.out"
  })

  // Fast på rött
  .to({}, { duration: 2.5 })

  // Långsammare sista blinkningar
  .to(chipsRed, {
    opacity: 0,
    duration: 0.12
  })
  .to(chipsRed, {
    opacity: 1,
    duration: 0.12
  })

  .to(chipsRed, {
    opacity: 0,
    duration: 0.1
  })
  .to(chipsRed, {
    opacity: 1,
    duration: 0.1
  })

  .to(chipsRed, {
    opacity: 0,
    duration: 0.08
  })
  .to(chipsRed, {
    opacity: 1,
    duration: 0.08
  });

