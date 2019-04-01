// This section of code enables the menu icon to disappear and the nav bar items to appear on click 

var menu=document.getElementById('mobile-menu-icon');
var navBar=document.getElementById('nav-container');

function starting() {
	menu.style.display='none';
	navBar.style.display='block';
	return(menu.style.display);
}

function second(){
	if (menu.style.display==='none') {
		menu.style.display='block';
		navBar.style.display='none';
	}
}

document.querySelector('#mobile-menu-icon').addEventListener("click", function(){
	// console.log('hinm');
	starting();
});

document.querySelector('#nav-container').addEventListener("click", function(){
	second();
});
