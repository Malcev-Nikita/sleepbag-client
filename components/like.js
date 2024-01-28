'use client'

import anime from "animejs"


function LikeClick() {
    if(document.querySelector('.cart').classList.contains('active')) {
        document.querySelector('.cart').classList.remove('active')

        anime({
            targets: 'main',
            filter: "blur(0px)",
            // filter: "brightness(100%)",
            duration: 500,
            easing: 'spring(1, 100, 20, 10)'
        })

        anime({
            targets: '.cart',
            // left: '-50%',
            top: '100vh',
            duration: 500,
            easing: 'spring(1, 100, 20, 10)'
        })
    }
    else {
        // document.querySelector('.burger').classList.remove('active')
        document.querySelector('.cart').classList.add('active')

        // document.querySelector('main').style.filter = ''
        anime({
            targets: 'main',
            filter: "blur(4px)",
            // filter: "brightness(80%)",
            duration: 500,
            easing: 'spring(1, 100, 20, 10)'
        })
        
        anime({
            targets: '.cart.active',
            top: '10vh',
            // left: '-20%',
            duration: 700,
            easing: 'spring(1, 100, 15, 5)'
        })
    }
}

export function Like() {
    return (
        <button onClick={() => LikeClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M1 8.625C1 4.04167 4.64583 3 6.72917 3C9.33333 3 11.4167 5.08333 12.4583 6.64583C13.5 5.08333 15.5833 3 18.1875 3C20.2708 3 23.9167 4.04167 23.9167 8.625C23.9167 15.5 12.4583 21.75 12.4583 21.75C12.4583 21.75 1 15.5 1 8.625Z" stroke="white" stroke-width="1.5"/>
            </svg>
        </button>
    )
}

export function LikeClose() {
    return (
        <button className="close" onClick={() => LikeClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M18.1213 16L24.0588 10.0625C24.3406 9.78121 24.4991 9.3995 24.4994 9.00133C24.4998 8.60317 24.342 8.22118 24.0607 7.93938C23.7794 7.65759 23.3977 7.49908 22.9995 7.49873C22.6013 7.49838 22.2193 7.65621 21.9375 7.93751L16 13.875L10.0625 7.93751C9.78075 7.65572 9.39855 7.49741 9.00004 7.49741C8.60152 7.49741 8.21933 7.65572 7.93754 7.93751C7.65575 8.2193 7.49744 8.60149 7.49744 9.00001C7.49744 9.39852 7.65575 9.78072 7.93754 10.0625L13.875 16L7.93754 21.9375C7.65575 22.2193 7.49744 22.6015 7.49744 23C7.49744 23.3985 7.65575 23.7807 7.93754 24.0625C8.21933 24.3443 8.60152 24.5026 9.00004 24.5026C9.39855 24.5026 9.78075 24.3443 10.0625 24.0625L16 18.125L21.9375 24.0625C22.2193 24.3443 22.6015 24.5026 23 24.5026C23.3986 24.5026 23.7807 24.3443 24.0625 24.0625C24.3443 23.7807 24.5026 23.3985 24.5026 23C24.5026 22.6015 24.3443 22.2193 24.0625 21.9375L18.1213 16Z" fill="white"/>
            </svg>
        </button>
    )
}