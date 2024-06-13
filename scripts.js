document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll("[data-animate]").forEach((element) => {
    const delay = element.getAttribute("data-delay");
    if (delay) {
      element.style.transitionDelay = `${delay}ms`;
    }
    observer.observe(element);
  });
});
