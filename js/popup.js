const popup = document.createElement('section')
const WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY'

const isShowWelcomePopup = JSON.parse(localStorage.getItem(WELCOME_POPUP_KEY))

function showWelcomePopup() {
    const content = `
    <!-- welcome popup -->
    
    <div class="welcome-popup">
        <div class="welcome-popup__wrapper">
            <p>Привет, добро пожаловать на маркетплейс!</p>
            <button class="welcome-popup__button by_button">Закрыть и не показывать больше</button>
        </div>
    </div>
    `

    popup.insertAdjacentHTML('afterbegin', content)
    
    document.body.append(popup)
    document.body.style.overflow = 'hidden'
    
    const closebutton = document.querySelector('.welcome-popup__button')
    
    closebutton.addEventListener('click', (event)=>{
        localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(true))
        popup.replaceWith('')
        document.body.style.overflow = 'auto'
    })
}

if(!isShowWelcomePopup){
    setTimeout(showWelcomePopup,3000)
}


// localStorage.clear()