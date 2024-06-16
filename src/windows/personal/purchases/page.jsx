import CheckAuthUser from "@/features/check-auth-user";
import GetUserInfo from "@/features/get-user-info";
import { Breadcrumbs } from "@/widgets/breadcrumbs";

export default function PurchasesPage() {
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Личный кабинет',  href: '/personal'},
        { label: 'Мои покупки'}
    ]

    return (
        <main className="min-h-[100vh] container m-auto">
            <CheckAuthUser />

            <GetUserInfo />

            <Breadcrumbs breadcrumbs={ breadcrumbs } />
        </main>
    )  
}