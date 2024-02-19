const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
if (jtd.getTheme() === 'dark' || jtd.getTheme() === 'default') {
	jtd.setTheme('light');
	toggleDarkMode.innerHTML = "<i class="fa solid fa-moon fa-3x">";
} else {
	jtd.setTheme('dark');
	toggleDarkMode.innerHTML = "<i class="fa solid fa-sun fa-3x">";
	}
});
