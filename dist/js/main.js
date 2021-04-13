// ============================================================================
//	document.ready
//	Will fire immediately when DOM is ready
// ============================================================================
$(document).ready(function () {

	// ==========================================================================
	// Navbar
	// ==========================================================================
	(function() {
		const navigation = document.querySelector('.nav');
		const navTrigger = document.querySelector('.nav__icon');
		const navLinks = document.querySelector('.nav__links');

		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 10) {
				navigation.classList.add('is-scrolled');
			}
			else {
				navigation.classList.remove('is-scrolled');
			}
		});

		if(navTrigger) {
			navTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				navTrigger.classList.toggle('is-active')
				navLinks.classList.toggle('is-active')
			});
		}
	})();
	// ==========================================================================

	// ==========================================================================
	// Long search dropdown
	// ==========================================================================
	(function() {
		const categoryTrigger = document.querySelector('.long-search__multiselect');
		const categoryDp = document.querySelector('.long-search__categories')
		
		if(categoryTrigger) {
			categoryTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				categoryDp.classList.toggle('is-active')
			});
		}
	})();
	// ==========================================================================
}); // end document.ready