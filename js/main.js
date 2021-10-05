
/* mostrar menu */
const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/* activar menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    /* activa links */
    navLink.forEach(n =>n.classList.remove('active'))
    this.classList.add('active')
    
    /* oculta menu en moviles */
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2500,
    reset: true
})


/* scroll inicio */
sr.reveal('.inicio__titulo',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.inicio__img',{delay: 400})
sr.reveal('.inicio__social-icon',{interval: 200})


sr.reveal('.about__img',{})
sr.reveal('.img',{delay: 200})
sr.reveal('.about__subtitulo',{delay: 400})
sr.reveal('.about__text',{delay: 250})


sr.reveal('.skills__subtitulo',{})
sr.reveal('.skills__text',{delay: 100})
sr.reveal('.skills__data',{interval: 400})
sr.reveal('.skills__img',{delay: 300})


sr.reveal('.trabajo__img',{interval: 350})

sr.reveal('.contact__input',{interval: 200})
