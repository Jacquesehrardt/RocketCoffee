const menu = document.getElementById("menu")
const openMenu = document.getElementById("open-menu")
const closerMenu = document.getElementById("closer-menu")
const main = document.getElementById("main")
const aside = document.getElementById("aside")



menu.addEventListener('click', function togle(){
    main.classList.toggle('none')
    openMenu.classList.toggle('none')
    closerMenu.classList.toggle('none')
    aside.classList.toggle('none')

})