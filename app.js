const toggleNav = document.getElementById('toggle-nav')
const hiddenNav = document.getElementById('hidden-nav')
const overlay = document.getElementById('overlay')
toggleNav.addEventListener( 'click', () => {
    hiddenNav.classList.toggle('show-nav')
    overlay.classList.toggle('hidden')
})


window.addEventListener('resize', () => {
    if (window.innerWidth > 440) {
        hiddenNav.classList.remove('show-nav')
        overlay.classList.add('hidden')
    }
})


overlay.addEventListener( 'click', () => {
    hiddenNav.classList.remove('show-nav')
    overlay.classList.add('hidden')

})