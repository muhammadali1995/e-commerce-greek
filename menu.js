const menuBtn = document.getElementById('menuBtn')
const menuCloseBtn = document.getElementById('menuCloseBtn')
const menubar = document.getElementById('menubar')
const dropdownItems = document.querySelectorAll('.dropdown')
menuBtn.addEventListener('click', () => {
    menubar.classList.toggle('hidden')
})

menuCloseBtn.addEventListener('click', () => {
    menubar.classList.add('hidden')
})
console.log(dropdownItems)
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        dropdownItems.forEach(e => e.removeAttribute('style'))
        item.setAttribute('style', 'color:#009289 !important;')
    })
})