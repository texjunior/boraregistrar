/*abre e fecha o menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
/* fechar menu ao clicar em um item do menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}
/*mudar o header da pagina quando der scrool*/

function headerEffect() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/*carrocel  testimonials swiper*/
const swiper = new Swiper('.swiper-container', {

        slidesPerView: 1,
        pagination: {
            el: `.swiper-pagination`,
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            767: {
                slidesPerView: 2,
                setWrapperSize: true
            }
        }
    })
    /*carregar pagina durante a rolagem scrollreveal*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .links,
    footer .brand, footer .social`, { interval: 100 })

/* botao voltar para o topo*/
function backToTop() {
    const backToTopButton = document.querySelector('.to-top')
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}


/* Efeitos no Scroll*/
window.addEventListener('scroll', function() {
    backToTop()
    headerEffect()
    activateMenuAtCurrentSection()

})