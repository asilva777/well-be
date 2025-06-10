// Responsive font scaling
function setResponsiveFont() {
  const width = window.innerWidth;
  // Change the base font size based on window width
  if (width < 600) {
    document.documentElement.style.fontSize = "14px";
  } else if (width < 900) {
    document.documentElement.style.fontSize = "16px";
  } else {
    document.documentElement.style.fontSize = "18px";
  }
}

// Set min-height for root to fill viewport
function setRootMinHeight() {
  const root = document.getElementById("root");
  if (root) {
    root.style.minHeight = window.innerHeight + "px";
  }
}

// Dark mode detection and toggle
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
}

function detectDarkMode() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

// Optional: Toggle dark mode with the "D" key
window.addEventListener("keydown", function (e) {
  if (e.key === "d" || e.key === "D") {
    document.documentElement.classList.toggle("dark-mode");
  }
});

// Run on load and resize
window.addEventListener("DOMContentLoaded", () => {
  setResponsiveFont();
  setRootMinHeight();
  detectDarkMode();
});
window.addEventListener("resize", () => {
  setResponsiveFont();
  setRootMinHeight();
});

// For minimal dark mode styling (put this in your CSS!)
// .dark-mode {
//   background: #111;
//   color: #eee;
// }
