import Image from "next/image";
import Link from "next/link";

export default function page() {
    return(
        <main className="container m-auto">
            <article className='link_path pt-[17vh]'>
                <Link href='/' className='text-[#000] opacity-70'>Главная / </Link><Link href='/personal' className='text-[#000] opacity-70'>Личный кабинет / </Link><span className='text-orange-500'>Чеки</span>
            </article>
            <section className="pt-[40px] pb-[150px] w-[70%]">
                <header className='cart_header flex flex-row'>
                    <h2 className='text-[35px] font-[Unbounded] font-bold'>ЧЕКИ</h2>
                </header>

                <div>
                    <hr className='h-[2px] my-[20px] opacity-40 bg-[#8d8d8d]'/>
                    <div className="text-[22px] flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-[5px]">
                            <p>14.04.2023</p>
                            в
                            <p>10:21</p>
                        </div>
                        <p className="mr-[20%]">40 500 ₽</p>
                        <div className="flex flex-row gap-[30px]">
                            
                            <a className="share_link" href="#">
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4 1H5.8C3.14903 1 1 3.12665 1 5.75V15.25C1 17.8734 3.14903 20 5.8 20H12.2C14.851 20 17 17.8734 17 15.25V6.54167M11.4 1H12.0059C12.6424 1 13.2529 1.25022 13.7029 1.69562L16.2971 4.26271C16.7471 4.70811 17 5.3122 17 5.94209V6.54167M11.4 1V4.16667C11.4 5.47834 12.4745 6.54167 13.8 6.54167H17M4.2 8.91667H9M4.2 12.0833H13.4" stroke="#F97316" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                
                                <label className='pen1 absolute top-[0%] translate-y-[-100%] right-[0px] opacity-0'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                                </label>
                            </a>
                            

                            <a className="share_link" href="#">
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.95054 12.4087C6.19351 11.9975 6.33333 11.5155 6.33333 11C6.33333 10.4845 6.19351 10.0025 5.95054 9.59133M5.95054 12.4087C5.48352 13.199 4.63542 13.7273 3.66667 13.7273C2.19391 13.7273 1 12.5062 1 11C1 9.49377 2.19391 8.27273 3.66667 8.27273C4.63542 8.27273 5.48352 8.80104 5.95054 9.59133M5.95054 12.4087L12.0495 16.8641M5.95054 9.59133L12.0495 5.13595M12.0495 5.13595C12.5165 5.92623 13.3646 6.45455 14.3333 6.45455C15.8061 6.45455 17 5.2335 17 3.72727C17 2.22104 15.8061 1 14.3333 1C12.8606 1 11.6667 2.22104 11.6667 3.72727C11.6667 4.24273 11.8065 4.72479 12.0495 5.13595ZM12.0495 16.8641C11.8065 17.2752 11.6667 17.7573 11.6667 18.2727C11.6667 19.779 12.8606 21 14.3333 21C15.8061 21 17 19.779 17 18.2727C17 16.7665 15.8061 15.5455 14.3333 15.5455C13.3646 15.5455 12.5165 16.0738 12.0495 16.8641Z" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <label className='pen1 absolute top-[50%] translate-y-[-50%] right-[-40px] opacity-0'>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M12.3145 3.39977C12.9665 2.69332 13.2925 2.3401 13.639 2.13406C14.4749 1.63691 15.5042 1.62145 16.3541 2.09328C16.7063 2.28882 17.0423 2.63211 17.7144 3.31867C18.3865 4.00523 18.7225 4.34851 18.914 4.70831C19.3758 5.57648 19.3607 6.62794 18.874 7.48187C18.6723 7.83576 18.3266 8.1688 17.635 8.83488L9.4068 16.76C8.09627 18.0223 7.441 18.6534 6.62205 18.9733C5.80311 19.2931 4.9028 19.2696 3.10219 19.2225L2.85721 19.2161C2.30904 19.2018 2.03496 19.1946 1.87564 19.0138C1.71631 18.833 1.73807 18.5538 1.78157 17.9954L1.80519 17.6922C1.92763 16.1206 1.98885 15.3348 2.29574 14.6284C2.60264 13.9221 3.13201 13.3485 4.19075 12.2014L12.3145 3.39977Z" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M11.375 3.5L17.5 9.625" stroke="#707070" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.25 19.25L19.25 19.25" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                            </label>
                        
                        </div>
                    </div>
                    <hr className='h-[2px] my-[20px] opacity-40 bg-[#8d8d8d]'/>
                </div>    
            </section>
        </main>
)}