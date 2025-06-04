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
      toggleDarkMode.innerHTML = `<img src="/assets/images/white-sun2.svg" width="18" height="18" alt="Sun icon">`;
      mainLogo.src = "/assets/images/logo_white.svg";
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      toggleDarkMode.innerHTML = `<img src="/assets/images/moon.svg" width="18" height="18" alt="Moon icon">`;
      mainLogo.src = "/assets/images/logo_black.svg";
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }
});
