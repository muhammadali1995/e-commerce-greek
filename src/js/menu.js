const menuBtn = document.getElementById('menuBtn')
const menuCloseBtn = document.getElementById('menuCloseBtn')
const menubar = document.getElementById('menubar')
const dropdownItems = document.querySelectorAll('.dropdown')
const subDropdown = document.querySelector('.subDropdown')

menuBtn.addEventListener('click', () => {
    menubar.classList.toggle('hidden')
})

menuCloseBtn.addEventListener('click', () => {
    menubar.classList.add('hidden')
})
console.log(dropdownItems)
dropdownItems.forEach(item => {
    subDropdown.classList.add('hidden')
    item.addEventListener('click', () => {
        dropdownItems.forEach(e => e.removeAttribute('style'))
        item.setAttribute('style', 'color:#009289 !important;')
        subDropdown.classList.remove('hidden')
    })
})
document.addEventListener('click',(e)=>{
    console.log(e.path)
    if(e.path.document.all.menubar) {
        console.log('sfs')
        menubar.classList.add('hidden')
    }
})