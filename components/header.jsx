import Image from 'next/image'


export default function Header() {
    return (
        <header className="container m-auto">
            <div className='nav_left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="20" viewBox="0 0 33 20" fill="none">
                    <path d="M0 0H32.5926V2.5H0V0ZM0 8.75H21.7284V11.25H0V8.75ZM0 17.5H32.5926V20H0V17.5Z" fill="#333333"/>
                </svg>
                <p>О НАС</p>
                <p>КАТАЛОГ</p>
                <q><p>КОНТАКТЫ</p></q>
            </div>
            <div className='header_logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="17" viewBox="0 0 34 17" fill="none">
                    <g clip-path="url(#clip0_29_75)">
                    <mask id="mask0_29_75"  maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="17">
                        <path d="M0.246857 -3.05176e-05H32.7686V16.7536H0.246857V-3.05176e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_29_75)">
                    <mask id="mask1_29_75"  maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="17">
                        <path d="M0.847397 0.238647H32.0872V16.0221H0.847397V0.238647Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1_29_75)">
                    <path d="M31.1405 12.0416C31.4254 13.7317 30.2551 15.1175 28.542 15.1175H4.35471C2.63778 15.1175 1.49058 13.7355 1.80625 12.0493L3.25757 4.21148C3.56939 2.52534 5.23243 1.14331 6.94552 1.14331H26.1783C27.8952 1.14331 29.5352 2.52918 29.8201 4.21917L31.1405 12.0416Z" stroke="white" stroke-width="2.444" stroke-miterlimit="10"/>
                    </g>
                    <mask id="mask2_29_75"  maskUnits="userSpaceOnUse" x="15" y="0" width="3" height="6">
                        <path d="M15.0295 0.238647H17.986V5.91301H15.0295V0.238647Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask2_29_75)">
                    <path d="M16.4456 4.27692V1.14331" stroke="white" stroke-width="2.444" stroke-miterlimit="10"/>
                    </g>
                    <path d="M14.0132 4.27692H18.9869" stroke="white" stroke-width="2.444" stroke-miterlimit="10" stroke-linecap="round"/>
                    <mask id="mask3_29_75"  maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="17">
                        <path d="M0.847397 0.238647H32.0872V16.0221H0.847397V0.238647Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask3_29_75)">
                    <path d="M14.1474 15.1175L24.0679 9.55859M18.305 10.4017L27.7289 9.02353" stroke="white" stroke-width="2.444" stroke-miterlimit="10" stroke-linecap="round"/>
                    </g>
                    </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_29_75">
                        <rect width="33.2609" height="17" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                <p>SleepBag</p>
            </div>
            <div className='header_searching'>
                <input className='hsinput' type="text" placeholder=''/>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M6.875 11.875C9.63642 11.875 11.875 9.63642 11.875 6.875C11.875 4.11358 9.63642 1.875 6.875 1.875C4.11358 1.875 1.875 4.11358 1.875 6.875C1.875 9.63642 4.11358 11.875 6.875 11.875Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.125 13.125L10.4062 10.4062" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='header_right_buttons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M19 7C19 10.3138 16.3138 13 13 13C9.68621 13 7 10.3138 7 7C7 3.68621 9.68621 1 13 1C16.3138 1 19 3.68621 19 7Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M8.28028 14C7.88281 14.1923 7.34723 14.4947 6.79473 14.9561C6.13511 15.5073 5.76584 16.0276 5.45294 16.4711C4.98219 17.1453 4.28874 18.1347 4.07733 19.5036C4.02377 19.8496 4.01531 20.2521 4.00404 21.0544C3.98994 21.849 4.01531 22.5104 4.04068 22.9667C9.9716 23.0103 15.9053 22.9564 21.8391 23C21.8955 22.6411 21.9603 22.2412 21.9828 21.6491C22.0026 21.1877 22.0364 20.3443 21.8757 19.5036C21.6136 18.1347 20.9201 17.1837 20.424 16.5044C19.5868 15.356 18.6143 14.546 17.8165 14" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M1 8.625C1 4.04167 4.64583 3 6.72917 3C9.33333 3 11.4167 5.08333 12.4583 6.64583C13.5 5.08333 15.5833 3 18.1875 3C20.2708 3 23.9167 4.04167 23.9167 8.625C23.9167 15.5 12.4583 21.75 12.4583 21.75C12.4583 21.75 1 15.5 1 8.625Z" stroke="white" stroke-width="1.5"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M8.33335 22.9167C8.90865 22.9167 9.37502 22.4503 9.37502 21.875C9.37502 21.2997 8.90865 20.8333 8.33335 20.8333C7.75806 20.8333 7.29169 21.2997 7.29169 21.875C7.29169 22.4503 7.75806 22.9167 8.33335 22.9167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.7917 22.9167C20.367 22.9167 20.8333 22.4503 20.8333 21.875C20.8333 21.2997 20.367 20.8333 19.7917 20.8333C19.2164 20.8333 18.75 21.2997 18.75 21.875C18.75 22.4503 19.2164 22.9167 19.7917 22.9167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.13544 2.13541H4.21877L6.9896 15.0729C7.09125 15.5467 7.35489 15.9703 7.73514 16.2707C8.11539 16.5711 8.58846 16.7295 9.07294 16.7187H19.2604C19.7346 16.718 20.1943 16.5555 20.5636 16.2582C20.9329 15.9608 21.1897 15.5464 21.2917 15.0833L23.0104 7.34374H5.33335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </header>
    );
}