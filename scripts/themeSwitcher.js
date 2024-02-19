const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
if (jtd.getTheme() === 'dark' || jtd.getTheme() === 'default') {
	jtd.setTheme('light');
	toggleDarkMode.innerHTML = "Moon";
} else {
	jtd.setTheme('dark');
	toggleDarkMode.innerHTML = "Sun";
	}
});
