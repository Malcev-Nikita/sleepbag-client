import { Breadcrumbs } from "@/widgets/breadcrumbs";
import CheckAuthUser from "@/features/check-auth-user";
import GetUserInfo from "@/features/get-user-info";
import OrderContet from "@/widgets/person/orders/[id]/order-content";

export default function OrdersIdPage({ params }) {
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Личный кабинет',  href: '/personal'},
        { label: 'Мои заказы', href: "/personal/orders"},
        { label: `Информация о заказе №${params.id}`},
    ]

    return (
        <main className="container m-auto">
            <CheckAuthUser />

            <GetUserInfo />

            <Breadcrumbs breadcrumbs={ breadcrumbs } />

            <OrderContet params={ params } />
        </main>
    )
}