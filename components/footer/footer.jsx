import FAQ from '@/components/footer/faq'
import Questions from '@/components/footer/questions'
import { getFooterContent } from '@/services/footer/footer';
import { getFAQ } from '@/services/IndexPage';


export default async function Footer() {
    const data = await getFooterContent();
    const faq = await getFAQ();

    const menu_header = () => ({__html: data.data.attributes.menu_header})
    const info_header = () => ({__html: data.data.attributes.info_header})
    const other_header = () => ({__html: data.data.attributes.other_header})
    const contacts_header = () => ({__html: data.data.attributes.contacts_header})
    const phone = () => ({__html: data.data.attributes.phone})
    const email = () => ({__html: data.data.attributes.email})
    const adress = () => ({__html: data.data.attributes.adress})
    const time_of_work = () => ({__html: data.data.attributes.time_of_work})
    const rools = () => ({__html: data.data.attributes.rools})
    const developer = () => ({__html: data.data.attributes.developer})
    const vk = data.data.attributes.vk
    const ok = data.data.attributes.ok

    return (
        <div className="main">
            <FAQ data={data.data.attributes} faq={faq.data}/>

            <Questions data={data.data.attributes} />
            
            <footer>
                <div className='container m-auto flex'>
                    <div className="footer_main_part">
                        <div className='footer_left'>
                            <a href="/">
                                <svg width="192" height="32" viewBox="0 0 192 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 17.2009H6.92633C7.03575 17.8794 7.35307 18.4702 7.87829 18.9736C8.40351 19.4769 9.10377 19.8708 9.97913 20.1553C10.8764 20.4179 11.9268 20.5492 13.1305 20.5492C14.7936 20.5492 16.1067 20.3413 17.0696 19.9255C18.0325 19.4878 18.514 18.8532 18.514 18.0216C18.514 17.387 18.2404 16.8946 17.6933 16.5444C17.1462 16.1943 16.0958 15.9426 14.542 15.7894L9.94631 15.3627C6.5543 15.0563 4.09233 14.2904 2.56044 13.0648C1.02855 11.8174 0.26261 10.1433 0.26261 8.04243C0.26261 6.33546 0.755 4.89111 1.73979 3.70937C2.74646 2.52762 4.14704 1.64131 5.94154 1.05044C7.75793 0.437683 9.86971 0.131305 12.277 0.131305C14.6405 0.131305 16.7413 0.470509 18.5796 1.14892C20.4179 1.80544 21.8732 2.74646 22.9455 3.97198C24.0397 5.19749 24.6306 6.61996 24.7181 8.23939H17.8246C17.7371 7.64851 17.4526 7.14518 16.9711 6.72938C16.5116 6.2917 15.8769 5.96343 15.0672 5.74459C14.2575 5.50387 13.2836 5.3835 12.1457 5.3835C10.6138 5.3835 9.3992 5.5914 8.50199 6.0072C7.60474 6.40112 7.15611 6.99199 7.15611 7.77982C7.15611 8.34881 7.41873 8.80837 7.94394 9.15852C8.49105 9.50867 9.46486 9.74939 10.8654 9.8807L15.7566 10.3731C18.0982 10.5919 19.9693 10.9749 21.3698 11.522C22.7704 12.0472 23.788 12.7803 24.4227 13.7214C25.0573 14.6624 25.3746 15.8332 25.3746 17.2338C25.3746 18.9626 24.8604 20.4726 23.8318 21.7638C22.8032 23.0331 21.3589 24.0288 19.4987 24.751C17.6386 25.4513 15.4721 25.8014 12.9991 25.8014C10.4606 25.8014 8.2175 25.4513 6.26981 24.751C4.344 24.0288 2.83399 23.0221 1.73979 21.731C0.645579 20.4179 0.0656525 18.9079 0 17.2009ZM28.1934 0H34.9228V25.2762H28.1934V0ZM49.6086 25.8014C47.3326 25.8014 45.2974 25.3856 43.5029 24.554C41.7303 23.7224 40.3297 22.5626 39.3012 21.0744C38.2726 19.5644 37.7583 17.8137 37.7583 15.8222C37.7583 13.8746 38.2507 12.1676 39.2355 10.7014C40.2203 9.21323 41.5662 8.05337 43.2731 7.22177C45.002 6.39017 46.9497 5.97438 49.1162 5.97438C51.3703 5.97438 53.2851 6.46677 54.8608 7.45156C56.4583 8.41446 57.6839 9.78222 58.5373 11.5548C59.4127 13.3275 59.8504 15.4174 59.8504 17.8246H43.1747V13.787H56.0754L53.876 15.1985C53.7885 14.2356 53.5477 13.4259 53.1538 12.7694C52.7599 12.091 52.2347 11.5767 51.5782 11.2266C50.9435 10.8764 50.1776 10.7014 49.2803 10.7014C48.2956 10.7014 47.453 10.8983 46.7527 11.2922C46.0524 11.6861 45.5053 12.2332 45.1114 12.9335C44.7175 13.6119 44.5205 14.4107 44.5205 15.3299C44.5205 16.5116 44.7831 17.5183 45.3084 18.3499C45.8555 19.1596 46.6433 19.7833 47.6719 20.221C48.7223 20.6586 50.0025 20.8775 51.5125 20.8775C52.8912 20.8775 54.259 20.7024 55.6158 20.3523C56.9945 19.9802 58.2419 19.466 59.358 18.8094V23.0768C58.0668 23.9522 56.5896 24.6306 54.9265 25.1121C53.2851 25.5716 51.5125 25.8014 49.6086 25.8014ZM73.7154 25.8014C71.4394 25.8014 69.4042 25.3856 67.6097 24.554C65.8371 23.7224 64.4365 22.5626 63.4079 21.0744C62.3794 19.5644 61.8651 17.8137 61.8651 15.8222C61.8651 13.8746 62.3575 12.1676 63.3423 10.7014C64.3271 9.21323 65.6729 8.05337 67.3799 7.22177C69.1087 6.39017 71.0564 5.97438 73.223 5.97438C75.477 5.97438 77.3919 6.46677 78.9676 7.45156C80.5651 8.41446 81.7906 9.78222 82.6441 11.5548C83.5195 13.3275 83.9572 15.4174 83.9572 17.8246H67.2814V13.787H80.1821L77.9828 15.1985C77.8952 14.2356 77.6545 13.4259 77.2606 12.7694C76.8667 12.091 76.3415 11.5767 75.6849 11.2266C75.0503 10.8764 74.2844 10.7014 73.3871 10.7014C72.4023 10.7014 71.5598 10.8983 70.8595 11.2922C70.1592 11.6861 69.6121 12.2332 69.2182 12.9335C68.8243 13.6119 68.6273 14.4107 68.6273 15.3299C68.6273 16.5116 68.8899 17.5183 69.4151 18.3499C69.9622 19.1596 70.7501 19.7833 71.7786 20.221C72.8291 20.6586 74.1093 20.8775 75.6193 20.8775C76.998 20.8775 78.3658 20.7024 79.7226 20.3523C81.1013 19.9802 82.3487 19.466 83.4648 18.8094V23.0768C82.1736 23.9522 80.6964 24.6306 79.0332 25.1121C77.3919 25.5716 75.6193 25.8014 73.7154 25.8014ZM86.8253 6.53242H93.5549V11.9159L93.2595 12.7038V17.9559L93.5549 19.4988V30.6925H86.8253V6.53242ZM91.4212 15.9207C91.7057 13.8855 92.2966 12.1348 93.1938 10.6685C94.1129 9.1804 95.2728 8.03149 96.6734 7.22177C98.074 6.39017 99.6606 5.97438 101.433 5.97438C103.271 5.97438 104.88 6.39017 106.259 7.22177C107.659 8.05337 108.743 9.21323 109.508 10.7014C110.296 12.1895 110.69 13.9293 110.69 15.9207C110.69 17.8684 110.296 19.5973 109.508 21.1073C108.743 22.5954 107.659 23.7553 106.259 24.5868C104.88 25.3966 103.271 25.8014 101.433 25.8014C99.6606 25.8014 98.074 25.3966 96.6734 24.5868C95.2728 23.7553 94.1239 22.5954 93.2266 21.1073C92.3294 19.6191 91.7276 17.8903 91.4212 15.9207ZM103.928 15.9207C103.928 14.9797 103.731 14.1481 103.337 13.4259C102.965 12.7038 102.429 12.1348 101.729 11.719C101.05 11.3032 100.273 11.0953 99.398 11.0953C98.5007 11.0953 97.6472 11.3032 96.8375 11.719C96.0278 12.1348 95.3166 12.7038 94.7038 13.4259C94.0911 14.1481 93.6206 14.9797 93.2923 15.9207C93.6206 16.8399 94.0911 17.6605 94.7038 18.3827C95.3166 19.1049 96.0278 19.6739 96.8375 20.0897C97.6472 20.4836 98.5007 20.6805 99.398 20.6805C100.273 20.6805 101.05 20.4836 101.729 20.0897C102.429 19.6739 102.965 19.1049 103.337 18.3827C103.731 17.6605 103.928 16.8399 103.928 15.9207Z" fill="#F97316"/>
                                    <path d="M130.183 13.2287L130.741 11.9485C132.645 11.9922 134.209 12.2877 135.435 12.8348C136.682 13.36 137.612 14.1041 138.225 15.067C138.838 16.008 139.144 17.1022 139.144 18.3496C139.144 19.6845 138.838 20.8772 138.225 21.9277C137.612 22.9562 136.693 23.7769 135.468 24.3896C134.264 24.9805 132.754 25.2759 130.938 25.2759H112.752L114.656 12.6378L112.752 0.65625H130.281C132.557 0.65625 134.33 1.19241 135.599 2.26474C136.868 3.31518 137.503 4.78141 137.503 6.66345C137.503 7.69201 137.262 8.6768 136.781 9.61781C136.299 10.5588 135.522 11.3576 134.45 12.0141C133.4 12.6488 131.977 13.0536 130.183 13.2287ZM119.481 23.7003L116.855 20.5161H129.099C130.084 20.5161 130.85 20.2754 131.397 19.7939C131.944 19.3125 132.218 18.645 132.218 17.7915C132.218 16.9381 131.922 16.2597 131.332 15.7563C130.741 15.2311 129.865 14.9685 128.705 14.9685H118.595V10.3072H127.786C128.574 10.3072 129.231 10.0774 129.756 9.61781C130.303 9.13636 130.577 8.49078 130.577 7.68107C130.577 7.02454 130.347 6.48838 129.887 6.07258C129.428 5.6349 128.771 5.41606 127.918 5.41606H116.888L119.481 2.23191L121.155 12.6378L119.481 23.7003ZM158.868 25.2759L158.015 18.5137L158.901 15.9205L158.015 13.3272L158.868 6.53215H165.827L164.646 15.8876L165.827 25.2759H158.868ZM160.444 15.9205C160.138 17.89 159.525 19.6189 158.606 21.107C157.708 22.5951 156.559 23.755 155.159 24.5866C153.78 25.3963 152.205 25.8011 150.432 25.8011C148.594 25.8011 146.974 25.3963 145.574 24.5866C144.195 23.755 143.112 22.5951 142.324 21.107C141.536 19.597 141.142 17.8681 141.142 15.9205C141.142 13.929 141.536 12.1892 142.324 10.7011C143.112 9.21296 144.195 8.0531 145.574 7.2215C146.974 6.3899 148.594 5.9741 150.432 5.9741C152.205 5.9741 153.78 6.3899 155.159 7.2215C156.559 8.03121 157.719 9.18013 158.638 10.6683C159.558 12.1345 160.159 13.8852 160.444 15.9205ZM147.937 15.9205C147.937 16.8396 148.123 17.6602 148.495 18.3824C148.889 19.1046 149.425 19.6736 150.104 20.0894C150.782 20.4833 151.559 20.6803 152.434 20.6803C153.353 20.6803 154.218 20.4833 155.028 20.0894C155.837 19.6736 156.549 19.1046 157.161 18.3824C157.774 17.6602 158.234 16.8396 158.54 15.9205C158.234 14.9794 157.774 14.1478 157.161 13.4257C156.549 12.7035 155.837 12.1345 155.028 11.7187C154.218 11.3029 153.353 11.095 152.434 11.095C151.559 11.095 150.782 11.3029 150.104 11.7187C149.425 12.1345 148.889 12.7035 148.495 13.4257C148.123 14.1478 147.937 14.9794 147.937 15.9205ZM185.302 20.549V17.3648L185.532 16.577V11.9813L185.302 11.292V6.53215H191.999V20.2863C191.999 22.5842 191.463 24.5537 190.391 26.1951C189.318 27.8364 187.819 29.0838 185.893 29.9373C183.989 30.7907 181.735 31.2175 179.131 31.2175C177.402 31.2175 175.794 30.9877 174.306 30.5281C172.839 30.0904 171.373 29.4339 169.907 28.5586V23.5033C171.264 24.51 172.686 25.2322 174.174 25.6698C175.684 26.1294 177.194 26.3592 178.704 26.3592C180.849 26.3592 182.479 25.8996 183.596 24.9805C184.733 24.0614 185.302 22.5842 185.302 20.549ZM177.26 23.3064C175.487 23.3064 173.912 22.9453 172.533 22.2231C171.154 21.5009 170.06 20.4942 169.25 19.2031C168.463 17.89 168.069 16.3691 168.069 14.6402C168.069 12.8895 168.463 11.3685 169.25 10.0774C170.06 8.78622 171.154 7.77954 172.533 7.05737C173.912 6.33519 175.487 5.9741 177.26 5.9741C178.573 5.9741 179.777 6.182 180.871 6.5978C181.965 6.99171 182.939 7.52788 183.792 8.20629C184.646 8.86281 185.357 9.58499 185.926 10.3728C186.517 11.1388 186.966 11.9047 187.272 12.6707C187.578 13.4366 187.732 14.115 187.732 14.7059C187.732 15.5156 187.491 16.4128 187.009 17.3976C186.55 18.3824 185.871 19.3234 184.974 20.2207C184.077 21.1179 182.972 21.862 181.659 22.4529C180.368 23.0219 178.901 23.3064 177.26 23.3064ZM179.525 18.7435C180.816 18.7435 181.965 18.4043 182.972 17.7259C183.978 17.0475 184.832 16.0189 185.532 14.6402C184.81 13.2396 183.946 12.2111 182.939 11.5546C181.932 10.8762 180.794 10.5369 179.525 10.5369C178.562 10.5369 177.72 10.7011 176.997 11.0293C176.297 11.3576 175.761 11.8391 175.389 12.4737C175.017 13.0865 174.831 13.8086 174.831 14.6402C174.831 15.4499 175.017 16.1721 175.389 16.8068C175.761 17.4195 176.297 17.901 176.997 18.2511C177.698 18.5794 178.54 18.7435 179.525 18.7435Z" fill="#F4F4F4"/>
                                </svg>
                            </a>
                        </div>

                        <div className='footer_right'>
                            <div className='footer_menu footer_menu_border'>
                                <ul dangerouslySetInnerHTML={menu_header()} />
                                <a href='/'><li>Главная</li></a>
                                <a href='#aboutus'><li>О нас</li></a>
                                <a href='/catalog'><li>Каталог</li></a>
                                <a href='#production'><li>Портфолио</li></a>
                                <a href='#contacts'><li>Контакты</li></a>
                            </div>

                            <div className='footer_lawyer footer_menu_border'>
                                <ul dangerouslySetInnerHTML={info_header()} />
                                <a href='#'><li>Политика конфеденциальности</li></a>
                                <a href='#'><li>Пользовательское соглашение</li></a>
                            </div>

                            <div className='footer_questions'>
                                <ul dangerouslySetInnerHTML={other_header()} />
                                <a href='#'><li>Как сделать заказ</li></a>
                                <a href='#'><li>Техническая поддержка</li></a>
                                <a href='#'><li>Вопрос-ответ</li></a>
                            </div>

                            <div className='footer_contacts'>
                                <ul dangerouslySetInnerHTML={contacts_header()} /> 

                                <div className='contacts'>
                                    <div>
                                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M11 9.3125C11 9.25781 11 9.20312 10.9766 9.14844C10.9219 8.98437 10.5391 8.8125 10.3828 8.73437C9.9375 8.48437 9.48438 8.24219 9.04688 7.98437C8.84375 7.85937 8.59375 7.625 8.35156 7.625C7.875 7.625 7.17969 9.03906 6.75781 9.03906C6.54688 9.03906 6.27344 8.84375 6.08594 8.73437C4.66406 7.94531 3.67969 6.96094 2.89063 5.53906C2.78125 5.35156 2.58594 5.07812 2.58594 4.86719C2.58594 4.44531 4 3.75 4 3.27344C4 3.03125 3.76563 2.78125 3.64063 2.57812C3.38281 2.14062 3.14063 1.6875 2.89063 1.24219C2.8125 1.08594 2.64063 0.703125 2.47656 0.648437C2.42188 0.624999 2.36719 0.624999 2.3125 0.624999C2.03125 0.624999 1.48438 0.75 1.22656 0.867187C0.84375 1.03125 0.59375 1.46875 0.398438 1.82031C0.148438 2.28125 0 2.75 0 3.27344C0 4 0.296875 4.65625 0.539063 5.32031C0.710938 5.79687 0.921875 6.25781 1.1875 6.6875C2.00781 8.01562 3.60938 9.61719 4.9375 10.4375C5.36719 10.7031 5.82813 10.9141 6.30469 11.0859C6.96875 11.3281 7.625 11.625 8.35156 11.625C8.875 11.625 9.34375 11.4766 9.80469 11.2266C10.1563 11.0312 10.5938 10.7812 10.7578 10.3984C10.875 10.1406 11 9.59375 11 9.3125Z" fill="white"/>
                                        </svg>
                                    </div>
                                    
                                    <p dangerouslySetInnerHTML={phone()} />
                                </div>

                                <div className='contacts'>
                                    <div>
                                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M12.7461 4.09961C12.1367 4.58203 10.8164 5.54688 8.83594 6.96875L8.58203 7.17188C8.17578 7.47656 7.87109 7.70508 7.61719 7.83203C7.21094 8.08594 6.83008 8.1875 6.5 8.1875C6.14453 8.1875 5.78906 8.08594 5.38281 7.85742C5.12891 7.73047 4.82422 7.50195 4.41797 7.19727L4.16406 6.96875C2.10742 5.49609 0.8125 4.53125 0.253906 4.09961C0.203125 4.07422 0.126953 4.07422 0.0761719 4.09961C0.0253906 4.125 0 4.17578 0 4.22656V9.40625C0 9.76172 0.101562 10.041 0.355469 10.2695C0.583984 10.5234 0.863281 10.625 1.21875 10.625H11.7812C12.1113 10.625 12.3906 10.5234 12.6445 10.2695C12.873 10.041 13 9.76172 13 9.40625V4.22656C13 4.17578 12.9492 4.125 12.8984 4.07422C12.8477 4.04883 12.7969 4.04883 12.7461 4.09961ZM6.5 7.375C6.27148 7.375 5.99219 7.27344 5.6875 7.07031C5.48438 6.96875 5.23047 6.79102 4.90039 6.51172L4.64648 6.33398C2.56445 4.81055 1.14258 3.76953 0.40625 3.18555L0.228516 3.05859C0.0761719 2.95703 0 2.7793 0 2.57617V2.09375C0 1.76367 0.101562 1.48438 0.355469 1.23047C0.583984 1.00195 0.863281 0.875 1.21875 0.875H11.7812C12.1113 0.875 12.3906 1.00195 12.6445 1.23047C12.873 1.48438 13 1.76367 13 2.09375V2.57617C13 2.7793 12.9238 2.95703 12.7715 3.05859L12.6445 3.16016C11.9082 3.74414 10.4863 4.81055 8.35352 6.33398L8.09961 6.51172C7.74414 6.79102 7.49023 6.96875 7.3125 7.07031C6.98242 7.27344 6.70312 7.375 6.5 7.375Z" fill="white"/>
                                        </svg>
                                    </div>

                                    <p dangerouslySetInnerHTML={email()} />
                                </div>

                                <div className='contacts'>
                                    <div>
                                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M4.36719 12.9961C4.46875 13.1738 4.64648 13.25 4.875 13.25C5.07812 13.25 5.25586 13.1738 5.38281 12.9961L7.08398 10.5586C7.92188 9.33984 8.48047 8.52734 8.75977 8.0957C9.14062 7.48633 9.39453 6.97852 9.54688 6.57227C9.67383 6.16602 9.75 5.68359 9.75 5.125C9.75 4.26172 9.52148 3.44922 9.08984 2.6875C8.63281 1.95117 8.04883 1.36719 7.3125 0.910156C6.55078 0.478516 5.73828 0.25 4.875 0.25C3.98633 0.25 3.17383 0.478516 2.4375 0.910156C1.67578 1.36719 1.0918 1.95117 0.660156 2.6875C0.203125 3.44922 0 4.26172 0 5.125C0 5.68359 0.0507812 6.16602 0.203125 6.57227C0.330078 6.97852 0.583984 7.48633 0.990234 8.0957C1.24414 8.52734 1.80273 9.33984 2.66602 10.5586C3.35156 11.5488 3.91016 12.3613 4.36719 12.9961ZM4.875 7.15625C4.31641 7.15625 3.83398 6.97852 3.42773 6.57227C3.02148 6.16602 2.84375 5.68359 2.84375 5.125C2.84375 4.56641 3.02148 4.10938 3.42773 3.70312C3.83398 3.29688 4.31641 3.09375 4.875 3.09375C5.43359 3.09375 5.89062 3.29688 6.29688 3.70312C6.70312 4.10938 6.90625 4.56641 6.90625 5.125C6.90625 5.68359 6.70312 6.16602 6.29688 6.57227C5.89062 6.97852 5.43359 7.15625 4.875 7.15625Z" fill="white"/>
                                        </svg>
                                    </div>

                                    <p dangerouslySetInnerHTML={adress()} />
                                </div>
                                
                                <div className='contacts'>
                                    <div>
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M6.5 0.453125C7.61719 0.453125 8.68359 0.757812 9.64844 1.31641C10.6133 1.875 11.375 2.63672 11.9336 3.60156C12.4922 4.56641 12.7969 5.63281 12.7969 6.75C12.7969 7.89258 12.4922 8.93359 11.9336 9.89844C11.375 10.8633 10.6133 11.6504 9.64844 12.209C8.68359 12.7676 7.61719 13.0469 6.5 13.0469C5.35742 13.0469 4.31641 12.7676 3.35156 12.209C2.38672 11.6504 1.59961 10.8633 1.04102 9.89844C0.482422 8.93359 0.203125 7.89258 0.203125 6.75C0.203125 5.63281 0.482422 4.56641 1.04102 3.60156C1.59961 2.63672 2.38672 1.875 3.35156 1.31641C4.31641 0.757812 5.35742 0.453125 6.5 0.453125ZM7.94727 9.33984C7.99805 9.39062 8.07422 9.41602 8.17578 9.39062C8.25195 9.39062 8.32812 9.33984 8.37891 9.26367L9.08984 8.29883C9.14062 8.24805 9.14062 8.17188 9.14062 8.07031C9.14062 7.99414 9.08984 7.91797 9.03906 7.86719L7.41406 6.69922V3.19531C7.41406 3.11914 7.36328 3.04297 7.3125 2.99219C7.26172 2.94141 7.18555 2.89062 7.10938 2.89062H5.89062C5.78906 2.89062 5.71289 2.94141 5.66211 2.99219C5.61133 3.04297 5.58594 3.11914 5.58594 3.19531V7.46094C5.58594 7.5625 5.61133 7.66406 5.71289 7.71484L7.94727 9.33984Z" fill="white"/>
                                        </svg>
                                    </div>

                                    <p dangerouslySetInnerHTML={time_of_work()} />
                                </div>

                                <div className='socials'>
                                    {
                                        vk != null ? (
                                            <a href={vk}> 
                                                <button className='contact_soc_icon'>
                                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.2442 7.91512C14.7707 7.34719 14.2135 6.86249 13.6863 6.3478C13.2107 5.88386 13.1807 5.61473 13.563 5.07927C13.9803 4.49486 14.4291 3.93286 14.8502 3.35109C15.2432 2.80739 15.645 2.26517 15.8519 1.61418C15.9831 1.20002 15.867 1.01708 15.4423 0.944563C15.3692 0.931873 15.2935 0.931213 15.219 0.931213L12.6993 0.928247C12.3889 0.923632 12.2174 1.05894 12.1076 1.334C11.9594 1.70581 11.8067 2.07729 11.6302 2.43608C11.2297 3.24957 10.7824 4.03587 10.1553 4.70169C10.017 4.84854 9.86408 5.03411 9.63302 4.95764C9.34394 4.85216 9.25874 4.37587 9.26352 4.21485L9.26104 1.30648C9.20501 0.891 9.11288 0.705756 8.70037 0.625L6.08289 0.625494C5.73349 0.625494 5.5583 0.760472 5.37174 0.979008C5.26412 1.10525 5.23165 1.18716 5.45282 1.22902C5.88726 1.31143 6.132 1.59259 6.19693 2.02818C6.30109 2.72416 6.29384 3.42295 6.23385 4.12173C6.21622 4.32577 6.18111 4.5293 6.10019 4.71982C5.97362 5.01928 5.76926 5.08026 5.50078 4.896C5.25769 4.72922 5.08695 4.49387 4.91984 4.25754C4.29208 3.37054 3.79123 2.41399 3.38283 1.40883C3.26483 1.11844 3.06129 0.94242 2.7536 0.937641C1.99762 0.92561 1.24148 0.923632 0.485509 0.9383C0.0306384 0.94687 -0.104999 1.16771 0.0802456 1.58006C0.903627 3.41158 1.82012 5.19216 3.01647 6.8142C3.63071 7.64665 4.33592 8.38153 5.24698 8.90232C6.2795 9.49267 7.39097 9.67033 8.5616 9.61561C9.10975 9.5899 9.27439 9.44734 9.29977 8.90101C9.31691 8.52722 9.35927 8.15558 9.54369 7.8197C9.72465 7.49008 9.99872 7.42729 10.3147 7.63231C10.4727 7.73499 10.6059 7.86568 10.7316 8.00346C11.0401 8.34099 11.3376 8.68873 11.6578 9.01489C12.0595 9.42361 12.5353 9.66506 13.1335 9.61578L15.4494 9.61627C15.8225 9.59188 16.016 9.13437 15.8018 8.7179C15.6513 8.42619 15.4539 8.16646 15.2442 7.91512Z" fill="white"/>
                                                    </svg>
                                                </button>
                                            </a>
                                        ) : ('')
                                    }

                                    {
                                        ok != null ? (
                                            <a href={ok}> 
                                                <button className='contact_soc_icon'>
                                                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.51953 9.50781C8.01172 9.17969 8.3125 8.93359 8.44922 8.74219C8.61328 8.52344 8.61328 8.22266 8.47656 7.89453C8.33984 7.67578 8.14844 7.51172 7.92969 7.45703C7.60156 7.40234 7.30078 7.48438 6.97266 7.73047L6.64453 7.94922C6.37109 8.11328 6.07031 8.22266 5.76953 8.33203C5.30469 8.46875 4.83984 8.52344 4.375 8.52344C3.88281 8.52344 3.41797 8.46875 2.98047 8.33203C2.65234 8.22266 2.37891 8.11328 2.10547 7.94922L1.77734 7.73047C1.44922 7.48438 1.12109 7.40234 0.847656 7.45703C0.574219 7.51172 0.410156 7.67578 0.300781 7.89453C0.136719 8.22266 0.136719 8.52344 0.300781 8.74219C0.410156 8.93359 0.738281 9.17969 1.23047 9.50781C1.80469 9.89062 2.625 10.1367 3.71875 10.2461L1.06641 12.8984C0.792969 13.1445 0.738281 13.418 0.847656 13.7188C0.957031 14.0195 1.14844 14.2109 1.47656 14.3203C1.77734 14.4297 2.05078 14.375 2.29688 14.1289L4.375 12.0508L6.48047 14.1562C6.69922 14.4023 6.97266 14.457 7.27344 14.3477C7.57422 14.2383 7.79297 14.0195 7.90234 13.7188C8.01172 13.418 7.92969 13.1445 7.71094 12.8984L5.05859 10.2461C6.09766 10.1367 6.91797 9.89062 7.51953 9.50781ZM0.820312 3.92969C0.820312 4.58594 0.957031 5.16016 1.28516 5.70703C1.61328 6.25391 2.05078 6.66406 2.59766 6.99219C3.14453 7.32031 3.71875 7.45703 4.375 7.45703C5.00391 7.45703 5.60547 7.32031 6.15234 6.99219C6.69922 6.66406 7.10938 6.25391 7.4375 5.70703C7.76562 5.16016 7.92969 4.58594 7.92969 3.92969C7.92969 3.27344 7.76562 2.69922 7.4375 2.15234C7.10938 1.60547 6.69922 1.19531 6.15234 0.867188C5.60547 0.539062 5.00391 0.375 4.375 0.375C3.71875 0.375 3.14453 0.539062 2.59766 0.867188C2.05078 1.19531 1.61328 1.60547 1.28516 2.15234C0.957031 2.69922 0.820312 3.27344 0.820312 3.92969ZM2.625 3.92969C2.625 3.4375 2.78906 3.02734 3.14453 2.69922C3.47266 2.37109 3.88281 2.17969 4.375 2.17969C4.83984 2.17969 5.25 2.37109 5.60547 2.69922C5.93359 3.02734 6.125 3.4375 6.125 3.92969C6.125 4.42188 5.93359 4.83203 5.60547 5.16016C5.25 5.48828 4.83984 5.65234 4.375 5.65234C3.88281 5.65234 3.47266 5.48828 3.14453 5.16016C2.78906 4.83203 2.625 4.42188 2.625 3.92969Z" fill="white"/>
                                                    </svg>
                                                </button>
                                            </a>
                                        ) : ('')
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='footer_copyright'>
                        <p dangerouslySetInnerHTML={rools()} />

                        <p dangerouslySetInnerHTML={developer()} />
                    </div>
                </div>
            </footer>
        </div>
    );
}