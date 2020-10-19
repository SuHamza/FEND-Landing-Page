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
let sec_list = document.querySelectorAll('section');
// Navbar list
let navbar = document.getElementById('navbar__list');
// New List item
let li_item = document.createElement('li');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.body.onload = function () {
	// Build menu 
	/** Using regular for loop instead of foreach()
	 * to loop over each section in the document
	 * because Not all browsers support the .forEach() method
	 */
	for (let i = 0; i < sec_list.length; i++) {
		console.log(sec_list[i].id)
		console.log(sec_list[i].dataset.nav);
		//let li_txt = document.createTextNode(sec_list[i].dataset.nav);
		//li_item.appendChild(li_txt);
		//li_item.textContent = sec_list[i].dataset.nav;
		let new_li = '<li><a class=\'menu__link\' href=\'#' + sec_list[i].id + '\'>' + sec_list[i].dataset.nav + '</a></li>';
		navbar.insertAdjacentHTML('beforeend', new_li);

	}
};


// Scroll to section on link click

// Set sections as active


