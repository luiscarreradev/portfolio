/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId)
    const nav = document.querySelector(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('.nav__icon--menu','.nav__list');
