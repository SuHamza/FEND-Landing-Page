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
// New List item
// let li_item = document.createElement('li');


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
	for (let i = 0; i < sec_list.length; i++) {
		// console.log(sec_list[i].id)
		// console.log(sec_list[i].dataset.nav);
		//let li_txt = document.createTextNode(sec_list[i].dataset.nav);
		//li_item.appendChild(li_txt);
		//li_item.textContent = sec_list[i].dataset.nav;
		let new_li = '<li><a class=\'menu__link\' href=\'#' + sec_list[i].id + '\'>' + sec_list[i].dataset.nav + '</a></li>';
		navbar.insertAdjacentHTML('beforeend', new_li);

	}
}

// Add class 'active' to section when near top of viewport
function setActive(elem) {
	console.log(elem);
	// Get previously 'active' section
	const prevAvtice = document.querySelector('.active');
	prevAvtice.classList.remove('active');
	// Set 'active' class to new section
	elem.classList.add('active');
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.body.onload = function () {
	// Build menu 
	buildNav();

	// Set sections as active when window scrolls
	// window.onscroll = function (event) {
	window.addEventListener('scroll', function (event) {
		// console.log(inViewport(sec_list[1]));
		sec_list.forEach((sec) => {
			// console.log(sec);
			// console.log(inViewport(sec));
			if (inViewport(sec)) {
				setActive(sec);
			}
		});
	});
};


// Scroll to section on link click




