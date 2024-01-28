'use client'

import anime from "animejs"


function BurgerClick() {
    if(document.querySelector('.burger').classList.contains('active')) {
        document.querySelector('.burger').classList.remove('active')

        anime({
            targets: '.burger',
            left: '-50%',
            duration: 500,
            easing: 'spring(1, 100, 20, 10)'
        })
    }
    else {
        document.querySelector('.cart').classList.remove('active')
        document.querySelector('.burger').classList.add('active')

        anime({
            targets: '.cart',
            left: '-50%',
            duration: 500,
            easing: 'spring(1, 100, 20, 10)'
        })
        
        anime({
            targets: '.burger.active',
            left: '-20%',
            duration: 700,
            easing: 'spring(1, 100, 15, 5)'
        })
    }
}

export function Burger() {
    return (
        <button onClick={() => BurgerClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="20" viewBox="0 0 33 20" fill="none">
                <path d="M0 0H32.5926V2.5H0V0ZM0 8.75H21.7284V11.25H0V8.75ZM0 17.5H32.5926V20H0V17.5Z" fill="#000"/>
            </svg>
        </button>
    )
}

export function BurgerClose() {
    return (
        <button className="close" onClick={() => BurgerClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M18.1213 16L24.0588 10.0625C24.3406 9.78121 24.4991 9.3995 24.4994 9.00133C24.4998 8.60317 24.342 8.22118 24.0607 7.93938C23.7794 7.65759 23.3977 7.49908 22.9995 7.49873C22.6013 7.49838 22.2193 7.65621 21.9375 7.93751L16 13.875L10.0625 7.93751C9.78075 7.65572 9.39855 7.49741 9.00004 7.49741C8.60152 7.49741 8.21933 7.65572 7.93754 7.93751C7.65575 8.2193 7.49744 8.60149 7.49744 9.00001C7.49744 9.39852 7.65575 9.78072 7.93754 10.0625L13.875 16L7.93754 21.9375C7.65575 22.2193 7.49744 22.6015 7.49744 23C7.49744 23.3985 7.65575 23.7807 7.93754 24.0625C8.21933 24.3443 8.60152 24.5026 9.00004 24.5026C9.39855 24.5026 9.78075 24.3443 10.0625 24.0625L16 18.125L21.9375 24.0625C22.2193 24.3443 22.6015 24.5026 23 24.5026C23.3986 24.5026 23.7807 24.3443 24.0625 24.0625C24.3443 23.7807 24.5026 23.3985 24.5026 23C24.5026 22.6015 24.3443 22.2193 24.0625 21.9375L18.1213 16Z" fill="white"/>
            </svg>
        </button>
    )
}