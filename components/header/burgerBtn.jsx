'use client'

import anime from "animejs"

export default function BurgerBtn() {
    function BurgerClick() {
        if(document.querySelector('.burger_menu').classList.contains('active')) {
            document.querySelector('.burger_menu').classList.remove('active')
    
            anime({
                targets: '.burger_menu',
                top: '-100vh',
                duration: 500,
                easing: 'spring(1, 100, 20, 10)'
            })
        }
        else {
            document.querySelector('.burger_menu').classList.add('active')
            
            anime({
                targets: '.burger_menu.active',
                top: '0vh',
                duration: 700,
                easing: 'spring(1, 100, 15, 5)'
            })
        }
    }

    return (
        <button className="close" onClick={() => BurgerClick()}>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5.00001 5L19 19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
        </button>
    )
}