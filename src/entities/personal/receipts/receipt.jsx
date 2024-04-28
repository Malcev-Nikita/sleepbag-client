import ReceiptSendEmail from "@/shared/personal/receipts/receipt-send-email";

export default function Receipt({ receiptData }) {
    const date = new Date(receiptData.attributes.date);
    const formattedDate = `<p>${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}</p> в
    <p>${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}</p>`;

    return (
        <div className="receipts_text text-[22px] flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[5px]" dangerouslySetInnerHTML={{ __html: formattedDate }} />

            <p className="mr-[20%]">{receiptData.attributes.price} ₽</p>

            <div className="flex flex-row gap-[30px]">                            
                {/* <a className="share_link share_link1 rounded-[50%] flex justify-center items-center h-[40px] w-[40px] bg-[#fff]" href="#">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4 1H5.8C3.14903 1 1 3.12665 1 5.75V15.25C1 17.8734 3.14903 20 5.8 20H12.2C14.851 20 17 17.8734 17 15.25V6.54167M11.4 1H12.0059C12.6424 1 13.2529 1.25022 13.7029 1.69562L16.2971 4.26271C16.7471 4.70811 17 5.3122 17 5.94209V6.54167M11.4 1V4.16667C11.4 5.47834 12.4745 6.54167 13.8 6.54167H17M4.2 8.91667H9M4.2 12.0833H13.4" stroke="#F97316" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    
                    <div className='pen1 absolute top-[0%] translate-y-[-125%] right-[-35px] text-[16px] opacity-0'>
                        <div className="rounded-[5px] py-[5px] px-[10px] bg-[#f4f4f4]">
                            <p className="opacity-50">Посмотреть</p>
                        </div>
                    </div>
                </a> */}
                
                <ReceiptSendEmail receiptData={receiptData} />
            </div>
        </div>
    )
}