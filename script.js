const parallaxContainer = document.querySelector(".parallax-container");
const frontWave = document.querySelector(".front-wave");
const backWave = document.querySelector(".back-wave");

parallaxContainer.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 20;

  const backWaveXAxis = xAxis * 3;

  frontWave.style.transform = `translateX(${xAxis}px)`;
  backWave.style.transform = `translateX(${backWaveXAxis}px)`;
});

parallaxContainer.addEventListener("mouseleave", () => {
  frontWave.style.transform = "translateX(0)";
  backWave.style.transform = "translateX(0)";
});
