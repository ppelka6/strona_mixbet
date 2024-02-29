const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtnBars.classList.remove('black-bars-color')
	nav.classList.toggle('nav--active')

	handleNavItemsAnimation()
	deleteAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteAnimation = () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			allNavItems.forEach(el => {
				el.classList.remove('nav-items-animation')
			})
		})
	})
}

document.body.addEventListener('click', function (event) {
	if (!nav.contains(event.target) && !navBtn.contains(event.target)) {
		nav.classList.remove('nav--active')
	}
})

var modal = document.getElementById('myModal')

var img = document.getElementsByClassName('myImg')
var modalImg = document.getElementById('img01')
var captionText = document.getElementById('caption')

for (let i = 0; i < img.length; i++) {
	img[i].onclick = function () {
		modal.style.display = 'block'
		modalImg.src = this.src
		captionText.innerHTML = this.alt
	}
}

var span = document.getElementsByClassName('close')[0]

span.onclick = function () {
	modal.style.display = 'none'
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		const sectionTop = section.getBoundingClientRect().top + window.scrollY
		if (section.classList.contains('white-section') && sectionTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && sectionTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footYear.innerText = year
}

nav.addEventListener('click', handleNav, false)
navBtn.addEventListener('click', handleNav, false)
handleCurrentYear()
window.addEventListener('scroll', handleObserver)
