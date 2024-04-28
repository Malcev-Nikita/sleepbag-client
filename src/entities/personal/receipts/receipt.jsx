export default function Receipt() {
    console.log(1)
    return (
        <div className="receipts_text text-[22px] flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[5px]">
                <p>14.04.2023</p>
                в
                <p>10:21</p>
            </div>

            <p className="mr-[20%]">40 500 ₽</p>

            <div className="flex flex-row gap-[30px]">                            
                <a className="share_link share_link1 rounded-[50%] flex justify-center items-center h-[40px] w-[40px] bg-[#fff]" href="#">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4 1H5.8C3.14903 1 1 3.12665 1 5.75V15.25C1 17.8734 3.14903 20 5.8 20H12.2C14.851 20 17 17.8734 17 15.25V6.54167M11.4 1H12.0059C12.6424 1 13.2529 1.25022 13.7029 1.69562L16.2971 4.26271C16.7471 4.70811 17 5.3122 17 5.94209V6.54167M11.4 1V4.16667C11.4 5.47834 12.4745 6.54167 13.8 6.54167H17M4.2 8.91667H9M4.2 12.0833H13.4" stroke="#F97316" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    
                    <div className='pen1 absolute top-[0%] translate-y-[-125%] right-[-35px] text-[16px] opacity-0'>
                        <div className="rounded-[5px] py-[5px] px-[10px] bg-[#f4f4f4]">
                            <p className="opacity-50">Посмотреть</p>
                        </div>
                    </div>
                </a>
                
                <a className="share_link share_link2 rounded-[50%] flex justify-center items-center h-[40px] w-[40px] bg-[#fff]" href="#">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.95054 12.4087C6.19351 11.9975 6.33333 11.5155 6.33333 11C6.33333 10.4845 6.19351 10.0025 5.95054 9.59133M5.95054 12.4087C5.48352 13.199 4.63542 13.7273 3.66667 13.7273C2.19391 13.7273 1 12.5062 1 11C1 9.49377 2.19391 8.27273 3.66667 8.27273C4.63542 8.27273 5.48352 8.80104 5.95054 9.59133M5.95054 12.4087L12.0495 16.8641M5.95054 9.59133L12.0495 5.13595M12.0495 5.13595C12.5165 5.92623 13.3646 6.45455 14.3333 6.45455C15.8061 6.45455 17 5.2335 17 3.72727C17 2.22104 15.8061 1 14.3333 1C12.8606 1 11.6667 2.22104 11.6667 3.72727C11.6667 4.24273 11.8065 4.72479 12.0495 5.13595ZM12.0495 16.8641C11.8065 17.2752 11.6667 17.7573 11.6667 18.2727C11.6667 19.779 12.8606 21 14.3333 21C15.8061 21 17 19.779 17 18.2727C17 16.7665 15.8061 15.5455 14.3333 15.5455C13.3646 15.5455 12.5165 16.0738 12.0495 16.8641Z" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                    <div className='pen1 absolute top-[0%] translate-y-[-125%] right-[-70px] text-[16px] opacity-0'>
                        <div className="rounded-[5px] w-[170px] py-[5px] px-[10px] bg-[#f4f4f4]">
                            <p className="opacity-50">Отправить на E-mail</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}