/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// List of all Sections in the document 
const sec_list = document.querySelectorAll('section');
// Navbar list
const navbar = document.getElementById('navbar__list');
// Top Button
const topBtn = document.getElementById('topBtn');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Check If an Element is Visible in the Viewport
// Src: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function inViewport(sec) {
	// Get the size of the element and its position 
	// relative to the viewport
	const rect = sec.getBoundingClientRect();
	// console.log(rect);
	// If the element is in the viewport, return True
	// Otherwise, return False
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
	/** Using regular for loop instead of foreach()
	 * to loop over each section in the document
	 * because Not all browsers support the .forEach() method
	 */
	// for (let i = 0; i < sec_list.length; i++) {
	// console.log(sec_list[i].id)
	// console.log(sec_list[i].dataset.nav);
	//let li_txt = document.createTextNode(sec_list[i].dataset.nav);
	//li_item.appendChild(li_txt);
	//li_item.textContent = sec_list[i].dataset.nav;
	// 	let new_li = '<li><a class=\'menu__link\' href=\'#' + sec_list[i].id + '\'>' + sec_list[i].dataset.nav + '</a></li>';
	// 	navbar.insertAdjacentHTML('beforeend', new_li);

	// }
	sec_list.forEach(sec => {
		const new_li = '<li><a class=\'menu__link\' href=\'#' + sec.id + '\'>' + sec.dataset.nav + '</a></li>';
		navbar.insertAdjacentHTML('beforeend', new_li);

	});
}

// Add class 'active' to section when near top of viewport
// or to anchor item when clicked
function setActive(elem, className) {
	// console.log(elem);
	// Get previously 'active' section or anchor item
	const prevAvtice = document.querySelector('.' + className + '');
	if (prevAvtice) {
		prevAvtice.classList.remove(className);
	}
	// Set 'active' class to new section or anchor item
	elem.classList.add(className);
}


// Scroll to anchor ID using scrollTO event
function scrollSection() {
	const nav_link = document.querySelectorAll('.menu__link');
	nav_link.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			// Section ID
			const sec_id = this.getAttribute('href');
			// Requested Section
			const req_sec = document.querySelector(sec_id);
			// Add an active state to navigation items 
			// for selected section
			setActive(this, 'active__link');
			// Scroll to requested section
			req_sec.scrollIntoView({ behavior: "smooth" });

		});

	});

}

// Scroll to Top Button
function scrollTop() {
	// Show button when user scrolls below the fold of the page
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topBtn.style.display = 'block';
		topBtn.addEventListener('click', function () {
			// Safari Compatability
			document.body.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
			// Chrome, Firefox, IE and Opera Compatability
			document.documentElement.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
	} else {
		topBtn.style.display = 'none';
	}
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.body.onload = function () {
	// Build menu 
	buildNav();

	window.addEventListener('scroll', function () {
		// Set sections as active when window scrolls
		sec_list.forEach((sec) => {
			// console.log(sec);
			// console.log(inViewport(sec));
			if (inViewport(sec)) {
				setActive(sec, 'active__section');
				// Get Section Anchor in Navigation bar
				const sec_anchor = document.querySelector('a[href=\'#' + sec.id + '\']');
				setActive(sec_anchor, 'active__link');
			}
		});
		// Scroll to Top button when window scrolls
		scrollTop();
	});

	// Scroll to section on link click
	scrollSection();
};
