import { useState } from "react"

export default function ReceiptSendEmail({receiptData}) {
    const [popup, setPopup] = useState(false)
    const [email, setEmail] = useState('')

    function sendForm(event) {
        event.preventDefault()

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(email.match(emailRegex)) {
            alert('Сообщение отправлено')
        } 
        else {
            alert('Ошикбка ввода данных')
        }
    }

    return (
        <div className="">
            <button onClick={() => setPopup(!popup)} className="share_link share_link2 rounded-[50%] flex justify-center items-center h-[40px] w-[40px] bg-[#fff]" href="#">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.95054 12.4087C6.19351 11.9975 6.33333 11.5155 6.33333 11C6.33333 10.4845 6.19351 10.0025 5.95054 9.59133M5.95054 12.4087C5.48352 13.199 4.63542 13.7273 3.66667 13.7273C2.19391 13.7273 1 12.5062 1 11C1 9.49377 2.19391 8.27273 3.66667 8.27273C4.63542 8.27273 5.48352 8.80104 5.95054 9.59133M5.95054 12.4087L12.0495 16.8641M5.95054 9.59133L12.0495 5.13595M12.0495 5.13595C12.5165 5.92623 13.3646 6.45455 14.3333 6.45455C15.8061 6.45455 17 5.2335 17 3.72727C17 2.22104 15.8061 1 14.3333 1C12.8606 1 11.6667 2.22104 11.6667 3.72727C11.6667 4.24273 11.8065 4.72479 12.0495 5.13595ZM12.0495 16.8641C11.8065 17.2752 11.6667 17.7573 11.6667 18.2727C11.6667 19.779 12.8606 21 14.3333 21C15.8061 21 17 19.779 17 18.2727C17 16.7665 15.8061 15.5455 14.3333 15.5455C13.3646 15.5455 12.5165 16.0738 12.0495 16.8641Z" stroke="#F97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <div className='pen1 absolute top-[0%] translate-y-[-125%] right-[-70px] text-[16px] opacity-0'>
                    <div className="rounded-[5px] w-[170px] py-[5px] px-[10px] bg-[#f4f4f4]">
                        <p className="opacity-50">Отправить на E-mail</p>
                    </div>
                </div>
            </button>

            {popup ? (
                <div className="fixed z-10 top-0 left-0 h-[100vh] w-[100vw] bg-[#00000090]">
                    <div onClick={() => setPopup(!popup)} className="z-1 absolute top-0 left-0 h-[100vh] w-[100vw]"></div>

                    <form className="w-[500px] px-[48px] py-[55px] bg-[#fff] rounded-[19px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-2">
                        <button onClick={() => setPopup(!popup)} className="absolute top-[23px] right-[23px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M15 1L1 15M1 1L15 15" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </button>

                        <h4 className="font-semibold text-[25px] font-[Manrope]">
                            Отправка чека
                        </h4>

                        <p className="text-[#8D8D8D] text-[16px] font-normal mt-[14px] font-[Manrope]">
                            Укажите E-mail, на который нужно отправить электронный чек
                        </p>

                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Укажите E-mail" className="px-[17px] py-[18px] border-[#8D8D8D] mt-[23px] border-[1px] rounded-[10px] text-[#8D8D8D] text-[16px] font-[Manrope] font-normal w-[100%]" />

                        <button onClick={(event) => sendForm(event)} className="bg-[#F97316] text-[#fff] text-[20px] font-semibold w-[100%] py-[15px] rounded-[10px] text-center mt-[8px]">
                            Отправить
                        </button>
                    </form>
                </div>
            ) : (null)}
        </div>
    )
}