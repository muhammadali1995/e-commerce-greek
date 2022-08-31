const menuBtns = document.querySelectorAll('.menuBtn')
const menuCloseBtns = document.querySelectorAll('.menuCloseBtn')
const menubar = document.getElementById('menubar')
const dropdownItems = document.querySelectorAll('.dropdown')
const subDropdown = document.querySelector('.subDropdown')
const mainDropdown = document.getElementById('mainDropdown')
const itemTitle = document.getElementById('itemTitle')
const forwardBtn = document.querySelector('.forwardBtn')

menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener('click', () => {
        menubar.classList.toggle('hidden')
    })
})

menuCloseBtns.forEach(menuCloseBtn => {
    menuCloseBtn.addEventListener('click', () => {
        menubar.classList.add('hidden')
    })
})

dropdownItems.forEach(item => {
    subDropdown.classList.add('hidden')
    item.addEventListener('click', () => {
        itemTitle.innerText = item.querySelector('h5').innerText
        dropdownItems.forEach(e => e.removeAttribute('style'))
        item.setAttribute('style', 'color:#009289 !important;')
        if (window.innerWidth < 768) {
            subDropdown.classList.remove('hidden')
            mainDropdown.classList.add('hidden')
            menubar.classList.remove('flex')
        }
        else {
            subDropdown.classList.remove('hidden')
        }
    })
})

if (forwardBtn) {
    forwardBtn.addEventListener('click', () => {
        mainDropdown.classList.remove('hidden')
        subDropdown.classList.add('hidden')
    })
}