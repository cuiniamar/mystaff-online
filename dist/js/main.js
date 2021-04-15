// ============================================================================
//	document.ready
//	Will fire immediately when DOM is ready
// ============================================================================
$(document).ready(function () {

	// ==========================================================================
	// Navbar
	// ==========================================================================
	(function() {
		const navigation = document.querySelector('.main-header');
		const navTrigger = document.querySelector('.nav__icon');
		const navLinks = document.querySelector('.nav__links');
		const modalTrigger = document.querySelector('.nav__search-icon');
		const modalSearch = document.querySelector('.search-modal');
		const modalClose = document.querySelector('.search-modal__btn-close');

		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 10) {
				navigation.classList.add('is-scrolled');
				navTrigger.classList.add('is-colored');
			}
			else {
				navigation.classList.remove('is-scrolled');
				navTrigger.classList.remove('is-colored');
			}
		});

		if(navTrigger) {
			navTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				navTrigger.classList.toggle('is-active');
				navigation.classList.toggle('is-colored');
				navLinks.classList.toggle('is-active');
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
				categoryDp.classList.toggle('is-active');
			});
		}

		// Category Accordion
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;
	
			var links = this.el.find('.dropdown-category__link'); // Private Variables
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown); // Events
		}
	
		Accordion.prototype.dropdown = function(e) {
			$(this).next().slideToggle();
			$(this).parent().toggleClass('is-opened');
	
			if (!e.data.multiple) {
				e.data.el.find('.dropdown-category__submenu').not($(this).next()).slideUp().parent().removeClass('is-opened');
			};
		}	
	
		new Accordion($('#accordion'), false);	
	})();
	// ==========================================================================

	// ==========================================================================
	// Filter dropdown
	// ==========================================================================
	(function() {
		const filterTrigger = document.querySelector('.filter__multiselect');
		const filterDropdown = document.querySelector('.filter__categories')
		
		if(filterTrigger) {
			filterTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				filterDropdown.classList.toggle('is-active');
			});
		}

		// Candidates Accordion
		var AccordionFilter = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;
	
			var links = this.el.find('.dropdown-category__link--filter'); // Private Variables
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown); // Events
		}
	
		AccordionFilter.prototype.dropdown = function(e) {
			$(this).next().slideToggle();
			$(this).parent().toggleClass('is-opened');
	
			if (!e.data.multiple) {
				e.data.el.find('.dropdown-category__submenu--filter').not($(this).next()).slideUp().parent().removeClass('is-opened');
			};
		}	
	
		new AccordionFilter($('#accordionFilter'), false);
	})();
	// ==========================================================================

	// ==========================================================================
	// Close multiselect
	// ==========================================================================
	$(document).on('click', function(event){
		if (!$(event.target).closest('.long-search__multiselect, .long-search__categories').length) {
			$('.long-search__categories').removeClass('is-active');
		}

		if (!$(event.target).closest('.filter__multiselect, .filter__categories').length) {
			$('.filter__categories').removeClass('is-active');
		}
	});
	// ==========================================================================

	// ==========================================================================
	// Search Modal
	// ==========================================================================
	// (function() {
	// 	const openModal = document.querySelectorAll('.main-header');

	// 	console.log('test');

	// 	for (const el of openModal) {
	// 		el.addEventListener("click", function() {
	// 		  const modalId = this.dataset.open;
	// 		  document.getElementById(modalId).classList.add('is-opened');
	// 		});
	// 	}
	// });
	// ==========================================================================
}); // end document.ready