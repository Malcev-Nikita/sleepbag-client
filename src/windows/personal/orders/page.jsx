import CheckAuthUser from "@/features/check-auth-user";
import GetUserInfo from "@/features/get-user-info";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import OrdersContent from "@/widgets/person/orders/orders-content";

export default function OrdersPage() {
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Личный кабинет',  href: '/personal'},
        { label: 'Мои заказы'}
    ]

    return(
        <main className="min-h-[100vh] container m-auto">
            <CheckAuthUser />

            <GetUserInfo />

            <Breadcrumbs breadcrumbs={ breadcrumbs } />

            <OrdersContent />
        </main>
    )
}