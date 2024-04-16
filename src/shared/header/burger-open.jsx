'use client'

import anime from "animejs"

export default function BurgerOpen() {
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
        <button className='burger_button hidden' onClick={() => BurgerClick()}>
            <svg width="32" height="16" className='burger_button hidden' viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H31M1 8H24.75M1 15H31" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>
    )
}