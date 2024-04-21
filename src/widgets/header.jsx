'use client'

import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getFavorites } from '@/store/favorites/favorites.slice';
import { getProducts } from '@/store/products/products.slice';
import { getCart } from '@/store/cart/cart.slice';

import BurgerOpen from '@/shared/header/burger-open';
import HeaderMenu from '@/shared/header/header-menu';
import BurgerMenu from '@/shared/header/burger-menu';
import Favorites from '@/shared/header/favorites';
import { Like, LikeClose } from '@/features/like';

export default function Header() {
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('userJWT')) {
            dispatch(getFavorites(localStorage.getItem('userJWT')))
            dispatch(getCart(localStorage.getItem('userJWT')))
        }
        dispatch(getProducts())
    }, [dispatch]);

    return (
        <header className='header fixed z-10 top-[22px] left-[50%] translate-x-[-50%]'>
            <div className="header_nav w-[90vw] m-auto bg-[#1A1A1A] rounded-[23px] flex items-center justify-between px-[70px] py-[18px]">
                <BurgerOpen />

                <Link className='logo_link' href='/'>                    
                    <svg width="192" height="32" viewBox="0 0 192 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17.2009H6.92633C7.03575 17.8794 7.35307 18.4702 7.87829 18.9736C8.40351 19.4769 9.10377 19.8708 9.97913 20.1553C10.8764 20.4179 11.9268 20.5492 13.1305 20.5492C14.7936 20.5492 16.1067 20.3413 17.0696 19.9255C18.0325 19.4878 18.514 18.8532 18.514 18.0216C18.514 17.387 18.2404 16.8946 17.6933 16.5444C17.1462 16.1943 16.0958 15.9426 14.542 15.7894L9.94631 15.3627C6.5543 15.0563 4.09233 14.2904 2.56044 13.0648C1.02855 11.8174 0.26261 10.1433 0.26261 8.04243C0.26261 6.33546 0.755 4.89111 1.73979 3.70937C2.74646 2.52762 4.14704 1.64131 5.94154 1.05044C7.75793 0.437683 9.86971 0.131305 12.277 0.131305C14.6405 0.131305 16.7413 0.470509 18.5796 1.14892C20.4179 1.80544 21.8732 2.74646 22.9455 3.97198C24.0397 5.19749 24.6306 6.61996 24.7181 8.23939H17.8246C17.7371 7.64851 17.4526 7.14518 16.9711 6.72938C16.5116 6.2917 15.8769 5.96343 15.0672 5.74459C14.2575 5.50387 13.2836 5.3835 12.1457 5.3835C10.6138 5.3835 9.3992 5.5914 8.50199 6.0072C7.60474 6.40112 7.15611 6.99199 7.15611 7.77982C7.15611 8.34881 7.41873 8.80837 7.94394 9.15852C8.49105 9.50867 9.46486 9.74939 10.8654 9.8807L15.7566 10.3731C18.0982 10.5919 19.9693 10.9749 21.3698 11.522C22.7704 12.0472 23.788 12.7803 24.4227 13.7214C25.0573 14.6624 25.3746 15.8332 25.3746 17.2338C25.3746 18.9626 24.8604 20.4726 23.8318 21.7638C22.8032 23.0331 21.3589 24.0288 19.4987 24.751C17.6386 25.4513 15.4721 25.8014 12.9991 25.8014C10.4606 25.8014 8.2175 25.4513 6.26981 24.751C4.344 24.0288 2.83399 23.0221 1.73979 21.731C0.645579 20.4179 0.0656525 18.9079 0 17.2009ZM28.1934 0H34.9228V25.2762H28.1934V0ZM49.6086 25.8014C47.3326 25.8014 45.2974 25.3856 43.5029 24.554C41.7303 23.7224 40.3297 22.5626 39.3012 21.0744C38.2726 19.5644 37.7583 17.8137 37.7583 15.8222C37.7583 13.8746 38.2507 12.1676 39.2355 10.7014C40.2203 9.21323 41.5662 8.05337 43.2731 7.22177C45.002 6.39017 46.9497 5.97438 49.1162 5.97438C51.3703 5.97438 53.2851 6.46677 54.8608 7.45156C56.4583 8.41446 57.6839 9.78222 58.5373 11.5548C59.4127 13.3275 59.8504 15.4174 59.8504 17.8246H43.1747V13.787H56.0754L53.876 15.1985C53.7885 14.2356 53.5477 13.4259 53.1538 12.7694C52.7599 12.091 52.2347 11.5767 51.5782 11.2266C50.9435 10.8764 50.1776 10.7014 49.2803 10.7014C48.2956 10.7014 47.453 10.8983 46.7527 11.2922C46.0524 11.6861 45.5053 12.2332 45.1114 12.9335C44.7175 13.6119 44.5205 14.4107 44.5205 15.3299C44.5205 16.5116 44.7831 17.5183 45.3084 18.3499C45.8555 19.1596 46.6433 19.7833 47.6719 20.221C48.7223 20.6586 50.0025 20.8775 51.5125 20.8775C52.8912 20.8775 54.259 20.7024 55.6158 20.3523C56.9945 19.9802 58.2419 19.466 59.358 18.8094V23.0768C58.0668 23.9522 56.5896 24.6306 54.9265 25.1121C53.2851 25.5716 51.5125 25.8014 49.6086 25.8014ZM73.7154 25.8014C71.4394 25.8014 69.4042 25.3856 67.6097 24.554C65.8371 23.7224 64.4365 22.5626 63.4079 21.0744C62.3794 19.5644 61.8651 17.8137 61.8651 15.8222C61.8651 13.8746 62.3575 12.1676 63.3423 10.7014C64.3271 9.21323 65.6729 8.05337 67.3799 7.22177C69.1087 6.39017 71.0564 5.97438 73.223 5.97438C75.477 5.97438 77.3919 6.46677 78.9676 7.45156C80.5651 8.41446 81.7906 9.78222 82.6441 11.5548C83.5195 13.3275 83.9572 15.4174 83.9572 17.8246H67.2814V13.787H80.1821L77.9828 15.1985C77.8952 14.2356 77.6545 13.4259 77.2606 12.7694C76.8667 12.091 76.3415 11.5767 75.6849 11.2266C75.0503 10.8764 74.2844 10.7014 73.3871 10.7014C72.4023 10.7014 71.5598 10.8983 70.8595 11.2922C70.1592 11.6861 69.6121 12.2332 69.2182 12.9335C68.8243 13.6119 68.6273 14.4107 68.6273 15.3299C68.6273 16.5116 68.8899 17.5183 69.4151 18.3499C69.9622 19.1596 70.7501 19.7833 71.7786 20.221C72.8291 20.6586 74.1093 20.8775 75.6193 20.8775C76.998 20.8775 78.3658 20.7024 79.7226 20.3523C81.1013 19.9802 82.3487 19.466 83.4648 18.8094V23.0768C82.1736 23.9522 80.6964 24.6306 79.0332 25.1121C77.3919 25.5716 75.6193 25.8014 73.7154 25.8014ZM86.8253 6.53242H93.5549V11.9159L93.2595 12.7038V17.9559L93.5549 19.4988V30.6925H86.8253V6.53242ZM91.4212 15.9207C91.7057 13.8855 92.2966 12.1348 93.1938 10.6685C94.1129 9.1804 95.2728 8.03149 96.6734 7.22177C98.074 6.39017 99.6606 5.97438 101.433 5.97438C103.271 5.97438 104.88 6.39017 106.259 7.22177C107.659 8.05337 108.743 9.21323 109.508 10.7014C110.296 12.1895 110.69 13.9293 110.69 15.9207C110.69 17.8684 110.296 19.5973 109.508 21.1073C108.743 22.5954 107.659 23.7553 106.259 24.5868C104.88 25.3966 103.271 25.8014 101.433 25.8014C99.6606 25.8014 98.074 25.3966 96.6734 24.5868C95.2728 23.7553 94.1239 22.5954 93.2266 21.1073C92.3294 19.6191 91.7276 17.8903 91.4212 15.9207ZM103.928 15.9207C103.928 14.9797 103.731 14.1481 103.337 13.4259C102.965 12.7038 102.429 12.1348 101.729 11.719C101.05 11.3032 100.273 11.0953 99.398 11.0953C98.5007 11.0953 97.6472 11.3032 96.8375 11.719C96.0278 12.1348 95.3166 12.7038 94.7038 13.4259C94.0911 14.1481 93.6206 14.9797 93.2923 15.9207C93.6206 16.8399 94.0911 17.6605 94.7038 18.3827C95.3166 19.1049 96.0278 19.6739 96.8375 20.0897C97.6472 20.4836 98.5007 20.6805 99.398 20.6805C100.273 20.6805 101.05 20.4836 101.729 20.0897C102.429 19.6739 102.965 19.1049 103.337 18.3827C103.731 17.6605 103.928 16.8399 103.928 15.9207Z" fill="#F97316"/>
                        <path d="M130.183 13.2287L130.741 11.9485C132.645 11.9922 134.209 12.2877 135.435 12.8348C136.682 13.36 137.612 14.1041 138.225 15.067C138.838 16.008 139.144 17.1022 139.144 18.3496C139.144 19.6845 138.838 20.8772 138.225 21.9277C137.612 22.9562 136.693 23.7769 135.468 24.3896C134.264 24.9805 132.754 25.2759 130.938 25.2759H112.752L114.656 12.6378L112.752 0.65625H130.281C132.557 0.65625 134.33 1.19241 135.599 2.26474C136.868 3.31518 137.503 4.78141 137.503 6.66345C137.503 7.69201 137.262 8.6768 136.781 9.61781C136.299 10.5588 135.522 11.3576 134.45 12.0141C133.4 12.6488 131.977 13.0536 130.183 13.2287ZM119.481 23.7003L116.855 20.5161H129.099C130.084 20.5161 130.85 20.2754 131.397 19.7939C131.944 19.3125 132.218 18.645 132.218 17.7915C132.218 16.9381 131.922 16.2597 131.332 15.7563C130.741 15.2311 129.865 14.9685 128.705 14.9685H118.595V10.3072H127.786C128.574 10.3072 129.231 10.0774 129.756 9.61781C130.303 9.13636 130.577 8.49078 130.577 7.68107C130.577 7.02454 130.347 6.48838 129.887 6.07258C129.428 5.6349 128.771 5.41606 127.918 5.41606H116.888L119.481 2.23191L121.155 12.6378L119.481 23.7003ZM158.868 25.2759L158.015 18.5137L158.901 15.9205L158.015 13.3272L158.868 6.53215H165.827L164.646 15.8876L165.827 25.2759H158.868ZM160.444 15.9205C160.138 17.89 159.525 19.6189 158.606 21.107C157.708 22.5951 156.559 23.755 155.159 24.5866C153.78 25.3963 152.205 25.8011 150.432 25.8011C148.594 25.8011 146.974 25.3963 145.574 24.5866C144.195 23.755 143.112 22.5951 142.324 21.107C141.536 19.597 141.142 17.8681 141.142 15.9205C141.142 13.929 141.536 12.1892 142.324 10.7011C143.112 9.21296 144.195 8.0531 145.574 7.2215C146.974 6.3899 148.594 5.9741 150.432 5.9741C152.205 5.9741 153.78 6.3899 155.159 7.2215C156.559 8.03121 157.719 9.18013 158.638 10.6683C159.558 12.1345 160.159 13.8852 160.444 15.9205ZM147.937 15.9205C147.937 16.8396 148.123 17.6602 148.495 18.3824C148.889 19.1046 149.425 19.6736 150.104 20.0894C150.782 20.4833 151.559 20.6803 152.434 20.6803C153.353 20.6803 154.218 20.4833 155.028 20.0894C155.837 19.6736 156.549 19.1046 157.161 18.3824C157.774 17.6602 158.234 16.8396 158.54 15.9205C158.234 14.9794 157.774 14.1478 157.161 13.4257C156.549 12.7035 155.837 12.1345 155.028 11.7187C154.218 11.3029 153.353 11.095 152.434 11.095C151.559 11.095 150.782 11.3029 150.104 11.7187C149.425 12.1345 148.889 12.7035 148.495 13.4257C148.123 14.1478 147.937 14.9794 147.937 15.9205ZM185.302 20.549V17.3648L185.532 16.577V11.9813L185.302 11.292V6.53215H191.999V20.2863C191.999 22.5842 191.463 24.5537 190.391 26.1951C189.318 27.8364 187.819 29.0838 185.893 29.9373C183.989 30.7907 181.735 31.2175 179.131 31.2175C177.402 31.2175 175.794 30.9877 174.306 30.5281C172.839 30.0904 171.373 29.4339 169.907 28.5586V23.5033C171.264 24.51 172.686 25.2322 174.174 25.6698C175.684 26.1294 177.194 26.3592 178.704 26.3592C180.849 26.3592 182.479 25.8996 183.596 24.9805C184.733 24.0614 185.302 22.5842 185.302 20.549ZM177.26 23.3064C175.487 23.3064 173.912 22.9453 172.533 22.2231C171.154 21.5009 170.06 20.4942 169.25 19.2031C168.463 17.89 168.069 16.3691 168.069 14.6402C168.069 12.8895 168.463 11.3685 169.25 10.0774C170.06 8.78622 171.154 7.77954 172.533 7.05737C173.912 6.33519 175.487 5.9741 177.26 5.9741C178.573 5.9741 179.777 6.182 180.871 6.5978C181.965 6.99171 182.939 7.52788 183.792 8.20629C184.646 8.86281 185.357 9.58499 185.926 10.3728C186.517 11.1388 186.966 11.9047 187.272 12.6707C187.578 13.4366 187.732 14.115 187.732 14.7059C187.732 15.5156 187.491 16.4128 187.009 17.3976C186.55 18.3824 185.871 19.3234 184.974 20.2207C184.077 21.1179 182.972 21.862 181.659 22.4529C180.368 23.0219 178.901 23.3064 177.26 23.3064ZM179.525 18.7435C180.816 18.7435 181.965 18.4043 182.972 17.7259C183.978 17.0475 184.832 16.0189 185.532 14.6402C184.81 13.2396 183.946 12.2111 182.939 11.5546C181.932 10.8762 180.794 10.5369 179.525 10.5369C178.562 10.5369 177.72 10.7011 176.997 11.0293C176.297 11.3576 175.761 11.8391 175.389 12.4737C175.017 13.0865 174.831 13.8086 174.831 14.6402C174.831 15.4499 175.017 16.1721 175.389 16.8068C175.761 17.4195 176.297 17.901 176.997 18.2511C177.698 18.5794 178.54 18.7435 179.525 18.7435Z" fill="#F4F4F4"/>
                    </svg>
                </Link>

                <HeaderMenu />

                <div className="nav_links flex gap-[30px]">
                    <Link href='/#contacts' className="nofill-button">Задать вопрос</Link>

                    <div className='flex gap-[25px]'>
                        <Link href="/personal/cart" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M8.33335 22.9167C8.90865 22.9167 9.37502 22.4503 9.37502 21.875C9.37502 21.2997 8.90865 20.8333 8.33335 20.8333C7.75806 20.8333 7.29169 21.2997 7.29169 21.875C7.29169 22.4503 7.75806 22.9167 8.33335 22.9167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.7917 22.9167C20.367 22.9167 20.8333 22.4503 20.8333 21.875C20.8333 21.2997 20.367 20.8333 19.7917 20.8333C19.2164 20.8333 18.75 21.2997 18.75 21.875C18.75 22.4503 19.2164 22.9167 19.7917 22.9167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.13544 2.13541H4.21877L6.9896 15.0729C7.09125 15.5467 7.35489 15.9703 7.73514 16.2707C8.11539 16.5711 8.58846 16.7295 9.07294 16.7187H19.2604C19.7346 16.718 20.1943 16.5555 20.5636 16.2582C20.9329 15.9608 21.1897 15.5464 21.2917 15.0833L23.0104 7.34374H5.33335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                        
                        <Like/>

                        <Link href="/personal" className='personal_link flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M19 7C19 10.3138 16.3138 13 13 13C9.68621 13 7 10.3138 7 7C7 3.68621 9.68621 1 13 1C16.3138 1 19 3.68621 19 7Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M8.28028 14C7.88281 14.1923 7.34723 14.4947 6.79473 14.9561C6.13511 15.5073 5.76584 16.0276 5.45294 16.4711C4.98219 17.1453 4.28874 18.1347 4.07733 19.5036C4.02377 19.8496 4.01531 20.2521 4.00404 21.0544C3.98994 21.849 4.01531 22.5104 4.04068 22.9667C9.9716 23.0103 15.9053 22.9564 21.8391 23C21.8955 22.6411 21.9603 22.2412 21.9828 21.6491C22.0026 21.1877 22.0364 20.3443 21.8757 19.5036C21.6136 18.1347 20.9201 17.1837 20.424 16.5044C19.5868 15.356 18.6143 14.546 17.8165 14" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="cart mobile_none absolute right-[5vw] top-[-100vh] h-[85vh] w-[40vw] bg-[#262626] rounded-[33px]">
                <div className="flex justify-between px-[52px] pt-[38px] pb-[0px]">
                    <h3 className='text-[#F97316] text-[24px] font-semibold uppercase'>Избранные товары</h3> 

                    <LikeClose/> 
                </div>
                <div className='cart_hr'/>
                
                <Favorites />
            </div>

            <div className="cart mobile_block absolute right-[5vw] top-[-100vh] h-[85vh] w-[40vw] bg-[#262626] rounded-[33px]">
                <div className="flex justify-between pt-[38px] px-[20px] pb-[0px]">
                    <LikeClose/> 
                    <svg width="162" height="32" viewBox="0 0 192 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17.2009H6.92633C7.03575 17.8794 7.35307 18.4702 7.87829 18.9736C8.40351 19.4769 9.10377 19.8708 9.97913 20.1553C10.8764 20.4179 11.9268 20.5492 13.1305 20.5492C14.7936 20.5492 16.1067 20.3413 17.0696 19.9255C18.0325 19.4878 18.514 18.8532 18.514 18.0216C18.514 17.387 18.2404 16.8946 17.6933 16.5444C17.1462 16.1943 16.0958 15.9426 14.542 15.7894L9.94631 15.3627C6.5543 15.0563 4.09233 14.2904 2.56044 13.0648C1.02855 11.8174 0.26261 10.1433 0.26261 8.04243C0.26261 6.33546 0.755 4.89111 1.73979 3.70937C2.74646 2.52762 4.14704 1.64131 5.94154 1.05044C7.75793 0.437683 9.86971 0.131305 12.277 0.131305C14.6405 0.131305 16.7413 0.470509 18.5796 1.14892C20.4179 1.80544 21.8732 2.74646 22.9455 3.97198C24.0397 5.19749 24.6306 6.61996 24.7181 8.23939H17.8246C17.7371 7.64851 17.4526 7.14518 16.9711 6.72938C16.5116 6.2917 15.8769 5.96343 15.0672 5.74459C14.2575 5.50387 13.2836 5.3835 12.1457 5.3835C10.6138 5.3835 9.3992 5.5914 8.50199 6.0072C7.60474 6.40112 7.15611 6.99199 7.15611 7.77982C7.15611 8.34881 7.41873 8.80837 7.94394 9.15852C8.49105 9.50867 9.46486 9.74939 10.8654 9.8807L15.7566 10.3731C18.0982 10.5919 19.9693 10.9749 21.3698 11.522C22.7704 12.0472 23.788 12.7803 24.4227 13.7214C25.0573 14.6624 25.3746 15.8332 25.3746 17.2338C25.3746 18.9626 24.8604 20.4726 23.8318 21.7638C22.8032 23.0331 21.3589 24.0288 19.4987 24.751C17.6386 25.4513 15.4721 25.8014 12.9991 25.8014C10.4606 25.8014 8.2175 25.4513 6.26981 24.751C4.344 24.0288 2.83399 23.0221 1.73979 21.731C0.645579 20.4179 0.0656525 18.9079 0 17.2009ZM28.1934 0H34.9228V25.2762H28.1934V0ZM49.6086 25.8014C47.3326 25.8014 45.2974 25.3856 43.5029 24.554C41.7303 23.7224 40.3297 22.5626 39.3012 21.0744C38.2726 19.5644 37.7583 17.8137 37.7583 15.8222C37.7583 13.8746 38.2507 12.1676 39.2355 10.7014C40.2203 9.21323 41.5662 8.05337 43.2731 7.22177C45.002 6.39017 46.9497 5.97438 49.1162 5.97438C51.3703 5.97438 53.2851 6.46677 54.8608 7.45156C56.4583 8.41446 57.6839 9.78222 58.5373 11.5548C59.4127 13.3275 59.8504 15.4174 59.8504 17.8246H43.1747V13.787H56.0754L53.876 15.1985C53.7885 14.2356 53.5477 13.4259 53.1538 12.7694C52.7599 12.091 52.2347 11.5767 51.5782 11.2266C50.9435 10.8764 50.1776 10.7014 49.2803 10.7014C48.2956 10.7014 47.453 10.8983 46.7527 11.2922C46.0524 11.6861 45.5053 12.2332 45.1114 12.9335C44.7175 13.6119 44.5205 14.4107 44.5205 15.3299C44.5205 16.5116 44.7831 17.5183 45.3084 18.3499C45.8555 19.1596 46.6433 19.7833 47.6719 20.221C48.7223 20.6586 50.0025 20.8775 51.5125 20.8775C52.8912 20.8775 54.259 20.7024 55.6158 20.3523C56.9945 19.9802 58.2419 19.466 59.358 18.8094V23.0768C58.0668 23.9522 56.5896 24.6306 54.9265 25.1121C53.2851 25.5716 51.5125 25.8014 49.6086 25.8014ZM73.7154 25.8014C71.4394 25.8014 69.4042 25.3856 67.6097 24.554C65.8371 23.7224 64.4365 22.5626 63.4079 21.0744C62.3794 19.5644 61.8651 17.8137 61.8651 15.8222C61.8651 13.8746 62.3575 12.1676 63.3423 10.7014C64.3271 9.21323 65.6729 8.05337 67.3799 7.22177C69.1087 6.39017 71.0564 5.97438 73.223 5.97438C75.477 5.97438 77.3919 6.46677 78.9676 7.45156C80.5651 8.41446 81.7906 9.78222 82.6441 11.5548C83.5195 13.3275 83.9572 15.4174 83.9572 17.8246H67.2814V13.787H80.1821L77.9828 15.1985C77.8952 14.2356 77.6545 13.4259 77.2606 12.7694C76.8667 12.091 76.3415 11.5767 75.6849 11.2266C75.0503 10.8764 74.2844 10.7014 73.3871 10.7014C72.4023 10.7014 71.5598 10.8983 70.8595 11.2922C70.1592 11.6861 69.6121 12.2332 69.2182 12.9335C68.8243 13.6119 68.6273 14.4107 68.6273 15.3299C68.6273 16.5116 68.8899 17.5183 69.4151 18.3499C69.9622 19.1596 70.7501 19.7833 71.7786 20.221C72.8291 20.6586 74.1093 20.8775 75.6193 20.8775C76.998 20.8775 78.3658 20.7024 79.7226 20.3523C81.1013 19.9802 82.3487 19.466 83.4648 18.8094V23.0768C82.1736 23.9522 80.6964 24.6306 79.0332 25.1121C77.3919 25.5716 75.6193 25.8014 73.7154 25.8014ZM86.8253 6.53242H93.5549V11.9159L93.2595 12.7038V17.9559L93.5549 19.4988V30.6925H86.8253V6.53242ZM91.4212 15.9207C91.7057 13.8855 92.2966 12.1348 93.1938 10.6685C94.1129 9.1804 95.2728 8.03149 96.6734 7.22177C98.074 6.39017 99.6606 5.97438 101.433 5.97438C103.271 5.97438 104.88 6.39017 106.259 7.22177C107.659 8.05337 108.743 9.21323 109.508 10.7014C110.296 12.1895 110.69 13.9293 110.69 15.9207C110.69 17.8684 110.296 19.5973 109.508 21.1073C108.743 22.5954 107.659 23.7553 106.259 24.5868C104.88 25.3966 103.271 25.8014 101.433 25.8014C99.6606 25.8014 98.074 25.3966 96.6734 24.5868C95.2728 23.7553 94.1239 22.5954 93.2266 21.1073C92.3294 19.6191 91.7276 17.8903 91.4212 15.9207ZM103.928 15.9207C103.928 14.9797 103.731 14.1481 103.337 13.4259C102.965 12.7038 102.429 12.1348 101.729 11.719C101.05 11.3032 100.273 11.0953 99.398 11.0953C98.5007 11.0953 97.6472 11.3032 96.8375 11.719C96.0278 12.1348 95.3166 12.7038 94.7038 13.4259C94.0911 14.1481 93.6206 14.9797 93.2923 15.9207C93.6206 16.8399 94.0911 17.6605 94.7038 18.3827C95.3166 19.1049 96.0278 19.6739 96.8375 20.0897C97.6472 20.4836 98.5007 20.6805 99.398 20.6805C100.273 20.6805 101.05 20.4836 101.729 20.0897C102.429 19.6739 102.965 19.1049 103.337 18.3827C103.731 17.6605 103.928 16.8399 103.928 15.9207Z" fill="#F97316"/>
                        <path d="M130.183 13.2287L130.741 11.9485C132.645 11.9922 134.209 12.2877 135.435 12.8348C136.682 13.36 137.612 14.1041 138.225 15.067C138.838 16.008 139.144 17.1022 139.144 18.3496C139.144 19.6845 138.838 20.8772 138.225 21.9277C137.612 22.9562 136.693 23.7769 135.468 24.3896C134.264 24.9805 132.754 25.2759 130.938 25.2759H112.752L114.656 12.6378L112.752 0.65625H130.281C132.557 0.65625 134.33 1.19241 135.599 2.26474C136.868 3.31518 137.503 4.78141 137.503 6.66345C137.503 7.69201 137.262 8.6768 136.781 9.61781C136.299 10.5588 135.522 11.3576 134.45 12.0141C133.4 12.6488 131.977 13.0536 130.183 13.2287ZM119.481 23.7003L116.855 20.5161H129.099C130.084 20.5161 130.85 20.2754 131.397 19.7939C131.944 19.3125 132.218 18.645 132.218 17.7915C132.218 16.9381 131.922 16.2597 131.332 15.7563C130.741 15.2311 129.865 14.9685 128.705 14.9685H118.595V10.3072H127.786C128.574 10.3072 129.231 10.0774 129.756 9.61781C130.303 9.13636 130.577 8.49078 130.577 7.68107C130.577 7.02454 130.347 6.48838 129.887 6.07258C129.428 5.6349 128.771 5.41606 127.918 5.41606H116.888L119.481 2.23191L121.155 12.6378L119.481 23.7003ZM158.868 25.2759L158.015 18.5137L158.901 15.9205L158.015 13.3272L158.868 6.53215H165.827L164.646 15.8876L165.827 25.2759H158.868ZM160.444 15.9205C160.138 17.89 159.525 19.6189 158.606 21.107C157.708 22.5951 156.559 23.755 155.159 24.5866C153.78 25.3963 152.205 25.8011 150.432 25.8011C148.594 25.8011 146.974 25.3963 145.574 24.5866C144.195 23.755 143.112 22.5951 142.324 21.107C141.536 19.597 141.142 17.8681 141.142 15.9205C141.142 13.929 141.536 12.1892 142.324 10.7011C143.112 9.21296 144.195 8.0531 145.574 7.2215C146.974 6.3899 148.594 5.9741 150.432 5.9741C152.205 5.9741 153.78 6.3899 155.159 7.2215C156.559 8.03121 157.719 9.18013 158.638 10.6683C159.558 12.1345 160.159 13.8852 160.444 15.9205ZM147.937 15.9205C147.937 16.8396 148.123 17.6602 148.495 18.3824C148.889 19.1046 149.425 19.6736 150.104 20.0894C150.782 20.4833 151.559 20.6803 152.434 20.6803C153.353 20.6803 154.218 20.4833 155.028 20.0894C155.837 19.6736 156.549 19.1046 157.161 18.3824C157.774 17.6602 158.234 16.8396 158.54 15.9205C158.234 14.9794 157.774 14.1478 157.161 13.4257C156.549 12.7035 155.837 12.1345 155.028 11.7187C154.218 11.3029 153.353 11.095 152.434 11.095C151.559 11.095 150.782 11.3029 150.104 11.7187C149.425 12.1345 148.889 12.7035 148.495 13.4257C148.123 14.1478 147.937 14.9794 147.937 15.9205ZM185.302 20.549V17.3648L185.532 16.577V11.9813L185.302 11.292V6.53215H191.999V20.2863C191.999 22.5842 191.463 24.5537 190.391 26.1951C189.318 27.8364 187.819 29.0838 185.893 29.9373C183.989 30.7907 181.735 31.2175 179.131 31.2175C177.402 31.2175 175.794 30.9877 174.306 30.5281C172.839 30.0904 171.373 29.4339 169.907 28.5586V23.5033C171.264 24.51 172.686 25.2322 174.174 25.6698C175.684 26.1294 177.194 26.3592 178.704 26.3592C180.849 26.3592 182.479 25.8996 183.596 24.9805C184.733 24.0614 185.302 22.5842 185.302 20.549ZM177.26 23.3064C175.487 23.3064 173.912 22.9453 172.533 22.2231C171.154 21.5009 170.06 20.4942 169.25 19.2031C168.463 17.89 168.069 16.3691 168.069 14.6402C168.069 12.8895 168.463 11.3685 169.25 10.0774C170.06 8.78622 171.154 7.77954 172.533 7.05737C173.912 6.33519 175.487 5.9741 177.26 5.9741C178.573 5.9741 179.777 6.182 180.871 6.5978C181.965 6.99171 182.939 7.52788 183.792 8.20629C184.646 8.86281 185.357 9.58499 185.926 10.3728C186.517 11.1388 186.966 11.9047 187.272 12.6707C187.578 13.4366 187.732 14.115 187.732 14.7059C187.732 15.5156 187.491 16.4128 187.009 17.3976C186.55 18.3824 185.871 19.3234 184.974 20.2207C184.077 21.1179 182.972 21.862 181.659 22.4529C180.368 23.0219 178.901 23.3064 177.26 23.3064ZM179.525 18.7435C180.816 18.7435 181.965 18.4043 182.972 17.7259C183.978 17.0475 184.832 16.0189 185.532 14.6402C184.81 13.2396 183.946 12.2111 182.939 11.5546C181.932 10.8762 180.794 10.5369 179.525 10.5369C178.562 10.5369 177.72 10.7011 176.997 11.0293C176.297 11.3576 175.761 11.8391 175.389 12.4737C175.017 13.0865 174.831 13.8086 174.831 14.6402C174.831 15.4499 175.017 16.1721 175.389 16.8068C175.761 17.4195 176.297 17.901 176.997 18.2511C177.698 18.5794 178.54 18.7435 179.525 18.7435Z" fill="#F4F4F4"/>
                    </svg> 
                </div>
                <div className='section_header pt-[40px]'>
                    <h2 className='font-bold font-[unbounded] text-[#fff] text-[42px]' itemprop="name">ИЗБРАННЫЕ</h2>
                    <div className='header_line_mobile hidden'/>
                </div>
                {/* <div className='cart_hr'/> */}
                
                <Favorites />
            </div>


            <BurgerMenu />
        </header>
    )
}