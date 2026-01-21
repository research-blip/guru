console.log("Page ready");


const guruImages = document.querySelectorAll(".guru-img");
let currentIndex = 0;
const HOLD_TIME = 4000; // 4 seconds

setInterval(() => {
  guruImages[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % guruImages.length;

  guruImages[currentIndex].classList.add("active");
}, HOLD_TIME);


