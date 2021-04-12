try {
    window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');
	
    require('bootstrap');
} catch (e) {}

// ============================================================================
//	document.ready
//	Will fire immediately when DOM is ready
// ============================================================================
$(document).ready(function () {

	// ==========================================================================
	// Navbar
	// ==========================================================================
	(function() {
		// $('.nav__icon').click(function(){
		// 	$(this).toggleClass('is-active');
		// });

		const navTrigger = document.querySelector('.nav__icon')
		const navLinks = document.querySelector('.nav__links')

		if(navTrigger) {
			navTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				navTrigger.classList.toggle('is-active')
				navLinks.classList.toggle('is-active')
				activeChecker(navLinks)
			});
		}
	})();
	// ==========================================================================
}); // end document.ready