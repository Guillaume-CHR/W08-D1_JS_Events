let footer = document.querySelector("footer")
let clickCount = 1

footer.addEventListener("click", clickOnConsole);
function clickOnConsole() {
	console.clear();
	console.log(`Click n°${clickCount}`);
	clickCount++
};

let hamburger = document.querySelector(".navbar-toggler");
let hiddenMenu = document.getElementById("navbarHeader")
let boolHidden = true;

hamburger.addEventListener("click", clickOnHamburger);
function clickOnHamburger() {
	if (boolHidden) {
		hiddenMenu.classList.remove("collapse")
		boolHidden = false;
	} else {
		hiddenMenu.classList.add("collapse")
		boolHidden = true;
	}
};

let buttonToChange = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")[0]
buttonToChange.addEventListener("click", clickOnFirstEdit);
function clickOnFirstEdit() {
	console.clear();
	this.parentNode.parentNode.previousSibling.previousSibling.style.color = 'red';
};

let buttonToChange2 = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")[1]
buttonToChange2.addEventListener("click", clickOnSecondEdit);
function clickOnSecondEdit() {
	let styleText = this.parentNode.parentNode.previousSibling.previousSibling;
	styleText.style.color = styleText.style.color === 'green' ? '' : 'green';
};

let navbar = document.querySelector("header");
let style = true;
navbar.addEventListener("dblclick", removeBootstrap);
function removeBootstrap() {
	if (style) {
		document.querySelector("link").remove()
		style = false;
	} else {
		document.querySelector("title").insertAdjacentHTML('afterend', `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`);
		style = true;
	};
};

let viewBtn = document.querySelectorAll(".btn.btn-sm.btn-success")
for (let i = 0; i < viewBtn.length; i++) {
	viewBtn[i].addEventListener("mouseover", changeView);
}

function changeView() {
	let txt = this.parentNode.parentNode.previousSibling.previousSibling;
	let img = this.parentNode.parentNode.parentNode.previousSibling.previousSibling;
	txt.classList.toggle("collapse")
	img.style.width = img.style.width === '20%' ? '' : '20%';
};

let cardToMove = document.getElementsByClassName("col-md-4")
let parentCard = document.getElementsByClassName("row")[1];
let switchRight = document.querySelector(".jumbotron-heading").nextSibling.nextSibling.childNodes[3];
let switchLeft = document.querySelector(".jumbotron-heading").nextSibling.nextSibling.childNodes[1];

switchRight.addEventListener("click", switchCardRight);
function switchCardRight() {
	console.log("right click")
	parentCard.insertBefore(cardToMove[cardToMove.length - 1], cardToMove[0]);
};

switchLeft.addEventListener("click", switchCardLeft);
switchLeft.setAttribute("href", "#");
function switchCardLeft() {
	console.log("left click")
	parentCard.insertBefore(cardToMove[0], cardToMove[cardToMove.length-1]);
};