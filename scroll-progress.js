document.addEventListener("DOMContentLoaded", () => {
  const scrollProgressBar = document.querySelector(".scroll-progress-bar");

  function updateScrollProgress() {
    const scrollPosition = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    scrollProgressBar.style.width = `${scrollPercentage}%`;
  }

  window.addEventListener("scroll", updateScrollProgress);
  window.addEventListener("resize", updateScrollProgress);

  // Initial call to set the progress bar on page load
  updateScrollProgress();
});
