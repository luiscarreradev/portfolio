/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId)
    const navList = document.querySelector(navId)

    if(toggle && navList){
        toggle.addEventListener('click', () => {
            navList.classList.toggle('show')
        })
    }
}

showMenu('.nav__toggle','.nav__list');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')
console.log(navLink)

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.querySelector('.nav__list')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


