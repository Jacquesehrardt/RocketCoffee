const menuButton = document.getElementById("menu-button")
const openMenu = document.getElementById("menu-open")
const closerMenu = document.getElementById("menu-closer")
const menuItems = document.getElementById("menu-items")
const main = document.getElementById("main")
const blurMobile = document.getElementById("blur-mobile")


menuButton.addEventListener('click', function togle(){
    main.classList.toggle('display-none')
    openMenu.classList.toggle('display-none')
    closerMenu.classList.toggle('display-none')
    menuItems.classList.toggle('display-none')
    blurMobile.classList.toggle('display-none')
})