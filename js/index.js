const hamb = document.getElementById('hamb')
let navMobileStatus = false
hamb.addEventListener('click', () => {
	const navMobile = document.getElementById('navMobile')
	if (navMobileStatus) {
		navMobile.style.display = 'none'
		navMobileStatus = false
		hamb.classList.remove('active')
	} else {
		navMobile.style.display = 'block'
		navMobileStatus = true
		hamb.classList.add('active')
	}
})

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault()
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
