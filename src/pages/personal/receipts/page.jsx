import { Breadcrumbs } from "@/widgets/breadcrumbs";
import CheckAuthUser from "@/features/check-auth-user";
import GetUserInfo from "@/features/get-user-info";
import ReceiptsMap from "@/shared/personal/receipts/receipts-map";

export default function ReceiptsPage() {
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Личный кабинет', href: '/personal'},
        { label: 'Чеки'},
    ]
    
    return (
        <main className="container m-auto">
            <CheckAuthUser />
            
            <GetUserInfo />

            <Breadcrumbs breadcrumbs={ breadcrumbs } />

            <section className="receipts_section pt-[40px] pb-[150px] w-[70%]">
                <header className='cart_header flex flex-row'>
                    <h2 className='text-[35px] font-[Unbounded] font-bold'>ЧЕКИ</h2>
                </header>

                <div className="receipts">
                    <hr className='h-[2px] mb-[10px] mt-[20px] opacity-40 bg-[#8d8d8d]'/>

                    <ReceiptsMap />

                    <hr className='h-[2px] mb-[20px] mt-[10px] opacity-40 bg-[#8d8d8d]'/>
                </div>    
            </section>
        </main>
    )
}