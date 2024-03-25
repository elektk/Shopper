// const { default: Link } = require("next/link");

const mobileMenu = document.querySelector('.mobile-menu');
const homePage = document.querySelector('.home_page');

// const nav = {
//     featured:document.querySelector('#featured'),
//     sellers:document.querySelector('#sellers'),
//     trending:document.querySelector('#trending'),
//     launches:document.querySelector('#launches')
// }

document.querySelector('.menu_button').addEventListener('click', (event)=>{
    mobileMenu.classList.remove('hidden')
    mobileMenu.classList.add('visible')
})

mobileMenu.querySelector('.mobile-menu__close')
      .addEventListener('click',(event)=>{
          mobileMenu.classList.remove('visible')
          mobileMenu.classList.add('hidden')
})

// function scrllToSection (event) {
//     const classes = event.target.className
//     if(classes.includes('nav_elem_btn')) {
//         const content = event.target.innerText
//         switch(content){
//             case 'Featured':
//                 nav.featured.scrollIntoView()
//                 case 'Sellers':
//                     nav.sellers.scrollIntoView()
//                     case 'Trending':
//                         nav.trending.scrollIntoView()
//                         case 'Launches':
//                             nav.launches.scrollIntoView()
//         }
//     }
// }

// mobileMenu.addEventListener("click", scrllToSection);
// homePage.addEventListener("click", scrllToSection);