document.addEventListener("DOMContentLoaded", function () {
  // For mobile

  let menuButton = document.createElement("button");
  menuButton.classList.add("menu-toggle");
  menuButton.innerHTML = '<i class="fas fa-bars"></i>';

  let nav = document.querySelector("nav");
  nav.appendChild(menuButton);

  let navLinks = document.querySelector("nav ul");

  // Show/hide menu when clicked
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuButton.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // Make navbar change color when scrolling
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Cool animations when scrolling
  const sections = document.querySelectorAll(".section");

  // Back to top button
  const topButton = document.createElement("div");
  topButton.classList.add("scroll-top");
  topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(topButton);

  topButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Check when sections come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Show/hide back to top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      topButton.classList.add("visible");
    } else {
      topButton.classList.remove("visible");
    }
  });

  // Start animation for header
  setTimeout(() => {
    document.querySelector("header").classList.add("visible");
  }, 100);
});
