window.addEventListener("DOMContentLoaded", function () {
  const toggleDarkMode = document.getElementById("theme-toggle");
  //const themeIcon = document.getElementById("theme-icon");
  const mainLogo = document.getElementById("main-logo");

  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  jtd.addEvent(toggleDarkMode, "click", function () {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  });

  function getTheme() {
    return document.documentElement.classList.contains("dark-mode")
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    if (theme === "dark") {
      toggleDarkMode.innerHTML = `<svg width='18px' height='18px'><use href="/assets/images/sun.svg"></use></svg>`;
      mainLogo.src = "/assets/images/logo_white.svg";
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      toggleDarkMode.innerHTML = `<svg width='18px' height='18px'><use href="/assets/images/moon.svg"></use></svg>`;
      mainLogo.src = "/assets/images/logo_black.svg";
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }
});
