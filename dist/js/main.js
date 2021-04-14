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
	})();
	// ==========================================================================

	// ==========================================================================
	// Category dropdown
	// ==========================================================================
	(function() {
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;
	
			// Private Variables
			var links = this.el.find('.dropdown-category__link');
			// Events
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		}
	
		Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
				$this = $(this),
				$next = $this.next();
	
			$next.slideToggle();
			$this.parent().toggleClass('is-opened');
	
			if (!e.data.multiple) {
				$el.find('.dropdown-category__submenu').not($next).slideUp().parent().removeClass('.is-opened');
			};
		}	
	
		var accordion = new Accordion($('#accordion'), false);		
	})();
	// ==========================================================================

	// ==========================================================================
	// Long search dropdown
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
	})();
	// ==========================================================================
	
	// ==========================================================================
	// Candidates Filter
	// ==========================================================================
	(function() {
		var AccordionFilter = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;
	
			// Private Variables
			var links = this.el.find('.dropdown-category__link--filter');
			// Events
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		}
	
		AccordionFilter.prototype.dropdown = function(e) {
			var $el = e.data.el;
				$this = $(this),
				$next = $this.next();
	
			$next.slideToggle();
			$this.parent().toggleClass('is-opened');
	
			if (!e.data.multiple) {
				$el.find('.dropdown-category__submenu--filter').not($next).slideUp().parent().removeClass('.is-opened');
			};
		}	
	
		var accFilter = new AccordionFilter($('#accordionFilter'), false);		
	})();
	// ==========================================================================
}); // end document.ready