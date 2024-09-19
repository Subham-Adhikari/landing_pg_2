// gsap.to(".image_cont" , {
//     width: "100%",
//     // duration: 2,
//     stagger: 2,
//     ease: Expo.easeInOut,
//     // yoyo: true,
//     repeat: -1
// })

// gsap.to(".text h1" , {
//     top: "0",
//     // duration: 2,
//     stagger: 2,
//     ease: Expo.easeInOut
// })

// gsap.to(".text h1" , {
//     top: "-100%",
//     delay: 2,
//     stagger: 2,
//     ease: Expo.easeInOut
// })

// or, (form chat gpt)

// Create a new timeline instance
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Infinite loop with a 1-second delay between repeats

// Add animations to the timeline
tl.to(".image_cont", {
  width: "100%",
  duration: 2,
  stagger: 2,
  ease: "expo.inOut",
})
  .to(
    ".text h1",
    {
      top: "0",
      duration: 2,
      stagger: 2,
      ease: "expo.inOut",
    },
    "<"
  ) // Align with previous animation start
  .to(
    ".text h1",
    {
      top: "-100%",
      duration: 2,
      stagger: 2,
      ease: "expo.inOut",
    },
    "<+2"
  ); // Start this animation 2 seconds after the previous

// If you need to add more animations or adjust timing, continue chaining them in the timeline.
