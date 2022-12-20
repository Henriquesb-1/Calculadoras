const showMenuButton = $(".side-menu-icon button")
const sideMenuDiv = $(".side-menu-icon")
const stripOne = $(".strip-one")
const stripTwo = $(".strip-two")
const stripThree = $(".strip-three")
const menuLinks = $(".all-pages-menu")

function showMenu() {
    menuLinks.toggleClass("menu-open")
    sideMenuDiv.toggleClass("side-menu-icon-open")

    stripOne.toggleClass("strip-one-open")
    stripTwo.toggleClass("strip-two-open")
    stripThree.toggleClass("strip-three-open")
}

showMenuButton.click(showMenu)